# Date: 2023-04-18
# author: li_yong

import re
import time
import parsel
import requests

def get_user_home_page(id, proxies):
    url = "https://tieba.baidu.com/home/main"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'}
    params = {
'id': id,
'fr': 'index'
}
    html = requests.get(url=url, headers=headers, params=params, proxies=proxies).content.decode('utf-8')
    return html

def parse_home_html(home_html):
    selector = parsel.Selector(home_html)
    author = selector.css("#userinfo_wrap > div.userinfo_middle > div.userinfo_title > span::text").get()
    post_list = selector.css("#container > div.left_aside.ihome_left_aside > div > div:nth-child(4) > ul > div")
    content_list = []
    for post in post_list:
        content = post.css(".n_contain .thread_name a::attr(title)").get()
        old_cont_url = post.css(".n_contain > ul > li > img ::attr(src)").get()
        post_url = post.css(".n_contain > div:nth-child(1) > div > a.title ::attr(href)").get()
        content_list.append({"content": content, "old_cont_url": old_cont_url, "post_url": post_url})
    return author, content_list

def get_post_page(post_url, proxies):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'}
    post_url_complete = "https://tieba.baidu.com/" + post_url
    html = requests.get(url=post_url_complete, headers=headers, proxies=proxies).content.decode('utf-8')
    return html

def parse_post_page(post_html):
    selector = parsel.Selector(post_html)
    publish_time_str = selector.css("#j_p_postlist > div").get()
    user_id = re.findall('"user_id":(.*?),"', publish_time_str, re.S)[0]
    if re.findall('"date":"(.*?)",', publish_time_str, re.S):
        publish_time = re.findall('"date":"(.*?)",', publish_time_str, re.S)[0]
    else:
        publish_time = re.findall('class="tail-info">(.*?)<', publish_time_str, re.S)[1]
    return user_id, publish_time

def get_more_post(author, page, proxies):
    url = "https://tieba.baidu.com/home/get/getthread"
    params = {
        'un': author,
        'pn': page,
        'ie': 'utf8',
        '_': int(round(time.time() * 1000))
    }
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'}
    res = requests.get(url=url, headers=headers, params=params, proxies=proxies)
    post_data = res.json()["data"]["thread_list"]
    for _ in post_data:
        content = _["title"]
        old_cont_url = _["media"][0]["big_pic"]
        publish_time = _["last_reply_time"]
        print(content, old_cont_url, publish_time)
        return res

def get_proxy():
    proxy_url = "http://192.168.200.145:10101/api/proxy_ip?queue_name=baidu"
    json_data = requests.get(url=proxy_url).json()
    proxy = str(json_data["data"]["ip"]) + ":" + str(json_data["data"]["port"])
    return proxy


if __name__ == '__main__':
    id = 'tb.1.895cfd30.RBS9cyv3dwyIOfFKchYOjw&fr=frs'
    page = 2
    proxy = get_proxy()
    proxies = {
        "http": "http://" + proxy,
        "https": "http://" + proxy
    }
    home_html = get_user_home_page(id, proxies)
    print(home_html)
    author, content_list = parse_home_html(home_html)
    for _ in content_list:
        content = _['content']
        post_url = _['post_url']
        old_cont_url = _['old_cont_url']
        html = get_post_page(post_url, proxies)
        user_id, publish_time = parse_post_page(html)
        print(content, author, user_id, old_cont_url, publish_time)
    while True:
        res = get_more_post(author, page, proxies)
        if res.json()["data"]["thread_list"] is not []:
            page += 1
        else:
            break


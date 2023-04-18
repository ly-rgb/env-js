# li_yong
import re
import csv
import requests


html = requests.get("https://www.baidu.com/").text
print(html)

with open('/Users/momo/Desktop/source.txt','r',encoding='utf-8') as f:
    source = f.read()

result_list = []
username_list = re.findall('username="(.*?)"',source,re.S)
content_list = re.findall('j_d_post_content " style="display:;">(.*?)<',source,re.S)
reply_time_list = re.findall('tail-info">(2017.*?)<',source,re.S)

for i in range(len(username_list)):
    result = {'username':username_list[i],
              'content':content_list[i],
              'reply_time':reply_time_list[i]}
    result_list.append(result)

with open('tieba.csv','w',encoding='utf-8') as f:
    writer = csv.DictWriter(f,fieldnames=['username','content','reply_time'])
    writer.writeheader()
    writer.writerows(result_list)

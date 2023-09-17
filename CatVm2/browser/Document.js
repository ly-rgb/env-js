// 从浏览器中知道Document是全局的，new Document会返回一个对象
var Document = function Document() { // 构造函数
};
catvm.safefunction(Document);
// 浏览器
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});
document = {};
document.__proto__ = Document.prototype;

////////// 浏览器代码自动生成部分
document.cookie = 'bm_sz=B23C9B09DF12A36B194118B16E2E962B~YAAQTOUuFzg/rVGKAQAA+PXqkBXskeo19fyiCD1cp4Xp7iWWMszkcwROx9VbkSxBtKjtBLAjHGtrqopQif7fLjBgsYOGGNaxyrww1AASYbn8508Do87y5X+SsRPAwREYhdtPZIpGD0CjDHWq2KrLMJBw+P6eR6rilHH/pl2AxLTipIjLgieXmVZbHeU51NnaHJVYK5VHwfssgnd70puiJE5mS+6f3mewziN471n1k6GqD4igB5QWmVH2wuLy+ydeHEHwXOfhH8TGv0IQHHqmJ34c1vCcW2Qi+GF+psgqDaejT01nFhz8jQ==~3421746~3289138; _ga_07VL7X8EFF=GS1.1.1694648254.1.0.1694648432.30.0.0; _ga_NTQJ5ME689=GS1.1.1694648254.1.0.1694648432.0.0.0; _abck=F3F692D73A2C9FDEDB8D3DF8078AA596~-1~YAAQTOUuFz4/rVGKAQAATPfqkApYa+THiiONZulrzb4mm8O/Mfu0fh3bKHbqrKGqoXpsb1c1oMakb1Fr1c8WlZIkuax9BzBD2fLGbyc0tZ6dy8RhL0KMsa4v/1kHB4tj410n0fCnnnJHK7ugZisz7wIodVfOc36ZJwfeTTsYMYoBTzdd6fOmzD7ylwpp4lrUxMG/rcAM63Hp47NdESXbUyml/AJqGDM1NilrFYsPWbVRC9RAERuBUyg67+4NNdl5A+rZ85WEmB9EU1gBptWE0Ybf1AwKKVu6zTzD54Wdm15D6MyPMA9XQOQ1SGdgjW+wgb8Y/bAYLbPeKP7wgWNa8bKrksl3bQXCyCo1DgK+Sh08oPxZPUDfLrboMpLLiKfxry9x7b4pP7a+zO+7vwTZ~-1~-1~-1';
document.referrer = location.href || '';
document.currentScript = '<script type="text/javascript" src="/jVzEaME-HWJS0O02ZFcYc8an7yQ/Oi5kVffGD2/SjEQAg/Q3/snMDtHH34B"></script>';
document.location = {
    href: "https://www.vivaaerobus.com/es-mx/",
    port: "",
    protocol: 'https:',
    host: "www.vivaaerobus.com",
    hostname: "www.vivaaerobus.com",
    origin: "https://www.vivaaerobus.com",
    pathname: "/es-mx/",
}
document.location.__proto__ = Location.prototype;
Document.prototype.webkitHidden = false;
Document.prototype.hidden = false;

document.getElementById = function getElementById(id) {
    debugger;
    // 用id匹配当前环境内存中已有的Element，没找到则返回null
    return null;
};
catvm.safefunction(document.getElementById);

document.getElementsByTagName = function getElementsByTagName(tag_name) {
    var map_tag = {}
    map_tag.__proto__ = HTMLCollection.prototype
    map_tag.length = HTMLCollection.prototype.length
    map_tag.tag_name = "";
    return map_tag
};
catvm.safefunction(document.getElementsByTagName);

document.getElementsByTagName.__proto__ = HTMLCollection.prototype


document.addEventListener = function addEventListener(type, listener, options, useCapture) {
    debugger;
};
catvm.safefunction(document.addEventListener);


document.createElement = function createElement(tagName) {
    tagName = tagName.toLowerCase();
    if (catvm.memory.htmlelements[tagName] == undefined) {
        debugger;
    } else {
        var tagElement = catvm.memory.htmlelements[tagName]();
        return catvm.proxy(tagElement);
    }
};
catvm.safefunction(document.createElement);
////////
// 浏览器中document是全局的，因此我们也需要定义一个document 

document = catvm.proxy(document);


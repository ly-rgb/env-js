// 添加MimeType对象
var MimeType = function MimeType() { 
    throw new TypeError("Illegal constructor");
};catvm.safefunction(MimeType);


// 添加原型字符串值
Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeType",
        configurable: true
    },
});


// 添加原型链
catvm.memory.mimetype = {};
catvm.memory.mimetype.__proto__ = MimeType.prototype;


////////// 浏览器代码自动生成部分
MimeType.prototype.description = "";
MimeType.prototype.enabledPlugin = null;
MimeType.prototype.suffixes = "";
MimeType.prototype.type = "";

for (var _prototype in MimeType.prototype) {
    if (typeof (MimeType.prototype[_prototype]) != "function") {
        // 相当于Object.defineProperty的get方法，Proxy的get方法，hook原型上的所有方法属性
        MimeType.prototype.__defineGetter__(_prototype, function () {
            throw new TypeError("Illegal constructor");
        });
    }
}

////////
catvm.memory.mimetype.new = function (data, initPlugin) {
    var mimetype = {};
    if (data != undefined) {
        mimetype.description = data.description;
        mimetype.enabledPlugin = initPlugin; // plugin实例
        mimetype.suffixes = data.suffixes;
        mimetype.type = data.type;
    }
    // 先赋完值，在指向原型
    mimetype.__proto__ = MimeType.prototype;
    return mimetype;
};


// 代理一般挂在实例上
navigator.plugins = catvm.proxy(navigator.plugins);

// 添加History对象
var History = function History() { // 构造函数
    throw new TypeError("Illegal constructor");
};catvm.safefunction(History);


// 添加原型字符串值
Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
});


// 添加原型链
history = {length: 1};
history.__proto__ = History.prototype;


// 添加原型方法
History.prototype.back = function back() {
    debugger;
};catvm.proxy(History.prototype.back);


// 添加代理
history = catvm.proxy(history);


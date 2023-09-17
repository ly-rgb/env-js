window = this;

var Window = function Window() { 
    throw new TypeError("Illegal constructor");
};catvm.safefunction(Window);

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
});

Window.prototype.__proto__ = WindowProperties.prototype;
window.__proto__ = Window.prototype;


Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;

window.setTimeout = function setTimeout(functionRef, delay) {  
    debugger;
    functionRef()
    };
catvm.safefunction(window.setTimeout);

window.setInterval = function setInterval(functionRef, delay){
    functionRef()
    return
};catvm.safefunction(window.setInterval);

/*
window.btoa = function () {
    debugger;
};
catvm.safefunction(window.btoa);
/*
window.bmak = function bmak(){};catvm.safefunction(window.bmak);
window._sdTrace = '<init/>';
*/
/*

window.setTimeout = function (x, y) {
    debugger;
    // x可能是方法也可能是文本
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    // 正确应该 生成UUID，并且保存到内存
    return 123;
};
catvm.safefunction(window.setTimeout);
*/
// 原型下面可以取这个属性\方法，就直接放原型即可
// 只要是方法就需要catvm.safefunction 进行toSting保护
window.open = function open() {
    debugger;
};
catvm.safefunction(window.open);
// 赋值空对象最好使用这种class chrome{} 形式，而不是 {},因为这样我们可以看名字，并且最好挂上代理
window.chrome = catvm.proxy(class chrome {
});
// 打个debugger，因为我们还不知道js有没有调用该方法，也许只是获取了一下，看有没有该方法呢
// 等它真正调用的时候，我们再补全其参数及返回
window.DeviceOrientationEvent = function DeviceOrientationEvent() {
    debugger;
};
catvm.safefunction(window.DeviceOrientationEvent);
window.DeviceMotionEvent = function DeviceMotionEvent() {
    debugger;
};
catvm.safefunction(window.DeviceMotionEvent);

window.localStorage = class localStorage {
};
window.localStorage.getItem = function getItem() {
    debugger;
};
catvm.safefunction(window.localStorage.getItem);
window.localStorage.setItem = function setItem() {
    debugger;
};
catvm.safefunction(window.localStorage.setItem);
window.localStorage = catvm.proxy(window.localStorage)

window = catvm.proxy(window);
Window = catvm.proxy(Window);







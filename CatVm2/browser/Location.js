var Location = function Location() { // 构造函数
    throw new TypeError("Illegal constructor");
};
catvm.safefunction(Location);

Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});
location = {};
location.__proto__ = Location.prototype;

////////// 浏览器代码自动生成部分
location.href = "https://www.vivaaerobus.com/es-mx/";
location.port = "";
location.protocol = 'https:';
location.host = "www.vivaaerobus.com";
location.hostname = "www.vivaaerobus.com";
location.origin = "https://www.vivaaerobus.com";
location.pathname = "/es-mx/";

location.ancestorOrigins = function ancestorOrigins(){
    debugger;
};catvm.safefunction(location.ancestorOrigins);

////////


location = catvm.proxy(location);


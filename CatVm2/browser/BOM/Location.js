// 添加Location方法
var Location = function Location() { // 构造函数
    throw new TypeError("Illegal constructor");
};catvm.safefunction(Location);


// 添加原型的字符串值
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});


// 添加原型链
location = {};
location.__proto__ = Location.prototype;


// 添加实例属性
location.href = 'https://accounts.google.com/lifecycle/steps/signup/username?TL=APps6eYSWnfEe8ezdt-se05R32MFhwWAPet-9q28PI4X2ZLn3tUjSfh77LHAmU7f&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ddm=0&dsh=S-1005373097%3A1729818585471929&ec=asw-gmail-hero-create&flowEntry=SignUp&flowName=GlifWebSignIn&service=mail&theme=glif';
location.port = "";
location.protocol = 'https:';
location.host = "accounts.google.com";
location.hostname = "accounts.google.com";
location.origin = "https://accounts.google.com";
location.pathname = "/lifecycle/steps/signup/username";


// 添加实例方法
location.ancestorOrigins = function ancestorOrigins(){
    debugger;
    return ancestors || 0
};catvm.safefunction(location.ancestorOrigins);


// 添加代理
location = catvm.proxy(location);


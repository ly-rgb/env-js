var Performance = function Performance() {
    throw new TypeError("Illegal constructor");
};catvm.safefunction(Performance);

Object.defineProperties(Performance.prototype, {
    [Symbol.toStringTag]: {
        value: "Performance",
        configurable: true
    }
});

Performance.prototype.__proto__ = EventTarget.prototype;

performance = {};
performance.__proto__ = Performance.prototype;

Performance.prototype.clearMarks = function clearMarks() {
    debugger; 
};
catvm.safefunction(Performance.prototype.clearMarks);


Performance.prototype.now = function now() {
    return 13271.5; 
};
catvm.safefunction(Performance.prototype.now);

Performance = catvm.proxy(Performance);

var Event = function Event() {};catvm.safefunction(Event);

Object.defineProperties(Event.prototype, {
    [Symbol.toStringTag]: {
        value: "Event",
        configurable: true
    }
});


Event.prototype.AT_TARGET = 2;



Performance = catvm.proxy(Event);

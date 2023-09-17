var HTMLCollection = function HTMLCollection() { 
    throw new TypeError("Illegal constructor");
};catvm.safefunction(HTMLCollection);

Object.defineProperties(HTMLCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCollection",
        configurable: true
    }
});

HTMLCollection.prototype.item = function HTMLCollection() {
    
};
catvm.safefunction(HTMLCollection.prototype.item);

HTMLCollection.prototype.length = 0
    

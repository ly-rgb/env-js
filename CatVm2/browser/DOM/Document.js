class Document extends Node{
    constructor(tagName, id, className, attributes = {}){
        super()
        this.tagName = tagName;
        this.id = id;
        this.className = className;
        this.attributes = attributes;
        this.children = [];
        this.root = new TreeNode(tagName, id, className, attributes);  
        this.nodeIdMap = new Map(); // ID到节点的映射 
        this.root = new TreeNode(tagName, id, className, attributes);
        this.documentElement = this.root;
        // 初始化根节点的映射  
        this.nodeIdMap.set(this.root.id, { node: this.root, parentId: null }); 
    }

    getAttribute(attributeName) {
        let keyarray = Object.keys(attributes) 
        if(keyarray.includes(attributeName)){
            return this.attributes[attributeName] || null;
        }  
    } 

    
}


// 添加原型的字符串值
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});


// 添加原型链


// 添加原型上的属性
Document.prototype.webkitHidden = false;
Document.prototype.hidden = false;


// 添加原型上的方法
Document.prototype.adoptNode = function adoptNode(externalNode){
    debugger;
    importedNode = catvm.memory.htmlelements["externalNode"]
    return importedNode
};catvm.safefunction(Document.prototype.adoptNode);

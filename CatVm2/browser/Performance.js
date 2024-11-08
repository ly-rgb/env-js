class PerformanceEntry {  
    constructor(name, entryType, startTime, duration) {  
        this.name = name; // 条目的名称  
        this.entryType = entryType; // 条目的类型，如 'measure', 'mark', 'resource' 等  
        this.startTime = startTime; // 条目开始的时间戳  
        this.duration = duration; // 条目的持续时间（如果适用）  
  
        // 可以添加其他属性，如 endTime, detail 等  
    }  
  
    // 可以添加一个方法来格式化输出或执行其他操作  
    toString() {  
        return `${this.name} (${this.entryType}): start = ${this.startTime}, duration = ${this.duration || 'n/a'}`;  
    }  
}  
  
// 自定义的 Performance 类  
class Performance extends EventTarget{  
    constructor() {
        super()
        this.entries = catvm.memory.per.entries; // 存储 PerformanceEntry 的数组  
        this.marks = catvm.memory.per.marks; // 存储标记的 Map（键为标记名称，值为时间戳）  
        this.measures = catvm.memory.per.measures; // 存储度量的 Map（键为度量名称，值为 CustomPerformanceEntry）  
    }  

    // 创建一个标记（mark）  
    mark(name) {  
        const time = this.now();
        //const time = this._getTime() - this.timeOrigin;  
        this.marks.set(name, time);  
        this.entries.push(new PerformanceEntry(name, 'mark', time, 0));  
    }  
  
    // 清除一个标记  
    clearMarks(name) {  
        if (name) {  
            this.marks.delete(name);  
            // 你可以从 entries 中移除对应的条目，但这里为了简化不这么做  
        } else {  
            this.marks.clear();  
            // 清除所有标记对应的条目（如果需要）  
        }  
    }  
  
    // 测量两个标记之间的时间  
    measure(name, startMark, endMark) {  
        const startTime = this.marks.get(startMark);  
        const endTime = this.marks.get(endMark);  
        if (startTime !== undefined && endTime !== undefined) {  
            const duration = endTime - startTime;  
            this.measures.set(name, new PerformanceEntry(name, 'measure', startTime, duration));  
            this.entries.push(this.measures.get(name));  
        } else {  
            console.warn(`Mark "${startMark}" or "${endMark}" not found.`);  
        }  
    }  
  
    // 清除一个度量  
    clearMeasures(name) {  
        if (name) {  
            this.measures.delete(name);  
            // 你可以从 entries 中移除对应的条目，但这里为了简化不这么做  
        } else {  
            this.measures.clear();  
            // 清除所有度量对应的条目（如果需要）  
        }  
    }  
  
    // 获取所有条目  
    getEntries() {  
        return this.entries.slice(); // 返回条目的浅拷贝  
    }  
  
    // 获取特定类型或名称的条目  
    getEntriesByType(entryType, name) {  
        return this.entries.filter(entry => {  
            return entry.entryType === entryType && (!name || entry.name === name);  
        });  
    }  
  
  
    logEntries() {  
        this.entries.forEach(entry => console.log(entry.toString()));  
    }  

    now(){
        let timestamp = Date.now(); // 获取当前时间的毫秒数
        let milliseconds = timestamp.toString().slice(0, 5); // 提取前五位毫秒数
        // 生成一个随机的13位数字作为微秒部分
        let randomMicroseconds = ('0000000000000' + Math.floor(Math.random() * 1000000000000)).slice(-13);
        // 拼接成所需格式
        let formattedTimestamp = `${milliseconds}.${randomMicroseconds}`;   
        return formattedTimestamp  
    }

    getEntriesByName(name, entryType = null) {  
        return this.entries.filter(entry => {  
            return entry.name === name && (entryType === null || entry.entryType === entryType);  
        });  
    }  
} 


Object.defineProperties(Performance.prototype, {
    [Symbol.toStringTag]: {
        value: "Performance",
        configurable: true
    }
});

performance = new Performance();
Performance.prototype = Object.create(EventTarget.prototype);

performance = catvm.proxy(performance);

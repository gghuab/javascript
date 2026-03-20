import isPrime from './isPrime.js';
class HashTable {
    constructor() {
        this.Table = [];
        this.length = 7;
        this.count = 0;
    }
    hashFunc(key, max) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = hashCode * 31 + key.charCodeAt(i);
        }
        const index = hashCode % max;
        return index;
    }
    put(key, value) {
        const index = this.hashFunc(key, this.length);
        if (!this.Table[index]) {
            this.Table[index] = [];
        }
        let bucket = this.Table[index];
        let isMerge = false;
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            let tupleKey = tuple[0];
            if (key === tupleKey) {
                tuple[1] = value;
                isMerge = true;
            }
        }
        if (!isMerge) {
            bucket.push([key, value]);
            this.count++;
            if (this.count / this.length > 0.75) {
                this.resize(this.length * 2);
            }
        }
    }
    get(key) {
        const index = this.hashFunc(key, this.length);
        let bucket = this.Table[index];
        if (!bucket) {
            return undefined;
        }
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            let tupleKey = tuple[0];
            if (key === tupleKey) {
                return tuple[1];
            }
        }
        return undefined;
    }
    delete(key) {
        const index = this.hashFunc(key, this.length);
        let bucket = this.Table[index];
        if (!bucket) {
            return undefined;
        }
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            let tupleKey = tuple[0];
            let tupleValue = tuple[1];
            if (key === tupleKey) {
                bucket.splice(i, 1);
                this.count--;
                if (this.length > 7 && this.count / this.length < 0.25) {
                    this.resize(Math.floor(this.length / 2));
                }
                return tupleValue;
            }
        }
        return undefined;
    }
    //扩容函数
    resize(length) {
        const oldTable = this.Table;
        this.Table = [];
        while (!isPrime(length)) {
            length++;
        }
        if (length < 7) {
            length = 7;
        }
        this.length = length;
        this.count = 0;
        for (let i = 0; i < oldTable.length; i++) {
            let bucket = oldTable[i];
            if (!bucket) {
                continue;
            }
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j];
                this.put(tuple[0], tuple[1]);
            }
        }
    }
}
const hashTable = new HashTable();
hashTable.put('name', 123);
hashTable.put('age', 456);
hashTable.put('name1', 789);
hashTable.put('gender', 1);
hashTable.put('address', 2);
hashTable.put('address2', 2);
console.log(hashTable.get('name'));
console.log(hashTable.get('age'));
console.log(hashTable.count);
console.log(hashTable.length);

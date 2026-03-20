"use strict";
function hashFunc(key, size) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
        hashCode = hashCode * 31 + key.charCodeAt(i);
    }
    const index = hashCode % size;
    return index;
}

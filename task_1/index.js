"use strict";
function createBitGetter(array) {
    if (!(array instanceof Uint8Array)) {
        throw new TypeError("Expected a Uint8Array");
    }
    const get = (byteIndex, bitIndex) => {
        const byte = array[byteIndex];
        const flag = 1 << bitIndex;
        return (byte & flag) !== 0 ? 1 : 0;
    };
    return { get };
}
const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));
// Второй параметр это порядок бита "справа-налево"
console.log(bitGetter.get(0, 1)); // 1
console.log(bitGetter.get(1, 1)); // 0
function createBitAccessor(array) {
    const get = (byteIndex, bitIndex) => {
        const byte = array[byteIndex];
        const flag = 1 << bitIndex;
        return (byte & flag) !== 0 ? 1 : 0;
    };
    const set = (byteIndex, bitIndex, newValue) => {
        const byte = array[byteIndex];
        const flag = 1 << bitIndex;
        if (newValue !== 1 && newValue !== 0) {
            throw new Error("Value of the bit should be 0 or 1");
        }
        if (newValue) {
            array[byteIndex] = byte | flag;
        }
        else {
            array[byteIndex] = byte & ~flag;
        }
    };
    return { get, set };
}
const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));
console.log(bitAccessor.set(0, 1, 1)); //
console.log(bitAccessor.get(0, 1)); // 0

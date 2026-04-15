class Solution {
    constructor() {
        this.delimiter = '😀';
        this.empty = '😞'
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) { return this.empty;}
        let s = strs.join(this.delimiter);
        return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === this.empty) {return []}
        const s = str.split(this.delimiter);
        return s
    }
}

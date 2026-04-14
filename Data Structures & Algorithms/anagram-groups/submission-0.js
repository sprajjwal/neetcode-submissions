class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 0) {return strs};
        if (strs.length === 1) { return [strs]}
        const sorted = {};
        for (let i = 0; i < strs.length; i++) {
            const sortedItem = Array.from(strs[i]).sort().join();
            if (!(sortedItem in sorted)) { sorted[sortedItem] = [];}
            sorted[sortedItem].push(i);
        }

        const output = [];

        for(let values of Object.values(sorted)) {
            const group = [];
            for (let index of values) {
                group.push(strs[index])
            }
            output.push(group)
        }

        return output;
    }
}

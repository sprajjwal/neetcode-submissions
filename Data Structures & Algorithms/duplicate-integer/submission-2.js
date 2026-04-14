class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const values = new Set()
        for(let num of nums) {
            if (values.has(num)) { return true;}
            values.add(num);
        }

        return false;
    }
}

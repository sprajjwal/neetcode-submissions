class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const values = {};
        values[nums[0]] = 0;

        for (let i = 1; i < nums.length; i++) {
            const curr = nums[i];
            const find = target - curr;
            // if target - current number is in values
            if (find in values) {
            // check if the index is different then return it
                return [i, values[find]]
            }
            values[curr] = i;
        }
    }
}

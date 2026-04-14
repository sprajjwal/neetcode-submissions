class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort();
        for (let index = 0; index < nums.length; index++) {
            if (index !== 0 && nums[index - 1] === nums[index] ) { return true;}
        }

        return false;
    }
}

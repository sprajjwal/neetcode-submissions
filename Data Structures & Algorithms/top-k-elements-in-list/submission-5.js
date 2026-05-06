class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        for (let num of nums) {
            if (!(num in freqMap)) { freqMap[num] = 0};
            freqMap[num] += 1
        };

        const buckets = [];
        for (let i = 0; i < nums.length + 1; i++) {buckets.push([])}

        for (let key in freqMap) {
            buckets[freqMap[key]].push(key)
        }

        const results = [];
        for (let i = buckets.length - 1; results.length < k; i--) {
            if (results.length === k) {break;}
            if (buckets[i].length !== 0) {
                for (let item of buckets[i]) {
                    if(results.length < k) {
                        results.push(item)
                    } else {
                        break;
                    }
                }
            }
        }

        // console.log(buckets)
        return(results)
    }
}

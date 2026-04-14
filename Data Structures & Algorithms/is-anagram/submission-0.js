class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const newS = Array.from(s).sort().join();
        const newT = Array.from(t).sort().join();
        return newS === newT;
    }
}

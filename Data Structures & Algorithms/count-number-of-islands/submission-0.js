class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ];
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0') {
                return;
            }
            grid[r][c] = '0';

            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc)
            }
        };

        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(grid[i][j] === '1') {
                    islands++;
                    dfs(i, j);
                }
            }
        }

        return islands;
    }
}

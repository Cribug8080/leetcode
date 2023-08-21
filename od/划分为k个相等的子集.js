function canPartitionSubsets(arr) {
  const sum = arr.reduce((p, c, i) => p + c);
  const end = Math.floor(sum / 2);
  const start = arr.reduce((p, c, i) => Math.max(p, c), -Infinity);

  for (let i = start; i < end; i++) {
    

  }
  return false;
}

function getPartition(sum, arr) {
  // if (sum % k !== 0) {
  //   return false;
  // }

  for(let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (ele < sum) {
      return 
    }
  }

  const res = [];
  const currentSet = [];
  const array = [...arr];
  while (idx) {
    
  }
}

var canPartitionKSubsets = function(nums, k) {
  const dfs = (s, p) => {
    // console.log(s, p)
      if (s === 0) {
          return true;
      }
      if (!dp[s]) {
          return dp[s];
      }
      dp[s] = false;
      for (let i = 0; i < n; i++) {
          if (nums[i] + p > per) {
              break;
          }
          if (((s >> i) & 1) != 0) {
              if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
                  return true;
              }
          }
      }
      return false;
  };
  const all = nums.reduce((p, c, i) => p + c);
  if (all % k !== 0) {
      return false;
  }
  per = all / k;
  nums.sort((a, b) => a - b);
  n = nums.length;
  if (nums[n - 1] > per) {
      return false;
  }
  dp = new Array(1 << n).fill(true);
  return dfs((1 << n) - 1, 0);
}


canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);
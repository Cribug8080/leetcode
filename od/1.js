const readline = require('readline');

function split(input_str) {
  const nums = input_str.split(" ").map(Number);
  return nums;
}

function cmp(x, y) {
  if (x[1] === y[1]) {
    return y[0] - x[0];
  } else {
    return y[1] - x[1];
  }
}

async function main() {
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });

  // let input_str = "";
  // for await (const line of rl) {
  //   input_str += line;
  // }

  // const nums = split(input_str);
  const nums = [2,2,2,2,9,9,9,7,7,7,8,8];

  const card_info = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (card_info.has(nums[i])) {
      card_info.set(nums[i], card_info.get(nums[i]) + 1);
    } else {
      card_info.set(nums[i], 1);
    }
  }

  const card_info_vec = Array.from(card_info.entries());
  card_info_vec.sort(cmp);

  let result = "";
  let split_cards = [];
  for (let i = 0; i < card_info_vec.length; i++) {
    const temp = card_info_vec[i];
    const card_num = temp[0];
    let card_count = temp[1];

    if (i > 0 && card_info_vec[i - 1][1] === 3 && card_count === 3) {
      split_cards.push(card_num);
      card_count = 2;
      temp[1] = 2;
    } else if (card_count === 1 && split_cards.length !== 0) {
      for (let k = 0; k < split_cards.length; k++) {
        if (split_cards[k] > card_num) {
          result += split_cards[k] + " ";
          split_cards.splice(k, 1);
          k--;
        }
      }
    }

    for (let j = 0; j < card_count; j++) {
      result += card_num + " ";
    }
  }

  if (split_cards.length !== 0) {
    for (let i of split_cards) {
      result += i + " ";
    }
  }

  console.log(result.trim());
}

main(); // [2,2,2,2,9,9,9,7,7,7,8,8,6,4,1]
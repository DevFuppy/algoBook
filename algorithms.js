/**String Reversal**/
export const reverseStringAns = (string) => string.split("").reverse().join("");
//陣列反轉

/**Palindrome**/
export const isPalindrome = (str) => {
  const len = str.length;

  for (let i = 0; i < len / 2 - 1; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }

  return true;
};

export const isPalindromeEvery = (str) =>
  str
    .split("")
    .every((e, index, arr) =>
      index < arr.length / 2 ? e === str[str.length - 1 - index] : true
    );

export const isPalindromeSome = (str) =>
  !str
    .split("")
    .some((e, index, arr) =>
      index < arr.length / 2 ? e !== str[str.length - 1 - index] : true
    );
//迴圈頭尾相比、every用法(能拿index，能算固定相對index、有false就return)
//some法相反

/**Mean**/
export const averageReducer = (arr) =>
  arr.reduce((acc, cur) => acc + cur) / arr.length;

//簡單的reduce()複習

/**Max Character**/
export const maxC = (str) => {
  let table = {};

  for (let i of str) table[i] = table[i] + 1 || 1;

  let maxCount = 0;
  let theC = null;

  for (let [key, value] of Object.entries(table))
    if (value > maxCount) {
      maxCount = value;
      theC = [];
      theC.push(key);
    } else if (value === maxCount) {
      theC.push(key);
    }

  return theC.length === 1 ? theC[0] : theC;
};
//創字典紀錄、更新最多次數的字母
//可試試用set,map
//挑戰一行版?
//改良版，我自己加有多個最多次數的字母的情況

/**Integer Reversal**/
export const IR = (int) =>
  Math.sign(int) * parseInt(int.toString().split("").reverse().join(""));

//其實就是轉字串(陣列)再反轉
//學到提取正負號的Math.sign()方法

/**Capitalization**/
export const toCapital = (str) =>
  str
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");

/**Fibonacci Sequence**/
//遞迴就直接用語意寫。其實就是兩條分支深入到 第0項、第1項 (為停止條件)回彈，本質上就是最後算出 n-1項 , n-2項的值以相加來得到第n項的值
//迴圈寫法就不斷更新每項的值，順便中途會得到前兩項的值，也不斷更新，跑完迴圈就會得到答案
export const Fibonacci = (n) =>
  n === 0 || n === 1 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);

export const Fibonacci2 = (n) => {
  if (n === 0 || n === 1) return n;

  let granpa = 0;
  let pa = 1;
  let sum = null;

  while (n > 1) {
    sum = pa + granpa;
    granpa = pa;
    pa = sum;
    n--;
  }

  return sum;
};

export const FibonacciSequence = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let res = [0, 1];

  let granpa = 0;
  let pa = 1;
  let sum = null;

  while (n > 1) {
    sum = pa + granpa;
    granpa = pa;
    pa = sum;
    n--;

    res.push(sum);
  }

  return res;
};

//todo : 記憶費博，用陣列 with index實作

/**Pyramid**/
//概念上，要跑兩層迴圈：外層-每一階，內層：先一個空白迴圈，再一個金字塔本體迴圈
// 本體迴圈的邏輯其實就是 2i+1，i是第幾層，不是總層數
// 前置空白迴圈的邏輯就是 最底的金字體本體數2n-1(固定的)減掉該層金字塔本體2i+1，再除以2，代表本體的兩翼與兩側牆壁(金字塔的底)之間的距離
// 在這邊，所謂個數他是以迴圈中的"停止條件"來體現，而非迴圈的增加級距。所以要印幾個的公式，可一律固定從0開始到<k，代表有k個
export const makePyramid = (n) => {
  let r = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (2 * n - 1 - (2 * i + 1)) / 2; j++) r += "*";

    for (let j = 0; j < 2 * i + 1; j++) r += "$";

    r += "\n";
  }

  return r.slice(0, -1);
};
// console.log(makePyramid(10))

/**Ladder**/
//兩側無空白版本的金字塔
export const makeLadder = (n) => {
  let r = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * i + 1; j++) r += "$";

    r += "\n";
  }

  return r.slice(0, -1);
};
// console.log(makeLadder(10))

/**Anagrams**/
//可先做字典函數再做比較函數
//比較兩字內字母是否相同。
//也有排序法(較慢)，可做做看
//字母表法，在有限定263個字母時最快
//
////hashmap frequency counter
export const wordTable = (str) => {
  let table = {};

  for (let c of str) table[c] = table[c] + 1 || 1;

  return table;
};
export const wordDiffHashMap = (a, b) => {
  if (a.length !== b.length) return false;

  let tableB = wordTable(b);

  return Object.entries(wordTable(a)).every(
    ([char, count]) => count === tableB[char]
  );
};

////frequency array method
export const wordDiffLowerCase = (a, b) => {
  if (a.length !== b.length) return false;

  let freq = new Array(26).fill(0);

  for (let i = 0; i < a.length; i++) {
    freq[a[i].charCodeAt(0) - 97] += 1;
    freq[b[i].charCodeAt(0) - 97] -= 1;
  }

  return freq.every((e) => e === 0);
};
//用26字母長度的陣列紀錄，去分別掃兩個字串
//對應的index可以用Unicode找到->又因為字母是連續的數量又不多，剛好可以對應到陣列index

/**反向陣列 Reverse Array**/
export const reverseArrayA = (arr) => {
  let temp;

  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
};

export const reverseArrayB = (arr) => {
  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    //用解構賦值法
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }

  return arr;
};

/**Reverse Words**/
export const reWordsA = (str) =>
  str
    .split(" ")
    .map((x) => Array.from(x).reverse().join(""))
    .join(" ");

//不破壞emoji

export const reWordsB = (str) =>
  str
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");

//會破壞emoji

/**Max Profit**/
// 假設引數陣列元素一率為數字
//
export const maxProfit = (arr) => {
  if (arr.length < 2) return 0;

  let first = arr[0],
    second = arr[1];
  let min = Math.min(second, first);
  let maxProfit = Math.max(second - first, 0);
  let trail = [];

  if (maxProfit > 0) trail.push([first, second]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > min) {
      if (arr[i] - min >= maxProfit) {
        maxProfit = arr[i] - min;
        trail.push([min, arr[i]]);
      }
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

 let tran =  
 trail.length >1? 
    trail.reduce((acc, cur) => {
 
      if (cur[1] - cur[0]=== maxProfit) {
        acc.push(cur);
      }

      return acc

    } , [])
    :trail
   

  return maxProfit <= 0
    ? 0
    : {
        tran,
        maxProfit,
      };
};

// let testData = [
//   [1, 2, 3, 4], // → 3
//   [2, 5, 9], // → 7
//   [3, 2, 6, 1, 7], // → 6  （1 買 7 賣）
//   [7, 1, 5, 3, 6, 4], // → 5  （1 買 6 賣）
//   [2, 4, 1, 7], // → 6  （1 買 7 賣）
//   [2, 5, 2, 5], // → 3  （2→5，不管是哪一組）
//   [1, 3, 1, 3, 1, 3], // → 2
//   [3, 3, 3, 3], // → 0
//   [2, 2, 2, 5, 5], // → 3
//   [1.5, 1.2, 2.8], // → 1.6
//   [2.1, 2.1, 2.9], // → 0.8
//   [-3, -2, 4], // → 7  （-3 買 4 賣）
//   [-5, -1, -2], // → 4  （-5 買 -1 賣）
//   [1000000000, 1, 1000000005], // → 1000000004
// ];

// for (let i of testData) {
//   console.log(maxProfit(i));
// }

//其實就是給一個陣列找最大差的兩個元素
//其實就是用更新紀錄法就好
//還是其實用比大小就好呢? --> no 比大小會多比
//應該確實要更新最高、最低價，並更動對大價差
//相對高價比出來後，確定是maxprofit，再更動最高價
//兩個都寫出來後問gpt

/**Two Sum Pair**/
////有bug，之後再回來
export const solveTwoSum = (arr, sum) => {
  let expected = [];
  let res = [];

  for (let i of arr) {
    let p = expected.find((x) => x === sum - i);

    if (p) {
      res.push([i, p]);

      expected.splice(expected.indexOf(p), 1);

      continue;
    }

    expected.push(sum - i);
  }

  if (expected[0] + arr[0] === sum) res.push([expected[0], arr[0]]);

  return res;
};
/***gpt建議解**/
// 可以把你現在這個思路「補數袋、用掉就移除」修成穩定版，不用大改。重點就這幾個小調整：

// 命中判斷改方向

// 現在做的是找 sum - i，但你袋子裡放的是「補數」。

// 正確是：「當前值 i 是否在補數袋裡」。

// 也就是用 idx = expected.indexOf(i) 來判斷（而不是 sum - i）。

// 避免 0 的 falsy 坑

// 不要用 if (p)；請用「有沒有找到索引」：if (idx !== -1)。

// 配對時推入正確的值

// 命中就 res.push([i, sum - i])（現在你推的是 [i, p]，而 p 只是補數本身，會出錯）。

// 然後 expected.splice(idx, 1) 把這個補數移除。

// 拿掉最後那條「補一槍」

// if (expected[0] + arr[0] === sum) ... 這條會導致憑空組出不存在的 pair，直接刪掉。

// 以上 4 點改完，整體結構不變，複雜度仍是 O(n²)（因為 indexOf/splice），但邏輯就穩了：支援 0、重複值、負數，且「用掉就算」。

// 如果你之後想把效能升到 O(n)，也不用重寫整個程式，只要把 expected 改成「值 → 欲配對次數」的 Map（或物件當計數表）即可，其餘流程一樣：命中就扣 1，歸零就刪鍵。




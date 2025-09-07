/**String Reversal**/
const reverseStringAns = (string) => string.split("").reverse().join("");
//陣列反轉

/**Palindrome**/
const isPalindrome = (str) => {
  const len = str.length;

  for (let i = 0; i < len / 2 - 1; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }

  return true;
};

const isPalindromeEvery = (str) =>
  str
    .split("")
    .every((e, index, arr) =>
      index < arr.length / 2 ? e === str[str.length - 1 - index] : true
    );

const isPalindromeSome = (str) =>
  !str
    .split("")
    .some((e, index, arr) =>
      index < arr.length / 2 ? e !== str[str.length - 1 - index] : true
    );
//迴圈頭尾相比、every用法(能拿index，能算固定相對index、有false就return)
//some法相反

/**Mean**/
const averageReducer = (arr) =>
  arr.reduce((acc, cur) => acc + cur) / arr.length;
const test = (acc, cur) => acc + cur;
//簡單的reduce()複習

/**Max Character**/
const maxC = (str) => {
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
const IR = (int) =>
  Math.sign(int) * parseInt(int.toString().split("").reverse().join(""));

//其實就是轉字串(陣列)再反轉
//學到提取正負號的Math.sign()方法

/**Capitalization**/
const toCapital = (str) =>
  str
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");

/**Fibonacci Sequence**/
//遞迴就直接用語意寫。其實就是兩條分支深入到 第0項、第1項 (為停止條件)回彈，本質上就是最後算出 n-1項 , n-2項的值以相加來得到第n項的值
//迴圈寫法就不斷更新每項的值，順便中途會得到前兩項的值，也不斷更新，跑完迴圈就會得到答案
const Fibonacci = (n) =>
  n === 0 || n === 1 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);

const Fibonacci2 = (n) => {
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

const FibonacciSequence = (n) => {
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
const makePyramid = (n) => {
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
const makeLadder = (n) => {
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
const wordTable = (str) => {
  let table = {};

  for (let c of str) table[c] = table[c] + 1 || 1;

  return table;
};
const wordDiffHashMap = (a, b) => {
  if (a.length !== b.length) return false;

  let tableB = wordTable(b);

  return Object.entries(wordTable(a)).every(
    ([char, count]) => count === tableB[char]
  );
};

////frequency array method
const wordDiffLowerCase = (a, b) => {
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
const reverseArrayA = (arr) => {
  let temp;

  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
};

const reverseArrayB = (arr) => {
  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    //用解構賦值法
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }

  return arr;
};

/**Reverse Words**/
const reWordsA = (str) =>
  str
    .split(" ")
    .map((x) => Array.from(x).reverse().join(""))
    .join(" ");

//不破壞emoji

const reWordsB = (str) =>
  str
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");

//會破壞emoji

/**Max Profit**/
//todo : max profit
const maxProfit = (arr) => {};

//其實就是給一個陣列找最大差的兩個元素
//其實就是用更新紀錄法就好
//還是其實用比大小就好呢? --> no 比大小會多比
//應該確實要更新最高、最低價，並更動對大價差
//相對高價比出來後，確定是maxprofit，再更動最高價
//兩個都寫出來後問gpt

/**Two Sum Pair**/
////有bug，之後再回來
const solveTwoSum = (arr, sum) => {
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

/**Array Queue**/
let front = 0;
let rear = 0;


let Q = [];


function enQ(int) {
  Q[rear] = int;
  rear++;
  return Q;
 
}

function dQ() {
 
  if (front === rear) return "the Q is already empty";
 
  let removed = Q[front];
  Q[front] = undefined;
  front++;

  return removed;
}

function showQ() {
  return Q.slice(front, rear);
 
}
//front也是跑到下一個要拿掉的位置，但show從他開始顯示剛剛好。 rear是跑到下一個要加入的地方，但slice他剛好不計，所以放那邊剛好
//包成方法? 可練習實作

/**Node Queue**/
 
function User(acc, pwd) {
  this.acc = acc;
  this.pwd = pwd;
  this.next = null;
}

let nFront = null;
let nRear = null;

 
function NenQ(acc, pwd) {
  let newNode = new User(acc, pwd);
   
  if (nFront === null) {
    nFront = nRear = newNode;
  } else {
    nRear.next = newNode;
    nRear = nRear.next;
  }
  return nRear;
}


function NdQ() {
  let removed = nFront;
  nFront = nFront.next;

  return removed;

}


function NshowQ() {
  let res = [];

  let temp = nFront;

  while (temp !== null) {
    res.push(temp);

    temp = temp.next;
  }


  return res;
}
//加size維護
//dq取光怎麼辦沒處理
//處理rear，但其實Front都有控制，rear沒差(想想為何沒差)
//看書怎麼寫
//好好想想 rear,front, .next 的指派問題，想想為什麼front在有兩個node又enQ的時候，被改到為什麼沒差且反而需要
//因為對於改.next來說，他只是要確定node可以連結，本來上一顆next就是要連到新node，不管他是不是第一個front，至於rear指幫本來就要必定移到最後一個node，這兩步並沒有衝突，且代表的意義不一樣，一個是接node，一個是參照要移動。一開始改到front本來就是應該的，因為就是要改到他連到第二顆進來的node，之後rear再移動就對了。

/**CBT Array**/
let CBTarray = [];

const getLeftIndex = (i) => 2 * i + 1;

const getRightIndex = (i) => 2 * i + 2;

const getParentIndex = (i) => Math.floor(i / 2);

const getTreeLvl = (arr) => {
   
  let len = arr.length;
  
  //去除尾端或全null, undefined之情況
  //尾端出現null，進入檢查
  if(arr[len-1]==null)
  {    
    
    //從尾端第一個開始檢查
    for(let i = len -1; i>=0 ;i--)
    {

      //碰到有值，刪前一個到尾端的null
      if(arr[i]!=null)
      {       
        //index記得要加1，因為是當下索引,slice不留 
        arr = arr.slice(0,i+1)  
        len = arr.length;  
        break;
      }      
      
      //如果都跑完，還沒遇到null，那麼表示為全null
      if(i===0)return 0

    }

  }
 
  let lvl = 0;  

  for (let i = 1; len > 0; i *= 2) {
    len = len - i
    lvl++;
  }

  return lvl;
};

const printTree = (arr) => {

   
  let pointer = 0 ;
  let wide = 1
  let tree = [] 

  for(let i = getTreeLvl(arr); i>0 ; i--)
  {
    
    let left = pointer
    let right = left + wide
    tree.push(arr.slice(left,right))
     pointer += wide;
    wide *=2
   
    
  }

  return tree;
  
};

//todo: 尾端判斷空值的邏輯要抽出來當方法
//要用在printTree那邊`
// level 0: [0:10 (p:-)]
// level 1: [1:5 (p:0), 2:15 (p:0)]
// level 2: [3:3 (p:1), 4:7 (p:1), 5:- (p:2), 6:20 (p:2)]


const isComplete = (e) => {};


/**Tree Node**/
function tNode(score) {
  this.score = score;
  this.left = null;
  this.right = null;
}

function addTreeNode(root, score) {
  let newNode = new tNode(score);
  let tempSlot;

  if (root == null) {
    debugger;
    root = newNode;
    return root;
  } else {

    debugger;
    tempSlot = root;

    while (tempSlot != null) {
      if (newNode.score < tempSlot.score) {
        if (tempSlot.left == null) {
          tempSlot.left = newNode;
          break;
        }
        tempSlot = tempSlot.left;
      } else {
        if (tempSlot.right == null) {
          tempSlot.right = newNode;
          break;
        }

        tempSlot = tempSlot.right;
      }
    }

    return root
  }
}

let root = new tNode(12);

// addTreeNode(root,5)

// addTreeNode(root,8)
// addTreeNode(root,9)
// addTreeNode(root,15)
// addTreeNode(root,24)
// addTreeNode(root,10)


/**ToDo**/
//樹的中序走訪 ==> 可小排到大
//樹的搜尋=> 其實就是不斷比大小去走分支
//樹的插入，書貌似沒有更動整個樹的節點順序，只用搜尋後補上，但真的可以這樣嗎? 會不會有些情況應該是要插中間的?(好像不會)

/****/

/****/

/****/

/****/

/****/

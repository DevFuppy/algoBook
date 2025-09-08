/**CBT Array**/
let CBTarray = [];

const getLeftIndex = (i) => 2 * i + 1;

const getRightIndex = (i) => 2 * i + 2;

const getParentIndex = (i) => Math.floor(i / 2);

export const getTreeLvl = (arr) => {
  let len = arr.length;

  //去除尾端或全null, undefined之情況
  //尾端出現null，進入檢查
  if (arr[len - 1] == null) {
    //從尾端第一個開始檢查
    for (let i = len - 1; i >= 0; i--) {
      //碰到有值，刪前一個到尾端的null
      if (arr[i] != null) {
        //index記得要加1，因為是當下索引,slice不留
        arr = arr.slice(0, i + 1);
        len = arr.length;
        break;
      }

      //如果都跑完，還沒遇到null，那麼表示為全null
      if (i === 0) return 0;
    }
  }

  let lvl = 0;

  for (let i = 1; len > 0; i *= 2) {
    len = len - i;
    lvl++;
  }

  return lvl;
};

export const printTree = (arr) => {
  let pointer = 0;
  let wide = 1;
  let tree = [];

  for (let i = getTreeLvl(arr); i > 0; i--) {
    let left = pointer;
    let right = left + wide;
    tree.push(arr.slice(left, right));
    pointer += wide;
    wide *= 2;
  }

  return tree;
};

//todo: 尾端判斷空值的邏輯要抽出來當方法
//要用在printTree那邊`
// level 0: [0:10 (p:-)]
// level 1: [1:5 (p:0), 2:15 (p:0)]
// level 2: [3:3 (p:1), 4:7 (p:1), 5:- (p:2), 6:20 (p:2)]

const isComplete = (e) => {};
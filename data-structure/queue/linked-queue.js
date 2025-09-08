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

export {NenQ, NdQ, NshowQ}
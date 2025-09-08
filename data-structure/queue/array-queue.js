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

export {showQ,dQ,enQ}
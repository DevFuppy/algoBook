/**Tree Node**/
export const tNode = function(score) {
  this.score = score;
  this.left = null;
  this.right = null;
}

export const addTreeNode = function(root, score) {
  let newNode = new tNode(score);
  let tempSlot;

  if (root == null) {
 
    root = newNode;
    return root;
  } else {
 
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

    return root;
  }
}

export const walkTreeNode = (root)=>{

if(root===null) return null  

return [walkTreeNode(root?.left||null),root.score,walkTreeNode(root?.right||null)]
  
}


/**ToDo**/
//樹的中序走訪 ==> 可小排到大
//樹的搜尋=> 其實就是不斷比大小去走分支
//樹的插入，書貌似沒有更動整個樹的節點順序，只用搜尋後補上，但真的可以這樣嗎? 會不會有些情況應該是要插中間的?(好像不會)

/****/

/****/

/****/

/****/

/****/
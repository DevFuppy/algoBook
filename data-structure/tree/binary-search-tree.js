/**Tree Node**/
export const tNode = function (score) {
  this.score = score;
  this.left = null;
  this.right = null;
};

//貌似我的創見樹方法其實已經是書上的插入?
//回頭看看書怎麼做
export const addTreeNode = function (root, score) {
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
          return root;
        }
        tempSlot = tempSlot.left;
      } else {
        if (tempSlot.right == null) {
          tempSlot.right = newNode;
          return root;
        }

        tempSlot = tempSlot.right;
      }
    }
  }
};

//樹的中序走訪 ==> 可小排到大
export const walkTreeNode = (root) => {
  if (root === null) return null;

  return [
    walkTreeNode(root?.left || null),
    root.score,
    walkTreeNode(root?.right || null),
  ];
};
//需求：直接返回一個小排到大的陣列
//那其他兩個走訪會用在哪裡呢?

//樹的搜尋=> 其實就是不斷比大小去走分支
export const searchTree = (root, score) => {
  let temp = root;

  while (temp !== null) {
    if (score > temp.score) {
      temp = temp.right;
    } else if (score < temp.score) {
      temp = temp.left;
    } else {
      return temp;
    }
  }

  return null;
};

//刪除樹
export const deleteNode = (root, score) => {
  
  //要被刪除的點
  let node;

  let temp = root;
  let parent = root;
  let fromWhere;

  while (temp !== null) {
    
    if (score !== temp.score) {
      parent =temp
      fromWhere = score < temp.score 
      temp = fromWhere ? temp.left : temp.right;

    } else {
     
      node = temp;
      break;
    }
  }

  if (node == null) {
    console.log("the node doesn'nt exist");
    return root;
  }

  let left = node.left,
    right = node.right;
  

  if (left == null && right == null) {
    
    if (node===root)
    {
      root=root.right??root.left
      node.left=null;node.right=null
    }
    else if (fromWhere) parent.left = null;
    else parent.right = null;

  } 
  else if (left == null || right == null) {
   

    let descendants = node.left ?? node.right; 

    if (node===root)
    {
      root=root.right??root.left
      node.left=null;node.right=null
    }
    else if (fromWhere) parent.left = descendants;
    else parent.right = descendants;

  } 
  else {

    let replaceTarget = node.right;
    let targetParent = root;

    while(replaceTarget.left != null)
    {
      targetParent = replaceTarget;
      replaceTarget = replaceTarget.left
    }

    node.score = replaceTarget.score;    
    
    if(replaceTarget === root.right)root.right = replaceTarget.right;    
    else targetParent.left = replaceTarget.right;


  }
  return root
};

/**ToDo**/

//樹的插入，書貌似沒有更動整個樹的節點順序，只用搜尋後補上，但真的可以這樣嗎? 會不會有些情況應該是要插中間的?(好像不會)

/****/

/****/

/****/

/****/

/****/

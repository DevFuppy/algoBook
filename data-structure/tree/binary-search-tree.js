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

export const TraversalOrders = {
  Preorder: (root) => {
    let result = [];

    let order = Preorder;

    if (root.left) {
      result = [...walkTreeNode(root?.left, order)];
    }

    result = [...result, root.score];

    if (root.right) {
      result = [...result, ...walkTreeNode(root?.right, order)];
    }

    return result;
  },

  Inorder: (root) => {
    let order = Inorder;

    let result = [];

    result = [...result, root.score];

    if (root.left) {
      result = [...walkTreeNode(root?.left, order)];
    }

    if (root.right) {
      result = [...result, ...walkTreeNode(root?.right, order)];
    }

    return result;
  },

  Postorder: (root) => {
    let result = [];

    let order = Postorder;

    if (root.left) {
      result = [...walkTreeNode(root?.left, order)];
    }

    if (root.right) {
      result = [...result, ...walkTreeNode(root?.right, order)];
    }

    result = [...result, root.score];

    return result;
  },
};

//BFS法
export const bstToArray = (root) => {

    if(root==null || root.score==null) return [];
  
    let q = [root];
    let front = 0;
    let rear = 1;
    
    let res = [root.score];

    while(front<rear)
    {
      let cur = q[front];
      front++;

      const [l,r] = [cur?.left,cur?.right]
      
      if(l)
      {
        res.push(l.score);
        q[rear] = l;
        rear++;
      }
      else
      {
        res.push(null)
      }

      if(r)
      {
        res.push(r.score);
        q[rear] = r;
        rear++;
      }
      else
      {
        res.push(null)
      }



    }

    for(let i= res.length-1; res[i]===null ;i-- )
    {     
       res.pop()        
    }

    return res;
 
};

/**todo**/
//差在三種walk沒寫完\

/*樹的搜尋=> 其實就是不斷比大小去走分支*/
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
      parent = temp;
      fromWhere = score < temp.score;
      temp = fromWhere ? temp.left : temp.right;
    } else {
      node = temp;
      break;
    }
  }

  if (node == null) {
    console.log("the node doesn'nt exist");
    return { root, removed: false };
  }

  if (node.left == null && node.right == null) {
    if (node === root) root = root.right ?? root.left;
    else if (fromWhere) parent.left = null;
    else parent.right = null;
  } else if (node.left == null || node.right == null) {
    let descendants = node.left ?? node.right;

    if (node === root) root = root.right ?? root.left;
    else if (fromWhere) parent.left = descendants;
    else parent.right = descendants;
  } else {
    let replaceTarget = node.right;
    let targetParent;

    while (replaceTarget.left != null) {
      targetParent = replaceTarget;
      replaceTarget = replaceTarget.left;
    }

    // node.score = replaceTarget.score;

    let keys = Object.keys(node).filter((k) => k !== "right" && k !== "left");

    keys.forEach((k) => (node[k] = replaceTarget[k]));

    if (replaceTarget === node.right) node.right = replaceTarget.right;
    else targetParent.left = replaceTarget.right;
  }
  return { root, removed: true };
};

/**ToDo**/

/****/

/****/

/****/

/****/

/****/

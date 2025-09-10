import * as algo from  "./algorithms.js"
import * as art from "./data-structure/tree/array-binary-tree.js"
import * as bst from "./data-structure/tree/binary-search-tree.js"
import * as aq from "./data-structure/queue/array-queue.js"
import * as nq from "./data-structure/queue/linked-queue.js"

window.algo = algo;
window.art = art;
window.bst = bst;
window.aq =aq;
window.nq=nq

/**algo**/
let avg = window.algo.averageReducer
// console.log(avg([8,9,10]))

/**array Q**/
window.enq = aq.enQ;
window.dq = aq.dQ
window.showq = aq.showQ

/**linked Q**/
window.addQ = nq.NenQ
window.NdQ = nq.NdQ
window.NshowQ = nq.NshowQ 
 

/**array tree**/
window.printTree = art.printTree
window.printTreeDiagram = art.printTreeDiagram


/**BST**/

window.walkTreeNode=bst.walkTreeNode
window.searchTree = bst.searchTree
window.deleteNode = bst.deleteNode
window.Preorder = bst.TraversalOrders.Preorder,
window.Inorder =  bst.TraversalOrders.Inorder,
window.Postorder = bst.TraversalOrders.Postorder

window.root = new bst.tNode(12);

for(let i of [5, 8, 9, 15, 24, 10, 7, 3, 13, 12.8, 14, 54])
{
    bst.addTreeNode(root,i)
}

// console.log(root,Inorder)

console.log( walkTreeNode(root,Postorder) )

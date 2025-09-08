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


/**BST**/
window.root = new bst.tNode(12);
bst.addTreeNode(root,5)
bst.addTreeNode(root,8)
bst.addTreeNode(root,9)
bst.addTreeNode(root,15)
bst.addTreeNode(root,24)
bst.addTreeNode(root,10)

window.walkTreeNode=bst.walkTreeNode


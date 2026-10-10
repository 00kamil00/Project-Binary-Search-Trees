# 🌳 Binary Search Tree (BST)

> A balanced Binary Search Tree implemented from scratch in vanilla JavaScript, built for **The Odin Project**.

## 📌 Overview
This project implements a complete Binary Search Tree (BST) data structure in JavaScript, handling self-balancing construction, targeted insertions, node deletions, tree metrics, and multi-strategy traversals.

## 🚀 Key Features
- **Balanced Construction & Rebalancing:** Builds a balanced tree from raw arrays (removing duplicates) and rebalances with `rebalance()` to maintain $O(\log n)$ performance.
- **Node Mutation:** Full support for `insert()`, `includes()`, and `deleteItem()` (properly handling leaf nodes, single children, and two-child nodes via in-order successors).
- **Tree Traversals:**
  - Breadth-First: `levelOrderForEach()`
  - Depth-First: `inOrderForEach()`, `preOrderForEach()`, `postOrderForEach()`
- **Metrics & Inspection:** Calculates node `depth()`, subtree `height()`, and verifies tree integrity via `isBalanced()`.

## 💻 Usage
```javascript
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(tree.isBalanced()); // true

// Unbalance tree
tree.insert(105);
tree.insert(110);
tree.insert(115);

// Restore balance
tree.rebalance();
console.log(tree.isBalanced()); // true
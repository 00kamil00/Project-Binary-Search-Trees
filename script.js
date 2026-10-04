class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }

    buildTree(array) {
        const uniqueArray = [...new Set(array)]
        const sortedArray = uniqueArray.sort((a, b) => a - b)

        function sortedArrayToBST(start, end) {
            if (start > end) return null
            
            const mid = Math.floor((start + end) / 2)
            const root = new Node(sortedArray[mid])

            root.left = sortedArrayToBST(start, mid - 1)
            root.right = sortedArrayToBST(mid + 1, end)
            return root
        }
        return sortedArrayToBST(0, sortedArray.length - 1)
    }

    includes(value) {
        let current = this.root
        while(current !== null) {
            if (value === current.value) {
                return true
            } else if (value < current.value) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }

    insert(value) {
        const newNode = new Node(value)
        let current = this.root

        while (true) {
            if (current === null) {
                this.root = newNode
                return
            }
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return
                } else {
                    current = current.left
                }
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode
                    return
                } else {
                    current = current.right
                }
            } else {
                return
            }
        }
    }

    deleteItem(value) {
        function deleteNode(node, value) {
            if (node === null) {
                return null
            } else if (value < node.value) {
                node.left = deleteNode(node.left, value)
            } else if (value > node.value) {
                node.right = deleteNode(node.right, value)
            } else {
                if (node.left === null) {
                    return node.right
                } else if (node.right === null) {
                    return node.left
                } else {
                    let successor = node.right
                    while (successor.left !== null) {
                        successor = successor.left
                    }
                    node.value = successor.value
                    node.right = deleteNode(node.right, node.value)
                }
            }
            return node
        }
        this.root = deleteNode(this.root, value)
    }

    levelOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Callback is required")
        }
        const queue = []
        if (!this.root) return
        queue.push(this.root)
        while (queue.length > 0) {
            const current = queue.shift()
            callback(current.value)
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }

    inOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Callback is required")
        }
        function traverse(node) {
            if (node === null) return
            traverse(node.left)
            callback(node.value)
            traverse(node.right)
        }
        traverse(this.root)
    }

    preOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Callback is required")
        }
        function traverse(node) {
            if (node === null) return
            callback(node.value)
            traverse(node.left)
            traverse(node.right)
        }
        traverse(this.root)
    }

    postOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Callback is required")
        }
        function traverse(node) {
            if (node === null) return
            traverse(node.left)
            traverse(node.right)
            callback(node.value)
        }
        traverse(this.root)
    }
}

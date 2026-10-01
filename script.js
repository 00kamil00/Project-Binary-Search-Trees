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
}
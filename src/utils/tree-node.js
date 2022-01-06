class Node {
	constructor(data) {
		this.data = data
		this.right = null
		this.left = null
	}
}

export class BinarySearchTree {
	constructor() {
		this.root = null
	}

	/**
	 * insert a new node into the tree
	 *
	 * @param {data : Integer} value to insert into the tree
	 *
	 **/
	insert(data) {
		let newNode = new Node(data)
		if (this.root === null) this.root = newNode
		else this.insertNode(this.root, newNode)
	}

	/**
	 * insert a new node into a specific node
	 *
	 * @param {node : Node} Node specific node which will add new node
	 * @param {newNode : Node} Node new node which will be added
	 **/
	insertNode(node, newNode) {
		// if the new value is smaller than current node's value
		if (newNode.data < node.data) {
			if (node.left === null) node.left = newNode
			else this.insertNode(node.left, newNode)
		}

		// if the new value is bigger than current node's value
		else {
			if (node.right === null) node.right = newNode
			else this.insertNode(node.right, newNode)
		}
	}

	/**
	 * remove a value from the tree
	 *
	 * @param {data : Integer} integer value which will be removed
	 **/
	remove(data) {
		this.root = this.removeNode(this.root, data)
	}

	// Method to remove node with a

	/**
	 * remove a node from the specific node
	 *
	 * @param {node : Node} Node which will remove specific value
	 * @param {key : Integer} integer value which will be removed
	 **/
	removeNode(node, key) {
		if (node === null) return null
		// if the value is smaller than current node's value
		else if (key < node.data) {
			node.left = this.removeNode(node.left, key)
			return node
		}

		// if the value is grater than current node's value
		else if (key > node.data) {
			node.right = this.removeNode(node.right, key)
			return node
		}

		// if the value is equal to current node's value
		else {
			// if current node has no children
			if (node.left === null && node.right === null) {
				node = null
				return node
			}

			// if the current node has not left child
			if (node.left === null) {
				node = node.right
				return node
			}

			// if the current node has not right child
			else if (node.right === null) {
				node = node.left
				return node
			}

			// if the current node has bot children
			var minNode = this.findMinNode(node.right)
			node.data = minNode.data
			node.right = this.removeNode(node.right, minNode.data)
			return node
		}
	}

	/**
	 * find the minimum node in the tree
	 *
	 * @param {node : Node} start point of finding
	 **/
	findMinNode(node) {
		if (node.left === null) return node
		else return this.findMinNode(node.left)
	}
}

export const copyInstance = (original) => {
	var copied = Object.assign(
		Object.create(Object.getPrototypeOf(original)),
		original
	)
	return copied
}

const traverse = (obj) => {
	if (!obj) return null

	if (obj.left) {
		traverse(obj.left)
	}

	if (obj.data) {
		let children = []

		if (obj.left) {
			children = [...children, traverse(obj.left)]
		}

		if (obj.right) {
			children = [...children, traverse(obj.right)]
		}

		return {
			name: String(obj.data),
			children: children.length && [traverse(obj.left)].length ? children : [],
		}
	}
	if (obj.right) {
		traverse(obj.right)
	}
}

export const format = (data) => {
	const res = Object.keys(data).map((key) => {
		return {
			name: data[key] && data[key].data ? String(data[key].data) : key,
			children: traverse(data.root) ? [traverse(data.root)] : null,
		}
	})

	if (res[0].children) {
		return res[0].children
	}
	return res
}

export function TreeNode(value) {
	this.value = value
	this.left = null
	this.right = null
}

export function insert(data, value) {
	let node = new TreeNode(value)
	if (!data.root) data = { root: node }
	else {
		let current = data.root
		while (!!current) {
			if (node.value < current.value) {
				if (!current.left) {
					current.left = node
					break
				}
				current = current.left
			} else if (node.value > current.value) {
				if (!current.right) {
					current.right = node
					break
				}
				current = current.right
			} else {
				break
			}
		}
	}
	return data
}

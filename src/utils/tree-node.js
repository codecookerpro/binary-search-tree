export const TreeNode = (value) => {
	this.value = value
	this.left = null
	this.right = null
}

export const insert = (data, value) => {
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

export const traverse = (obj) => {
	if (!obj) return null

	if (obj.left) {
		traverse(obj.left)
	}

	if (obj.value) {
		let children = []

		if (obj.left) {
			children = [...children, traverse(obj.left)]
		}

		if (obj.right) {
			children = [...children, traverse(obj.right)]
		}

		return {
			name: String(obj.value),
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
			name: data[key] && data[key].value ? String(data[key].value) : key,
			children: traverse(data.root) ? [traverse(data.root)] : null,
		}
	})

	if (res[0].children) {
		return res[0].children
	}

	return res
}

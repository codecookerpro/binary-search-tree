import './styles/app.css'
import Config from '../../config'

import React, { useState, useEffect } from 'react'
import clone from 'clone'
import Graph from '../../components/graph'
import { BinarySearchTree } from '../../utils/tree-node'
import _ from 'lodash'

function App() {
  const [tree, setTree] = useState(new BinarySearchTree())

  const handleInsert = () => {
    let value = _.random(Config.min, Config.max)
    const newTree = clone(tree)
    newTree.insert(value)
    setTree(newTree)
  }

  const handleRemove = (node) => {
    console.log(node)
    const value = parseInt(node.name)
    const newTree = clone(tree)
    newTree.remove(value)
    setTree(newTree)
  }

  return (
    <div id="App">
      <button onClick={handleInsert}>add</button>
      <Graph data={tree} handleRemove={handleRemove} />
    </div>
  )
}

export default App

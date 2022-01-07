import './styles/app.css'
import Config from '../../config'

import React, { useState, useEffect } from 'react'
import clone from 'clone'
import Graph from '../../components/graph'
import { BinarySearchTree } from '../../utils/tree-node'
import _ from 'lodash'

function App() {
  const [tree, setTree] = useState(new BinarySearchTree())

  const handleInsert = (event) => {
    // check keycode is space key
    if (event && event?.keyCode != Config.actionKey) return

    let value = _.random(Config.min, Config.max)
    const newTree = clone(tree)
    newTree.insert(value)
    setTree(newTree)
  }

  const handleRemove = (node) => {
    const value = parseInt(node.name)
    const newTree = clone(tree)
    newTree.remove(value)
    setTree(newTree)
  }

  useEffect(() => {
    document.getElementsByTagName('body')[0].onkeyup = handleInsert
  })

  return (
    <div id="App">
      <Graph data={tree} handleRemove={handleRemove} />
    </div>
  )
}

export default App

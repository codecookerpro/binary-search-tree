import './styles/app.css'
import Config from '../../config'

import React, { useState, useEffect } from 'react'
import Graph from '../../components/graph'
import { TreeNode, insert } from '../../utils/tree-node'
import _ from 'lodash'

const sample = [2, 1, 3, 10, 13, 14, 6, 4, 7]

function App() {
  const [data, setData] = useState({ root: null })
  const [index, setIndex] = useState(0)

  const onAdd = () => {
    let number = _.random(Config.min, Config.max)
    number = sample[index]
    const newData = insert(data, number)
    setData(newData)
    setIndex(index + 1)
  }

  return (
    <div id="App">
      <button onClick={onAdd}>add</button>
      <Graph data={data} />
    </div>
  )
}

export default App

import './styles/app.css'

import React, { useState } from 'react'
import Graph from '../../components/graph'
import { TreeNode } from '../../utils/tree-node'

function App() {
  const [data, setData] = useState({ root: null })
  return (
    <div className="App">
      <Graph data={data} />
    </div>
  )
}

export default App

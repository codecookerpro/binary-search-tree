import React from 'react'
import Tree from 'react-d3-tree'
import { format } from '../utils/tree-node'
import './graph.css'

const renderNodeWithCustomEvents = ({ nodeDatum, toggleNode, handleRemove }) => (
  <g>
    <circle r="25" onClick={() => handleRemove(nodeDatum)} />
    <text
      fill="black"
      strokeWidth="1"
      textAnchor="middle"
      x="0"
      y="5"
      onClick={() => handleRemove(nodeDatum)}
    >
      {nodeDatum.name}
    </text>
  </g>
)

const Graph = ({ data, handleRemove }) => {
  return (
    <Tree
      orientation={'vertical'}
      data={format(data)}
      translate={{
        x: document.getElementById('App')
          ? document.getElementById('App').clientWidth / 2
          : window.innerWidth / 2,
        y: document.getElementById('App')
          ? document.getElementById('App').clientHeight / 2
          : window.innerHeight / 2,
      }}
      renderCustomNodeElement={(rd3tProps) =>
        renderNodeWithCustomEvents({ ...rd3tProps, handleRemove })
      }
      enableLegacyTransitions={true}
      transitionDuration={300}
    />
  )
}

export default Graph

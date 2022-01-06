import React from 'react'
import Tree from 'react-d3-tree'
import { format } from '../utils/tree-node'

const style = {
  node: {
    circle: {
      fill: '#d16ba5',
      name: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1.6rem',
      },
    },
  },
  leafNode: {
    circle: {
      fill: '#5ffbf1',
      name: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1.6rem',
      },
    },
  },
}

const Graph = ({ data, handleRemove }) => {
  return (
    <Tree
      styles={{
        nodes: {
          node: style.node,
          leafNode: style.leafNode,
        },
      }}
      collapsible={false}
      orientation="vertical"
      data={format(data)}
      translate={{
        x: document.getElementById('App')
          ? document.getElementById('App').clientWidth / 2
          : window.innerWidth / 2,
        y: document.getElementById('App')
          ? document.getElementById('App').clientHeight / 2
          : window.innerHeight / 2,
      }}
      onNodeClick={handleRemove}
    />
  )
}

export default Graph

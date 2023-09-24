import React from 'react'

function TextContent({data}) {
  return (
    <div>
        <h3>{data.title}</h3>
        <p>{data.article}</p>
    </div>
  )
}

export default TextContent
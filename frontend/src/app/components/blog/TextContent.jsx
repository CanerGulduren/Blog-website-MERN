import React from 'react'

function TextContent({data}) {
  return (
    <div>
        <h3 className={"text-lg font-semibold py-2"}>{data.title}</h3>
        <p>{data.article}</p>
    </div>
  )
}

export default TextContent
"use client"
import Image from 'next/image'
import React from 'react'

function ImageContent({data}) {
    const imgPath = data.path.replace("C:\fakepath", "public/images")
    console.log(data.path)
    console.log(imgPath)
  return (
    <Image 
    src={imgPath}
    alt= {data.alt}
    width={500}
    height={500}
    />
  )
}

export default ImageContent
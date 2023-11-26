"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useGetImage from "@/app/hooks/useGetImage";
import getImageURL from "@/app/utils/blog/get/getImageUrl";

function ImageContent({ data, imageStyle }) {
  const [imageURL, setImageURL] = useState(null)
  
  const findImage = async () => {
    const image = await getImageURL(data.path)
    setImageURL(image)
  } 

  useEffect(() => {
    findImage()
  }, [])

  if(imageURL === null){
    return <div>Loading...</div>
  }

  return (
    <Image
      src={imageURL}
      alt={data.alt}
      width={600}
      height={400}
      className={`rounded object-cover object-center ${imageStyle}`}
    />
  );
}

export default ImageContent;

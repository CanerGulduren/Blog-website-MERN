"use client";
import Image from "next/image";
import React, { useState } from "react";
import getImageURL from "@/app/utils/getImageUrl";

function ImageContent({ data, imageStyle }) {
  const [imageURL, setImageURL] = useState(null);

  const handleImageURL = async () => {
    console.log(data.path)
    const url = await getImageURL(data.path);
    console.log(url)
    setImageURL(url);
  };

  handleImageURL();

  if (!imageURL) {
    return <div>Resim yükleniyor...</div>;
  }

  return (
    <Image
      src={imageURL}
      alt={data.alt}
      width={900}
      height={1200}
      className={`rounded object-cover object-center ${imageStyle}`}
    />
  );
}

export default ImageContent;

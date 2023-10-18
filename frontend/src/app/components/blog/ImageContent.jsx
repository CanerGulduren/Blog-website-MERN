"use client";
import Image from "next/image";
import React, { useState } from "react";
import getImageURL from "@/app/utils/getImageUrl";

function ImageContent({ data }) {
  const [imageURL, setImageURL] = useState(null);

  const handleImageURL = async () => {
    const url = await getImageURL(data.path);
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
      width={500}
      height={500}
      style={{ border: "2px solid black", display: "block" }}
    />
  );
}

export default ImageContent;

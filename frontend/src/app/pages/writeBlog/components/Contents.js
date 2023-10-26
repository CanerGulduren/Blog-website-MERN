"use cilent";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBlogData,
  updateBlogData,
  pushImagePaths,
} from "@/app/features/blogSlice";
import getImagePaths from "@/app/utils/getImagePaths";
import InputElem from "./InputElem";

const Contents = ({ submitStarted, pathsUpdated, style }) => {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();
  const [imageFiles, setImageFiles] = useState([]);

  const inputElems = {
    title: {
      name: "title",
      inputType: "textArea",
      title: "Paragraf başlığı",
    },
    article: {
      name: "article",
      inputType: "textArea",
      title: "Paragraf Gövdesi",
    },
    path: {
      name: "path",
      inputType: "file",
      title: "Resim yükle",
    },
    alt: {
      name: "alt",
      inputType: "text",
      title: "Resim açıklaması",
    },
    text: {
      title: "Paragraf"
    },
    img: {
      title: "Resim"
    }
  };

  const handleContentChange = (element, index) => {
    const { name, value } = element.target;
    const content = blogData.content;

    const updatedInput = { ...content[index].data, [name]: value };
    const updatedContent = [...content];
    updatedContent[index] = { ...updatedContent[index], data: updatedInput };
    dispatch(updateBlogData({ content: updatedContent }));
  };

  const handleImageChange = (input) => {
    const file = input.target.files[0];
    setImageFiles([...imageFiles, file]);
  };

  const updateImagePaths = async () => {
    const imagePaths = await getImagePaths(imageFiles);
    dispatch(pushImagePaths(imagePaths));
    pathsUpdated(true);
  };

  useEffect(() => {
    if (submitStarted) {
      updateImagePaths();
    }
  }, [submitStarted]);

  return (
    <div className={" flex flex-col gap-y-12"}>
      {blogData.content.map((element, index) => {
        const type = element.input;
        const data = element.data;

        return (
          <div
            key={`content-${index}`}
            className={`bg-neutral-700 px-2 md:px-6 py-10 rounded-lg ${style}`}
          >
            <h3
              className={
                "text-lg mb-3 bg-neutral-50 inline-block border-b-4 border-neutral-800 rounded px-8 py-3"
              }
            >
              {inputElems[type].title} İçeriği
            </h3>
            <div className={"rounded-lg bg-gray-100 p-4 flex flex-col gap-y-4 border-2 border-gray-600"}>
              {Object.keys(data).map((dataElem, dataIndex) => {
                const imageInput = dataElem === "path";
                const skipImgID = dataElem === "imgID";

                if (skipImgID) {
                  return;
                }

                return (
                  <InputElem
                    key={`content-data-${dataIndex}`}
                    name={dataElem}
                    title={inputElems[dataElem].title}
                    type={inputElems[dataElem].inputType}
                    update={(e) => {
                      imageInput
                      ? handleImageChange(e)
                      : handleContentChange(e, index);
                    }}
                    />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contents;

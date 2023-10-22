import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBlogData,
  updateBlogData,
  pushImagePaths,
} from "@/app/features/blogSlice";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import getImagePaths  from "@/app/utils/getImagePaths";
import InputElem from "./InputElem";

const Contents = ({ submitStarted, pathsUpdated }) => {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();
  const [imageFiles, setImageFiles] = useState([]);

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
  }

  useEffect(() => {
    if(submitStarted){
      updateImagePaths()
    }
  }, [submitStarted]);

  return (
    <div>
      {blogData.content.map((element, index) => {
        const type = element.input;
        const data = element.data;
        const capitalizeName = capitalizeFirstLetter(type);

        return (
          <div key={`content-${index}`}>
            <h3>{capitalizeName} Content</h3>

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
                  title={`Change ${dataElem}`}
                  value={imageInput ? "" : data[dataElem]}
                  type={imageInput ? "file" : "text"}
                  update={(e) => {
                    imageInput
                      ? handleImageChange(e)
                      : handleContentChange(e, index);
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Contents;

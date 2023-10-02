import React from "react";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import InputElem from "./InputElem";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogData, updateBlogData } from "@/app/features/blogSlice";

function ContentElements() {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();

  const handleContentChange = (element, index) => {
    const { name, value } = element.target;
    const content = blogData.content

    const updatedInput = {
      ...content[index].data,
      [name]: value,
    };

    const updatedContent = [...content];
    updatedContent[index] = { ...updatedContent[index], data: updatedInput };
    dispatch(updateBlogData({ content: updatedContent }));
  };

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
              return (
                <InputElem
                  key={`content-data-${dataIndex}`}
                  name={dataElem}
                  title={`Change ${dataElem}`}
                  value={data[dataElem]}
                  update={(e) => {
                    handleContentChange(e, index);
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ContentElements;

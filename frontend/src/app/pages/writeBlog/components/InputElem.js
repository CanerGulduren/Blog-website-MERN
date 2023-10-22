import React from "react";
import style from "@/app/style/component/inputs.module.css";

function InputElem({ title, name, type = "text", update, value = "" }) {
  return (
    <div className={style.inputContainer}>
      <label>{title}:</label>
      <input
        type={type}
        name={name}
        onChange={(e, index) => {
          update(e, index);
        }}
        value={value}
      />
    </div>
  );
}

export default InputElem;

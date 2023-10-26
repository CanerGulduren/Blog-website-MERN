import React from "react";

const inputTypeStyle = {
  file: "max-w-sm rounded hover:cursor-pointer p-4 file:mr-4 file:py-4 file:px-6 file:rounded-full file:border-2 file:border-stone-800 file:text-sm file:font-semibold file:bg-neutral-300 file:hover:bg-neutral-50 file:cursor-pointer bg-lime-200 hover:bg-lime-300",
  text: "h-10 py-1 rounded bg-neutral-200 ",
  textArea: "rounded bg-neutral-200 border border-stone-950",
  date: "h-10 rounded bg-neutral-200",
};

const inputNameStyle = {
  title: {
    rows: "2",
    cols: "10",
  },
  desc: {
    rows: "4",
    cols: "10",
  },
  article: {
    rows: "6",
    cols: "20"
  }
};

function InputElem({ title, name, type = "text", update }) {
  const isTextArea = type === "textArea";

  return (
    <div className={"flex flex-col gap-1"}>
      <label className={"p-1 text-lg"}>{title}</label>

      {isTextArea ? (
        <textarea
          name={name}
          onChange={(e, index) => {
            update(e, index);
          }}
          className={inputTypeStyle[type]}
          rows={inputNameStyle[name].rows}
          cols={inputNameStyle[name].cols}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          onChange={(e, index) => {
            update(e, index);
          }}
          className={`border border-stone-950 ${inputTypeStyle[type]}`}
        />
      )}
    </div>
  );
}

export default InputElem;

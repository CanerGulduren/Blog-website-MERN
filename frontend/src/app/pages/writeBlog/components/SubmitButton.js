import React from 'react'

const SubmitButton = ({screenSize}) => {
    const screen = {
        small: "block md:hidden my-8 w-48 py-4 text-lg",
        large: "hidden md:block"
    }
  return (
    <button
          type="submit"
          className={ `w-36 mx-2 border-2 border-slate-950 rounded px-5 py-2 bg-lime-500 ${screen[screenSize]}` }
        >
         Blog Oluştur
        </button>
  )
}

export default SubmitButton
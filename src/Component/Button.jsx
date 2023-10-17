import React, { useState } from "react";

const Button = ({ char, setValue, val }) => {
  return (
    <div
      onClick={() => {
        setValue(val.toString() + char.toString());
      }}
      role="button"
      className="basis-1/4 min-h-24 bg-orange-600 text-white
   border-2 shadow-2xl hover:bg-orange-900 hover:shadow-2xl flex justify-center 
    items-center text-3xl border-none lg:h-24"
    >
      {char}
    </div>
  );
};

export default Button;

import React, { useState } from "react";
import Button from "./Button";

const Calbody = () => {
  const [val, setValue] = useState("");
  console.log(val);
  return (
    <div
      className="w-5/12 bg-blue-950 rounded-xl shadow-2xl 
    max-sm:w-full max-sm:h-full"
    >
      <div className="bg-transparent h-1/5 bottom-0">
        <textarea
          rows={2}
          placeholder="0"
          value={val}
          className="bg-transparent text-white text-4xl w-full h-full outline-none text-right"
        />
      </div>
      <div className="flex flex-row flex-wrap bg-transparent h-4/5 max-sm:w-full">
        <Button char={1} setValue={setValue} val={val} />
        <Button char={2} setValue={setValue} val={val} />
        <Button char={3} setValue={setValue} val={val} />
        <Button char={"+"} setValue={setValue} val={val} />
        <Button char={4} setValue={setValue} val={val} />
        <Button char={5} setValue={setValue} val={val} />
        <Button char={6} setValue={setValue} val={val} />
        <Button char={"-"} setValue={setValue} val={val} />
        <Button char={7} setValue={setValue} val={val} />
        <Button char={8} setValue={setValue} val={val} />
        <Button char={9} setValue={setValue} val={val} />
        <Button char={"/"} setValue={setValue} val={val} />
        <Button char={0} setValue={setValue} val={val} />
        <Button char={"."} setValue={setValue} val={val} />
        <Button char={"*"} setValue={setValue} val={val} />
        <button
          onClick={() => setValue("")}
          className="basis-1/4 min-h-24 bg-orange-600 text-white
   border-2 shadow-2xl hover:bg-orange-900 hover:shadow-2xl flex justify-center 
    items-center text-3xl border-none lg:h-24"
        >
          C
        </button>
        <button
          onClick={() => setValue(eval(val))}
          className="basis-full min-h-24 bg-orange-600 text-white
   border-2 shadow-2xl hover:bg-orange-900 hover:shadow-2xl flex justify-center 
    items-center text-3xl border-none lg:h-24"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calbody;

import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const Question = (props) => {
  const questions = props.question || null;
  const response = props.response || null;
  const [open, setOpen] = useState(false);
  return (
    <div className="cursor-pointer py-7 relative w-full sm:w-5/6">
      <div
        className="flex items-center"
        onClick={() => setOpen((open) => !open)}
      >
        <PlusIcon className="text-dark w-5" />
        <h3 className="text-xs text-dark font-semibold ml-3">{questions}</h3>
      </div>
      <div className="w-full h-0.5 bg-dark mt-3" />
      <div className={`py-3 ${open ? "flex" : "hidden"}`}>
        <p className="text-dark text-xs">{response}</p>
      </div>
    </div>
  );
};

export default Question;

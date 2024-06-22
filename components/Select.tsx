import React from "react";

function Select({ options }: { options: string[] }) {
  return (
    <select className="bg-black border border-[#DCCA87] outline-none w-full p-3">
      {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  );
}

export default Select;

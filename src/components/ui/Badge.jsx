import React from "react";

function Badge({ content, icon }) {
  return (
    <div
      className="bg-blue-100 text-blue-600 text-sm border border-blue-200 font-semibold w-fit rounded-lg px-2 md:px-4 py-1 md:py-2 
    flex gap-x-1 md:gap-x-2 items-center"
    >
      {icon}
      {content}
    </div>
  );
}

export default Badge;

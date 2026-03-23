import React from "react";
function Blogbtn(){
    return(
       <div className="bg-gradient-to-br from-blue-100 to-blue-100  p-6">

        <div className="flex justify-between items-center  ">

          <h2 className="text-sm font-bold text-black md:text-lg ">
            Browse by Category
          </h2>
            
             <button className="text-sm font-bold text-blue-700 md:text-sm px-5 py-2  hover:underline ">
            View all
          </button>
          </div>

          <div className="flex flex-wrap justify-center items-left gap-4 p-7 md:justify-left">
      
      <button className="px-5 py-2 text-black bg-gray-100 rounded-3xl hover:bg-blue-700  ">
        Web Developer
      </button>

      <button className="px-5 py-2 text-black bg-gray-100 rounded-3xl hover:bg-blue-700 ">
        Mobile Developer
      </button>

      <button className="px-5 py-2 text-black bg-gray-100 rounded-3xl hover:bg-blue-700 ">
        AI Solution
      </button>

      <button className="px-5 py-2 text-black bg-gray-100 rounded-3xl hover:bg-blue-700 ">
        UI/UX Design
      </button>

      <button className="px-5 py-2 text-black  bg-gray-100 rounded-3xl hover:bg-blue-700 ">
        Cloud Solution
      </button>
 

    </div>
      </div>
    )
}
export default Blogbtn;
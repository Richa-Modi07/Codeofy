import React from "react";
function Card(){
    return(
        <div className="w-full flex justify-center items-center py-10 px-6 bg-gray-100">
      
      <div className="max-w-5xl w-full bg-blue-700 rounded-2xl text-center p-12 shadow-xl">
        
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
         Be Part of the Future of AI
        </h1>

        <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
        Join thousands of developers building the next generation of intelligent
applications on Codeofy.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          
          <button className="bg-white hover:bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold transition">
            Sign Up Today
          </button>

        </div>
      </div>
      </div>
    )
}
export default Card;
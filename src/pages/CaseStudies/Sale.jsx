import React from "react";
function Sale(){
    return(
        <div className="w-full flex justify-center items-center py-10 px-6 bg-gray-50">
      
      <div className="max-w-5xl w-full bg-gradient-to-r from-blue-900 to-black rounded-2xl text-center p-12 shadow-xl">
        
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Ready to Transform Your Financial Data?
        </h1>

        <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
         Join industry leaders like FinFlow Inc. and unlock the power of AI-driven analytics today.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Talk to sale
          </button>

          <button className="border border-gray-300 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
            View More Case Studies
          </button>

        </div>
      </div>
      </div>
    )
}
export default Sale;
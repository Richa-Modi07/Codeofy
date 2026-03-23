import React from "react";
function Blogstart(){
    return(
        <div className="px-6 py-10 bg-gradient-to-br from-blue-100 to-blue-100">
          <div className="max-w-6xl mx-auto mt-12 bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold mb-3">
            Start Building With Codeofy Today
          </h2>

          <p className="text-gray-300">
            Join 10,000+ developers building the future of software.
          </p>
        </div>

        <div className="flex gap-4 mt-6 md:mt-0">
          <button className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700">
            Get Started Free
          </button>

          <button className="bg-gray-700 px-6 py-3 rounded-full hover:bg-gray-600">
            Talk to Sales
          </button>
        </div>

      </div>
      </div>
    )
}
export default Blogstart;
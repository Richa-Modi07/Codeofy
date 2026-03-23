import React from "react";
import { CiMail } from "react-icons/ci";
function Blogmsg() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-100 to-blue-100 py-8">
        <div className=" max-w-6xl mx-auto px-10 text-center">
          <div className="mt-0 bg-gradient-to-r from-blue-400 to-indigo-200 text-white rounded-4xl   p-18 ">
            <CiMail className="mx-auto text-blue-700 mb-4" size={32} />
            <h3 className="text-3xl font-bold md:text-5xl text-blue-700  ">
              Stay Updated
            </h3>

            <p className="mt-4 text-lg text-black md:leading-snug">
              Get the latest AI development tutorials and news delivered
              directly to your inbox weekly.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border text-gray-500 rounded-full px-3 py-2 outline-none mt-6 bg-white "
            />

            <button className="bg-blue-600 text-white px-5 py-2 rounded-full m-4">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blogmsg;

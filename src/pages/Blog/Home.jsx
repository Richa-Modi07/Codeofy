import React from "react";
import Read from "./Read"
function Home() {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-100 py-11 ">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="mt-0 bg-gradient-to-r from-blue-400 to-indigo-200 text-white rounded-2xl   p-18 ">

          <h3 className="text-3xl font-bold md:text-5xl text-blue-700  ">
            Codeofy Blog
          </h3>

          <p className="mt-4 text-lg text-black md:leading-snug">
            Insights, tutorials, and the latest breakthroughs in AI-powered software development.
          </p>

          <div className="flex justify-center gap-4 mt-7">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-3xl font-medium hover:scale-105 transition duration-100 hover:bg-blue-600 hover:text-white">
              Explore All Posts
            </button>
          </div>

        </div>
      </div>
      <Read />
    </section>

  )
}
export default Home;

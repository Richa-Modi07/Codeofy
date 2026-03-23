import React from "react";
import { Snowflake, Zap } from "lucide-react"

function Home() {
  return (
    <>
      <section className="text-white  bg-gray-100">
        <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-10 px-8" >
          <div className=" text-center md:text-left">
            <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-1.5">👥 Over 50,000 members</span>
           
            <h1 className="text-3xl font-bold mb-4 text-black text-center md:text-left md:text-5xl">
              The Codeofy <br /> Community
            </h1>

            <p className="text-gray-600 mb-6">
              Connect, collaborate, and grow with AI developers and innovators
              worldwide. Access exclusive resources, get help with your projects,
              and shape the future of Codeofy.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                ✉️ Join the Discord
              </button>

              <button className="border px-6 py-3 rounded-lg text-black bg-white">
                Browse Forums
              </button>
            </div>
          </div>

          <div className="relative bg-blue-100 rounded-2xl flex items-center justify-center h-72">
            <Snowflake size={80} className="text-blue-500" />

            <div className="absolute bottom-0  -translate-x-1/2  left-29 flex items-center gap-2 sm:gap-3 bg-white rounded-2xl h-12 sm:h-14 w-4/5 sm:w-2/4 p-2 sm:px-6
translate-y-1/2 shadow-md">

              <Zap size={24} className="bg-green-300 text-green-600 p-1 rounded-full sm:size-30px" />

              <p className="text-black leading-tight text-[10px] sm:text-xs">
                <span className="font-semibold">New post</span> <br />
                How to deploy Llama 3 on Codeofy...
              </p>

            </div>
          </div>

        </div>

      </section>
    </>
  )
}
export default Home;
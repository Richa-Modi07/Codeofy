import React from "react";
function Home(){
    return(
 <section className="text-white  bg-gradient-to-br from-white to-blue-300 ">
            <div className=" flex  justify-center items-center px-4 text-center p-5 " >
                <div className="flex flex-col items-center justify-center ">

                    <div className=" max-w-3xl mb-15 ">

                        <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">SUCCESS  STORIES</span>

                        <h1 className="text-2xl md:text-4xl font-bold mt-6 text-black"> BUILT WITH  <span className="text-blue-500">CODEOFY</span>
                        </h1>

                        <p className="text-black mt-8 text-lx font-bold text-center "> Explore  the  innovative software and AI power,</p> <p className=" text-black text-lx font-bold text-center"> solution our partners Are building every day
                        </p>

                        <div className="flex justify-center items-center gap-x-6 mt-14 ">
                            <button  className="text-lg font-bold text-white  bg-[rgba(9,80,224,0.75)] py-2 px-3  md:py-4 md:px-9 rounded-4xl hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-linear-to-r hover:to-[rgba(100,150,250,0.5)] ">
                                View Project
                            </button>
                            <button className="text-lg font-bold  py-2 px-3  md:py-4 md:px-9 text-black bg-white rounded-4xl  hover:cursor-pointer transition duration-300 hover:scale-105 border">
                                Submit a project
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Home;
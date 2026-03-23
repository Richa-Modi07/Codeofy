import React from "react";
function Home() {
    return (
        <section className="text-white  bg-gradient-to-br from-blue-90 to-blue-100 ">
            <div className=" flex  justify-center items-center px-4 text-center p-5 " >
                <div className="flex flex-col items-center justify-center ">

                    <div className=" max-w-3xl mb-15 ">

                        <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">WE HIRING GLOBALLY</span>

                        <h1 className="text-2xl md:text-4xl font-bold mt-6 text-black"> Join the future of <span className="text-blue-500">Ai <br />Delevopment</span>
                        </h1>

                        <p className="text-black mt-8 text-lx font-bold text-center "> Empowering developers with next- generations AI tool to bulid scalable,</p> <p className=" text-black text-lx font-bold text-center"> intelligent software. join our mission- driven team today
                        </p>

                        <div className="flex justify-center items-center gap-x-6 mt-14 ">
                            <button  className="text-lg font-bold text-white  bg-[rgba(9,80,224,0.75)] py-4 px-9 rounded hover:cursor-pointer transition duration-300 hover:scale-105 hover:bg-linear-to-r hover:to-[rgba(100,150,250,0.5)] p-5">
                                View Open Positions
                            </button>
                            <button className="text-lg font-bold py-4 px-9 text-black bg-white rounded  hover:cursor-pointer transition duration-300 hover:scale-105 border">
                                Our Culture
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Home;
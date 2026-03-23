import React from "react";
function Home() {
    return (
        <section className="text-white  bg-gradient-to-br from-white to-blue-300 ">
            <div className=" flex  justify-center items-center px-4 text-center p-7 " >
                <div className="flex flex-col items-center justify-center ">

                    <div className=" max-w-3xl mb-15 ">

                        <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">Contact Support</span>

                        <h1 className="text-2xl md:text-5xl font-bold mt-6 text-black"> Get in Touch
                        </h1>

                        <p className="text-black mt-4 text-lx  text-center leading-tight "> Have questions? Our team is here to help you build better with
                            Codeofy.</p><p className="text-black text-lx text-center leading-tight ">Reach out and let's start a conversation about your future.</p>

                    </div>
                </div>

            </div>
        </section>
    )
}
export default Home;
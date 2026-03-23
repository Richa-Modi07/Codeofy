import React from "react";
function Read() {
    return (

            <div className="max-w-6xl mx-auto px-6 text-center py-11">

                <div className="mt-0 bg-white rounded-2xl   p-18 ">

                    <div className=" flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/2">
                            <img
                                src="https://infraon.io/blog/wp-content/uploads/2023/06/futuristic-smart-city-with-5g-global-network-technology-min.jpg"
                                className="w-full rounded-lg"
                            />

                        </div>
                        <div className="md:w-2/2 text-center md:text-left">

                          <span className=" px-1.5 py-1 text-sm bg-blue-100 text-blue-600 rounded-full ">•Featured </span>
                        
                            <h3 className="text-lg font-bold mb-4 text-justify md:text-4xl leading-snug ">

                                How AI is Transforming Software Development
                            </h3>

                            <p className="text-gray-600 mb-6 text-justify leading-snug">
                                We build powerful AI solutions for modern businesses.
                                Our platform helps companies automate processes and
                                improve productivity.
                            </p>
                            
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-blue-700  ">
                                Read More →
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        
    )
}
export default Read;
import React from "react";
function Startcard(){
    return(
      <section className="bg-gray-100 py-12 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
           <div className="bg-blue-600 text-white rounded-2xl p-10">

            <h3 className="text-2xl font-bold  md:text-3xl">
              Ready to start building?
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Join over 10,000 developers who are scaling their applications faster with Codeofy's modern infrastructure.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium hover:scale-105 transition duration-100">
               Start your free trial
              </button>

              <button className="border  text-white px-6 py-2 rounded-lg hover:scale-105 transition duration-100">
                Book a Demo
              </button>
            </div>

          </div>
          </div>
          </section>

        

    )
}
export default Startcard;
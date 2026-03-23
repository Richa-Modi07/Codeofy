import React from "react";
function Result(){
    return(
         <section className=" py-3 px-2 bg-blue-500 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center mt-18 mb-18">

        <div>
          <h2 className="text-4xl font-bold text-white">40%</h2>
          <p className="text-white font-semibold">Reduction in Risk</p>
          <p className="text-white text-sm">
            Enhanced algorithmic stability.</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white ">95%</h2>
          <p className="text-white font-semibold">Faster Reporting</p>
          <p className="text-white text-sm">
            From days to minutes.</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">$2.5M+</h2>
          <p className="text-white font-semibold">Annual Savings</p>
          <p className="text-white text-sm">Operational efficiency gains.</p>
        </div>

      </div>
      </section>
    )
}
export default Result;

import React from "react";
function Studycard(){
 const cards=[
    {
    icons:"",
    title:"Predictive Modeling",
    desc:"Automated risk assessment usingproprietary deep learningarchitectures that detect anomalies before they impact the bottom line."
 },
  {
    icons:"",
    title:"Real-time Dashboards",
    desc:"Instant visualization of global market trends with sub-second latency, providing FinFlow traders with an unfair informational advantage."
 },
  {
    icons:"",
    title:"Natural Language Reports",
    desc:"AI-generated executive summaries that translate complex financial telemetry into plain English for stakeholder decision-making."
 }
]
    return(
         <section className="text-white py-8 px-4 bg-gray-100">
      <div className='grid gap-10 items-center'>
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">The Codeofy Solution </h1>
          <p className="mt-3  text-gray-500 ">
          We implemented a bespoke AI orchestration layer that integrated directly with FinFlow's data lake.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-13 ">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-2xl p-10 text-center hover:scale-105 transition duration-300"
              >
                <div className="flex justify-left text-black mb-4">
                  {item.icons}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-left  text-black ">
                  {item.title}
                </h3>
                <p className="text-black text-sm text-left ">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

    )
    
}
export default Studycard;
import React from "react";
import { FileText } from "lucide-react";

function Overview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
       
        <div>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Overview & Client Context
          </h2>

          <div className="w-12 h-1 bg-blue-500 mb-6 md:mx-0 mx-auto "></div>

          <p className="text-gray-600 leading-relaxed mb-6">
            FinFlow Inc. is a leading fintech provider managing billions in
            assets. They struggled with manual data entry and slow,
            error-prone forecasting models that couldn't keep pace with the
            volatile global markets.
          </p>

          <div className="flex items-start gap-3 bg-gray-200 p-5 rounded-2xl">
            <FileText className="text-blue-600 mt-1" size={22} />

            <div>
              <h3 className="font-bold text-lg">Client Profile</h3>

              <p className="text-gray-600 text-sm">
                Tier-1 Financial Services Institution specializing in asset
                management and risk mitigation.
              </p>
            </div>
          </div>
        </div>

       
        <div>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            The Challenge
          </h2>

          <div className="w-12 h-1 bg-blue-500 mb-6 md:mx-0 mx-auto"></div>

          <p className="text-gray-600 leading-relaxed mb-6 ">
            The primary challenge was processing vast amounts of unstructured
            financial data in real-time. Legacy systems failed to provide
            accurate, actionable insights for their clients, leading to missed
            opportunities and increased exposure.
          </p>

          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://infraon.io/blog/wp-content/uploads/2023/06/futuristic-smart-city-with-5g-global-network-technology-min.jpg"
              alt="challenge"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Overview;
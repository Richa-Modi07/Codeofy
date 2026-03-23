import React from "react";
 function Featurecard(){
    return(
 <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center mt-20 bg-white">

        <div>
          <h2 className="text-4xl font-bold text-gray-900">99.9%</h2>
          <p className="text-blue-600 font-semibold">System Uptime</p>
          <p className="text-gray-500 text-sm">
            Rock-solid stability for mission-critical enterprise applications.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900">40%</h2>
          <p className="text-blue-600 font-semibold">Faster Loads</p>
          <p className="text-gray-500 text-sm">
            Optimization that significantly improves user retention and SEO.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900">2M+</h2>
          <p className="text-blue-600 font-semibold">Users Supported</p>
          <p className="text-gray-500 text-sm">
            Platforms scale effortlessly to handle massive global audiences.
          </p>
        </div>

      </div>

    
    )
 }
 export default Featurecard;
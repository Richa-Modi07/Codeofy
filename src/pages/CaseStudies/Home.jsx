import React from "react";
function Home() {
  return (
    <section className="text-white  bg-gradient-to-br from-white to-blue-300 ">
      <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-8 px-6" >

        <div className=" max-w-3xl mb-15 text-center md:text-left ">

          <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full ">FINTECH SUCCESS STORY </span>



          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-9 text-black text-center md:text-left">
            Financial <br /> Analytics <br /> Revolution
          </h1>

          <p className="text-gray-600 mb-8">
            How <span className="font-semibold">FinFlow Inc.</span> leveraged
            Codeofy’s AI to automate complex financial forecasting and
            reduce risk by 40%.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 border-none">
            Download Case Study PDF
          </button>

        </div>


        <div className="flex gap-6 mb-6 ">
          <img
            src="https://t3.ftcdn.net/jpg/01/90/90/44/360_F_190904438_oYHiq39wdWbUKmpxTC5FRxGCBFIFAwrp.jpg"
            alt="logistics"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>

  )
}
export default Home;
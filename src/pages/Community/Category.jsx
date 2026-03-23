import React from "react";
import{Rocket ,MessagesSquare ,GraduationCap,MessageSquareWarning }from"lucide-react"
function Category(){
    const features = [
    {
      icons: <MessagesSquare />,
      title: "General Discussion ",
      desc: " Everything related to AI development and industry news..",
      desc2:"2.2k topics",
      sym:"⭢"
    },

    {
      icons: <GraduationCap />,
      title: "AI Tutorials",
      desc: "Step-by-step guides for building and scaling AI apps.",
      desc2:"1.2k topics",
      sym:"⭢"
    },

    {
      icons: <MessageSquareWarning />,
      title: "Product Feedback",
      desc: "Share your ideas and help us improve the platform",
      desc2:"850 topics",
      sym:"⭢"
    },
    {
      icons: <Rocket />,
      title: "Showcase Your Work",
      desc: "Share your projects and get feedback from the community.",
      desc2:"750 topics",
      sym:"⭢"
    },
]
    return(
<div className="bg-gray-100  p-6">

              <h2 className="text-3xl font-bold text-black text-left ">
          Discussion Categories
        </h2>
        
        <div className="flex justify-between items-center ">
            
          <h2 className="text-sm font-medium text-black md:text-sm ">
           Find the right space to share your thoughts and ask questions.
          </h2>
            
             <button className="text-sm font-bold text-blue-700 md:text-sm px-5 py-2  hover:underline ">
            View all categories
          </button>
          </div>
           
           
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-13  ">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-2xl p-14 text-center hover:scale-105 transition duration-300"
              >
                <div className="flex justify-left text-black mb-4">
                  {item.icons}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-left  text-black ">
                  {item.title}
                </h3>
                <p className="text-black text-sm text-left ">{item.desc}</p>
                   <div className="flex justify-between items-center">

                     <h3 className="text-sm font-semibold mt-3 text-black ">
                  {item.desc2 }
                </h3>

                  <h3 className="text-lg font-semibold mt-3 text-black ">
                  {item.sym}
                </h3>

                </div>
              </div>
              
            ))}
          </div>

          </div>
    )
}
export default Category;
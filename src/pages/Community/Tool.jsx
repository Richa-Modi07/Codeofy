import React from "react";
function Tool(){
    const tools=[
     {
     title:" 📘Documentation",
     icon:"Start Reading ⭢",
     desc:"Deep dive into our comprehensive APIs, SDKs, and platform guides."

    },
     {
     title:"✘ GitHub Repos",
     icon:"Explore Code ⭢",
     desc:"Access open-source examples, boilerplates, and official libraries."

    },
     {
     title:"🛜 Codeofy Blog",
     icon:"Read Articles ⭢",
     desc:"Read about the latest AI breakthroughs and platform updates."
    },
];
    return(
        
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  bg-gray-100 p ">
            {tools.map((item, index) => (
              <div
                key={index}
                className=" p-14 text-center "
              >
                <h3 className="text-lg font-semibold mb-3 text-left  text-black ">
                  {item.title}
                </h3>
                <p className="text-black text-sm text-left ">{item.desc}</p>

                    <h3 className="text-sm font-semibold mt-3 text-left text-blue-700">
                  {item.icon }
                </h3>
              </div>
            ))}
          </div>
          
    )
}
export default Tool;
import React from "react";
function Bodycard(){
    const card = [
  {
    id: 1,
    category: "AI SOLUTION",
    rating: "SaaS",
    title: "EcoTrack AI",
    desc:
      "AI-driven sustainability tracking platform for modern manufacturing facilities to reduce carbon footprint.",
    tech: "React • Python • TensorFlow",
    link: "View Case Study",
    image: "/ai-dashboard.png"
  },
   {
    id: 1,
    category: "AI SOLUTION",
    rating: "SaaS",
    title: "EcoTrack AI",
    desc:
      "AI-driven sustainability tracking platform for modern manufacturing facilities to reduce carbon footprint.",
    tech: "React • Python • TensorFlow",
    link: "View Case Study",
    image: "/ai-dashboard.png"
  },
   {
    id: 1,
    category: "AI SOLUTION",
    rating: "SaaS",
    title: "EcoTrack AI",
    desc:
      "AI-driven sustainability tracking platform for modern manufacturing facilities to reduce carbon footprint.",
    tech: "React • Python • TensorFlow",
    link: "View Case Study",
    image: "/ai-dashboard.png"
  }
];

    return(
   <div className="flex flex-wrap justify-center gap-18 p-6 bg-gray-50">
      {card.map((item) => (
        <div
          key={item.id}
          className="w-full sm:w-80 bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <div className="flex gap-3 text-xs mb-2">
              <button className="bg-green-100 text-green-600 px-2 py-1 rounded">
                {item.category}
              </button>
              <button className="text-gray-500">{item.rating}</button>
            </div>

            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

            <p className="text-gray-600 text-sm mb-3">
              {item.desc}
            </p>

            <p className="text-gray-500 text-sm mb-3">
              {item.tech}
            </p>

            <button className="text-blue-600 font-medium hover:underline">
              {item.link} →
            </button>
          </div>
        </div>
      ))}
    </div>
    )
}
export default Bodycard
import React from "react";
import { Star } from "lucide-react";
function Spotlight() {
    const members = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "TOP CONTRIBUTOR",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "border-blue-500",
  },
  {
    id: 2,
    name: "David Miller",
    role: "AI EXPERT",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "border-green-500",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "INNOVATION LEAD",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    color: "border-purple-500",
  },
  {
    id: 4,
    name: "Marcus Thorne",
    role: "AMBASSADOR",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    color: "border-blue-400",
  },
];

    return (
        <section className="bg-gray-100 py-15 ">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold text-black">
                    Community Spotlights
                </h2>
                <p className="text-gray-500 mt-2">
                    Recognizing the amazing contributions of our community members.
                </p>
                
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-5xl mx-auto">
        
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">

            {/* Image */}
            <div className={`w-24 h-24 rounded-full border-4 ${member.color} p-1 relative`}>
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
              />

              {/* Small Icon */}
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                <Star size={16} className="text-yellow-500" />
              </div>
            </div>

            {/* Name */}
            <h3 className="mt-4 font-semibold">{member.name}</h3>

            {/* Role */}
            <p className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-1.5">{member.role}</p>

          </div>
        ))}

      </div>
        </section>
    )
}
export default Spotlight;
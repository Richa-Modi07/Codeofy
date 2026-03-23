import React from "react";
import { Calendar, MapPin, Video } from "lucide-react";
function Event() {

  const events = [
    {
      id: 1,
      date: "MAY 15, 2024 • 10:00 AM PST",
      title: "AI Innovation Summit 2024",
      location: "Virtual Event",
      people: "+250",
      icon: <Calendar size={40} />
    },
    {
      id: 2,
      date: "JUNE 10, 2024 • 09:00 AM PST",
      title: "Future Tech Conference",
      location: "Online Event",
      people: "+180",
      icon: <Video size={40} />
    },
  ];
  return (
    <section className="bg-gray-100  py-2 px-1 ">
 
      <div className=" mb-9 py-2 px-5 lg:text-left text-center ">
        <h2 className="text-3xl font-bold text-black">
          Upcoming Events
        </h2>
        <p className="text-black font-medium mt-2 ">
          Join our upcoming sessions to learn directly from experts.
        </p>
      </div>

      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6">

        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between bg-white shadow-md rounded-xl p-6"
          >


            <div className="text-blue-600">
              {event.icon}
            </div>

            <div className="flex-1 ml-4">
              <p className="text-sm text-gray-500">{event.date}</p>
              <h2 className="text-lg font-semibold">{event.title}</h2>

              <div className="flex items-center text-gray-500 text-sm gap-1">
                <MapPin size={16} />
                {event.location}
              </div>

              <div className="flex justify-between">
                <div className="flex -space-x-2 ">
                  <div className="w-8 h-8 bg-orange-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-orange-300 rounded-full"></div>

                  <span className="ml-2 text-sm text-gray-600 mt-2">
                    {event.people}
                  </span>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg ">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
export default Event;
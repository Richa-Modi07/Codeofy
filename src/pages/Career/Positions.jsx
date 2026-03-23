import React from "react";

const jobs = [
  {
    title: "Frontend Developer",
    dept: "Remote / Full-time",
    desc: "Build beautiful, performant user interfaces that people love."
  },
  {
    title: "AI Engineer",
    dept: "Remote / Full-time",
    desc: "Develop ML/AI solutions, train models and manage data pipelines."
  },
  {
    title: "Product Designer",
    dept: "Remote / Full-time",
    desc: "Design the next generation user experience for our platform."
  },
  {
    title: "DevOps Engineer",
    dept: "Remote / Full-time",
    desc: "Scale our cloud infrastructure and deployment systems."
  }
];

function Positions() {
  return (
    <section className="bg-gradient-to-br from-blue-80 to-blue-100  py-2 px-1 ">
      {/* <div className="bg-gradient-to-br from-blue-90 to-blue-100  py-2 px-1"> */}

      <div className=" mb-9 py-2 px-5 text-center ">
        <h2 className="text-3xl font-bold text-black md:text-left ">
          Open Positions
        </h2>
        <div className="flex justify-between items-center ">
          <p className="text-gray-500 mt-2 text-left  ">
            Join our engineering, design and product teams.
          </p>


          <button className="text-sm font-bold text-blue-700 md:text-sm px-5 py-2  hover:underline ">
            View 
          </button>

        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-5 mb-14 ">

        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-blue-100 p-6 rounded-xl shadow-sm border-none"
          >
            <span className="px-4 py-1 text-sm bg-blue-300 text-blue-600 rounded-full">{job.dept}</span>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {job.title}
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              {job.desc}
            </p>

            <button className="text-blue-600 font-medium hover:underline text-center">
              Apply Now
            </button>
          </div>
        ))}

      </div>
      {/* </div> */}
    </section>
  );
}

export default Positions;
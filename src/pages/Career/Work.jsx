import React from "react";
import{BrainCircuit, Earth,Presentation,CodeXml  }from"lucide-react"
import Workcard from "./Workcard";
function Work() {

  const features = [
    {
      icons: <Earth/>,
      title: "Remote Friendly ",
      desc: "work from anywhere, anytime. We embrace flexibility and empower our team to thrive in a remote work environment."
    },

    {
      icons: <BrainCircuit />,
      title: "AI innovation",
      desc: " shaping the future of work with cutting-edge AI solutions. We harness the power of artificial intelligence to drive innovation."
    },

    {
      icons: <CodeXml />,
      title: "Learning & Growth",
      desc: "Arrol is committed to fostering a culture of continuous learning and growth. We provide our employees with opportunities for professional development."
    },
    {
      icons: <Presentation />,
      title: "Top Benefi",
      desc: "We offer a comprehensive benefits package that prioritizes the well-being and satisfaction of our employees."
    },


  ]
  return (
    <section className="text-white py-12 px-4 bg-gradient-to-br from-blue-90 to-blue-100 ">
      <div className='grid gap-10 items-center'>
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Why Work With Us </h1>
          <p className="mt-3  text-gray-500 ">
            Join us to be part of a forward-thinking company that values innovation and empowers its employees to thrive.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-13  ">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-blue-100  rounded-2xl p-14 text-center hover:scale-105 transition duration-300"
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
      <Workcard/>
    </section>

  )
}
export default Work;
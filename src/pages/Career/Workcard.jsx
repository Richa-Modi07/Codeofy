import React from "react";
import { CheckCircle } from "lucide-react";
function Workcard() {
  return (

    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="team meeting"
            className="rounded-xl shadow-lg w-full hover:shadow-blue-400"
          />
        </div>


        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Driven by Curiosity, Built on Trust.
          </h2>

          <p className="text-gray-600 mb-6">
            At Codexify, we believe that the best products are built by teams
            that have the freedom to experiment. We are a collective of curious
            builders and thinkers who are obsessed with solving the hardest
            developer issues.
          </p>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={20} />
              <p className="text-gray-700">
                Deep Work First – We minimize meetings to focus on building.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={20} />
              <p className="text-gray-700">
                Radical Transparency – Open boards and strategy for all.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={20} />
              <p className="text-gray-700">
                Inclusive by Design – Diverse perspectives fuel our AI.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
export default Workcard;
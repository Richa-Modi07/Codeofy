import React from "react";
import { MapPin, Mail } from "lucide-react";
import Rightcard from "./Rightcard";

function Leftcard() {
  return (

    <div>

      <div className="w-full bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="  bg-white rounded-3xl shadow-lg p-6 -mt-7 ">

            <h2 className="text-2xl font-semibold mb-6">
              Send us a message
            </h2>

            <form className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full mt-1 border rounded-lg p-3"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full mt-1 border rounded-lg p-3"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">Work Email</label>
                <input
                  type="email"
                  className="w-full mt-1 border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Subject</label>
                <select className="w-full mt-1 border rounded-lg p-3">
                  <option>General Inquiry</option>
                </select>
              </div>

              <textarea
                rows="4"
                className="w-full border rounded-lg p-3"
              ></textarea>

              <button className="w-full bg-blue-600 text-white py-3 rounded-full">
                Send Message →
              </button>

            </form>
          </div>
          <div className=" rounded-3xl shadow-lg p-9 -mt-9">
            <Rightcard />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Leftcard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";

function Status({ toggle }) {
  const [Data, setData] = useState([]);

  //get data from server
  useEffect(() => {
    //Animation Of AOS
    AOS.init();
    // axios api
    axios("http://localhost:5050/Task")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log("Invalid Process Check It Out!"));
  }, []);

  return (
    <>
      <section
        className={`${toggle === 2 ? "visible" : "hidden"} p-2 flex space-x-3`}
      >
        {Data.map((task, index) => {
          return (
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-1/2 mt-3 h-[470px] overflow-hidden">
              <form
                action="#"
                method="POST"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Project :
                  </label>
                  <p>{task.title}</p>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Date :
                  </label>
                  <p>{task.date}</p>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Description :
                  </label>
                  <p className="text-justify">{task.description}</p>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    SKills :
                  </label>
                  <p className="text-justify">{task.skills}</p>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Status Of The project :
                  </label>
                  <p className="text-justify">In Progress</p>
                </div>
              </form>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Status;

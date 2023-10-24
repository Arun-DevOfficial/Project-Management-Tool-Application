import React, { useState } from "react";
import Profile from "../assets/4905798.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TaskAssign = () => {
  //initial value of formData
  const [formData, setformData] = useState({
    title: "",
    date: "",
    description: "",
    skills: "",
  });

  // initalize Navigate
  const navigate = useNavigate();

  //fetch the data from user
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //post the form Data using axios
    axios
      .post("http://localhost:5050/Task",formData)
      .then(() => {
        console.log("Task Successfully Assigned");
        navigate("/");
      })
      .catch(() => {
        console.log("Invalid Process check it out again!");
      });

    // setTimeout(() => {
    // }, 3000);
  };

  return (
    <>
      <section
        className="min-h-screen lg:pt-22 md:pt-24  p-12"
        style={{ backgroundImage: "linear-gradient(115deg,#9F7AEA,#FEE2EF)" }}
      >
        <div className="container mx-auto">
          <div className="w-9/12 bg-white rounded-xl mx-auto overflow-hidden flex shadow-xl">
            <div className="w-1/2">
              <img src={Profile} alt="profile" className="h-full" />
            </div>
            <div className="w-1/2 px-12 py-12">
              <h1 className="text-2xl font-medium py-2">
                Task <span className="text-[#FF735C]">Assign</span>
              </h1>
              <p className="font-light text-md ">
                Here project details are register & assigned to specific people.
              </p>
              <form action="#" className="mt-3" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3 my-4">
                  <label htmlFor="title">Project</label>
                  <input
                    type="text"
                    name="title"
                    className="border focus:outline-none focus:border focus:border-[#9F7AEA] px-4 py-3 rounded"
                    onChange={handleChange}
                    value={formData.title}
                  />
                </div>
                <div className="flex flex-col space-y-3 my-4">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="border uppercase focus:outline-none focus:border focus:border-[#9F7AEA] px-4 py-3 rounded"
                    onChange={handleChange}
                    value={formData.date}
                  />
                </div>
                <div className="flex flex-col space-y-3 my-4">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    cols="30"
                    rows="6"
                    className="border focus:outline-none focus:border focus:border-[#9F7AEA] px-4 py-3 rounded"
                    onChange={handleChange}
                    value={formData.description}
                  ></textarea>
                </div>
                <div className="flex flex-col space-y-3 mt-4 mb-12">
                  <label htmlFor="skills">Skills</label>
                  <input
                    type="text"
                    name="skills"
                    className="border focus:outline-none focus:border focus:border-[#9F7AEA] px-4 py-3 rounded"
                    onChange={handleChange}
                    value={formData.skills}
                  />
                </div>
                <div className="flex justify-around">
                  <button className="w-[200px] font-medium text-md bg-[#FF8977] text-white py-2 hover:shadow px-5 rounded-lg hover:bg-[#ff735d]">
                    Submit
                  </button>
                  <button className="w-[200px] font-medium text-md py-2 px-5 rounded-lg border hover:shadow">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*CHILD COMPONENT*/}
    </>
  );
};

export default TaskAssign;

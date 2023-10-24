import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Task from "../Pages/Task";
import Status from "../Pages/Status";
import { Link } from "react-router-dom";

const Content = () => {
  //Get Value from list
  const [toggle, setToggle] = useState();

  //Pagination
  const updateToggle = (id) => {
    setToggle(id);
    console.log("Toggle No:", id); //Whether checking toggle working or not
  };

  return (
    <>
      <section className="w-full bg-[#F1F6F5] p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Project <span className="text-indigo-500">Management Tool</span>
          </h1>
        </div>
        <div className="p-12">
          <div>
            <h1 className="font-semibold text-xl">Dashboard</h1>
            <p className="font-medium text-md capitalize">
              Shows progess of tasking on dashboard
            </p>
          </div>
          <div className="flex justify-between mt-5">
            <h1 className="font-semibold text-xl">Docs & Files</h1>
            <div className="flex space-x-5 items-center">
              <Link
                to="/taskassign"
                className=" text-white w-[100px] rounded-lg bg-indigo-800 text-md hover:bg-indigo-500 py-2 px-4 ease-in duration-300"
              >
                Add New
              </Link>
              <div className="bg-[#F1F6F5] flex space-x-3 items-center border px-3 py-2 rounded-xl">
                <FaMagnifyingGlass />
                <input
                  type="search"
                  placeholder="Search a task"
                  className="bg-[#F1F6F5] focus:outline-none"
                  name="search"
                />
              </div>
            </div>
          </div>
          {/*Page Nation*/}
          <div className="mt-14">
            <ul className="flex space-x-5 uppercase">
              <li
                className="font-medium text-md hover:text-indigo-500 cursor-pointer"
                onClick={() => updateToggle(1)}
              >
                Task
              </li>
              <li
                className="font-medium text-md hover:text-indigo-500 cursor-pointer"
                onClick={() => updateToggle(2)}
              >
                Status
              </li>
            </ul>
            <hr className="mt-2" />
            <Task toggle={toggle} />
            <Status toggle={toggle} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;

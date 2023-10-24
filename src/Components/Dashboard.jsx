import { useState } from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaUserGroup,
  FaBuffer,
  FaCalendarCheck,
  FaChartBar,
  FaDesktop,
} from "react-icons/fa6";
import admin from "../assets/coder.jpg";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className={`${
          !open ? "w-[19rem]" : "w-[5.5rem]"
        } bg-indigo-500 h-screen relative ease-in-out duration-500`}
      >
        <div
          onClick={() => setOpen(!open)}
          className="absolute -right-3 mt-12 bg-indigo-500 p-3 rounded-full cursor-pointer"
        >
          {!open ? (
            <FaAngleRight color="white" />
          ) : (
            <FaAngleLeft color="white" />
          )}
        </div>
        {/*Content*/}
        <div className="p-5">
          <div className={!open ? "visible" : "hidden"}>
            <h1 className="font-semibold text-2xl text-white">
              Work <span className="text-indigo-100">Space</span>
            </h1>
          </div>
          {/*Side Bar Content*/}
          <div className="mt-12 flex space-x-5 items-center">
            <div className="flex flex-col space-y-12 items-center">
              <FaBuffer size={26} color="white" />
              <FaUserGroup size={26} color="white" />
              <FaCalendarCheck size={26} color="white" />
              <FaChartBar size={26} color="white" />
              <FaDesktop size={26} color="white" />
            </div>
            <div
              className={
                !open
                  ? "flex flex-col space-y-12 justify-start transition-all duration-300"
                  : "hidden"
              }
            >
              <h1 className="text-xl font-medium text-indigo-200">Dashboard</h1>
              <h1 className="text-xl font-medium text-white">People</h1>
              <h1 className="text-xl font-medium text-white">Activity</h1>
              <h1 className="text-xl font-medium text-white">Analytics</h1>
              <h1 className="text-xl font-medium text-white">Task</h1>
            </div>
          </div>
          {/*Admin Profile*/}
          <div className="flex w-full max-w-[120px] absolute bottom-5 space-x-3">
            <img
              src={admin}
              alt="user profile"
              className="w-[3.5rem] h-[3.5rem] rounded-full border border-white opacity-80"
            />
            <div className={!open ? "" : "opacity-0 delay-200"}>
              <h1 className="text-indigo-200 text-xl font-semibold uppercase">
                Arun kumar
              </h1>
              <p className="font-semibold text-xs text-white">
                dev.arunengineer@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

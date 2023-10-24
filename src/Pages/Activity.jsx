// import React, { useEffect, useState } from "react";
// import axios from "axios";

const Activity = ({ toggle }) => {
  // const [Data, setData] = useState();

  const showToggle = () => {
    console.log(toggle);
    // console.log(Data);
  };

  // useEffect(() => {
  //   axios
  //     .get(" http://localhost:5050/Task")
  //     .then((response) => {
  //       setData(response.data);
  //       console.log("Successfully Data Fetched!");
  //     })
  //     .catch(() => {
  //       console.log("Invalid Process Check It Out!.");
  //     });
  // },[Data]);

  return (
    <>
      <section className={`${toggle === 2 ? "visible" : "hidden"} p-2`}>
        <h1>Status</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          nesciunt corrupti ratione, maiores natus, magni nulla nostrum odio
          asperiores soluta sint vero? Quisquam aliquid nesciunt repudiandae,
          nam mollitia non officia?
        </p>
        <button onClick={() => showToggle()}>click</button>
      </section>
    </>
  );
};

export default Activity;

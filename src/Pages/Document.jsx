import React from "react";

const Document = ({ toggle }) => {
  const showToggle = () => {
    console.log(toggle);
  };

  return (
    <>
      <section className={`${toggle === 3 ? "visible" : "hidden"} p-2`}>
        <h1>Document</h1>
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

export default Document;

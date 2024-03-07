import React from "react";
import Hero from "./Documents/roadmapback.png";
import Roadmapimg from "./Documents/roadmap.png";
// import link from "./Documents/Link.png";
// import link1 from "./Documents/Link (1).png";
// import link2 from "./Documents/Link (2).png";
// import link3 from "./Documents/Link (3).png";

const Roadmap = () => {
  return (
    <div>
      <div
        className=" relative bg-black text-white" // style={{ backgroundImage: `url(${background}})` }}
      >
        <img src={Hero} alt="Background" className="w-full h-auto" />

        <div className="absolute top-0">
          <img src={Roadmapimg} alt="Background" className="w-full h-auto" />
        </div>
        {/* <div className="absolute top-4 right-10 left-10 ">
          <h1 className="text-white text-4xl font-bold">Roadmap</h1>
        </div> */}
        {/* <div className="absolute top-11">
          <div className="flex justify-center gap-4">
            <img src={link} alt="Image 1" className="h-48 w-auto " />
            <img src={link1} alt="Image" className="h-24 w-24 object-cover" />
            <img src={link2} alt="Image 3" className="h-24 w-24 object-cover" />
            <img src={link3} alt="Image 4" className="h-24 w-24 object-cover" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Roadmap;

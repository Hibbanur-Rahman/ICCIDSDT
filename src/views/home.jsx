import React from "react";
import heroBgImg from "@/assets/images/hero-bg-img-1.jpg";
const Home = () => {
  return (
    <div className="m-0 p-0">
      {/**hero section */}
      <div
        className=" h-[100vh] w-full mx-auto px-4 py-8  mt-[-180px] bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        <div className=" w-8/12">
          <h1 className="text-white text-5xl text-center font-semibold">
            International Conference on Computational Intelligence, Data
            Science, and Digital Transformations (ICCIDSDT-2026)
          </h1>
        </div>

        <div className="absolute flex flex-col items-center justify-center left-[-20px] bottom-[100px] h-[250px] w-[250px] bg-white rounded-full  animate-moveUp">
          <p className="text-5xl font-semibold">28-29 </p>
          <p className="text-3xl">FEBRUARY</p>
          <div className="border  rounded-xl  bg-blue-800 py-2 px-6 mt-4">
            <p className="text-white">Hybrid Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

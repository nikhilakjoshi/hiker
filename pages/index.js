import React from "react";
import { User } from "react-feather";
import Level from "../components/Level";
import { levels } from "../data";
import SmartTitle from "./../components/SmartTitle";

const Home = () => {
  return (
    <div className="Root">
      <div className="navHero ">
        <nav className="flex px-16 py-12 text-gray-50 font-noto items-center bg-gradient-to-b from-[#77954c] to-trasparent">
          <h4 className="text-xl mr-auto font-bold">MNTN</h4>
          <div className="flex items-center text-lg font-mont tracking-wide gap-8 mx-auto">
            <a href="#" className="link">
              Equipment
            </a>
            <a href="#" className="link">
              About us
            </a>
            <a href="#" className="link">
              Blogs
            </a>
          </div>
          <div className="accnt flex items-center ml-auto font-mont gap-2">
            <User />
            <span className="tracking-wide text-lg">Nikhil</span>
          </div>
        </nav>
        {/* <div className="bg-gradient-to-b from-gray-100 via-gray-50 bg-opacity-50"> */}
        <div className="grid place-items-center max-w-screen-md mx-auto py-24">
          <div className="font-noto">
            <SmartTitle title="A hiking guide" />
            <span className="text-gray-50 text-6xl font-bold relative z-0">
              <div className="wordIllus w-96 h-48 absolute -z-10 left-16 top-6 opacity-80" />
              Be prepared For The Mountains And Beyond!
            </span>
          </div>
        </div>
        {/* </div> */}
        <div className="py-36 mt-[32rem] from-transparent bg-gradient-to-b to-[#77954c] h-2"></div>
        {/* <div className="bg-stone-600 h-48"></div> */}
      </div>
      <div className="bg-[#77954c] py-12">
        <div className="container max-w-screen-xl mx-auto">
          {levels.map((level, index) => (
            <div
              className="grid grid-cols-12 grid-rows-1 gap-6 my-24"
              key={`lvl-${index}`}
            >
              <div
                className={`col-start-${index % 2 == 0 ? "1" : "7"} col-end-${
                  index % 2 == 0 ? "7" : "[-1]"
                } flex justify-center items-center`}
              >
                <Level {...level} />
              </div>
              <div
                className={`col-start-${
                  index % 2 == 0 ? "7" : "1"
                } flex items-center col-end-${
                  index % 2 == 0 ? "[-1]" : "7"
                } row-start-1 row-end-1 ${
                  index % 2 == 0 ? "ml-auto" : "mr-auto"
                }
                relative z-0 after:-z-10 after:rounded after:absolute after:w-full after:h-full after:-right-5 after:-bottom-5 after:bg-[#002916]
                `}
              >
                <img
                  src={level.imageLink}
                  className="w-96 rounded"
                  alt="image1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

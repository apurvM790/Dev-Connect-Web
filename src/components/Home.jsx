import connection from "../images/connection.jpg";
import RotatingText from "../animation/RotatingText";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { DiCode } from "react-icons/di";
import { HiOutlineUsers } from "react-icons/hi";
import TiltedCard from "../animation/TiltedCard";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate=useNavigate();

  const handleClick = ()=>{
    return navigate("/login");
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#eef2f3] via-[#d8eafd] to-[#f0f4ff]">
      
      <div className="flex flex-col-reverse md:flex-row pt-20 justify-between px-6 md:px-16 text-slate-800 gap-12">
        <div className="md:w-3/5 md:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Techmate – Where Developers&nbsp;
            <span className="inline-block align-middle">
              <RotatingText
                texts={["Meet", "Collaborate", "Grow"]}
                mainClassName="px-3 py-1 bg-purple-600 text-white font-bold rounded-md shadow-md"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </p>

          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight mt-6 mb-4 bg-gradient-to-r from-slate-800 via-indigo-700 to-indigo-400 bg-clip-text text-transparent">
            Meet Developers Who Match Your Mindset.
          </h1>

          <h1 className="text-base sm:text-lg md:text-xl italic font-medium leading-tight mb-4 text-slate-700">
            Tech isn’t solo anymore — meet your match
          </h1>
          <div className="flex gap-4">
            <button onClick={handleClick} className="flex text-xl p-2 px-3 mt-2 sm:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-300">
                Get Started <HiOutlineArrowSmRight className=" text-3xl mx-1 font-bold"/></button>
            
            <button className="flex border-dashed border border-black text-xl p-2 px-3 mt-2 sm:mt-0 bg-gray-100 hover:bg-gray-300 text-gray-800 rounded-lg shadow-lg transition duration-300">
                Learn More</button>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center items-center mb-8 md:mb-0">
          <TiltedCard
            imageSrc={connection}
            altText="Tech Connection"
            captionText=""
            containerHeight={window.innerWidth < 768 ? "240px" : "300px"}
            containerWidth={window.innerWidth < 768 ? "240px" : "300px"}
            imageHeight={window.innerWidth < 768 ? "240px" : "300px"}
            imageWidth={window.innerWidth < 768 ? "240px" : "300px"}
            rotateAmplitude={18}
            scaleOnHover={window.innerWidth < 768 ? 1.05 : 1.25}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
        </div>
      </div>

      <div className="flex flex-col mt-20 justify-center items-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl my-2 italic font-bold text-indigo-700">Why TechMate?</h1>
        <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-600 max-w-3xl">
          Find your perfect match in the tech world. Whether you're looking for a coding partner, mentor, or just expanding your network.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-20 px-4 gap-8 pb-16">
        <div className="w-full md:w-72 h-auto py-6 px-4 bg-gradient-to-br from-sky-100 via-teal-100 to-blue-100 rounded-xl shadow-xl border border-purple-300 hover:scale-105 hover:shadow-2xl transition">
          <div className="flex justify-center my-4">
            <DiCode className="text-5xl sm:text-6xl p-3 text-white rounded-full bg-blue-500 border shadow-lg" />
          </div>
          <h1 className="text-xl sm:text-2xl text-gray-600 font-semibold m-2 text-center">Skill-Based Matching</h1>
          <p className="text-base sm:text-lg text-gray-500 text-center">Find developers with complementary skills. Perfect for collaborative projects.</p>
        </div>

        <div className="w-full md:w-72 h-auto py-6 px-4 bg-gradient-to-br from-sky-100 via-teal-100 to-blue-100 rounded-xl shadow-xl border border-purple-300 hover:scale-105 hover:shadow-2xl transition">
          <div className="flex justify-center my-4">
            <HiOutlineUsers className="text-5xl sm:text-6xl p-3 text-white rounded-full bg-blue-500 border shadow-lg" />
          </div>
          <h1 className="text-xl sm:text-2xl text-gray-600 font-semibold m-2 text-center">Professional Networking</h1>
          <p className="text-base sm:text-lg text-gray-500 text-center">Expand your circle with like-minded developers in your area of interest.</p>
        </div>

        <div className="w-full md:w-72 h-auto py-6 px-4 bg-gradient-to-br from-sky-100 via-teal-100 to-blue-100 rounded-xl shadow-xl border border-purple-300 hover:scale-105 hover:shadow-2xl transition">
          <div className="flex justify-center my-4">
            <AiOutlineThunderbolt className="text-5xl sm:text-6xl p-3 text-white rounded-full bg-blue-500 border shadow-lg" />
          </div>
          <h1 className="text-xl sm:text-2xl text-gray-600 font-semibold m-2 text-center">Quick Connections</h1>
          <p className="text-base sm:text-lg text-gray-500 text-center">Swipe and match instantly with developers ready to collaborate.</p>
        </div>
      </div>

      <div className="h-20 w-full flex justify-center items-center bg-gradient-to-br from-[#eef2f3] via-[#d8eafd] to-[#f0f4ff]">
        <h1 className="text-sm sm:text-base font-semibold text-gray-700">
          © 2025 – All rights reserved by Apurv Mishra
        </h1>
      </div>
    </div>
  );
}

export default Home;

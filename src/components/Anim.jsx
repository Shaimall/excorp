import React from "react";
import Image from "next/image";
import cone from "../img/cone.png";
import poly from "../img/poly.png";
import ring from "../img/ring.png";
import cube from "../img/cube.png";
import arc from "../img/arc.png";
import spring from "../img/spring.png";
const Anim = () => {
  return (
    <div className="grid grid-cols-6 gap-4 mt-7 ">
      <div className="text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer">
        <div className="transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6">
          <p className="text-black font-mono mb-1">08</p>
          <h4 className="text-black font-semibold text-xl">Digitalization</h4>
        </div>
        <div className="transition-all ease-in-out             duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0">
          <a
            href="!#"
            className="inline-block px-[10px] py-[7px]  bg-[#0B3AFF] text-xs text-white font-semibold rounded-md"
          >
            View Cases
          </a>
        </div>
        <Image
          src={cone}
          alt="conusImg"
          className="inline-block transition-all ease-in-out duration-300 group-hover:rotate-90"
        />
      </div>
      <div className="text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer">
        <div className="transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6">
          <p className="text-black font-mono mb-1">08</p>
          <h4 className="text-black font-semibold text-xl">Portals</h4>
        </div>
        <div className="transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0">
          <a
            href="!#"
            className="inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md"
          >
            View Cases
          </a>
        </div>
        <Image
          src={spring}
          alt="conusImg"
          className="inline-block transition-all ease-in-out duration-300 group-hover:rotate-90"
        />
      </div>
      <div className="text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer">
        <div className="transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6">
          <p className="text-black font-mono mb-1">08</p>
          <h4 className="text-black font-semibold text-xl">Digitalization</h4>
        </div>
        <div className="transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0">
          <a
            href="!#"
            className="inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md"
          >
            View Cases
          </a>
        </div>
        <Image
          src={ring}
          alt="conusImg"
          className="inline-block transition-all ease-in-out duration-300 group-hover:rotate-90"
        />
      </div>
      <div className="text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer">
        <div className="transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6">
          <p className="text-black font-mono mb-1">08</p>
          <h4 className="text-black font-semibold text-xl">Digitalization</h4>
        </div>
        <div className="transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0">
          <a
            href="!#"
            className="inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md"
          >
            View Cases
          </a>
        </div>
        <Image
          src={arc}
          alt="conusImg"
          className="inline-block transition-all ease-in-out duration-300 group-hover:rotate-90"
        />
      </div>
      <div className="text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer">
        <div className="transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6">
          <p className="text-black font-mono mb-1">08</p>
          <h4 className="text-black font-semibold text-xl">Digitalization</h4>
        </div>
        <div className="transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0">
          <a
            href="!#"
            className="inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md"
          >
            View Cases
          </a>
        </div>
        <Image
          src={cube}
          alt="conusImg"
          className="inline-block transition-all ease-in-out duration-300 group-hover:rotate-90"
        />
      </div>
      <div className="text-center border hover:border-transparent border-[#EDEDED] px-6 py-8 group rounded-xl h-[230px] cursor-pointer">
        <div className="transition-all ease-in-out duration-500 group-hover:-mt-6 group-hover:mb-6">
          <p className="text-black font-mono mb-1">08</p>
          <h4 className="text-black font-semibold text-xl">Digitalization</h4>
        </div>
        <div className="transition-all ease-in-out duration-500 opacity-0 overflow-hidden group-hover:opacity-100 -mt-7 group-hover:mt-0">
          <a
            href="!#"
            className="inline-block px-[10px] py-[7px] bg-[#0B3AFF] text-xs text-white font-semibold rounded-md"
          >
            View Cases
          </a>
        </div>
        <Image
          src={poly}
          alt="conusImg"
          className="inline-block transition-all ease-in-out duration-300 group-hover:rotate-90"
        />
      </div>
    </div>
  );
};

export default Anim;

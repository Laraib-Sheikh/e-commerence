import React from "react";
import { fb, twitter, insta, yt } from "../assets/icons";

const Footer = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-4 px-10 py-14 lg:px-20 lg:py-24">
      <div className="flex flex-col justify-center items-center gap-2 w-full lg:w-[40%]">
        <h1 className="text-green-600 font-semibold text-4xl">DEBUG ENTITY</h1>
        <p className="text-lg tet-slate-300">
          Lorem is the bext and only person in the earth
        </p>
        <div className="flex justify-center items-center gap-4 mt-7" id="logos">
          <span className="bg-white p-4 rounded-full cursor-pointer hover:bg-green-600">
            <img src={fb} alt="facebook image" width={20} height={20} />
          </span>
          <span className="bg-white p-4 rounded-full cursor-pointer hover:bg-green-600">
            <img src={yt} alt="facebook image" width={20} height={20} />
          </span>
          <span className="bg-white p-4 rounded-full cursor-pointer hover:bg-green-600">
            <img src={insta} alt="facebook image" width={20} height={20} />
          </span>
          <span className="bg-white p-4 rounded-full cursor-pointer hover:bg-green-600">
            <img src={twitter} alt="facebook image" width={20} height={20} />
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[40%]">
        <ul className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-xl font-semibold">PAGES</h1>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            HOME
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Services
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Testimonials
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Pricing
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;

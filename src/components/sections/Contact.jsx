import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {AiFillGithub, AiFillLinkedin , AiFillInstagram} from 'react-icons/ai';

export const Contact = () => {
  
  return (
   <section className="py-8" id="contact">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex items-center justify-between flex-col md:flex-row ">
        <div>
        <h2 className="md:text-6xl text-2xl font-bold mb-10 text-white/50">
        Get in <span className="text-gray-400">Touch</span>
        </h2>
        <a 
        className="md:text-5xl text-2xl font-semibold text-white underline decoration-gray-400 decoration-2 
        underline-offset-4 hover:decoration-gray-200 transition duration-300"
         href="mailto:vikash.malviya@2495gmail.com" >
          vikash.malviya@gmail.com
        </a>
        </div>

        <div className="text-white/50 mt-12">
        <div className="mb-8">
          <p className="text-lg mb-1 ">Phone</p>
          <a href="+919929691872" 
          className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300"
          >
            +91 9929691872
          </a>
        </div>
        <div className="text-lg mb-8">
          <p className="font-bold">Home</p>
          <p>Hadiya Chowk</p>
          <p>Sojat City (306104)</p>
          <p>Rajasthan</p>
        </div>

        </div>

      </div>
      

      <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200 caption text-n-4 lg:block">
         © 2025. All right reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          <a href="https://github.com/"
          aria-label="GitHub"
          className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full" 
          >
            <AiFillGithub size={30}/>
          </a>

          <a href="https://www.linkedin.com/in/vikash-030337307/"
          aria-label="Linkedin"
          className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full" 
          >
            <AiFillLinkedin size={30}/>
          </a>

          <a href="https://www.instagram.com/_vikash__malviya___/?hl=en"
          aria-label="Instagram"
          className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full" 
          >
            <AiFillInstagram size={30}/>
          </a>
        </ul>
      </div>

    </div>

   </section>
  );
};

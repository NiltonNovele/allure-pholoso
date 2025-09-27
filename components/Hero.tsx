import * as React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="relative py-16 col-span-10 col-start-2 col-end-12 overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #fcd5ce 0%, #ffd6e0 100%)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-4 md:px-12">
        {/* Left Text Panel */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-light leading-snug text-gray-800">
              Welcome to Allure Hair & Beauty
            </h1>
            <h2 className="text-2xl md:text-3xl font-extralight text-gray-700">
              By Pholoso
            </h2>
            <p className="text-gray-600 max-w-md">
              Discover our wide range of high-quality wigs designed to make you feel beautiful, confident, and empowered. 
              Each piece is crafted with care to match your unique style.
            </p>
            <a
              href="#about"
              className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-400 text-white font-medium rounded-xl shadow-lg hover:from-indigo-700 hover:to-pink-500 transition-all duration-300"
            >
              Explore Now
            </a>
          </div>
       

        {/* Right Image Panel */}
          <div className="relative grid place-items-center">
            <Image
              src="/logo.jpg"
              alt="Hero Wig Image"
              objectFit="contain"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl"
            />
          </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};

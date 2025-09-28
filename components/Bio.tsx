import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const imageLoader = (props: any) => props.src.toString();

export const Bio = () => {
  return (
    <section className="py-16 col-span-10 col-start-2 col-end-12 space-y-16 text-gray-700 font-light">
      {/* Hero Bio Image */}
      <div className="text-center">
        {/* <Image
          loader={imageLoader}
          src="/wigs1.jpg"
          alt="Wig Shop Banner"
          width={1200}
          height={600}
          objectFit="cover"
          className="rounded-xl shadow-lg"
        /> */}
          <h1 className="text-4xl font-semibold my-6">Welcome to Allure Wigs</h1>
          <p className="text-lg max-w-3xl mx-auto">
            At Allure, we specialize in premium wigs that empower you to feel confident and stylish every day. 
            Each wig is carefully crafted with high-quality materials to ensure comfort, durability, and beauty.
          </p>
      </div>

      {/* About Us */}
        <div className="md:flex md:items-center md:gap-8">
          {/* <div className="md:w-1/2 mb-4 md:mb-0">
            <Image
              loader={imageLoader}
              src="/wigs.png"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div> */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">
              Allure Wigs was founded with a passion for helping people express their style effortlessly. 
              We curate a wide variety of wig styles and colors to suit every personality and occasion.
            </p>
          </div>
        </div>

      {/* Mission */}
        <div className="md:flex md:items-center md:gap-8 md:flex-row-reverse">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image
              src="/mission.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower individuals with high-quality, stylish wigs that enhance confidence and self-expression. 
              We aim to create an inclusive beauty experience for everyone.
            </p>
          </div>
        </div>

      {/* Vision */}
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image
              src="/vision.jpg"
              alt="Our Vision"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading wig brand known for quality, innovation, and empowering beauty enthusiasts worldwide.
              We envision a world where everyone can confidently express themselves through their style.
            </p>
          </div>
        </div>

      {/* Meet the Owner */}
        <div className="relative py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 transition-colors duration-500">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col md:flex-row md:gap-8">

      {/* Text Section */}
      <div className="flex-1 space-y-6">
        
        {/* Title Card */}
        <div className="bg-white dark:bg-pink-200  rounded-3xl shadow-xl p-6 sm:p-8 transition-transform duration-500 hover:shadow-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Meet the Owner
          </h2>
        </div>

        {/* Paragraph 1 */}
        <div className="bg-white dark:bg-pink-200  rounded-3xl shadow-xl p-6 sm:p-8 transition-transform duration-500 hover:shadow-2xl">
          <p className="text-gray-700 dark:text-black-300 leading-relaxed text-lg">
            Hello, I am Pholoso Rasetlola, founder of Allure Hair and Beauty By Pholoso.
            Our brand is dedicated to empowering women to express themselves confidently
            through their unique style. We believe every woman deserves to unlock her
            inner beauty and feel confident.
          </p>
        </div>

        {/* Paragraph 2 */}
        <div className="bg-white dark:bg-pink-200  rounded-3xl shadow-xl p-6 sm:p-8 transition-transform duration-500 hover:shadow-2xl">
          <p className="text-gray-700 dark:text-black-300 leading-relaxed text-lg">
            To achieve this, we offer a range of products, including our
            budget-friendly Synthetic Wig Range and our Premium Luxury Human Hair
            range, ensuring every woman can shine regardless of her budget.
          </p>
        </div>

        {/* Paragraph 3 */}
        <div className="bg-white dark:bg-pink-200  rounded-3xl shadow-xl p-6 sm:p-8 transition-transform duration-500 hover:shadow-2xl">
          <p className="text-gray-700 dark:text-black-300 leading-relaxed text-lg">
            At Allure Hair and Beauty, we are committed to building a brand founded
            on integrity, transparency, and precision. Every service is handled with
            meticulous attention to detail to ensure our customers receive nothing
            but the best.
          </p>
        </div>

        {/* Paragraph 4 */}
        <div className="bg-white dark:bg-pink-200  rounded-3xl shadow-xl p-6 sm:p-8 transition-transform duration-500 hover:shadow-2xl">
          <p className="text-gray-700 dark:text-black-300 leading-relaxed text-lg">
            Through Allure Hair and Beauty By Pholoso, I aim to continue inspiring,
            innovating, and providing women with the tools they need to look and
            feel their best, one wig at a time.
          </p>
        </div>

        {/* Button Card */}
        <div className="bg-white dark:bg-pink-200 rounded-3xl shadow-xl p-6 sm:p-8 flex justify-center md:justify-start">
          <Link href="/contact" passHref>
            <button className="mt-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Floating animation */}
  <style jsx>{`
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
</div>



    </section>
  );
};

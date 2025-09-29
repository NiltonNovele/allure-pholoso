import * as React from "react";
import { data } from "../mock/mock";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";

export const Contact = () => {
  return (
      <section
        className="py-16 col-span-10 col-start-2 col-end-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8"
        style={{ backgroundColor: "#fcd5ce" }}
      >
        {/* Left Info Panel */}
        <div className="flex flex-col justify-center text-center md:text-left px-4 md:px-8 space-y-6">
          <h1 className="text-5xl font-light text-gray-700 mb-4">Contact Us</h1>
          <p className="text-lg font-light text-gray-600">
            Have questions or want to get in touch? Reach out via email, phone, or visit us during our working hours.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaClock className="text-indigo-600" />
              <div>
                <h3 className="font-medium">Working Hours</h3>
                <p className="text-gray-600">Mon - Fri: 08:00 AM - 18:00 PM</p>
                <p className="text-gray-600">Sat: 09:00 AM - 17:00 PM</p>
                <p className="text-gray-600">Sun & Public Holidays: 09:00 AM - 15:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-indigo-600" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">0761557334</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <form
          className="grid gap-6 p-8 rounded-2xl shadow-xl"
          style={{ backgroundColor: "#fff1f0", border: "1px solid #fcd5ce" }}
          action="https://formsubmit.co/garimamalik28199@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="Someone wants to contact you from website"
          />
          <input type="hidden" name="_captcha" value="false" />

          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
              Name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="h-12 w-full px-3 border border-pink-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 bg-white"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className="h-12 w-full px-3 border border-pink-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 bg-white"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+123 456 7890"
              className="h-12 w-full px-3 border border-pink-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 bg-white"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
              Message*
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message..."
              rows={5}
              className="w-full px-3 py-2 border border-pink-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 resize-none bg-white"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="h-12 w-full bg-gradient-to-r from-indigo-600 to-pink-400 text-white font-medium rounded-xl shadow-lg hover:from-indigo-700 hover:to-pink-500 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </section>
  );
};

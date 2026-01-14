"use client";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "976833f0-4868-4f4b-937d-33d18f73a753");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="pb-24 bg-black relative overflow-hidden px-6">
      <div className="max-w-[1200px] mx-auto text-center mb-20 flex flex-col items-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 text-[13px] text-white mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green rounded-full animate-pulse"></span>
          Ready to start ?
        </div>

        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white text-center max-w-4xl mb-8 leading-[1.1]">
          Your next step begins
          <br />
          <span className="text-white/40">right here today</span>
        </h1>

        <p className="text-center text-gray-500 max-w-2xl mb-12 text-lg leading-relaxed">
          Whether it's a groundbreaking project, a journey into advanced courses, or a career-defining internship — let's make it happen.
        </p>
      </div>

      {/* --- FORM SECTION --- */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let's Build the <span className="text-white/40">Future Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
              Have questions about our Advanced Courses or Internship Program? Or perhaps you have a project that needs expert execution? Feel free to reach out
              anytime with us —we're here to help you scale.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-[#b5ff3d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    <rect width="20" height="16" x="2" y="5" rx="2" />
                  </svg>
                </div>
                <span>hello@aevonx.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-[#b5ff3d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-gray-900 p-8 rounded-2xl shadow-2xl">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase"> Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#b5ff3d] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#b5ff3d] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project, vision, or interest in our programs..."
                  className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#b5ff3d] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b5ff3d] text-black font-bold py-4 rounded-lg hover:bg-white transition-all duration-500 ease-in-out group cursor-pointer"
              >
                Send Message
              </button>
            </form>

            {/* Success/Error Message Display */}
            {result && <p className="mt-4 text-center text-[#b5ff3d] text-sm font-medium animate-pulse">{result}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

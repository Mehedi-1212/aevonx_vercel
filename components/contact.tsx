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
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="bg-black py-32 px-10">
      <div className="mx-auto max-w-[1200px] text-center">
        <h3 className="text-5xl md:text-8xl font-black text-white italic mb-16">SEND A MESSAGE</h3>

        <form onSubmit={onSubmit} className="max-w-3xl mx-auto grid grid-cols-1 gap-10">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="bg-transparent border-b-2 border-gray-900 py-4 text-white focus:outline-none focus:border-[#b5ff3d] italic text-xl"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="bg-transparent border-b-2 border-gray-900 py-4 text-white focus:outline-none focus:border-[#b5ff3d] italic text-xl"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={3}
            className="bg-transparent border-b-2 border-gray-900 py-4 text-white focus:outline-none focus:border-[#b5ff3d] italic text-xl resize-none"
          ></textarea>

          <button type="submit" className="px-12 py-6 bg-white text-black font-black uppercase italic hover:bg-[#b5ff3d] transition-all">
            Send Message →
          </button>
        </form>
        <p className="mt-4 text-[#b5ff3d] italic">{result}</p>
      </div>
    </section>
  );
};

export default Contact;

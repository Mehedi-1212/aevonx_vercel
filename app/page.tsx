"use client";
// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
// import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green selection:text-black overflow-x-hidden" suppressHydrationWarning={true}>
      {/* <Contact /> */}
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

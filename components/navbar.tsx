"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6">
        {/* লোগো সেকশন - তোর অরিজিনাল ডিজাইন */}
        <div className="flex cursor-pointer items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="absolute h-full w-full animate-pulse rotate-45 rounded-sm bg-[#b5ff3d] opacity-20"></div>
            <div className="h-5 w-5 rotate-45 rounded-sm bg-[#b5ff3d] shadow-[0_0_15px_#b5ff3d]"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">AevonX</span>
        </div>

        {/* ডেক্সটপ মেনু (বড় স্ক্রিনে দেখাবে) */}
        <div className="hidden items-center gap-8 text-base font-medium text-white md:flex">
          <a href="#" className="transition-colors hover:text-[#b5ff3d]">
            Home
          </a>
          <a href="#" className="transition-colors hover:text-[#b5ff3d]">
            About
          </a>
          <a href="#" className="transition-colors hover:text-[#b5ff3d]">
            Features
          </a>
          <a href="#" className="transition-colors hover:text-[#b5ff3d]">
            Pricing
          </a>
          <a href="#" className="transition-colors hover:text-[#b5ff3d]">
            Blog
          </a>
          <a href="#" className="transition-colors hover:text-[#b5ff3d]">
            Contact Us
          </a>
        </div>

        {/* মোবাইল হ্যামবার্গার বাটন */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer p-2 transition-transform active:scale-90">
            {isOpen ? <X size={28} className="text-[#b5ff3d] transition-all" /> : <Menu size={28} className="transition-all" />}
          </button>
        </div>
      </div>

      {/* মোবাইল মেনু ড্রপডাউন (Premium Slide + Fade + Scale Effect) */}
      <div
        className={`absolute left-0 w-full bg-black/98 backdrop-blur-2xl border-b border-gray-800 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden 
        ${isOpen ? "top-full opacity-100 visible -translate-y-4 scale-100" : "top-full opacity-0 invisible -translate-y-6 scale-95"}`}
      >
        <div className="flex flex-col items-center gap-8 py-16 text-xl font-medium text-white">
          <a href="#" onClick={() => setIsOpen(false)} className="group relative transition-colors hover:text-[#b5ff3d]">
            Home
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#b5ff3d] transition-all group-hover:w-full"></span>
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="group relative transition-colors hover:text-[#b5ff3d]">
            About
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#b5ff3d] transition-all group-hover:w-full"></span>
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="group relative transition-colors hover:text-[#b5ff3d]">
            Features
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#b5ff3d] transition-all group-hover:w-full"></span>
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="group relative transition-colors hover:text-[#b5ff3d]">
            Pricing
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#b5ff3d] transition-all group-hover:w-full"></span>
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="group relative transition-colors hover:text-[#b5ff3d]">
            Contact Us
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#b5ff3d] transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

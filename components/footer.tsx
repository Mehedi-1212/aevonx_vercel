"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-16 border-t border-gray-900">
      <div className="mx-auto max-w-[1400px] px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* 1. AveonX Brand (Copied from your Navbar) */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex cursor-pointer items-center gap-3 mb-6">
            <div className="relative flex h-8 w-8 items-center justify-center">
              {/* Your signature animated pulse diamond */}
              <div className="absolute h-full w-full animate-pulse rotate-45 rounded-sm bg-[#b5ff3d] opacity-20"></div>
              <div className="h-5 w-5 rotate-45 rounded-sm bg-[#b5ff3d] shadow-[0_0_15px_#b5ff3d]"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">AevonX</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-base italic">
            Empowering the next generation of developers while delivering cutting-edge software solutions for global businesses.
          </p>
        </div>

        {/* 2. Solutions Section */}
        <div>
          <h4 className="font-semibold mb-6 text-lg text-white">Solutions</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-[#b5ff3d] transition-colors cursor-pointer block">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b5ff3d] transition-colors cursor-pointer block">
                App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b5ff3d] transition-colors cursor-pointer block">
                UI/UX Design
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Opportunities (Vision Based) */}
        <div>
          <h4 className="font-semibold mb-6 text-lg text-white">Opportunities</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-[#b5ff3d] transition-colors cursor-pointer block">
                Advanced Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b5ff3d] transition-colors cursor-pointer block">
                Internship Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b5ff3d] transition-colors cursor-pointer block">
                Career Growth
              </a>
            </li>
          </ul>
        </div>

        {/* 4. Contact & Location */}
        <div>
          <h4 className="font-semibold mb-6 text-lg text-white">Connect</h4>
          <p className="text-gray-400 mb-6 text-sm">Bangladesh (Remote Friendly)</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center hover:bg-[#b5ff3d] hover:text-black transition-all cursor-pointer font-bold text-xs">
              GH
            </div>
            <div className="w-10 h-10 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center hover:bg-[#b5ff3d] hover:text-black transition-all cursor-pointer font-bold text-xs">
              IN
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Area */}
      <div className="mx-auto max-w-[1400px] px-10 mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© 2026 AevonX. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-green transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

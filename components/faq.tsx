"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // আইকন ইমপোর্ট

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<"clients" | "students" | "employees">("clients");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = {
    clients: [
      { q: "How do you handle custom software projects?", a: "We follow an agile methodology to ensure quality and transparency for our clients." },
      { q: "What is your typical project timeline?", a: "It depends on the scope, but usually we deliver within 4-12 weeks." },
      { q: "Do you work with international clients?", a: "Yes, we have experience working with clients from various countries and time zones." },
    ],
    students: [
      {
        q: "How can I join your internship program?",
        a: "Once you complete our advanced courses successfully, we offer internship opportunities in our company.",
      },
      { q: "Do you provide hands-on mentorship?", a: "Yes, our senior developers provide direct mentorship to help you become a great developer." },
    ],
    employees: [
      { q: "What is the work culture like?", a: "We believe in a remote-friendly, growth-oriented and innovative environment for our team." },
      { q: "What are the career growth opportunities?", a: "We provide clear roadmaps for leadership roles and continuous skill development." },
    ],
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-10">
        <h2 className="text-3xl md:text-6xl font-semibold text-center mb-10 text-white leading-tight">
          Frequently Asked <br />
          <span className="text-white/40">Questions</span>
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(["clients", "students", "employees"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`px-8 py-2 rounded-full border transition-all duration-300 font-medium cursor-pointer ${
                activeTab === tab
                  ? "bg-[#b5ff3d] text-black border-[#b5ff3d] shadow-[0_0_15px_rgba(181,255,61,0.3)]"
                  : "border-gray-700 text-gray-400 hover:border-[#b5ff3d] hover:text-[#b5ff3d]"
              } capitalize`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData[activeTab].map((item, index) => (
            <div key={index} className="border border-gray-800 rounded-2xl overflow-hidden bg-[#0a0a0a]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-[#111] transition-all cursor-pointer"
              >
                <span className="text-lg font-semibold">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#b5ff3d] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100 py-6 pt-0" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 text-gray-400 border-t border-gray-900 leading-relaxed pt-4">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
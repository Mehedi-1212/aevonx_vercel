"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Contact from "../components/contact";

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Starter Plan",
      price: isYearly ? "149" : "299",
      duration: isYearly ? "/ year" : "/ month",
      isPopular: false,
      features: ["Basic strategy consultation", "Social media setup", "Monthly performance reports", "Dedicated Support Team"],
    },
    {
      name: "Enterprise Plan",
      price: isYearly ? "599" : "799",
      duration: isYearly ? "/ year" : "/ month",
      isPopular: true,
      features: ["For large businesses", "Full marketing strategy", "Advanced analytics", "24/7 priority support"],
    },
  ];
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green selection:text-black overflow-x-hidden" suppressHydrationWarning={true}>
      <Contact />
      {/* navbar section */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-md">
        {/* কন্টেন্টকে মাঝখানে রাখার জন্য Inner Div */}
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6">
          {/* বাম পাশে লোগো */}
          <div className="flex cursor-pointer items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute h-full w-full animate-pulse rotate-45 rounded-sm bg-green opacity-20"></div>
              <div className="h-5 w-5 rotate-45 rounded-sm bg-green shadow-[0_0_15px_var(--color-green)]"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">AevonX</span>
          </div>

          {/* ডান পাশে মেনুবার এবং কন্টাক্ট আস একসাথে */}
          <div className="hidden items-center gap-8 text-base font-medium text-white md:flex">
            <a href="#" className="transition-colors hover:text-green">
              Home
            </a>
            <a href="#" className="transition-colors hover:text-green">
              About
            </a>
            <a href="#" className="transition-colors hover:text-green">
              Features
            </a>
            <a href="#" className="transition-colors hover:text-green">
              Pricing
            </a>
            <a href="#" className="transition-colors hover:text-green">
              Blog
            </a>
            {/* Contact Us এখন মেনুবারের অংশ */}
            <a href="#" className="transition-colors hover:text-green">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      <main className="relative flex flex-col items-center justify-center pt-20 pb-20 px-6 min-h-[90vh]">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-60 pointer-events-none -z-10">
          <img src="https://framerusercontent.com/images/848Y9vY6pW9mEaE8yTj6m6MvR8.png" alt="Globe Background" className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 text-[13px] text-white mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green rounded-full animate-pulse"></span>
          Introducing AevonX Digital Solution
        </div>

        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white text-center max-w-4xl mb-8 leading-[1.1]">
          Turn your big idea into <br />
          <span className="text-white/40">a stunning website</span>
        </h1>

        <p className="text-center text-gray-500 max-w-2xl mb-12 text-lg leading-relaxed">
          AevonX is dedicated to turning your visions into reality. We empower developers and build high-quality digital products for the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white  transition-all duration-500 ease-in-out group cursor-pointer ">
            Get Started Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="bg-white border border-gray-800 text-black px-8 py-4 rounded-full font-bold hover:bg-green hover:text-black transition-all duration-500 ease-in-out cursor-pointer">
            See Pricing
          </button>
        </div>
      </main>

      <section className="py-24 bg-black">
        <div className="mx-auto max-w-[1400px] px-10">
          {/* মেইন হেডিং */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-semibold text-white leading-tight">
              Supported by many <br />
              <span className="text-white/40"> companies around the world</span>
            </h2>
          </div>

          {/* গ্রিড লেআউট */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* বাঁদিকের বড় কার্ড (Testimonial) */}
            <div className="lg:col-span-8 p-10 rounded-3xl bg-[#111111] border border-white/5 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <span className="inline-block px-4 py-2 rounded-full border border-gray-800 text-green text-xs font-bold uppercase mb-8">CEO's Words</span>
                <blockquote className="text-lg md:text-2xl text-text-muted leading-relaxed font-semibold">
                  "Working with you was seamless from start to finish. The final design exceeded our expectations. Your attention to detail and ability to adapt
                  was outstanding throughout the entire process."
                </blockquote>
              </div>

              <div className="mt-12 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden">
                    <img src="/founder.png" alt="Mehedi H. - Founder of AevonX" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white text-lg font-semibold">Mehedi H.</p>
                    <p className="text-text-muted text-sm font-semibold">Founder of AevonX</p>
                  </div>
                </div>
                {/* লোগো পার্ট */}
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-green rounded-sm rotate-45"></div>
                  <span className="text-xl font-bold text-white">AevonX</span>
                </div>
              </div>
            </div>

            {/* ডানদিকের ছোট দুইটা কার্ড (Stats) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* উপরের স্ট্যাটস কার্ড */}
              <div className="p-8 rounded-3xl bg-[#111111] border border-white/5 flex flex-col justify-between h-full group">
                <div className="flex justify-between items-start">
                  <h3 className="text-5xl font-bold text-white tracking-tighter">15+</h3>
                  <span className="px-4 py-2 rounded-full border border-gray-800 text-green text-[10px] uppercase font-bold">Years of experience</span>
                </div>
                <p className="text-gray-500 text-base mt-6 leading-relaxed">
                  Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence.
                </p>
              </div>

              {/* নিচের স্ট্যাটস কার্ড */}
              <div className="p-8 rounded-3xl bg-[#111111] border border-white/5 flex flex-col justify-between h-full group">
                <div className="flex justify-between items-start">
                  <h3 className="text-5xl font-bold text-white tracking-tighter">98%</h3>
                  <span className="px-4 py-2 rounded-full border border-gray-800 text-green text-[10px] uppercase font-bold">Client satisfaction rate</span>
                </div>
                <p className="text-gray-500 text-base mt-6 leading-relaxed">
                  We pride ourselves on delivering excellence, reflected in the high satisfaction of every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="mx-auto max-w-[1400px] px-10">
          {/* মেইন হেডিং */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-semibold text-white leading-tight">
              Create with ease like <br /> <span className="text-white/40">never before.</span>
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
              We specialize in building high-performance digital products that scale with your business needs globally.
            </p>
          </div>

          {/* বেন্টো গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ১. বড় কার্ড (উপরের অংশ) */}
            <div className="md:col-span-2 p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 overflow-hidden relative group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full text-green text-[10px] font-bold uppercase mb-6 border border-gray-800">
                    Overview of interface
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Designed with an <br /> intuitive experience <br /> users love.
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-md">
                    An intuitive interface means users can quickly understand how to perform tasks without the need for extensive training or guidance.
                  </p>
                </div>
                {/* ডানদিকের ডামি ইন্টারফেস ইমেজ */}
                <div className="relative h-[300px] bg-[#111] rounded-2xl border border-white/5 p-4 shadow-2xl">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-20 w-full bg-white/5 rounded-lg animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-white/5 rounded-lg"></div>
                      <div className="h-32 bg-white/5 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ২. বামের ছোট কার্ড (Easy Integration with Radar effect) */}
            <div className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
              <div className="relative flex justify-center items-center h-48 mb-10">
                {/* রাডার অ্যানিমেশন সার্কেল */}
                <div className="absolute w-40 h-40 border border-white/10 rounded-full"></div>
                <div className="absolute w-28 h-28 border border-white/10 rounded-full animate-ping"></div>
                {/* সেন্টার লোগো */}
                <div className="z-10 bg-green p-4 rounded-xl shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                  <div className="w-6 h-6 bg-black rounded-sm rotate-45"></div>
                </div>
                {/* চারপাশের আইকন (ডামি) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                  ✦
                </div>
                <div className="absolute bottom-10 right-10 w-8 h-8 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">✱</div>
                <div className="absolute top-20 left-10 w-8 h-8 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">❖</div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Easy Integration</h4>
                <p className="text-gray-500 text-sm">Integrates with other tools and systems streamlining their workflow seamlessly.</p>
              </div>
            </div>

            {/* ৩. ডানের ছোট কার্ড (Trusted Support Team) */}
            <div className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
              <div className="relative h-48 mb-10 flex items-center justify-center">
                {/* বড় করে ব্যাকগ্রাউন্ডে ২৪/৭ লেখা */}
                <h1 className="absolute text-[280px] font-black text-white/[0.03] select-none">24/7</h1>
                <button className="z-10 px-8 py-3 bg-green text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                  <span>🤖</span> Support
                </button>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Trusted Support Team</h4>
                <p className="text-gray-500 text-sm">Recognized for responses and knowledge for quick solutions to complex problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(() => {
        const services = [
          {
            title: "Project Planning",
            description: "Create, assign, and manage tasks with a drag-and-drop interface or calendar views.",
            icon: "🧠",
          },
          {
            title: "Team Collaboration",
            description: "Powerful Team Collaboration Tools to boost Streamline Communication for you.",
            icon: "👥",
          },
          {
            title: "Live Insights",
            description: "Track performance instantly with accurate insights for smarter business decisions.",
            icon: "📄",
          },
          {
            title: "Easy to Use",
            description: "Intuitive design lets anyone navigate, manage, and operate effortlessly.",
            icon: "👍",
          },
          {
            title: "Limitless Flexibility",
            description: "Adaptable platform empowers teams to customize workflows and scale effortlessly.",
            icon: "⚙️",
          },
          {
            title: "Secure at Scale",
            description: "Advanced security measures protect data while supporting growth across all operations.",
            icon: "🔒",
          },
        ];

        return (
          <section className="py-24 bg-black">
            <div className="mx-auto max-w-[1400px] px-10">
              {/* মেইন হেডিং */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-6xl font-semibold text-white leading-tight">
                  Custom-designed modular <br />
                  <span className="text-white/40">products at a world-class standard</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-6">
                  Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking
                  services.
                </p>
              </div>

              {/* লুপের মাধ্যমে কার্ডগুলো রেন্ডার হচ্ছে */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((item, index) => (
                  <div key={index} className="p-10 rounded-[32px] bg-[#0A0A0A] border border-white/5 group">
                    {/* আইকন সেকশন (সবুজ কালার) */}
                    <div className="text-3xl mb-8 flex items-center justify-center w-14 h-14 rounded-2xl">{item.icon}</div>

                    {/* টাইটেল - এখানে text-xl বা text-2xl দিয়ে সাইজ কন্ট্রোল করো */}
                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>

                    {/* ডেসক্রিপশন */}
                    <p className="text-gray-500 leading-relaxed text-base">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* --- Client Testimonial Section Start --- */}
      {(() => {
        const testimonials = [
          {
            name: "Noah Ramirez",
            role: "SEO Specialist",
            rating: "4.9",
            feedback:
              "Working with Metilo has been a game-changer. Their innovative strategies helped us triple our online engagement in just six months. Fintech is its potential to promote financial inclusion.",
            image: "/founder.png",
          },
        ];

        return (
          <section className="py-24 bg-black">
            <div className="mx-auto max-w-[1400px] px-10">
              {/* হেডিং - তোমার রিকুয়েস্ট অনুযায়ী আপডেট করা হয়েছে */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-6xl font-semibold text-white mb-6 tracking-tight">Client feedback in their words</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                  Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking
                  services.
                </p>
              </div>

              {/* টেস্টামনিয়াল মেইন কার্ড */}
              <div className="grid grid-cols-1 md:grid-cols-12 overflow-hidden border border-white/10 bg-[#0A0A0A]">
                {/* ইমেজ সেকশন */}
                <div className="md:col-span-4 relative group h-[300px] md:h-[450px] overflow-hidden">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* নেভিগেশন বাটন */}
                  <div className="absolute bottom-0 left-0 w-full flex border-t border-white/10 bg-black/40 backdrop-blur-md">
                    <button className="flex-1 py-6 flex justify-center items-center border-r border-white/10 hover:bg-white/5 transition-colors">
                      <span className="text-white text-2xl">←</span>
                    </button>
                    <button className="flex-1 py-2 flex justify-center items-center hover:bg-white/5 transition-colors">
                      <span className="text-white text-2xl">→</span>
                    </button>
                  </div>
                </div>

                {/* টেক্সট সেকশন */}
                <div className="md:col-span-7 p-10 md:p-16 flex flex-col justify-center relative">
                  <div className="flex items-center gap-2 mb-8">
                    <span className="text-green text-2xl">★</span>
                    <span className="text-white font-bold text-xl">{testimonials[0].rating}</span>
                  </div>

                  <blockquote className="text-lg md:text-2xl text-text-muted leading-relaxed font-semibold">"{testimonials[0].feedback}"</blockquote>

                  <div className="flex items-end justify-between">
                    <div className="pt-8">
                      <p className="text-white text-lg font-semibold">Mehedi H.</p>
                      <p className="text-text-muted text-sm font-semibold">Founder of AevonX</p>
                    </div>

                    <div className="flex items-center gap-3 opacity-80">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                      </div>
                      <span className="text-white font-bold text-xl tracking-tighter italic">Overlay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })()}
      {/* --- Section End --- */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-[1000px] px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-semibold mb-10 text-white">Flexible Pricing Plans</h2>

            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={!isYearly ? "text-white" : "text-gray-500"}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-12 h-6 bg-white/10 rounded-full p-1 relative transition-transform active:scale-90 cursor-pointer"
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-lg transition-all duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`}></div>
              </button>
              <span className={isYearly ? "text-white" : "text-gray-500"}>Yearly</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden border border-white/5">
            {/* --- বাম পাশের কার্ড (Starter Plan) --- */}
            <div key={`starter-${isYearly}`} className="p-10 md:p-16 flex flex-col h-[650px] bg-[#0A0A0A] text-white animate-whole-card">
              <h3 className="text-3xl font-semibold mb-4 tracking-tight">Starter Plan</h3>
              <p className="opacity-70 mb-8">Perfect for small businesses and startups looking to establish their digital presence.</p>

              {/* Price Area: Ekhane text-white diye price sada kora hoyeche */}
              <div className="mb-10 pb-10 border-b border-white/10">
                <span className="text-6xl font-bold text-white tracking-tighter">${isYearly ? "149" : "299"}</span>
                <span className="text-lg font-normal text-white/40 ml-1">{isYearly ? "/ year" : "/ month"}</span>
              </div>

              <ul className="flex-1 space-y-4 mb-10">
                <p className="font-bold mb-4 uppercase text-xs tracking-widest opacity-60">What's Included:</p>
                <li className="flex items-center gap-3 font-medium">✓ Basic strategy consultation</li>
                <li className="flex items-center gap-3 font-medium">✓ Social media setup</li>
                <li className="flex items-center gap-3 font-medium">✓ Monthly performance reports</li>
                <li className="flex items-center gap-3 font-medium">✓ Dedicated Support Team</li>
              </ul>

              <button className="w-full py-3 rounded-full font-bold text-lg bg-green text-black hover:bg-white transition-all duration-500 cursor-pointer">
                Get Started Now
              </button>
            </div>

            {/* --- ডান পাশের কার্ড (Enterprise Plan) --- */}
            <div key={`enterprise-${isYearly}`} className="p-10 md:p-16 flex flex-col h-[650px] bg-green text-black animate-whole-card">
              <h3 className="text-3xl font-semibold mb-4 tracking-tight">Enterprise Plan</h3>
              <p className="opacity-70 mb-8">Solutions tailored for large businesses to optimize performance and drive innovation.</p>

              {/* Enterprise Price: Ekhane text-black thakbe karon background Lime */}
              <div className="mb-10 pb-10 border-b border-black/10">
                <span className="text-6xl font-bold tracking-tighter">${isYearly ? "599" : "799"}</span>
                <span className="text-lg font-normal opacity-70 ml-1">{isYearly ? "/ year" : "/ month"}</span>
              </div>

              <ul className="flex-1 space-y-4 mb-10">
                <p className="font-bold mb-4 uppercase text-xs tracking-widest opacity-60">What's Included:</p>
                <li className="flex items-center gap-3 font-medium">✓ Full marketing strategy</li>
                <li className="flex items-center gap-3 font-medium">✓ Advanced analytics</li>
                <li className="flex items-center gap-3 font-medium">✓ 24/7 priority support</li>
                <li className="flex items-center gap-3 font-medium">✓ Custom reporting</li>
              </ul>

              <button className="w-full py-3 rounded-full font-bold text-lg bg-black text-white hover:text-black hover:bg-white transition-all duration-500 cursor-pointer">
                Get Started Now
              </button>
            </div>
          </div>
        </div>

        {/* Global Animation Style */}
        <style>{`
          @keyframes wholeCardSlide {
            0% { transform: translateY(50px); opacity: 0; filter: blur(8px); }
            100% { transform: translateY(0); opacity: 1; filter: blur(0); }
          }
          .animate-whole-card {
            animation: wholeCardSlide 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
        `}</style>
      </section>

      {/* what we do */}
      <section className="bg-black py-32 px-10">
        <div className="mx-auto max-w-[1400px] px-10">
          {/* 1. Headline - Center Aligned & Bold */}
          <div className="text-center mb-24">
            {/* Subtitle with Inline Border */}
            <div className="inline-block mb-6">
              <h2 className="text-[#b5ff3d] font-mono text-sm tracking-[0.4em] uppercase italic px-2">// Our Future Vision //</h2>
              {/* Short Border strictly under the text */}
              <div className="h-[2px] w-full bg-[#b5ff3d]/30 mt-2 scale-x-60 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <h3 className="text-3xl md:text-6xl mb-10 font-bold text-white italic tracking-tighter leading-tight">
              WE BUILD CAREERS, <br />
              <span className="text-white/40">NOT JUST PROJECTS !</span>
            </h3>
          </div>

          {/* 2. Vision Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01: Mentorship */}
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-gray-900 hover:border-[#b5ff3d]/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-black text-white/5 italic group-hover:text-[#b5ff3d]/10 transition-colors">01</div>
              <h4 className="text-2xl font-bold text-[#b5ff3d] mb-6 italic uppercase tracking-tight">Advanced Mentorship</h4>
              <p className="text-gray-400 leading-relaxed text-lg">
                Once successful, I will personally lead high-end development courses to provide the right roadmap for aspiring talent.
              </p>
            </div>

            {/* Card 02: Internship */}
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-gray-900 hover:border-[#b5ff3d]/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-black text-white/5 italic group-hover:text-[#b5ff3d]/10 transition-colors">02</div>
              <h4 className="text-2xl font-bold text-[#b5ff3d] mb-6 italic uppercase tracking-tight">Direct Internship</h4>
              <p className="text-gray-400 leading-relaxed text-lg">
                Top-tier developers from our programs will be integrated directly into AevonX as interns to work on global-scale projects.
              </p>
            </div>

            {/* Card 03: Opportunities */}
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-gray-900 hover:border-[#b5ff3d]/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-black text-white/5 italic group-hover:text-[#b5ff3d]/10 transition-colors">03</div>
              <h4 className="text-2xl font-bold text-[#b5ff3d] mb-6 italic uppercase tracking-tight">Global Placement</h4>
              <p className="text-gray-400 leading-relaxed text-lg">
                We empower our developers by bridging the gap between local talent and international tech firms for career growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-black text-white w-full">
        <div className="max-w-4xl mx-auto px-4">
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

          {/* Accordion List with Map */}
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
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="p-6 pt-0 text-gray-400 border-t border-gray-900 leading-relaxed">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
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
    </div>
  );
}

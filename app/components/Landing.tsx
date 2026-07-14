"use client";

import { CloudSun, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage({data,loading}: {data: any; loading: any}) {
   if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* 🌐 Navbar */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-sky-500 p-2 rounded-xl">
            <CloudSun />
          </div>
          <h1 className="font-bold text-xl">Nimbus</h1>
        </div>

        <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl text-sm font-semibold">
          Get Started
        </button>
      </header>

      {/* 🚀 Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Real-Time Weather <br />
            <span className="text-sky-400">At Your Fingertips</span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg">
            Get accurate forecasts, real-time alerts, and interactive maps.
            Stay ahead of the weather anytime, anywhere.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              Explore Now <ArrowRight size={18} />
            </button>

            <button className="border border-slate-700 hover:bg-slate-800 px-6 py-3 rounded-xl font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Current Location</p>
              <h2 className="text-xl font-bold flex items-center gap-1">
                <MapPin size={16} /> {data?.name}
              </h2>
            </div>
            <CloudSun className="text-sky-400" size={40} />
          </div>

          <div className="mt-6">
            <h1 className="text-5xl font-extrabold">{data?.main.temp}°</h1>
            <p className="text-slate-400">{data?.weather[0].description}</p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-slate-400 text-xs">humidity</p>
              <p className="font-bold">{data?.main.humidity}%</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs">Wind</p>
              <p className="font-bold">{data?.wind.speed} km/h</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs">Feels Like</p>
              <p className="font-bold">{Math.round(data?.main.feels_like)}°</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🌟 Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimbus?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Real-time updates",
            "Interactive weather maps",
            "Severe weather alerts",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center hover:bg-slate-800 transition"
            >
              <CloudSun className="mx-auto text-sky-400 mb-4" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📢 CTA Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Stay Updated with the Weather 🌦️
        </h2>
        <p className="text-slate-400 mt-4">
          Join thousands of users tracking weather daily.
        </p>

        <button className="mt-6 bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-xl font-semibold">
          Get Started Free
        </button>
      </section>

    </div>
  );
}
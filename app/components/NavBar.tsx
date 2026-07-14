
"use client";

import { useState } from "react";
import { CloudSun, Menu, X, Search, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ city, onSearch }:{ city: string; onSearch: (city: string) => void }) {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "Forecast", "Radar", "Alerts"];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* 🌤 Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-sky-500 p-2 rounded-xl">
            <CloudSun size={20} />
          </div>
          <span className="font-bold text-lg">Nimbus</span>
        </div>

        {/* 🧭 Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link, i) => (
            <button
              key={i}
              className="text-slate-300 hover:text-white transition"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* 🔍 Search + Location */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search city..."
              className="bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
              onKeyDown={
                (e)=>{
                  if(e.key ==="Enter"){
                    onSearch(e.currentTarget.value)
                  }
                }
              }
            />
          </div>

          <div className="flex items-center gap-1 text-sm text-slate-300">
            <MapPin size={16} />
            <span>{city}</span>
          </div>
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-slate-800"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-4">

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search city..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-sky-500"
                  onKeyDown={
                    (e)=>{
                      if(e.key ==="Enter"){
                        onSearch(e.currentTarget.value)
                      }
                    }
                  }
                />
              </div>

              {/* Links */}
              <div className="space-y-2">
                {navLinks.map((link, i) => (
                  <button
                    key={i}
                    className="block w-full text-left px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
                  >
                    {link}
                  </button>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={16} />
                <span>{city}</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

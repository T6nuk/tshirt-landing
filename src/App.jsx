import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import brandLogo from './assets/logo.svg'



function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Replace with your real logo */}
          <img src={brandLogo} alt="kol:" className='h-15' />
        </div>
        <a
          href="#tees"
          className="rounded-full px-4 py-2 text-sm ring-1 ring-neutral-700 hover:ring-neutral-500"
        >
          Browse Tees
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Minimal tees. Maximum comfort.
        </h1>
        <p className="mt-4 text-neutral-400">
          Premium cotton tees with clean, modern designs — built for everyday wear.
        </p>

        {/* Carousel placeholder (we add it in M2) */}
        <div id="tees" className="mt-12">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-12">
            
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              className="rounded-full bg-teal-600 px-5 py-2 text-sm font-medium hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              onClick={() => alert("In M2, this will open an Etsy product.")}
            >
              Buy on Etsy
            </button>
            <a
              href="#learn-more"
              className="rounded-full px-5 py-2 text-sm ring-1 ring-neutral-700 hover:ring-neutral-500"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} Your Brand ·{" "}
        <a className="underline hover:text-neutral-300" href="#">Privacy</a> ·{" "}
        <a className="underline hover:text-neutral-300" href="#">Terms</a> ·{" "}
        <a className="underline hover:text-neutral-300" href="#">Affiliate Disclosure</a>
      </footer>
    </main>
  );
}

export default App

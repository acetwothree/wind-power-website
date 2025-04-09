'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToHelp = () => {
    document.getElementById('how-it-helps')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Section 1: Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50">
          <Image
            src="/images/turbineNIS.png"
            alt="Wind Turbine NIS Diagram"
            fill
            className="object-cover opacity-20"
            priority
            loading="eager"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Smart Wind Power for Every Rooftop
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Monitor and control your rooftop wind turbines with our intelligent system.
            Get real-time data and maximize your clean energy production.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/how-it-works"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Get Started
            </Link>
            <button 
              onClick={scrollToHelp}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: What Is ITCS? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            What is the Integrated Turbine Control System (ITCS)?
          </h2>
          <p className="text-xl text-gray-800 mb-12 max-w-4xl mx-auto text-center">
            ITCS is a smart control system that monitors rooftop wind turbines using 
            wireless sensors and mesh network tech. It's designed to help homeowners 
            and businesses access efficient, affordable renewable energy on-site—starting 
            with Camden, NJ.
          </p>
          <div className="bg-gray-100 p-8 rounded-lg">
            <Image
              src="/images/itcschart.PNG"
              alt="ITCS Architecture Diagram"
              width={800}
              height={450}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Simple Explanation */}
      <section id="how-it-helps" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            How It Helps You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-green-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Efficient Monitoring</h3>
              <p className="text-gray-900">See performance data in real time</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-green-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Non-Intrusive Installation</h3>
              <p className="text-gray-900">No rewiring, easy clamp-on sensors</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-green-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Urban-Friendly</h3>
              <p className="text-gray-900">Small turbines designed for flat roofs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Visual Preview */}
      <section id="visual-preview" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-lg">
            <Image
              src="/images/turbineNIS.png"
              alt="NIS Diagram"
              width={600}
              height={400}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <p className="text-center text-gray-900 mt-6">
            Our Non-Intrusive Sensor fits onto any turbine cable and transmits data wirelessly.
          </p>
        </div>
      </section>
    </main>
  );
}

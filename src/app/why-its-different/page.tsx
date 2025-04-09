'use client';

import React from 'react';
import Image from 'next/image';

export default function WhyItsDifferent() {
  return (
    <main>
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Why Rooftop Power Needs ITCS</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <Image
              src="/images/tamchart.PNG"
              alt="Market Size and Analysis"
              width={800}
              height={450}
              className="w-full h-auto"
              loading="eager"
              priority
            />
          </div>
          <p className="text-lg text-gray-900 mb-12">
            Rooftop wind faces challenges: hard installs, no monitoring, and limited feedback. 
            ITCS solves these with smart sensors and real-time data.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Market Opportunity</h2>
              <ul className="space-y-4 text-gray-900">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  TAM: 4,000 buildings
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  SAM: 1,600 buildings (40%)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  SOM Year 1: 120 buildings
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Value Proposition</h2>
              <ul className="space-y-4 text-gray-900">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Non-intrusive installation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Predictive maintenance
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Lower operating costs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

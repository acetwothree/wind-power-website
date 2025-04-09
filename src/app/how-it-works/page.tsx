import React from 'react';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Section 1: Overview */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            Inside the Tech: How ITCS Works
          </h1>
          <p className="text-lg text-gray-900 mb-8">
            ITCS uses the Sensor Control Monitor (SCM) and our proprietary Non-Intrusive Sensor (NIS) 
            to measure power output continuously. Data travels via Zigbee and 5G, linking up to 1,024 
            turbines in a mesh network. This data syncs to a cloud-based dashboard and technician mobile tools.
          </p>
        </div>
      </section>

      {/* Section 2: System Architecture */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Image
              src="/images/itcschart.PNG"
              alt="ITCS Architecture Diagram"
              width={800}
              height={450}
              className="w-full h-auto"
              loading="eager"
              priority
            />
            <p className="text-center text-gray-900 italic mt-4">
              Each turbine is part of a secure, wireless network built for scalability and speed.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: NIS & Sensor Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            NIS & Sensor Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-900">
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              Externally mounted clamp sensor
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              Measures real-time power output in watts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              Housed in waterproof casing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              Powered by turbine energy
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              Connects to mobile devices via Bluetooth
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              Transmits via Zigbee or 5G
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Software Control System */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Software Control System
          </h2>
          <p className="text-lg text-gray-900">
            The ITCS-SCS software is hosted on AWS, runs diagnostics daily, and allows real-time 
            status access through a web or mobile portal. It flags anomalies and compares turbine 
            performance across the network for predictive maintenance.
          </p>
        </div>
      </section>
    </main>
  );
}

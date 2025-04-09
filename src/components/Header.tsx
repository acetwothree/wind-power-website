'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl hover:text-green-400 transition-colors">
            Wind Fusion
          </Link>
          
          <nav className="flex gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/' 
                  ? 'text-green-400' 
                  : 'text-white hover:text-green-400'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/how-it-works"
              className={`text-sm font-medium transition-colors ${
                pathname === '/how-it-works'
                  ? 'text-green-400'
                  : 'text-white hover:text-green-400'
              }`}
            >
              How It Works
            </Link>
            <Link 
              href="/why-its-different"
              className={`text-sm font-medium transition-colors ${
                pathname === '/why-its-different'
                  ? 'text-green-400'
                  : 'text-white hover:text-green-400'
              }`}
            >
              Why It&apos;s Different
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

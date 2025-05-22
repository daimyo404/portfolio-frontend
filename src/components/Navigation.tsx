'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="py-4 mb-8">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link 
            href="/" 
            className={`hover:text-blue-500 ${pathname === '/' ? 'font-bold text-blue-500' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className={`hover:text-blue-500 ${pathname === '/about' ? 'font-bold text-blue-500' : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/projects" 
            className={`hover:text-blue-500 ${pathname === '/projects' ? 'font-bold text-blue-500' : ''}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className={`hover:text-blue-500 ${pathname === '/contact' ? 'font-bold text-blue-500' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
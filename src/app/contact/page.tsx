import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-6">
        Feel free to reach out to me using the form below or through my social media channels.
      </p>
      
      <form className="max-w-md mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
            placeholder="Your name"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
            placeholder="Your email"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
            placeholder="Your message"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
      
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
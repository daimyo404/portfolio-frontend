import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold mt-8">My Portfolio</h1>
        <p className="text-xl text-center max-w-2xl">
          Welcome to my portfolio website built with Next.js 15 and Tailwind CSS.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
          <Link 
            href="/about" 
            className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">Learn more about my background and skills</p>
          </Link>
          
          <Link 
            href="/projects" 
            className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">View my portfolio of work and projects</p>
          </Link>
          
          <Link 
            href="/contact" 
            className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-600 dark:text-gray-300">Get in touch with me</p>
          </Link>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Built with Next.js 15 and Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
}

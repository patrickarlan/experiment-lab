import profilePic from './assets/patrick.jpg';
import MainHeader from './components/mainheader';

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 text-gray-800 overflow-x-hidden flex flex-col">
      {/* Header */}
      <MainHeader />
      

      {/* Hero Section */}
  <main className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-10 py-20 md:py-32 w-full gap-x-10 flex-1">
        <img
          src={profilePic}
          alt="Patrick Brequillo"
          className="w-60 h-60 sm:w-60 sm:h-60 md:w-60 md:h-60 rounded-full mb-6 md:mb-0 md:mr-10 shadow-lg object-cover flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I’m <span className="text-blue-600">Patrick</span> 👋
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl">
            Testing my <span className="text-blue-600">capabilities</span> in building a React application styled with Tailwind CSS.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            View My Work
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer py-4 md:py-6 text-center text-sm md:text-base border-t w-full mt-auto">
        © {new Date().getFullYear()} Patrick Brequillo. All rights reserved.
      </footer>
    </div>
  );
}

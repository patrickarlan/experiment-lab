export default function MainHeader() {
  return (
    <header className="site-header py-4 px-10 flex justify-between items-center shadow-md flex-wrap w-full">
      <h1 className="text-2xl md:text-3xl font-bold">EXPT: Portfolio</h1>
      <nav className=" site-nav space-x-6 mt-2 mx-6 md:mt-0 text-sm md:text-base">
        <a href="#about" className="hover:text-gray-200">About</a>
        <a href="#projects" className="hover:text-gray-200">Projects</a>
        <a href="#contact" className="hover:text-gray-200">Contact</a>
      </nav>
    </header>
  );
}
function Header() {
  return (
    <nav className="absolute w-full py-6 bg-blue-500 px-4">
      <ul className="flex items-center justify-between max-w-6xl mx-auto">
        <li>
          <h1 className="text-white text-2xl font-bold">Cities in the World</h1>
        </li>
        <li className="flex space-x-6">
          <p className="text-white hover:underline">Home</p>
          <p className="text-white hover:underline">About</p>
          <p className="text-white hover:underline">Contact</p>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

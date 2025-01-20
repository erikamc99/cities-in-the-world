function Header() {
  return (
    <nav className="absolute w-full py-6 bg-blue-500">
      <ul className="flex items-center justify-around max-w-6xl mx-auto">
        <li>
          <h1 className="text-white text-2xl font-bold">Cities in the World</h1>
        </li>
        <li className="flex space-x-6">
          <a href="../index.html" className="text-white hover:underline">Home</a>
          <a href="#" className="text-white hover:underline">About</a>
          <a href="mailto:example@mail.com" className="text-white hover:underline">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

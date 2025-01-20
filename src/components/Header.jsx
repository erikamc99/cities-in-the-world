function Header() {
    return (
        <nav className="absolute w-full py-6">
    <ul className="flex items-center justify-around max-w-6xl mx-auto">
      <li>
        <h1 className="text-white">Cities in the world</h1>
      </li>
  
      <li>
        <a href="../index.html" className="text-white px-6">Home</a> -
        <a href="" className="text-white px-6">About</a> -
        <a href="mailto:example@mail.com" className="text-white px-6">Contact</a>
      </li>
  
    </ul>
  </nav>
    );
};

export default Header;
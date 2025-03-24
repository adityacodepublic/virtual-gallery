const Navbar = () => {
  return (
    <nav className="text-white fixed px-8 py-5 flex justify-center items-center z-10">
      <div className="flex justify-center items-center cursor-pointer gap-1">
        {/* <img
          className="w-15 h-13 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAaiiAHmxcpkIJ-Ov93Zfk71d4d38dtWb9w&s"
          alt="Logo"
        /> */}
        <h2 className="font-bold text-3xl">Gallery</h2>
      </div>
      <div className="pl-10">
        <ul className="flex text-[19px] cursor-pointer justify-center items-center gap-5 list-none">
          <li>Discover</li>
          <li>Exhibits</li>
          <li>Artists</li>
          <li>Contribute</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

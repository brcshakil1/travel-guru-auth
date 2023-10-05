import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logoB.png";
import { useState } from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    const searchPlace = e.target.search.value;
    setSearch(searchPlace);
  };

  console.log(search);

  const navLinks = (
    <>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <button className=" bg-yellow-600 text-black font-medium py-2 px-4 rounded-md">
          <Link to="/login">Login</Link>
        </button>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center py-9">
      <div className="">
        <img className="w-20 md:w-28" src={logo} alt="" />
      </div>
      <div className="flex items-center gap-10">
        <Searchbar handleSearch={handleSearch} />
        <ul tabIndex={0} className=" hidden md:flex items-center gap-10 ">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

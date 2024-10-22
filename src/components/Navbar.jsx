import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cart from "../assets/images/cart.svg";
import user from "../assets/images/user.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "relative no-underline hover:text-white transition-colors duration-300 text-[#92A49D]";

  const activeClass =
    "after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[4px] after:w-full after:bg-yellow-400 text-[#fff]  font-medium";

  return (
    <div
      className={`fixed w-full top-0 left-0 h-20 flex justify-start items-center px-[200px] text-[#fff] transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <NavLink to="/" className="no-underline text-4xl font-semibold">
        Developia<span>.</span>
      </NavLink>
      <ul className="flex justify-normal items-center list-none no-underline gap-12 ml-auto mr-11">
        <li className="no-underline">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="flex justify-normal items-center gap-8">
        <img src={user} alt="developia_cart" />
        <img src={cart} alt="developia_user" />
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [nameInputVisible, setNameInputVisible] = useState(true);

  const toggleNameInput = () => {
    setNameInputVisible(!nameInputVisible);
  };

  const Links = [
    { name: "Home", to: "/home" },
    { name: "Favorities", to: "/favorities" },
    { name: "Cart", to: "/cart" },
    { name: "Orders", to: "/orders" },
  ];

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <BookOpenIcon className="w-7 h-7 text-blue-600" />
            <span>Food at Home</span>
          </div>

          {nameInputVisible && (
            <div className="p-1 flex items-center border rounded-3xl mt-2">
              <input
                type="text"
                className="p-2 w-full focus:outline-none sm:w-96"
                placeholder="Pizza, burguer, chocolate, etc..."
              />
              <MagnifyingGlassIcon className="h-6 w-6 mr-5"/>

            </div>
          )}

          <div
            onClick={() => {
              setOpen(!open);
              toggleNameInput();
            }}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

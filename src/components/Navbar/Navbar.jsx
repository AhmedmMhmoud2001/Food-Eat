// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from "../../assets/profile.png";
import { FaCaretDown } from "react-icons/fa";
const Links = [
  {
    id: 1,
    name: "Home",
    Link: "#",
  },
  {
    id: 2,
    name: "Menu",
    Link: "#",
  },
  {
    id: 3,
    name: "About",
    Link: "#",
  },
];
const Navbar = () => {
  return (
    <div>
      <div className="container flex items-center justify-between py-6">
        <div>
          <span className="text-4xl  font-bold">FooD</span>
          <span className="text-4xl text-primary font-bold">EAT</span>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
            {Links.map((data) => (
              <li key={data.id} className=" hidden sm:flex">
                <a
                  href={data.Link}
                  className="text-lg hover:text-primary hover:border-b-2 border-primary duration-200 uppercase"
                >
                  {data.name}
                </a>
              </li>
            ))}
            <li>
              <img
                src={profile}
                className="w-[40px] rounded-full"
                alt="profile"
              />
            </li>
            <li>
              <FaCaretDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

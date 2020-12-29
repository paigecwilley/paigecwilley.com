import React from "react";
import Link from "next/link";

const linksList = [
  //   { label: "About", link: "#about" },
  { label: "Work", link: "/#work" },
];

const Nav = () => {
  return (
    <nav className="bg-gray-200 py-9 ">
      <div
        className="max-w-7xl flex justify-between"
        style={{ margin: "0 auto" }}
      >
        <a href="/" className="text-2xl font-semibold">
          PW
        </a>

        <ul className="flex justify-end">
          {linksList.map((link) => (
            <li
              key={link.link}
              className="inline text-xl font-semibold first:mr-4"
            >
              <Link href={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

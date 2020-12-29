import React from "react";

const footerLinks = [
  { label: "Github", link: "" },
  { label: "Twitter", link: "" },
  { label: "LinkedIn", link: "" },
];

const Footer = () => (
  <footer className="bg-gray-200">
    <div
      className=" bg-gray-200 flex justify-between max-w-7xl py-9"
      style={{ margin: "0 auto" }}
    >
      <div>
        <p className="text-xl font-semibold">Thanks for reading!</p>
      </div>
      <ul>
        {footerLinks.map((link) => (
          <li key={link.label} className="text-xl font-semibold">
            <a href={link.link}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;

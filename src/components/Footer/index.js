import React from "react";

const footerLinks = [
  { label: "Github", link: "https://github.com/paigecwilley" },
  { label: "Twitter", link: "https://twitter.com/paigecwilley" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/paigecwilley" },
];

const Footer = () => (
  <footer className="bg-gray-200 px-8">
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
            <a href={link.link} target="__blank">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;

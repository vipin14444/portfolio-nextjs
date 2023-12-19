import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="px-4">
        <p className="flex justify-center text-center p-4 font-bold text-2xl">{`Like my work? Want to get in touch with me?`}</p>
        <a
          href="mailto:vipin.sharma3039@gmail.com"
          className="font-bold flex justify-center text-center p-8 px-4"
        >{`✉️ vipin.sharma3039@gmail.com`}</a>
      </div>
      <div className="bg-[#0C0C0C] text-center p-8">{`Made with ❤️ by Vipin Sharma`}</div>
    </footer>
  );
};

export default Footer;

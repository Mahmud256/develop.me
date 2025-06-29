import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 rounded-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-80">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          {/* Top-left: Logo */}
          <div>
            <h1 className="text-lime-400 font-bold text-xl">DEVLOP.ME</h1>
          </div>
          {/* Bottom-left: BESNIK */}
          <div className="text-blue-400 font-bold mt-10 md:mt-0">BESNIK</div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full">
          {/* Top-right: Heading */}
          <div>
            <h2 className="text-7xl font-semibold mb-10">As you can</h2>
          </div>

          {/* Content columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {/* Say Hello */}
            <div>
              <h3 className="text-gray-400 mb-2">Say hello</h3>
              <p className="mb-1">HELLO@DEVLOP.ME.COM</p>
              <p className="mb-4">MAHBUBUL@ME.COM</p>
              <h3 className="text-gray-400 mb-2">Call</h3>
              <p className="mb-1">+784549 4981 00</p>
              <p>+8845 0100 211</p>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-gray-400 mb-2">Menu</h3>
              <ul className="space-y-1">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-gray-400 mb-2">Social</h3>
              <ul className="space-y-1">
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>BEHANCE</li>
                <li>DRIBBBLE</li>
              </ul>
            </div>
          </div>

          {/* Bottom-right: Footer Info */}
          <div className="mt-10 flex flex-col sm:flex-row justify-between text-gray-400 text-sm ">
            <span>© devlop.me 2092</span>
            <span>PRIVACY - TERMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

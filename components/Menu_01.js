import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu_01 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative invisible text-xs border sm:visible">
      <button
        className="py-3 mt-10 ml-16 mr-1 font-bold uppercase border lg:pl-5 xl:pl-10 hover:text-white rounded-l-md border-dark hover:bg-dark"
        onClick={() => setToggle(!toggle)}
      >
        Products<i className="lg:px-5 xl:px-10 hover:text-white fas fa-caret-down"></i>
      </button>
      <button className="py-3 font-bold uppercase border lg:px-5 xl:px-10 border-dark hover:bg-dark hover:text-white rounded-r-md">
        Contact
      </button>

      {toggle && (
        <motion.div
          className="absolute right-0 z-10 w-48 mt-2 text-xs font-bold uppercase origin-top-right rounded-md shadow-lg left-64px oswald bg-gray-light border-gray-border focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          inicial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-dark hover:text-gray-900"
              role="menuitem"
            >
              Seats
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-dark hover:text-gray-900"
              role="menuitem"
            >
              Led Lights
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-dark hover:text-gray-900"
              role="menuitem"
            >
              Battery
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Menu_01;

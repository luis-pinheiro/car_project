import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsList = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = () => (
  <motion.ul className="absolute w-56 p-6 mb-5 top-24" variants={variants}>
    <motion.li
      key="1"
      className="flex items-center mb-5"
      variants={variantsList}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a className="text-xs font-bold uppercase oswald" href="#">
        Products
      </a>
    </motion.li>
    <motion.li
      key="2"
      className="flex items-center mb-5"
      variants={variantsList}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a className="text-xs font-bold uppercase oswald" href="#">
        Contact
      </a>
    </motion.li>
    <motion.li
      key="3"
      className="flex items-center mb-5"
      variants={variantsList}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a className="text-xs font-bold uppercase oswald" href="#">
        B2B
      </a>
    </motion.li>
    <motion.li
      key="4"
      className="flex items-center mb-5"
      variants={variantsList}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a className="text-xs font-bold uppercase oswald" href="#">
        CLICK & COLLECT
      </a>
    </motion.li>
    <motion.li
      key="5"
      className="flex items-center mb-5"
      variants={variantsList}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a className="text-xs font-bold uppercase oswald" href="#">
        Login
      </a>
    </motion.li>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

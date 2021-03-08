import React, { useState } from 'react';
import Footer from './Footer';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { images } from './images';

const CarSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [exitCar, setExitCar] = useState('0vw');
  const [firstSlide, setFirstSlide] = useState(true);
  const x = useMotionValue(0);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  async function next() {
    await setExitCar('100vw');
    await paginate(1);
    if (firstSlide) {
      setFirstSlide(false);
    }
  }

  async function prev() {
    await setExitCar('-100vw');
    await paginate(-1);
    if (firstSlide) {
      setFirstSlide(false);
    }
  }

  const carSliderVariants = {
    initial: {
      x: direction === 1 ? '-100vw' : '100vw',
    },
    animate: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 2,
        when: 'beforeChildren',
      },
    },
    exit: {
      x: exitCar,
      delay: 1,
      transition: {
        type: 'tween',
        duration: 2,
        when: 'afterChildren',
      },
    },
  };

  function rotateWheels() {
    if (firstSlide) {
      return 0;
    } else {
      return direction === 1 ? 360 : -360;
    }
  }

  const wheelsVariants = {
    initial: {
      rotate: rotateWheels(),
    },
    animate: {
      rotate: rotateWheels(),
      transition: {
        duration: 2,
      },
    },
    exit: {
      rotate: rotateWheels(),
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="container relative mx-auto car-slider">
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <motion.div key={page} initial="initial" animate="animate" exit="exit" variants={carSliderVariants}>
          <div className="relative mx-auto " style={{ height: '731px' }}>
            <AnimatePresence custom={direction} exitBeforeEnter>
              <img src={images[imageIndex]} className="mx-auto " />

              <motion.img
                key="front-wheel"
                className="absolute front-wheel "
                src="./img/car/Wheel.png"
                alt="Front Wheel"
                style={{
                  marginTop: '-247px',
                  right: '421px',
                  width: '161px',
                }}
                custom={direction}
                animate="animate"
                exit="exit"
                variants={wheelsVariants}
              />

              <motion.img
                key="rear-wheel"
                className="absolute rear-wheel "
                src="./img/car/Wheel.png"
                alt="Rear Wheel"
                style={{
                  marginTop: '-247px',
                  right: '947px',
                  width: '161px',
                }}
                animate="animate"
                exit="exit"
                variants={wheelsVariants}
              />
            </AnimatePresence>
          </div>
          <motion.button
            key="btn"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                delay: 1.5,
                type: 'spring',
                stiffness: 400,
              },
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
            exit={{
              scale: 0,
            }}
            className="absolute w-5 h-5 text-xs font-bold text-white rounded-full xl:w-20 xl:h-20 left border-opacity-60 oswald bg-dark border-yellow border-10"
            style={{
              top: '40%',
              right: '50%',
              bottom: '50%',
              left: '50%',
            }}
          >
            BUY NOW
          </motion.button>
        </motion.div>
      </AnimatePresence>
      <div className="container relative grid grid-cols-3 mx-auto slider-nav" style={{ marginTop: '-200px' }}>
        <div className="flex items-center justify-end pr-20">
          {/* Left Button */}
          <motion.button
            onClick={() => prev()}
            className="flex items-center justify-center w-8 h-8 border rounded-full hover:border-0 hover:bg-yellow border-gray-border"
          >
            <i className="fas text-dark fa-caret-left"></i>
          </motion.button>
        </div>
        <div className="">
          <p className="text-xs font-bold text-center oswald">LICENSED CAR</p>
          <h1 className="text-4xl font-bold text-center oswald">Ultra-cool Motherfucker</h1>
          <p className="text-sm text-center roboto">Battery-powered Ride-on Car</p>
          <ul className="flex justify-center space-x-4">
            <li>
              <p className="font-bold oswald font-xs">12V BATTERY</p>
            </li>
            <li className="border-r opacity-25"></li>
            <li>
              <p className="font-bold oswald font-xs">3 SPEEDS</p>
            </li>
            <li className="border-r opacity-25"></li>
            <li>
              <p className="font-bold oswald font-xs">ADJUSTABLE SEATS</p>
            </li>
            <li className="border-r opacity-25"></li>
            <li>
              <p className="font-bold oswald font-xs">LED LIGHTS</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-start pl-20">
          {/* Right Button */}
          <motion.button
            onClick={() => next()}
            className="flex items-center justify-center w-8 h-8 border rounded-full hover:border-0 hover:bg-yellow border-gray-border"
          >
            <i className="fas text-dark fa-caret-right"></i>
          </motion.button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarSlider;

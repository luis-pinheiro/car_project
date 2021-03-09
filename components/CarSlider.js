import React, { useState } from 'react';
import Footer from './Footer';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { images } from './images';

const CarSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [exitCar, setExitCar] = useState('0vw');
  const [firstSlide, setFirstSlide] = useState(true);
  const [rotateNextWheel, setRotateNextWheel] = useState(false);
  const [rotatePrevWheel, setRotatePrevWheel] = useState(false);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  async function next() {
    await setExitCar('100vw');
    await setRotateNextWheel(true);
    await paginate(1);
    if (firstSlide) {
      setFirstSlide(false);
    }
    await setTimeout(() => {
      setRotateNextWheel(false);
    });
  }

  async function prev() {
    await setExitCar('-100vw');
    setRotatePrevWheel(true);
    await paginate(-1);
    if (firstSlide) {
      setFirstSlide(false);
    }
    await setTimeout(() => {
      setRotatePrevWheel(false);
    });
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
        when: 'afterChildren',
        staggerChildren: 0.1,
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
          {/* h-731px */}
          <div className="relative mx-auto " style={{}}>
            <AnimatePresence custom={direction} exitBeforeEnter>
              <img src={images[imageIndex]} className="mx-auto " />
              {/*  w-63px -mt-94px right-96px */}
              <motion.img
                key="front-wheel"
                className="absolute front-wheel lg:right-219px lg:-mt-209px lg:w-137px xl:right-293px 2xl:right-421px xl:w-161px xl:-mt-247px md:right-162px md:w-107px md:-mt-158px sm:-mt-132px sm:w-87px sm:right-135px -mt-21% right-21% w-14%"
                src="./img/car/Wheel.png"
                alt="Front Wheel"
                style={{}}
                custom={direction}
                animate="animate"
                exit="exit"
                variants={wheelsVariants}
              />
              {/*  w-63px -mt-94px right-293px */}
              <motion.img
                key="rear-wheel"
                className="absolute lg:right-663px lg:-mt-209px lg:w-137px rear-wheel xl:-mt-247px xl:w-161px xl:right-819px 2xl:right-947px md:right-495px md:w-107px md:-mt-158px sm:-mt-132px sm:w-87px sm:right-414px -mt-21% w-14% right-64%"
                src="./img/car/Wheel.png"
                alt="Rear Wheel"
                style={{}}
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
            className="absolute btn-buy sm:text-xs text-xxs font-bold text-white h-14 w-14 rounded-full sm:w-20 sm:h-20 left border-opacity-60 oswald bg-dark border-yellow border-10 top-1/2 left-45% xl:top-40% xl:right-50% bottom-50%"
            style={
              {
                // top: '40%',
                // right: '50%',
                // bottom: '50%',
                // left: '50%',
              }
            }
          >
            BUY NOW
          </motion.button>
        </motion.div>
      </AnimatePresence>
      <div className="container absolute grid grid-cols-3 mx-auto slider-nav " style={{}}>
        <div className="flex items-start justify-end pr-20 sm:items-center">
          {/* Left Button */}
          {page > 1 && (
            <motion.button
              onClick={() => prev()}
              className="flex items-center justify-center w-8 h-8 border rounded-full hover:border-0 hover:bg-yellow border-gray-border"
            >
              <i className="fas text-dark fa-caret-left"></i>
            </motion.button>
          )}
        </div>
        <div className="">
          <p className="text-xs font-bold text-center oswald">LICENSED CAR</p>
          <h1 className="text-2xl font-bold text-center sm:text-4xl oswald">Ultra-cool Motherfucker</h1>
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
        <div className="flex items-start justify-start pl-20 sm:items-center">
          {/* Right Button */}
          {page < images.length && (
            <motion.button
              onClick={() => next()}
              className="flex items-center justify-center w-8 h-8 border rounded-full hover:border-0 hover:bg-yellow border-gray-border"
            >
              <i className="fas text-dark fa-caret-right"></i>
            </motion.button>
          )}
        </div>
      </div>
      <Footer index={page} total={images.length} />
    </div>
  );
};

export default CarSlider;

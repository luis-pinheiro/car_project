import { motion } from 'framer-motion';

const XBackground = () => {
  return (
    <div className="absolute w-screen h-screen x-bg " style={{ marginTop: '200px' }}>
      <div className="container grid grid-cols-2 mx-auto ">
        <div className="relative ">
          <img className="absolute mr-auto transform rotate-33" src="./svg/x.svg" alt="x" style={{ top: '-50px' }} />
        </div>
        <div className="grid grid-rows-2 ">
          <div className="relative ">
            <img className="absolute inset-0 w-12 mx-auto transform xl:w-16 rotate-33" src="./svg/x_2.svg" alt="x" />
          </div>
          <div className="">
            <img
              className="relative w-24 mx-auto transform -right-4 lg:-right-170px xl:w-56 xl:-top-7 lg:top-120px sm:-ri sm:w-32 rotate-33 md:-right-24"
              src="./svg/x_3.svg"
              alt="x"
              // animate={{ rotate: 360 }}
              // transition={{
              //   ease: 'linear',
              //   duration: 20,
              //   repeat: Infinity,
              // }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default XBackground;

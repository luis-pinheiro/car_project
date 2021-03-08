import { motion } from 'framer-motion';

const XBackground = () => {
  return (
    <div className="h-screen  x-bg" style={{ marginTop: '150px' }}>
      <div className="container grid grid-cols-2 mx-auto ">
        <div className="relative ">
          <img className="absolute mr-auto transform rotate-33" src="./svg/x.svg" alt="x" style={{ top: '-50px' }} />
        </div>
        <div className="grid grid-rows-2 ">
          <div className="relative ">
            <img className="absolute inset-0 mx-auto transform rotate-33" src="./svg/x_2.svg" alt="x" />
          </div>
          <div className="">
            <motion.img
              className="ml-auto transform rotate-33"
              src="./svg/x_3.svg"
              alt="x"
              animate={{ rotate: 360 }}
              transition={{
                ease: 'linear',
                duration: 20,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default XBackground;

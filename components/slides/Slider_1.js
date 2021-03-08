import { motion } from 'framer-motion';

const Slider_1 = ({ slidersLocation, setSlidersLocation }) => {
  // console.log('slidersLocation -> ', slidersLocation.slider1);
  return (
    <motion.div
      initial={{ x: slidersLocation.slider1 }}
      animate={{ x: '0' }}
      transition={{ duration: '2' }}
      exit={{ x: '100vw' }}
      key={1}
    >
      <img className="w-2/4 mx-auto" src="/img/car/img_car_blue@2x.png" alt="Car" style={{ marginTop: '5%' }} />

      <motion.button
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 2.5,
          type: 'spring',
          stiffness: 400,
        }}
        className="fixed w-20 h-20 text-xs font-bold text-white rounded-full inset-2/4 left border-opacity-60 oswald bg-dark border-yellow border-10"
      >
        BUY NOW
      </motion.button>
    </motion.div>
  );
};

export default Slider_1;

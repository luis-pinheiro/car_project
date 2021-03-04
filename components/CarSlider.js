import Footer from './Footer';

const CarSlider = () => {
  return (
    <div className="fixed h-screen top-28pc car">
      <img className="w-2/4 mx-auto " src="/img/car/Group 41@2x.png" alt="Car" />
      <button className="fixed w-20 h-20 text-xs font-bold text-white rounded-full inset-2/4 left border-opacity-60 oswald bg-dark border-yellow border-10">
        BUY NOW
      </button>
      <div className="container grid grid-cols-3 mx-auto">
        <div className="flex items-center justify-end pr-20">
          <button className="flex items-center justify-center w-8 h-8 border rounded-full hover:border-0 hover:bg-yellow border-gray-border">
            <i className="fas text-dark fa-caret-left"></i>
          </button>
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
          <button className="flex items-center justify-center w-8 h-8 border rounded-full hover:border-0 hover:bg-yellow border-gray-border">
            <i className="fas text-dark fa-caret-right"></i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarSlider;

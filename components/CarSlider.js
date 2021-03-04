const CarSlider = () => {
  return (
    <div className="fixed h-screen top-1/3 car">
      <img className="w-2/4 mx-auto " src="/img/car/Group 41@2x.png" alt="Car" />
      <div className="container grid grid-cols-3 mx-auto">
        <div className=""></div>
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
        <div className=""></div>
      </div>
    </div>
  );
};

export default CarSlider;

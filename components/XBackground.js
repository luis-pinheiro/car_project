const XBackground = () => {
  return (
    <div>
      {/* <div className="w-full border x-bg bg-gray-light" style={{ marginTop: '-513px' }}> */}
      <div className="fixed top-0 w-full h-screen x-bg ">
        <div className="container grid grid-cols-2 mx-auto ">
          <div className="">
            {/* <img className="transform rotate-33" src="./svg/x.svg" alt="x" style={{ marginTop: '-40%' }} /> */}
            <img className="mr-auto transform rotate-33" src="./svg/x.svg" alt="x" style={{ marginTop: '25%' }} />
          </div>
          <div className="">
            {/* <img className="mx-auto" src="./svg/x_2.svg" alt="x" style={{ marginTop: '-20%' }} /> */}
            <img className="mx-auto transform rotate-33" src="./svg/x_2.svg" alt="x" style={{ marginTop: '45%' }} />
            {/* <img className="mx-auto transform rotate-33" src="./svg/x_3.svg" alt="x" style={{ marginTop: '15%' }} /> */}
            <img className="ml-auto transform rotate-33" src="./svg/x_3.svg" alt="x" style={{ marginTop: '10%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default XBackground;

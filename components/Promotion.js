const Promotion = ({ text }) => {
  return (
    <div className="w-full py-3 bg-yellow">
      <p className="flex justify-center text-xs font-bold text-center align-middle oswald">
        <img src="./svg/discount.svg" alt="discount" className="mr-2" />
        {text}
      </p>
    </div>
  );
};

export default Promotion;

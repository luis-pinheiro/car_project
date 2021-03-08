const Promotion = ({ text }) => {
  return (
    <a href="#" className="block w-full py-3 bg-yellow">
      <p className="flex justify-center text-xs font-bold text-center align-middle oswald">
        <img src="./svg/discount.svg" alt="discount" className="mr-2" />
        {text}
      </p>
    </a>
  );
};

export default Promotion;

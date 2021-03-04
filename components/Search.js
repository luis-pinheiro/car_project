const Search = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search _"
        className="w-full px-6 py-4 text-xs font-bold uppercase border rounded-full bg-gray-light border-dark oswald placeholder-dark text-dark"
      />
      <svg
        className="z-10 -ml-10"
        xmlns="http://www.w3.org/2000/svg"
        width="16.707"
        height="16.707"
        viewBox="0 0 16.707 16.707"
      >
        <g id="ico_search" transform="translate(-1208 -147)">
          <g
            id="Ellipse_24"
            data-name="Ellipse 24"
            transform="translate(1208 147)"
            fill="none"
            stroke="#292f33"
            strokeWidth="2"
          >
            <ellipse cx="7.231" cy="7.231" rx="7.231" ry="7.231" stroke="none"></ellipse>
            <ellipse cx="7.231" cy="7.231" rx="6.231" ry="6.231" fill="none"></ellipse>
          </g>
          <line
            id="Line_1"
            data-name="Line 1"
            x2="4.451"
            y2="4.451"
            transform="translate(1219.549 158.549)"
            fill="none"
            stroke="#292f33"
            strokeWidth="2"
          ></line>
        </g>
      </svg>
    </>
  );
};

export default Search;

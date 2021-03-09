import Menu_01 from '../components/Menu_01';
import Logo from '../components/Logo';
import Menu_02 from '../components/Menu_02';
import Search from '../components/Search';
import Menu_03 from '../components/Menu_03';

const Nav = () => {
  return (
    <div className="relative px-5 mx-auto nav " style={{}}>
      <div className="">
        <div className="container grid grid-cols-3 mx-auto">
          <Menu_01 />
          <Logo />
          <Menu_02 />
        </div>
        <div className="container grid w-3/4 mx-auto mt-4 md:w-full md:grid-cols-3">
          <div></div>
          <div className="flex items-center w-3/4 mx-auto -mt-12 sm:mt-0 sm:w-full">
            <Search />
          </div>
          <div className="flex items-center justify-end">
            <Menu_03 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

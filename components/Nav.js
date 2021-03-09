import Menu_01 from '../components/Menu_01';
import Logo from '../components/Logo';
import Menu_02 from '../components/Menu_02';
import Search from '../components/Search';
import Menu_03 from '../components/Menu_03';

const Nav = () => {
  return (
    <div className="relative px-5 nav -mt-1100px" style={{}}>
      <div className="container grid grid-cols-3 mx-auto">
        <Menu_01 />
        <Logo />
        <Menu_02 />
      </div>
      <div className="container grid grid-cols-3 mx-auto mt-4">
        <div></div>
        <div className="flex items-center">
          <Search />
        </div>
        <div className="flex items-center justify-end">
          <Menu_03 />
        </div>
      </div>
    </div>
  );
};

export default Nav;

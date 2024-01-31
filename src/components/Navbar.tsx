import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[50px] text-white items-center px-5">
      <h3 className="font-bold italic">TS Store</h3>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;

import { FaFantasyFlightGames } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start text-3xl ml-7">
  <FaFantasyFlightGames />
    
  </div>
  <div className="navbar-center  ">
    <h1 className="text-3xl font-bold text-amber-950">King Of Words</h1>
  </div>
  <div className="navbar-end">
    <a className="underline cursor-pointer">More Games</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;
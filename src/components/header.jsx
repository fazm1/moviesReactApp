import { useSelector } from "react-redux";
import "./components.css";
import { Link } from "react-router";
function Header() {
   const counterVal = useSelector((state) => state.counter.value);
  return (
    <>
    
      <div className="Navbar">
        <Link to="/"><h2 className="logo">MovieApp</h2></Link>
        <Link to="/watchlist"><span className="watchlist">watchlist <span className="counterNav">{counterVal}</span></span></Link>
      </div>
    </>
  );
}

export default Header;

import "./components.css";
import { Link } from "react-router";
function Header() {
   
  return (
    <>
    
      <div className="Navbar">
        <Link to="/"><h2 className="logo">MovieApp</h2></Link>
        <Link to="/watchlist"><span className="watchlist">watchlist</span></Link>
      </div>
    </>
  );
}

export default Header;

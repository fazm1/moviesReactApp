import { useSelector } from "react-redux";
import "./components.css";
import { Link } from "react-router";
import { useContext } from "react";
import LanguageContext from "../context/language";
function Header() {
   const counterVal = useSelector((state) => state.counter.value);
   const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
        <Link className="navbar-brand mx-3" to="/">
          MovieApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-3">
            <li className="nav-item mt-1">
              <select name="lang" id="lang" defaultValue={"language"} onChange={(e)=>setLanguage(e.target.value)}>
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/watchlist">
                watchlist <span className="counterNav">{counterVal}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

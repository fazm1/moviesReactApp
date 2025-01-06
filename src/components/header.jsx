import { useSelector } from "react-redux";
import "./components.css";
import { Link } from "react-router";
function Header() {
  const counterVal = useSelector((state) => state.counter.value);
  return (
    <>
      {/* <nav class="navbar bg-body-tertiary bg-color red">
        <div class="nav-item container-fluid">
          <Link class="navbar-brand" to="/">
            MovieApp
          </Link>
        </div>
      
        <li class="nav-item container-fluid">
          <select name="lang" id="lang">
            <option value="ar">EN</option>
            <option value="en">AR</option>
          </select>
        </li>

        <div class="nav-item container-fluid">
          <Link class="navbar-brand" to="/watchlist">
          <span className="watchlist">
            watchlist <span className="counterNav">{counterVal}</span>
          </span>
          </Link>
        </div>
      </nav> */}

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
              <select name="lang" id="lang">
                <option value="ar">EN</option>
                <option value="en">AR</option>
              </select>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/watchlist">
                watchlist
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

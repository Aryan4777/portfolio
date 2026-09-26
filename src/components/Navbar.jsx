import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-inner">

        <Link to="/" className="logo">
          Portfolio
        </Link>

        <nav>

          <Link to="/#projects">
            Projects
          </Link>

          <Link to="/#about">
            About
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;
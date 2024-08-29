import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div className="sing_in_up">
            <NavLink to="# ">SIGN IN</NavLink>
            <NavLink to="# ">SIGN UP</NavLink>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="index.html">
            <img
              src="./images/log.png"
              alt="thapNavLink eCommerce logo"
              className="logo"
              width="80%"
              height="auto"
            />
          </NavLink>
        </div>
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie" className="nav-link">
                movie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                contact
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                to="addToCart.html"
                className="nav-link add-to-cart-button"
                id="cartValue"
              >
                <i className="fa-solid fa-cart-shopping"></i> 0
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

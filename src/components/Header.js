import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt=""
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact US</li>
            <li>Cart</li>
            {/* <li><FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" /></li> */}
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
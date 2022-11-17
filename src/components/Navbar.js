import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const { cartAmount } = props;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shoppage">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/shoppingcart">
            Shopping Cart ({cartAmount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

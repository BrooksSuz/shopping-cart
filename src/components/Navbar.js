import NavCart from "./Shop/NavCart";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const { cartAmount, setCartAmount } = props;
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
      <NavCart cartAmount={cartAmount} setCartAmount={setCartAmount} />
    </nav>
  );
};

export default Navbar;

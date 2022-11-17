import NavCart from "./Shop/NavCart";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const { cartAmount, setCartAmount } = props;
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shoppage">
          <li>Shop</li>
        </Link>
      </ul>
      <NavCart cartAmount={cartAmount} setCartAmount={setCartAmount} />
    </nav>
  );
};

export default Navbar;

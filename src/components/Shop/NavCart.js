const NavCart = (props) => {
  const { cartAmount, setCartAmount } = props;

  return (
    <div>
      <div onClick={setCartAmount}>{cartAmount}</div>
    </div>
  );
};

export default NavCart;

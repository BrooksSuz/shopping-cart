import { useRef } from "react";

const Card = () => {
  const inputAmountOfProduct = useRef();

  return (
    <div className="card">
      <label htmlFor="amount-of-product">Number of Items:
        <input
          ref={inputAmountOfProduct}
          type="text"
          id="amount-of-product"
          name="amount-of-product">
        </input>
      </label>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Card;

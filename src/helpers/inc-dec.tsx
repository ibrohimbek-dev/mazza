import React, {useState} from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";

const IncDec = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  const decrease = (e: any) => {
    e.stopPropagation();
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const increase = (e: any) => {
    e.stopPropagation();
    setCartCount(cartCount + 1);
  };
  return (
    <div className="cart-btn-container">
      <BiPlus size={20} onClick={increase} />
      <div className="badge bg-secondary mx-1">{cartCount}</div>
      <AiOutlineMinus size={20} onClick={decrease} />
    </div>
  );
};

export default IncDec;

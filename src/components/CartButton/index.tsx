import IconCart from "@/assets/images/icon-cart.png";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

interface CartButtonProps {
  onClick: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  const { cart } = useContext(CartContext);

  return (
    <button
      className="cursor-pointer relative flex items-center"
      onClick={onClick}
    >
      <img src={IconCart} alt="Ìcone do carrinho de compras" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-error text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cart.length}
        </span>
      )}
    </button>
  );
};

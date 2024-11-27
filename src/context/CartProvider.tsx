import { FC, ReactNode, useReducer } from "react";
import { CartContext } from "./CartContext";
import { CartReducer, initialState } from "./CartReducer";

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
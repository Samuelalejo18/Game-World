import { useContext } from "react";
import { dataContext } from "../../Context/Data.Context";
const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc + el.price, 0);
    return (

        <div ><p>${total}</p></div>

    )

};

export default CartTotal;
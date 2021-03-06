import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actionTypes/cart-action-types";

const cartItem = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(cartItem =>
                cartItem._id !== action.payload._id)
    }
    return state;
}

export default cartItem;
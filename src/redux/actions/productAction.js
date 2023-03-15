import { ActionTypes } from "../constants/action-types"
export const setProducts = (products)=>{
    console.log(products)
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products

    };
};

export const selectedProduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product

    };
};

export const removeselectedProduct = ()=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,

    };
};




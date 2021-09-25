import { combineReducers } from "redux";
import { fetchCategoriesReducer, productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    singleProduct: selectedProductReducer,
    categories: fetchCategoriesReducer,

})
 export default reducers;

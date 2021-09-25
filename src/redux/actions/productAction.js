import axios from "axios"

const URL = "https://fakestoreapi.com/products";

export const fetchProducts = (cat) => async (dispatch) => {
    if (!cat) {
        const res = await axios.get(`${URL}`).catch(err => console.log(err))
        return (
            dispatch({
                type: "FETCH_ALL",
                payload: res.data,
            })
        )
    }
    else {
        const res = await axios.get(`${URL}/category/${cat}`).catch(err => console.log(err))
        return (
            dispatch({
                type: "FETCH_ALL",
                payload: res.data,
            })
        )
    }

}

export const fetchOne = (id) => async (dispatch) => {
    const res = await axios.get(`${URL}/${id}`).catch(err => console.log(err))
    return (
        dispatch({
            type: 'FETCH_ONE',
            payload: res.data,
        })
    )

}

export const fetchCategories = () => async (dispatch) => {
    const res = await axios.get(`${URL}/categories`).catch(err => console.log(err))

    return (
        dispatch({
            type: 'FETCH_CATEGORIES',
            payload: res.data,
        })
    )

}
export const removeProduct = () => {
    return {
        type: "REMOVE_PRODUCT",
    }
}
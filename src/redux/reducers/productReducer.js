const initialState = {
    products: [],

}

const category = [];

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_ALL':
            return { ...state, products: payload }
        default:
            return state;
    }

}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'FETCH_ONE':
            return { ...state, ...payload }
        case 'REMOVE_PRODUCT':
            return {}
        default:
            return state;
    }
}

export const fetchCategoriesReducer = (state = category, { type, payload }) => {
    switch (type) {
        case 'FETCH_CATEGORIES':
            return { ...state, category: payload }
        default:
            return state;

    }
}




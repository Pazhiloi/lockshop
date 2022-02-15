import { LOAD_PRODUCTS, SORT_PRODUCTS, UPDADE_SORT } from "../types/types";

const initialState = {
  all_products: [],
  filtered_products: [],
  _sort: "price-lowest",
  filters: {
    text: "",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const filterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_PRODUCTS: 
     let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      _sort: action.payload
    };
    case SORT_PRODUCTS:
       const { _sort, filtered_products } = state;
       let tempProducts = [...filtered_products];
        if(_sort === 'price-lowest'){
      tempProducts = tempProducts.sort((a, b) => {
        if (a.currentPrice < b.currentPrice) {
          return -1
        }
        if (a.currentPrice > b.currentPrice) {
          return 1
        }
        return 0
      })
    }
    if(_sort === 'price-highest'){
      tempProducts = tempProducts.sort((a, b) => b.currentPrice - a.currentPrice)
    }
    if(_sort === 'name-a'){
      tempProducts = tempProducts.sort((a, b) => a.text.localeCompare(b.text));
    }
    if(_sort === 'name-z'){
      tempProducts = tempProducts.sort((a, b) => b.text.localeCompare(a.text));
    }
    return { ...state, filtered_products: tempProducts };
    case UPDADE_SORT: 
 return { ...state, _sort: action.payload };


    default:
      return state;
  }
}

export default filterReducer;

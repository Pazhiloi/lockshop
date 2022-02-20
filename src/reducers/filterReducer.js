import { product } from "../data";
import {
  ALL_SIZE,
  CLEAR_FILTERS,
  FILTER_BY_CHECKBOX,
  FILTER_BY_COLOR,
  FILTER_BY_RANGE,
  FILTER_BY_TEXT,
  FILTER_PRODUCTS_BY_SIZE,
  LOAD_PRODUCTS,
  SET_ALL_COLORS,
  SET_ALL_MATERIALS,
  SET_MATERIAL,
  SORT_PRODUCTS,
  UPDADE_SORT,
} from "../types/types";

const initialState = {
  all_products: [],
  filtered_products: [],
  _sort: "price-lowest",
  color: "yellow",
  material: "дерево",
  filters: {
    text: "",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
        _sort: action.payload,
        color: action.color,
      };
    case SORT_PRODUCTS:
      const { _sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      if (_sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => {
          if (a.currentPrice < b.currentPrice) {
            return -1;
          }
          if (a.currentPrice > b.currentPrice) {
            return 1;
          }
          return 0;
        });
      }
      if (_sort === "price-highest") {
        tempProducts = tempProducts.sort(
          (a, b) => b.currentPrice - a.currentPrice
        );
      }
      if (_sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.text.localeCompare(b.text)
        );
      }
      if (_sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.text.localeCompare(a.text)
        );
      }
      return { ...state, filtered_products: tempProducts };
    case UPDADE_SORT:
      return { ...state, _sort: action.payload };
    case FILTER_BY_TEXT:
      const { all_products } = state;
      let templateProducts = [...all_products];
      templateProducts = templateProducts.filter((product) => {
        return product.text.toLowerCase().startsWith(action.text);
      });
      return {
        ...state,
        filtered_products: templateProducts,
        filters: {
          ...state.filters,
          text: action.text,
        },
      };
    case FILTER_BY_COLOR:
      let colorProducts = [
        ...state.all_products.filter((product) => {
          return product.color.includes(action.color);
        }),
      ];
      return {
        ...state,
        filtered_products: [...colorProducts],
        color: action.color,
      };
    case SET_MATERIAL:
      let materialProducts = [
        ...state.all_products.filter((product) =>
          product.material.includes(action.material)
        ),
      ];
      return {
        ...state,
        filtered_products: [...materialProducts],
        material: action.material,
      };
    case FILTER_BY_CHECKBOX: 
     let checkboxesProducts = [
        ...state.all_products.filter((product) => {
          const filteredProduct = JSON.stringify(product.availableCategories.sort())
          const filteredAction = JSON.stringify(action.payload.names.sort())
          return filteredProduct === filteredAction
        }),
      ];
      return {
        ...state,
        filtered_products: [...checkboxesProducts],
      };
      case FILTER_PRODUCTS_BY_SIZE:
      let sizesProducts = [
        ...state.all_products.filter((product) => {
          return product.availableSizes.indexOf(action.size) >= 0;
        }),
      ];
      return {
        ...state,
        filtered_products: [...sizesProducts],
        size: action.size,
      };
    case FILTER_BY_RANGE: 
    const {first, second} = action.payload
    let productPrices = [
      ...state.all_products.filter(
        (product) => (first <= product.currentPrice && product.currentPrice <= second)
      ),
    ];
     return {
       ...state,
       filtered_products: [...productPrices],
     };
    case SET_ALL_MATERIALS:
      return { ...state, filtered_products: [...state.all_products] };
    case SET_ALL_COLORS:
      return { ...state, filtered_products: [...state.all_products] };
    case ALL_SIZE:
      return { ...state, filtered_products: [...state.all_products] };
    case CLEAR_FILTERS:
      return {
        ...state,
        filtered_products: [...state.all_products],
        _sort: "price-lowest",
        filters: {
          ...state.filters,
          price: state.filters.max_price,
          text: "",
        },
      };
    default:
      return state;
  }
};

export default filterReducer;

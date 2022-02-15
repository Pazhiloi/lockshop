import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import FilterItem from "../components/FilterItem";
import Product from "../components/Product";
import { catalogFilterList, product } from "../data";
import { LOAD_PRODUCTS, SORT_PRODUCTS, UPDADE_SORT } from "../types/types";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const filtered_items = useSelector((state) => {
    const { filterReducer } = state;
    return filterReducer.filtered_products;
  });
  const sort = useSelector((state) => {
    const { filterReducer } = state;
    console.log(filterReducer._sort);
    return filterReducer._sort
  })
  console.log(filtered_items);

   useEffect(() => {
     dispatch({ type: LOAD_PRODUCTS, payload: product });
   }, [product]);
   
   useEffect(() => {
     dispatch({ type: SORT_PRODUCTS });
   }, [product, sort])
   

  const onUpdateSort = (e) => {
    e.preventDefault();
    const value = e.target.value
    dispatch({ type: UPDADE_SORT, payload: value });
  };
  return (
    <CatalogPageContainer>
      <div className="catalog">
        <div className="container">
          <div className="catalog__title title">
            Накладные электронные замки
          </div>
          <div className="catalog__top">
            <div className="catalog__reset">
              <Button text="Сбросить фильтры" />
            </div>
            <div className="catalog__chosen">Электронные кодовые замки</div>
            <select
              id="sort"
              name="sort"
              value={sort}
              className="catalog__select"
              onChange={onUpdateSort}
            >
              <option value="price-lowest" className="catalog__option">
                price-lowest
              </option>
              <option value="price-highest" className="catalog__option">
                price-highest
              </option>
              <option value="name-a" className="catalog__option">
                name-a
              </option>
              <option value="name-z" className="catalog__option">
                name-z
              </option>
            </select>
          </div>
          <div className="catalog__inner">
            <div className="catalog__filter">
              {catalogFilterList.map(({ id, title }) => (
                <FilterItem key={id} title={title} />
              ))}
            </div>
            <div className="catalog__list">
              {filtered_items.map((item) => (
                <Product key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CatalogPageContainer>
  );
};

const CatalogPageContainer = styled.div`
  .catalog {
    padding: 50px 0;
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px 0;
    }
    &__inner {
      display: flex;
      justify-content: space-between;
    }
    &__list{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  }
`;

export default CatalogPage;




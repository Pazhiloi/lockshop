import React, { useState } from "react";
import styled from "styled-components";
import { arrowTop } from "../images";
import { colors, filterList, materials, sizes } from "../data";
import { useDispatch } from "react-redux";
import Color from "./Color";
import { ALL_SIZE, FILTER_BY_CHECKBOX, FILTER_BY_RANGE, SET_ALL_COLORS, SET_ALL_MATERIALS } from "../types/types";
import Material from "./Material";
import Size from "./Size";
import { Slider } from "@mui/material";
import CheckboxItem from "./CheckboxItem";
const FilterItem = ({ title, names }) => {
  const [height, setHeight] = useState(false);
  const [value, setValue] = useState([0, 1000])
  const dispatch = useDispatch();
  const selectAll = () => {
    dispatch({type: SET_ALL_COLORS})
  }
  const setAllMaterials = () => {
    dispatch({ type: SET_ALL_MATERIALS});
  }

  const selectAllSizes = () => {
    dispatch({ type: ALL_SIZE });
  }
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch({
      type: FILTER_BY_RANGE,
      payload: {
        first: value[0] * 1000,
        second: value[1] * 1000,
      },
    });
  }
  const handleInput = () => {

  }
  const handleCheckbox = (id, e) => {
    const findIdx = names.indexOf(e.target.value)
    if (findIdx > -1) {
      names.splice(findIdx, 1);
    }else{
      names.push(e.target.value);
    }
    dispatch({ type: FILTER_BY_CHECKBOX, payload:{names, id} });
    console.log(names);
  };

  const mapHelper = () => {
    return filterList.map((item) => {
      return (
        <div key={item.id}>
          <CheckboxItem handleCheckbox={handleCheckbox} {...item} />
        </div>
      );
    });
  };

  const mapColors = () => {
    return (
      <Colors>
        <div className="all" onClick={selectAll}>all</div>
        {colors.map((item) => (
          <Color {...item} key={item.id} />
        ))}
      </Colors>
    );
  }
  const mapMaterials = () => {
    return <Materials>
    <div className="all" onClick={setAllMaterials}>все</div>
    {materials.map(item => (
      <Material key={item.id} {...item}/>
    ))}
    </Materials>
  }
  const mapSizes = () => {
    return <Sizes>
    <div className="all" onClick={selectAllSizes}>все</div>
    {sizes.map(item => (
      <Size key={item.id} {...item}/> 
    ))}
    </Sizes>
  }
  const renderList = () => {
    if (title === `Цена`) {
      return (
        <>
          <RangeValues>
            <input onChange={handleInput}  type="text" value={value[0] *1000} />
            <input onChange={handleInput}  type="text" value={value[1] *1000} />
          </RangeValues>
          <RangeSlider>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </RangeSlider>
        </>
      );
    }
    if (title === `Особенности`) {
      return <div>{mapHelper()}</div>;
    }
    if (title === `Цвет`) {
      return <div>{mapColors()}</div>;
    }
    if (title === `Материал`) {
      return <div>{mapMaterials()}</div>;
    }
    if (title === `Размеры`) {
      return <div>{mapSizes()}</div>;
    }
  };
  return (
    <FilterItemContainer>
      <div className={height ? "item active" : "item"}>
        <div className="item__top" onClick={() => setHeight(!height)}>
          <div className="item__title">{title}</div>
          <div className="item__arrow">
            <img src={arrowTop} alt={title} />
          </div>
        </div>
        {}
        <div className={height ? "item__list active" : "item__list"}>
          {height && renderList()}
        </div>
      </div>
    </FilterItemContainer>
  );
};

const FilterItemContainer = styled.div`
  .item {
    margin-bottom: 20px;
    max-height: 26px;
    width: 240px;
    cursor: pointer;
    transition: all 1s ease;
    &.active {
      max-height: 9999px;
    }
    &__list {
      margin-top: 20px;
      opacity: 0;
      transition: all 1s ease;
      &.active {
        opacity: 1;
      }
    }
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const Sizes = styled.div`
div{
  margin-bottom: 10px;
}
`
const Materials = styled.div`
div{
  margin-bottom: 10px;
}
`
const Colors = styled.div`
display: flex;
.all{
  text-transform: uppercase;
}
.color{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
  &.active{
    transform: scale(1.2);
  }
}
`

const RangeSlider = styled.div`
  width: 200px;
  position: relative;
  text-align: center;
  margin: auto 16px;
  input[type="range"] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type="range"]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
`;
const RangeValues = styled.div``;
export default FilterItem;

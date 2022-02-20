import React, { useState } from "react";
import styled from "styled-components";
import { filterList } from "../data";

const CheckboxItem = ({ id, text, amount, handleCheckbox }) => {

  return (
    <CheckboxItemContainer>
      <div className="checkbox__wrapper">
        <input
          className="checkbox"
          type="checkbox"
          onClick={(e) => handleCheckbox(id, e)}
          value={text}
        />
        <p className="checkbox__text">{text}</p>
        <span>{amount}</span>
      </div>
    </CheckboxItemContainer>
  );
};

const CheckboxItemContainer = styled.div`
  .checkbox {
    margin-bottom: 10px;
    &__wrapper {
      display: flex;
      align-items: center;
    }
    &__text,
    &__amount {
      margin-left: 8px;
    }
  }
`;

export default CheckboxItem;

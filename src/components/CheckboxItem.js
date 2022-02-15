import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxItem = ({id, text, amount, isChecked}) => {
  const [checked, setChecked] = useState(false);
  return (
    <CheckboxItemContainer>
      <div className="checkbox__wrapper">
        <input className="checkbox" type="checkbox" name="" id="" />
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
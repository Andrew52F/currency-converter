import React from 'react';
import {CurrList, CurrButton} from '../styles/CurrencyList';
import Dropdown from './Dropdown';


const CurrencyList = ({state, currencies, handleActive, handleAddItem}) => {
  const { usedList, activeId } = state;
  const dropdownOptions = Object.entries(currencies).map(([currencyId, {name}]) => ({value: currencyId,  text: `${name} (${currencyId})`}));
  return (
    <CurrList> 
      {
        usedList.map((currencyId) => {
          return (
            <li
              key={currencyId}
            >
              <CurrButton 
                active={currencyId === activeId ? true : false} 
                onClick={() => handleActive(currencyId)}
              >
                {currencyId}
              </CurrButton>
            </li>
          )
        })
      }
      <Dropdown 
        buttonValue={'+'}
        options={dropdownOptions}
        onClick={handleAddItem}
      />
    
    </CurrList>
  )
}

export default CurrencyList;
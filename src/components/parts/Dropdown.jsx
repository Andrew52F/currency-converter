import React from 'react';
import { Container,  DropdownButton, DropdownContent, DropdownItem} from '../styles/Dropdown';

const Dropdown = ({buttonValue, options, onClick}) => {
  return (
    <Container>
        <DropdownButton>{buttonValue}</DropdownButton>
        <DropdownContent>
          {
            options.map(option => {
              const value = (typeof option === 'object') ? option.value : option;
              const text = (typeof option === 'object') ? option.text : option;

              return (
                <DropdownItem key={value} onClick={() => onClick(value)}>{text}</DropdownItem>
              )
            })
          }
        </DropdownContent>
      </Container>
  )
};
export default Dropdown;
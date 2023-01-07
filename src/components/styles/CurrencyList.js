import styled from "styled-components"

export const CurrList = styled.ul`
  padding: 7px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  background-color: #C7BCA1;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`

export const CurrButton = styled.a.attrs(props => ({
  active: props.active || false
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border: none;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => props.active ? 'white' : 'black'};
  background-color: ${ (props) => props.active ? '#8B7E74' : 'white'};
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${props => !props.active && '#f1f1f1'};
  }
 `
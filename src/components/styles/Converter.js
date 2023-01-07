import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 750px;
  max-width: 750px;
  flex-grow: 0;
  margin: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  background-color: #FDEED9;
  & > * {
    width: 50%;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    flex-basis: 400px;
    max-width: 400px;
    & > * {
    width: 100%;
  }
  }
`
export const StyledHalf = styled.div`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  align-items: stretch;
  padding: 10px;
`

export const StyledInput = styled.input.attrs({type: 'text'})`
  width: inherit;
  outline: none;
  border: none;
  color: black;
  height: 100%;
  padding: 2px;
  font-size: 35px;
  &::placeholder {
    opacity: 1;
    color: grey;
  }
`
export const StyledOutput = styled.span`
  display: flex;
  align-items: center;
  width: inherit;
  max-width: 100%;
  height: 100%;
  padding: 2px;
  font-size: 35px;
  color: ${props => props.active ? 'black' : 'grey'}
`
export const HeaderText = styled.h1`
    color: ${({color}) => color ?? 'black'};
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0 7px;
    font-size: 20px;
  `
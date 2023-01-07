import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 80px;
background: #C7BCA1;
flex-shrink: 0;
`
export const NavBar = styled.nav`
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
flex-basis: 400px;
margin: 0 10px;
background-color: white;
border: 3px solid #FDEED9;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
& a:first-child {
  border-radius: 7px 0 0 7px;
}
& a:last-child {
  border-radius: 0 7px 7px 0;
}
`
export const NavElement = styled(NavLink)`
  display: flex;
  flex-basis: 200px;
  justify-content: center;
  text-decoration: none;
  color: gray;
  font-size: x-large;
  padding: 10px 0;
  flex-grow: 1;
  transition: 0.5s;
  cursor: pointer;
  &.active {
    background-color: #8B7E74;
    color: white;
  }
  &:hover:not(.active) {
    background-color:  #f1f1f1;
  }
`
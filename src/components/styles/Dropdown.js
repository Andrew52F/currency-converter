import styled from "styled-components"
import { CurrButton } from "./CurrencyList"

export const DropdownButton = styled(CurrButton) `
cursor: auto;
`

export const DropdownItem = styled.li`
color: black;
padding: 12px 16px;
list-style-type: none;
text-decoration: none;
display: block;
border-radius: 5px;
&:hover {background-color: #f1f1f1}
`

export const DropdownContent = styled.ul`
display: none;
position: absolute;
right: 0;
max-height: 200px;
margin: 0;
overflow: scroll;
list-style-type: none;
padding: 0;
background-color: #f9f9f9;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
border-radius: 5px;
`

export const Container = styled.div`
position: relative;
display: inline-block;

&:hover ${DropdownContent} { display: block }
&:hover ${DropdownButton} { background-color: #f1f1f1}
` 
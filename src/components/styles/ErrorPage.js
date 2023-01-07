import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-basis: 750px;
  max-width: 750px;
  flex-grow: 0;
  margin: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  background-color: #FDEED9;
  overflow: hidden;
  padding: 60px;
`
export const ErrorMessageTitle = styled.h1`
font-size: 50px;
`
export const ErrorMessage = styled.p`
  color: gray;
  margin: 0;
`
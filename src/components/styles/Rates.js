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
  padding: 10px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  background: #FDEED9;
  padding: 10px;
`
export const DeltaImage = styled.img`
  display: inline;
  width: 1rem;
`

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  width: 100%;
  border: 3px solid #C7BCA1;
  background: #fff8ef;
  border-radius: 10px;
  overflow: hidden;
`

export const Row = styled.tr`
  display: flex;
  flex: 1;
  &:hover > td {
    background-color: #f5f5f5;
  }
`

export const Cell = styled.td`
  display: flex;
  flex: ${props => props.grow || 1};
  border: 1px solid #ddd;
  padding: 8px;
  justify-content: ${props => props.justify || 'start'};
  min-width: 93px;
  align-items: center;
`
export const HeaderCell = styled.th`
  display: flex;
  flex: ${props => props.grow || 1};
  min-width: 93px;
  background: #C7BCA1;
  border: 1px solid #ddd;
  padding: 8px;
  font-weight: bold;
  justify-content: center;
`
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { convertCurrencies } from '../../utils/convertCurrencies';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 3px solid #C7BCA1;
  background-color: white;
  overflow: hidden;
  height: 120px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
`

export const RateSpan = styled.span`
  font-size: 14px;
  color: gray;
`

const  TextContainer = ({firstCurrencyId, secondCurrencyId, currencies, children}) => {
  const firstCurrencyValue = currencies[firstCurrencyId].value;
  const secondCurrencyValue = currencies[secondCurrencyId].value;
  const exampleValue = useMemo(() => convertCurrencies(1, firstCurrencyValue, secondCurrencyValue, currencies), [firstCurrencyValue, secondCurrencyValue, currencies]);
  return (
    <Container>
       {children}
      <RateSpan>{`1 ${firstCurrencyId} = ${exampleValue} ${secondCurrencyId}`}</RateSpan>
    </Container>
  )
}
export default TextContainer;
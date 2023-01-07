import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/converterReducer';
import Dropdown from '../parts/Dropdown';
import { HeaderText } from '../styles/Converter';
import { convertCurrencies } from '../../utils/convertCurrencies';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import circle from '../../assets/circle.svg';

import {Container, HeaderContainer, DeltaImage, Table, Row, Cell, HeaderCell} from '../styles/Rates'


const getDeltaSymbol = (delta) => {
  if (delta === 0) {
    return circle;
  }
  return (delta > 0) ? arrowUp : arrowDown;
}

const Rates = () => {

  const dispatch = useDispatch()
  const converter = useSelector(state => state.converter)
  const currencies = useSelector(state => state.ratesData.currencies);
  const selectedCurrency = currencies[converter.ratesCurrency];
  const dropdownOptions = Object.entries(currencies).map(([currencyId, {name}]) => ({value: currencyId,  text: `${name} (${currencyId})`}));
  const currencyName = `${selectedCurrency.name} (${converter.ratesCurrency})`;
  const handleClick = (newCurrency) => {
    dispatch(actions.setRatesCurrency(newCurrency));
  }

  const tableData = useMemo(() => {
    return Object.entries(currencies)
    .map(([charCode, {name, value, delta}]) => {
      const rate = convertCurrencies(1, value, selectedCurrency.value, currencies);
      const rateDelta = (delta === 0 || selectedCurrency.delta === 0) ? 0 :  convertCurrencies(1, delta, selectedCurrency.delta, currencies);
      return {name, charCode, rate, rateDelta};
    })
    .filter(({charCode}) => charCode !== converter.ratesCurrency);
  }, [currencies, selectedCurrency.value, selectedCurrency.delta, converter.ratesCurrency])
  return (
    <Container>
      <HeaderContainer>

        <HeaderText>{currencyName}</HeaderText>
        <Dropdown
            buttonValue={'Change'}
            options={dropdownOptions}
            onClick={handleClick}
        />
      </HeaderContainer>
      <Table>
        <thead>
          <Row>
            <HeaderCell grow={4}>Name</HeaderCell>
            <HeaderCell grow={2} justify={'center'}>CharCode</HeaderCell>
            <HeaderCell grow={2} justify={'center'}>Rate</HeaderCell>
            <HeaderCell justify={'center'}>Delta</HeaderCell>
          </Row>
        </thead>
        <tbody>
          {tableData.map(({name, charCode, rate, rateDelta}) => (
            <Row key={charCode}>
              <Cell grow={4}>{name}</Cell>
              <Cell grow={2} justify={'center'}>{charCode}</Cell>
              <Cell grow={2} justify={'center'}>{rate}</Cell>
              <Cell justify={'end'}>{rateDelta} <DeltaImage src={getDeltaSymbol(rateDelta)}/></Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
export default Rates;
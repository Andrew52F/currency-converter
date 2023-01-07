import React, {useEffect, useRef, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { Container, StyledHalf, HeaderText, StyledInput, StyledOutput} from '../styles/Converter';
import { actions } from '../../store/converterReducer.js';
import { convertCurrencies } from '../../utils/convertCurrencies';
import CurrencyList from '../parts/CurrencyList';
import TextContainer from '../parts/TextContainer';



const Converter = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(state => state.ratesData.currencies);
  const converter = useSelector(state => state.converter);

  const inputRef = useRef(null);
  const handleInputFocus = () => {
    inputRef.current.focus();
  }
  useEffect(() => {
    handleInputFocus();
  },[converter]);

  const outputValue = useMemo(() => {
    const inputString = converter.inputValue;
    if(inputString === '') {return null};
    const inputNumber = Number(inputString);
    if(isNaN(inputNumber)) {return NaN};
    const activeMain = converter.main.activeId;
    const activeSecondary = converter.secondary.activeId;
    const activeMainValue = currencies[activeMain].value;
    const activeSecondaryValue = currencies[activeSecondary].value;
    const result = convertCurrencies(inputNumber, activeMainValue, activeSecondaryValue, currencies);
    return result;
  }, [converter.inputValue, converter.main.activeId, converter.secondary.activeId, currencies])

  
  const handleActive = (type, currency) => {
    dispatch(actions.setActive({type, currency}))
  };
  const handleAddItem = (type, currency) => {
    dispatch(actions.addOne({type, currency}))
  };
  const handleInputChange = debounce((e) => {
    const inputValue = e.target.value;
    dispatch(actions.saveInputValue(inputValue))
  }, 300);

  return (
    <Container>
      {
        converter.types.map((type) => {
          const [ otherType ] = converter.types.filter(t => t !== type);
          return (
            <StyledHalf key={type}>
              <HeaderText>{currencies[converter[type].activeId].name}</HeaderText>
              <CurrencyList 
                state={converter[type]}
                handleActive={handleActive.bind({}, type)}
                currencies={currencies}
                handleAddItem={handleAddItem.bind({}, type)}
              />
              
               <TextContainer
                onClick={() => type === 'main' && handleInputFocus()}
                firstCurrencyId={converter[type].activeId}
                secondCurrencyId={converter[otherType].activeId}
                currencies={currencies}
              >
                {
                  type === 'main' ? (
                    <StyledInput 
                      ref={inputRef}
                      defaultValue={converter.inputValue}
                      onChange={handleInputChange}
                      placeholder={'Enter the number'}
                    />
                  ): (
                    <StyledOutput
                      active={!!outputValue}
                    >
                      {(outputValue === null) ? 'Result' : (isNaN(outputValue)) ? 'Type number': outputValue}
                    </StyledOutput>
                  )
                    }
                  </TextContainer>
              </StyledHalf> 
          )
        })
      }
    </Container>
  )
}
export default Converter;



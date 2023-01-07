import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  types: ['main', 'secondary'],
  main: {
    usedList: ['RUB', 'USD', 'EUR', 'CNY'],
    activeId: 'RUB', 
  },
  secondary: {
    usedList: ['USD', 'RUB', 'KZT', 'CZK'],
    activeId: 'USD',
  },
  inputValue: '',
  ratesCurrency: 'RUB',
};

const setActive = (state, {payload}) => {
  const {type: currentType, currency: newCurrency} = payload;
  const [otherType] = state.types.filter((type) => type !== currentType);
  if (newCurrency === state[otherType].activeId) {
    const uniqueOtherList = state[otherType].usedList.filter(curr => curr !== newCurrency);
    state[otherType].activeId = uniqueOtherList[0];
  }
  state[currentType].activeId = newCurrency;
}


const ratesSlice = createSlice({
  name: 'converter',
  initialState: initialState,
  reducers: {
    setActive: setActive,
    addOne: (state, {payload}) => {
      const {type, currency} = payload;
      const list = state[type].usedList;
      if(list.includes(currency)) {
        state[type].usedList = list.filter(curr => curr !== currency)
      } else {
        state[type].usedList = list.slice(0, -1);
      }
      state[type].usedList.unshift(currency);
      setActive(state, {payload: {type, currency}});
    },
    saveInputValue: (state, { payload }) => {
      state.inputValue = payload;
    },
    setRatesCurrency: (state, {payload}) => {
      state.ratesCurrency = payload;
    }
  }, 
});


export const { actions } = ratesSlice;
export default ratesSlice.reducer;

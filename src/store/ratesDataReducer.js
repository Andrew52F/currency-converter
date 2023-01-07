import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRates = createAsyncThunk('currencies/fetchRates', async () => {
    const { data } =  await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
    return data;
})

const initialState = {
  state: null,
  fetchError: null,
  date: null,
  currencies: {
    RUB: {
      name: 'Российский рубль',
      value: 1,
      delta: 0,
    },
  },
}

const ratesDataSlice = createSlice({
  name: 'ratesData',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state) => {
        state.state = 'pending';
        state.error = null;
      })
      .addCase(fetchRates.fulfilled, (state, { payload }) => {
        state.state = 'fulfilled';
        state.error = null;
        console.log(payload)
        state.date = Date(payload.Date);
        const normalizedCurrencies = Object.values(payload.Valute)
          .reduce((acc, {CharCode, Nominal, Name, Value, Previous}) => {
            const value = (Value/Nominal).toFixed(4);
            const delta = ((Value - Previous)/Nominal).toFixed(4);
            const currencyData = {
              name: Name,
              value,
              delta: (0.01 > Math.abs(delta)) ? 0 : delta,
            };
            acc[CharCode] = currencyData;
            return acc;
          }, {});
        state.currencies = Object.assign(state.currencies, normalizedCurrencies);
      })
      .addCase(fetchRates.rejected, (state, {payload}) => {
        console.warn('rejected');
        console.log('e message: ', payload);
        state.state = 'rejected';
        state.error = payload;
      })
  },
});


export const { actions } = ratesDataSlice;
export default ratesDataSlice.reducer;

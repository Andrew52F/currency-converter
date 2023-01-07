export const convertCurrencies = (number, mainCurrencyValue, secondaryCurrencyValue, currencies) => {
  return (number * secondaryCurrencyValue / mainCurrencyValue).toFixed(2);
};
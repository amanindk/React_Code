import { createContext } from "react";
import { useState } from "react";
export const CurrencyContext = createContext();
function CurrencyProvider({ children }) {
  const [fromCurrency, setFromCurrency] = useState("USD - United States");
  const [toCurrency, setToCurrency] = useState("AUD - Australia");
  const [firstAmount, setFirstAmount] = useState("");
  const value = {
    fromCurrency,
    setFromCurrency,
    setToCurrency,
    toCurrency,
    setFirstAmount,
    firstAmount,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyProvider;

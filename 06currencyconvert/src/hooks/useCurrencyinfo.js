import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    // fetch(
    //   `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    // )
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ZPZ5Z8XpUz9LvYPsEuIMpa5oH9h24ACfzqUeUSLz`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;

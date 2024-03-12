import "./App.css";
import { useContext, useEffect, useState } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/SelectCountry";
import SwitchCountry from "./components/SwitchCountry";
import { CurrencyContext } from "./context/CurrencyContext";
import axios from "axios";

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    setToCurrency,
    toCurrency,
    firstAmount,
  } = useContext(CurrencyContext);
  console.log(firstAmount);

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  console.log(resultCurrency);

  useEffect(() => {
    if (firstAmount) {
      axios("https://api.freecurrencyapi.com/v1/", {
        params: {
          apikey: "fca_live_ZPZ5Z8XpUz9LvYPsEuIMpa5oH9h24ACfzqUeUSLz",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency,
        },
      })
        .then((response) =>
          setResultCurrency(response.data.data[codeToCurrency])
        )
        .catch((error) => console.log(error));
    }
  }, [firstAmount, fromCurrency, toCurrency]);

  const boxStyles = {
    background: "rgb(223, 230, 233)",
    marginTop: "5rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 4,
    padding: "4rem 2rem",
    boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1);",
  };
  return (
    <Container sx={boxStyles}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Stay Ahead with Accurate Conversions
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
        />
        <SwitchCountry />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>
      {firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
          <Typography>
            {firstAmount} {fromCurrency} =
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginTop: "5px", fontWeight: "bold" }}
          >
            {resultCurrency * firstAmount} {toCurrency}
          </Typography>
        </Box>
      ) : (
        " "
      )}
    </Container>
  );
}

export default App;

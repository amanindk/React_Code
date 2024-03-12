import { Button, Grid } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { CurrencyContext } from "../context/CurrencyContext";
import { useContext } from "react";

function switchCountry() {
  const { fromCurrency, setFromCurrency, setToCurrency, toCurrency } =
    useContext(CurrencyContext);
  const handleSwitch = () => {
     setFromCurrency(toCurrency), setToCurrency(fromCurrency);
  };

  return (
    <Grid item xs={12} md>
      <Button onClick={handleSwitch} xs={{ borderRadius: 1, height: "100%" }}>
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
}

export default switchCountry;

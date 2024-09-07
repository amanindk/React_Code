import { useId } from "react";
import "../App.css";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  currencyDisable = false,
  currencyOptions = [],
  selectCurrency = "usd",
}) {
  const amountInputId = useId();
  return (
    <>
      <div className="amt_curr">
        <div className="currency">
          <label htmlFor={amountInputId} className="crr_name">
            {label}
          </label>
          <input
            id={amountInputId}
            className="input_sel"
            type="number"
            placeholder="amount"
            value={amount}
            disabled={amountDisable}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="currency">
          <p className="crr_name">Currency Type</p>
          <select
            className="input_sel"
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;

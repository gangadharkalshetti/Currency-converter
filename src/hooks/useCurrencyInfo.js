import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!currency) return;

    const Currency = currency.toUpperCase().trim();
    fetch(`https://api.frankfurter.app/latest?from=${Currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("API Response:", res);
        setData(res.rates); // ✅ rates object save करणे
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData(null);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

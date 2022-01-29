import React, { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [status, setStatus] = useState("initial");
  const [result, setResult] = useState(null);

  useEffect(async () => {
    setStatus("loading");
    const response = await fetch(url, options);
    const result = await response.json();

    setResult(result);
    setStatus("finished");
  }, []);

  return [status, result];
}

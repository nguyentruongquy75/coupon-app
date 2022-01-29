import React from "react";
import { Helmet } from "react-helmet";
import MainOffer from "../components/mainOffer/MainOffer";
import useFetch from "../hooks/useFetch";
export default function Lazada() {
  const [status, result] = useFetch(
    "https://useful-coupon-api.herokuapp.com/lazada"
  );

  return (
    <>
      <Helmet>
        <title>Lazada</title>
      </Helmet>
      <div>
        <MainOffer status={status} result={result} title="Lazada" />
      </div>
    </>
  );
}

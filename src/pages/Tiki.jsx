import React from "react";
import { Helmet } from "react-helmet";
import MainOffer from "../components/mainOffer/MainOffer";
import useFetch from "../hooks/useFetch";
export default function Tiki() {
  const [status, result] = useFetch(
    "https://useful-coupon-api.herokuapp.com/tiki"
  );

  return (
    <>
      <Helmet>
        <title>Tiki</title>
      </Helmet>
      <div>
        <MainOffer status={status} result={result} title="Tiki" />
      </div>
    </>
  );
}

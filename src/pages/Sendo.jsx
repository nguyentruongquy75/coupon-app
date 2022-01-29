import React from "react";
import { Helmet } from "react-helmet";
import MainOffer from "../components/mainOffer/MainOffer";
import useFetch from "../hooks/useFetch";
export default function Sendo() {
  const [status, result] = useFetch(
    "https://useful-coupon-api.herokuapp.com/sendo"
  );

  return (
    <>
      <Helmet>
        <title>Sendo</title>
      </Helmet>
      <div>
        <MainOffer status={status} result={result} title="Sendo" />
      </div>
    </>
  );
}

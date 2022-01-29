import React from "react";
import { Helmet } from "react-helmet";
import MainOffer from "../components/mainOffer/MainOffer";
import useFetch from "../hooks/useFetch";
export default function Mytour() {
  const [status, result] = useFetch(
    "https://useful-coupon-api.herokuapp.com/mytour"
  );

  return (
    <>
      <Helmet>
        <title>Mytour</title>
      </Helmet>
      <div>
        <MainOffer status={status} result={result} title="Mytour" />
      </div>
    </>
  );
}

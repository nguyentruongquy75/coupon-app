import React from "react";
import { Helmet } from "react-helmet";
import MainOffer from "../components/mainOffer/MainOffer";
import useFetch from "../hooks/useFetch";
export default function Grab() {
  const [status, result] = useFetch(
    "https://useful-coupon-api.herokuapp.com/grab"
  );

  return (
    <>
      <Helmet>
        <title>Grab</title>
      </Helmet>
      <div>
        <MainOffer status={status} result={result} title="Grab" />
      </div>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import MainOffer from "../components/mainOffer/MainOffer";
import useFetch from "../hooks/useFetch";
export default function Traveloka() {
  const [status, result] = useFetch(
    "https://useful-coupon-api.herokuapp.com/traveloka"
  );

  return (
    <>
      <Helmet>
        <title>Traveloka</title>
      </Helmet>
      <div>
        <MainOffer status={status} result={result} title="Traveloka" />
      </div>
    </>
  );
}

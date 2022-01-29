import React from "react";
import { Helmet } from "react-helmet";
import MainOffer from "../components/mainOffer/MainOffer";
import useFetch from "../hooks/useFetch";
export default function Now() {
  const [status, result] = useFetch(
    "https://useful-coupon-api.herokuapp.com/now"
  );

  return (
    <>
      <Helmet>
        <title>Now</title>
      </Helmet>
      <div>
        <MainOffer status={status} result={result} title="Now" />
      </div>
    </>
  );
}

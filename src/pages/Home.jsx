import React from "react";
import { Helmet } from "react-helmet";

import MainOffer from "../components/mainOffer/MainOffer";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const [status, result] = useFetch("https://useful-coupon-api.herokuapp.com/");

  return (
    <>
      <Helmet>
        <title>Mới nhất</title>
      </Helmet>
      <div>
        <MainOffer status={status} result={result} title="Coupon mới nhất" />
      </div>
    </>
  );
}

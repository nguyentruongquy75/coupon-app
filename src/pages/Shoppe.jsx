import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
export default function Shoppe() {
  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    document.body.append(script);
    script.src =
      "https://promotion-api.masoffer.net/v1/promotion/generate-component?publisher_token=%2F1sPEclbNOO621k2zZO2vQ%3D%3D&widget_id=97502&domain=rutgon.me&priority=fixed&order_type=desc&offer=shopee-kols&aff_sub1=MGG_KOL&aff_sub2=TTM&aff_sub3=&aff_sub4=&v=97502";
  }, []);

  return (
    <>
      <Helmet>
        <title>Shoppe</title>
      </Helmet>
      <div>
        <h1 className="text-center text-xl font-semibold">Shoppe</h1>
        <div className="main__offer">
          <div id="mo-recommend-widget-97502"></div>
        </div>
      </div>
    </>
  );
}

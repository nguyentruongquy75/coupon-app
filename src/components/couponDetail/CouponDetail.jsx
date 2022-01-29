import React, { useEffect } from "react";
import CopyToClipboard from "../useful/CopyToClipboard";

export default function CouponDetail(props) {
  // disable scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = null);
  }, []);

  const copyAndGoToWebsite = () => {
    setTimeout(() => {
      window.open(props.link, "_blank");
    }, 0);
  };

  return (
    <div className="coupon-detail fixed z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white w-[80vw] lg:w-[50vw] max-w-full rounded-lg shadow-couponItem p-4 max-h-[80vh] overflow-y-scroll ">
      <div
        className="absolute top-2 right-2 text-xl py-2 px-3 cursor-pointer"
        onClick={props.hideCouponDetail}
      >
        <i className="fas fa-times"></i>
      </div>
      <div className="grid grid-cols-[4fr_6fr] gap-4 ">
        <div>
          <img src={props.logo} alt={props.discount} />
        </div>
        <div className="flex items-center text-xl font-semibold">
          <h2>{props.discount}</h2>
        </div>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.info }} />
      </div>
      <div className="mt-3">
        {props.code && (
          <div className="px-3 py-2 bg-code rounded-lg text-white text-center ">
            {props.code}
          </div>
        )}
        {props.code && (
          <CopyToClipboard data-clipboard={props.code}>
            <div
              onClick={copyAndGoToWebsite}
              className="px-3 py-2 bg-clipboard rounded-lg text-white text-center mt-2 cursor-pointer"
            >
              Copy Code and go to website
            </div>
          </CopyToClipboard>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Overlay from "../overlay/Overlay";
import CouponDetail from "../couponDetail/CouponDetail";
import CouponItem from "../couponItem/CouponItem";
import Spinner from "../spinner/Spinner";
export default function MainOffer(props) {
  const [couponDetail, setCouponDetail] = useState({});

  const [isDisplayCouponDetail, setIsDisplayCouponDetail] = useState(false);

  const displayCouponDetail = () => setIsDisplayCouponDetail(true);
  const hideCouponDetail = () => setIsDisplayCouponDetail(false);

  const clickOnItemHandler = (item) => {
    setCouponDetail(item);
    displayCouponDetail();
  };
  return (
    <section>
      <h1 className="text-center text-xl font-semibold">{props.title}</h1>
      {props.status === "loading" && (
        <div className="text-center">{<Spinner />}</div>
      )}
      <div className="main__offer mt-3 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {props.status === "finished" &&
          props.result.map((item, index) => (
            <CouponItem
              onClick={() => clickOnItemHandler(item)}
              {...item}
              key={index}
            />
          ))}

        {isDisplayCouponDetail && (
          <CouponDetail hideCouponDetail={hideCouponDetail} {...couponDetail} />
        )}

        {isDisplayCouponDetail && <Overlay onClick={hideCouponDetail} />}
      </div>
    </section>
  );
}

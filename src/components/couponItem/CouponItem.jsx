import React from "react";

export default function CouponItem(props) {
  return (
    <div
      onClick={props.onClick}
      className="coupon__item sm:mt-0 cursor-pointer grid grid-cols-[3fr_7fr] gap-3 bg-white rounded-lg mt-4 p-2 shadow-couponItem leading-5"
    >
      <div className="flex items-center">
        <img className="object-cover" src={props.logo} alt={props.discount} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-semibold">{props.discount}</h2>
        <div className="text-sm">
          <div dangerouslySetInnerHTML={{ __html: props.info }} />
        </div>
      </div>
    </div>
  );
}

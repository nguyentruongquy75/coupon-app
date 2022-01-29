import React from "react";

export default function Overlay(props) {
  return (
    <div
      onClick={props.onClick}
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] z-[1]"
    ></div>
  );
}

import React from "react";

export default function CopyToClipboard(props) {
  const copyToCliboard = () => {
    navigator.clipboard.writeText(props["data-clipboard"]);
  };
  return <div onClick={copyToCliboard}>{props.children}</div>;
}

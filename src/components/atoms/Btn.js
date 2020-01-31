import React from "react";

export default function Btn({ text }) {
  return (
    <div className="mainBtn">
      <button type="button">{text}</button>
    </div>
  );
}

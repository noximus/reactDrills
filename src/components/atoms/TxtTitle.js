import React from "react";

function TxtTitle(props) {
  const { text } = props;
  return (
    <div>
      <div className="title">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TxtTitle;

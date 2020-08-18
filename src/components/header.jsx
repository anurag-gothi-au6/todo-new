import React from "react";
import "../styles/header.css";
const header = () => {
  return (
    <div className="header">
      <img src="https://img.icons8.com/ios-glyphs/25/000000/medium-connection.png" alt='signal' />{" "}
      <p>9:41 AM</p>
      <img src="https://img.icons8.com/small/30/000000/full-battery.png" alt='battery'/>{" "}
    </div>
  );
};

export default header;

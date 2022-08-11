import React from "react";
import { Spin } from "antd";

const Loader = () => (
  <div className="gradient-bg-welcome huge-space">
    <div className="loader">
      <Spin />
    </div>
  </div>
);

export default Loader;

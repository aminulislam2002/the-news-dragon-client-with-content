import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary text-center py-4 my-4">
      <h4 className="text-white">Q-Zone</h4>
      <img className="w-75" src={qzone1} alt="" />
      <img className="w-75" src={qzone2} alt="" />
      <img className="w-75" src={qzone3} alt="" />
    </div>
  );
};

export default QZone;

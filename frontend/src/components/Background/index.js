import React from "react";
import "./bg.css";
import { BgWrapper } from "./BackgroundElements";
const Background = () => {
  return (
    <BgWrapper>
      <div className="hot-fix">
        <ul id="scene" data-friction-x="0.03" data-friction-y="0.05">
          <li className="layer" id="layer-1" data-depth="0.15">
            <div className="orange-radial img" id="img-1"></div>
          </li>
          <li className="layer" id="layer-2" data-depth="0.25">
            <div className="purple-radial img" id="img-2"></div>
          </li>
          <li className="layer" id="layer-3" data-depth="0.45">
            <div className="orange-radial-2 img" id="img-3"></div>
          </li>
          <li className="layer" id="layer-3" data-depth="0.45">
            <div className="purple-radial-2 img" id="img-4"></div>
          </li>
        </ul>
      </div>
    </BgWrapper>
  );
};

export default Background;

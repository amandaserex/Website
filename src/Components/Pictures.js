import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper
import air from "./picsVideos/air.jpeg"
import blue from "./picsVideos/blue.jpeg"
import iv from "./picsVideos/iv.jpeg"
import snow from "./picsVideos/snow.jpeg"
import sun from "./picsVideos/sun.jpeg"
import sunset from "./picsVideos/sunset.jpeg"
import IMG_5940 from "./picsVideos/IMG_5940.jpeg"
import IMG_7356 from "./picsVideos/IMG_7356.jpeg"
import IMG_5727 from "./picsVideos/IMG_5727.jpeg"
import IMG_5992 from "./picsVideos/IMG_5992.jpeg"
import IMG_6060 from "./picsVideos/IMG_6060.jpeg"
import IMG_6070 from "./picsVideos/IMG_6070.jpeg"
function Pictures() {
  return (
    <div className="body-pic">
      <SRLWrapper>
        <div>
        <SRLWrapper>
      <a href={air} data-attribute="SRL"><img src={air} alt=""/></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={sun} data-attribute="SRL"><img src={sun} alt=""  /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={iv} data-attribute="SRL"><img src={iv} alt=""  /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={snow}data-attribute="SRL"><img src={snow} alt="" /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={sunset} data-attribute="SRL"><img src={sunset} alt="" /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={blue} data-attribute="SRL"><img src={blue} alt="" /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={IMG_5940} data-attribute="SRL"><img src={IMG_5940} alt="" /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={IMG_5727} data-attribute="SRL" ><img src={IMG_5727} alt="" /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={IMG_7356} data-attribute="SRL"><img src={IMG_7356} alt="" /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={IMG_6060} data-attribute="SRL"><img src={IMG_6060} alt="" /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={IMG_6070} data-attribute="SRL"><img src={IMG_6070} alt="" /></a>
      </SRLWrapper>
      </div><div>
      <SRLWrapper>
      <a href={IMG_5992} data-attribute="SRL"><img src={IMG_5992} alt=""  /></a>
      </SRLWrapper>
      </div>
      </SRLWrapper>
    </div>
  );
}
 
export default Pictures;
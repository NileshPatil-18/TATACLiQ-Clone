import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";

const Banner = () => {
  return (
    <div className="w-100 mx-auto mt-3 " style={{ maxWidth: "1200px" }}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={false}
        stopOnHover={true}
      >
        <div>
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/63923663568926.jpg"
            className="rounded-3 w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Sale Banner 1"
          />
        </div>
        <div>
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/63923663110174.jpg"
            className="rounded-3 w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Sale Banner 2"
          />
        </div>
        <div>
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/63923663503390.jpg"
            className="rounded-3 w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Sale Banner 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

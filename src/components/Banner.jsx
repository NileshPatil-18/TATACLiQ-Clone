import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import React from "react";

const Banner = () => {
  return (
    <div className="container-fluid mt-3">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000} // Faster transitions for dynamic feel
        showStatus={false}
        showIndicators={true}
        stopOnHover={true}
        transitionTime={800} // Smooth transitions
      >
        {/* Banner 1 */}
        <div>
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/63923663568926.jpg"
            className="rounded-3 w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Sale Banner 1"
          />
        </div>

        {/* Banner 2 */}
        <div>
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/63923663110174.jpg"
            className="rounded-3 w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Sale Banner 2"
          />
        </div>

        {/* Banner 3 */}
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

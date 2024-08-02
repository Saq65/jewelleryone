import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function SecondSlider() {
  return (
    <div>
      <div className="secondslider">
        <Swiper
          navigation={false}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
          style={{ height: "300px" }}
        >
          <SwiperSlide>
            <div className="card">
              <span className="sold">SOLD OUT</span>
              <img src="\Assests\Images\1.webp" alt="" />
            </div>
            <div>
              <p className="text-center">Diamond Crescent Earrings</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="\Assests\Images\2.avif" alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="text-center">Jashankir Earrings</span>
              <span className="text-center text-secondary">
                Sale price€840,00
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="\Assests\Images\6.avif" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span className="text-center">Beaded Crescent Necklace</span>
              <span className="text-secondary text-center">
                Sale price€2.860,00
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <span className="sold">SOLD OUT</span>
              <img src="\Assests\Images\1.webp" alt="" />
            </div>
            <div>
              <p className="text-center">Diamond Crescent Earrings</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="\Assests\Images\2.avif" alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="text-center">Jashankir Earrings</span>
              <span className="text-center text-secondary">
                Sale price€840,00
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="\Assests\Images\6.avif" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span className="text-center">Beaded Crescent Necklace</span>
              <span className="text-secondary text-center">
                Sale price€2.860,00
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SecondSlider;

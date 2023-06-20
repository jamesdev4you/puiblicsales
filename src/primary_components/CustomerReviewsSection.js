import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import "../index.css";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function CustomerReviewsSection({ slides }) {
  const { ref, inView } = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(to bottom, rgba(118, 32, 27, 1), rgba(100, 27, 14, 1))",
      }}
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="box"
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            background:
              "linear-gradient(to bottom, rgba(118, 32, 27, 1), rgba(100, 27, 14, 1))",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContant: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px", lg: "50px" },
              textAlign: "center",
              paddingBottom: "40px",
              color: "white",
              fontFamily: "Ubuntu",
            }}
          >
            Customer Reviews
          </Typography>
          <Swiper
            style={{
              height: "747px",
              maxWidth: "40%",
              backgroundColor: "rgba(0,0,0, .9)",
              border: "3px solid #DD571C",
              borderRadius: "50px",
            }}
            grabCursor
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            navigation
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {slides.map((slide) => {
              return (
                <SwiperSlide
                  key={slide}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "red",
                      height: "300px",
                      width: "300px",
                      borderRadius: "50%",
                      backgroundImage: `url(${slide.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                  <Typography sx={{ paddingTop: "20px", fontSize: "2em" }}>
                    ⭐⭐⭐⭐⭐
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "2em",
                      fontFamily: "Ubuntu",
                    }}
                  >
                    {slide.name}
                  </Typography>
                  <Typography
                    sx={{
                      width: "250px",
                      textAlign: "center",
                      fontSize: "1.2em",
                      color: "white",
                      fontFamily: "Normal",
                    }}
                  >
                    {slide.desc}
                  </Typography>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </motion.div>
    </Box>
  );
}

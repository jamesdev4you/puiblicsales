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

export default function CustomerReviewsSection({ slides }) {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 2.3, bounce: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);

  return (
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
      ref={ref}
    >
      <motion.div
        animate={animation}
        style={{ width: "100%", minWidth: "1000px", height: "100%" }}
      >
        <Typography
          sx={{ fontSize: "38px", textAlign: "center", paddingBottom: "40px" }}
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
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          slidesPerView={1}
          pagination={{ clickable: true }}
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
                <Typography sx={{ color: "white", fontSize: "2em" }}>
                  {slide.name}
                </Typography>
                <Typography
                  sx={{
                    width: "250px",
                    textAlign: "center",
                    fontSize: "1.2em",
                    color: "white",
                  }}
                >
                  {slide.desc}
                </Typography>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </Box>
  );
}

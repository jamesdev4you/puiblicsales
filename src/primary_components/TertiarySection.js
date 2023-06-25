import { React, useEffect } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function TertiarySection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(to bottom, rgba(90, 34, 7, 1), rgba(154, 72, 4, 1))",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Box
        sx={{
          width: "60%",
          minWidth: "450px",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <motion.div
          animate={controls}
          variants={squareVariants}
          initial="hidden"
        >
          <Grid
            ref={ref}
            container
            spacing={2}
            sx={{ width: "80%", height: "auto", margin: "auto" }}
          >
            <Grid item xs={12}>
              <Card
                sx={{
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "5px solid #DD571C",
                  backgroundColor: "rgba(13, 4, 0, 1)",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    textAlign: "center",
                    paddingRight: "11%",
                    color: "white",
                  }}
                >
                  <SupportAgentIcon sx={{ height: "auto", width: "11%" }} />
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "1em",
                      fontFamily: "Ubuntu",
                    }}
                  >
                    Chariot offers exceptional customer service support with its
                    unparalleled assistance and efficiency.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "5px solid #DD571C",
                  backgroundColor: "rgba(13, 4, 0, 1)",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    textAlign: "center",
                    paddingRight: "11%",
                    color: "white",
                  }}
                >
                  <BusinessIcon sx={{ height: "auto", width: "11%" }} />
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "1em",
                      fontFamily: "Ubuntu",
                    }}
                  >
                    Chariot provides invaluable support and driving success
                    through its efficiency and automation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "5px solid #DD571C",
                  backgroundColor: "rgba(13, 4, 0, 1)",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    textAlign: "center",
                    paddingRight: "11%",
                    color: "white",
                  }}
                >
                  <LanguageIcon
                    sx={{ height: "auto", width: "10%", minWidth: "50px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1em",
                      fontFamily: "Ubuntu",
                      textAlign: "left",
                    }}
                  >
                    Chariot offers exceptional customer service support with its
                    unparalleled assistance and efficiency.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      <Button
        variant="contained"
        size="large"
        sx={{
          border: "1px solid white",
          boxShadow: 0,
          color: "white",
          width: "12%",
          minWidth: "250px",
          background: "#702321",
          margin: "20px auto",
          "&:hover": {
            opacity: ".8",
            background: "#5D2012",
          },

          fontFamily: "Ubuntu",
        }}
      >
        Begin your journey!
      </Button>
    </Box>
  );
}

import { React, useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "../assets/screen.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SpeedIcon from "@mui/icons-material/Speed";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import "./styles.css";
import "../index.css";

export default function SecondarySection() {
  const [state, setState] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animationPic = useAnimation();

  useEffect(() => {
    if (inView) {
      setState(true);
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 2.3, bounce: 0.3 },
      });
      animationPic.start({
        x: 0,
        transition: { type: "tween", duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        x: state ? "0" : "-100vw",
      });
      animationPic.start({
        x: state ? "0" : "-100vw",
      });
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        background:
          "linear-gradient(to bottom, rgba(0, 0, 2, 1), rgba(90, 34, 7, 1))",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        className="styled-font-heading"
        sx={{
          fontFamily: "Ubuntu",
          color: "white",
          textAlign: "center",
          fontSize: { xs: "30px", md: "40px", lg: "50px" },
          fontWeight: "600",
          padding: "50px 0px",
          width: "80%",
        }}
      >
        Benefits of Chariots Adaptability
      </Typography>

      <Box
        sx={{
          width: "80%",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "start",
          justifyContent: "center",
          gap: "60px",
          paddingTop: "50px",
          paddingBottom: "50px",
          marginBottom: "50px",
        }}
        ref={ref}
      >
        <motion.div
          animate={animationPic}
          style={{ height: "57.5vh", width: "auto" }}
        >
          <Box
            sx={{
              width: "auto",
              borderRadius: "10px",
              minWidth: "240px",
              height: "100%",
              border: "3px solid #DD571C",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
            }}
          />
        </motion.div>
        <Grid
          container
          spacing={2}
          sx={{ minWidth: "300px", width: "40%", height: "auto" }}
        >
          <Grid item xs={12}>
            <motion.div animate={animation}>
              <Card>
                <CardContent
                  sx={{
                    border: "3px solid #DD571C",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "center",
                    backgroundColor: "rgba(13, 4, 0, 1)",
                  }}
                >
                  <AccessAlarmIcon sx={{ color: "white" }} />
                  <Typography
                    className="styled-font-heading"
                    sx={{ color: "white", fontFamily: "Normal" }}
                  >
                    Chariot, the AI bot, streamlines processes, integrates with
                    systems, analyzes data, and responds quickly, saving
                    businesses time and improving efficiency with its automation
                    capabilities.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div animate={animation}>
              <Card>
                <CardContent
                  sx={{
                    border: "3px solid #DD571C",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "center",
                    backgroundColor: "rgba(13, 4, 0, 1)",
                  }}
                >
                  <AttachMoneyIcon sx={{ color: "white" }} />
                  <Typography
                    className="styled-font-heading"
                    sx={{ color: "white", fontFamily: "Normal" }}
                  >
                    Chariot, the innovative AI bot, revolutionizes businesses by
                    automating tasks, streamlining processes, and improving
                    productivity, ultimately increasing profitability and
                    driving financial success for organizations.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div animate={animation}>
              <Card>
                <CardContent
                  sx={{
                    border: "3px solid #DD571C",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "center",
                    backgroundColor: "rgba(13, 4, 0, 1)",
                  }}
                >
                  <SpeedIcon sx={{ color: "white" }} />
                  <Typography
                    className="styled-font-heading"
                    sx={{ color: "white", fontFamily: "Normal" }}
                  >
                    Chariot, the remarkable AI bot, impresses with its
                    lightning-fast speed, unwavering consistency, and
                    user-friendly interface, providing businesses with an
                    exceptional tool that is both efficient and effortless to
                    utilize.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Button
            variant="contained"
            size="large"
            sx={{
              border: "1px solid white",
              boxShadow: 0,
              color: "white",
              width: "30%",
              minWidth: "200px",
              background: "#702321",
              margin: "20px auto",
              fontFamily: "Ubuntu",
              "&:hover": {
                opacity: ".8",
                background: "rgba(112, 35, 33, .6)",
              },
            }}
          >
            Learn More!
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

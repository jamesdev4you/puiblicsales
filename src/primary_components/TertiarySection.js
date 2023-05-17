import { React, useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "../assets/screen.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

export default function TertiarySection() {
  const [state, setState] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setState(true);
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        x: state ? "0" : "-100vw",
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
        ref={ref}
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
        <Grid container spacing={2} sx={{ width: "80%", height: "auto" }}>
          <Grid item xs={12}>
            <motion.div animate={animation}>
              <Card
                sx={{
                  height: "150px",
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
                    gap: "10px",
                    textAlign: "center",
                    paddingRight: "11%",
                    color: "white",
                  }}
                >
                  <AccessAlarmIcon sx={{ height: "auto", width: "11%" }} />
                  <Typography sx={{ fontSize: "1.2em" }}>
                    No more being buried in emails and sending inconsistent
                    information! Available as a Google Chrome Plug-In or
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <motion.div animate={animation}>
              <Card
                sx={{
                  height: "150px",
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
                    gap: "10px",
                    textAlign: "center",
                    paddingRight: "11%",
                    color: "white",
                  }}
                >
                  <AccessAlarmIcon sx={{ height: "auto", width: "11%" }} />
                  <Typography sx={{ fontSize: "1.2em" }}>
                    No more being buried in emails and sending inconsistent
                    information! Available as a Google Chrome Plug-In or
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div animate={animation}>
              <Card
                sx={{
                  height: "150px",
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
                    gap: "10px",
                    textAlign: "center",
                    paddingRight: "11%",
                    color: "white",
                  }}
                >
                  <AccessAlarmIcon
                    sx={{ height: "auto", width: "10%", minWidth: "50px" }}
                  />
                  <Typography sx={{ fontSize: "1.2em" }}>
                    No more being buried in emails and sending inconsistent
                    information! Available as a Google Chrome Plug-In or
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      <motion.div animate={animation}>
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
              background: "rgba(112, 35, 33, .6)",
            },
          }}
        >
          Begin your journey!
        </Button>
      </motion.div>
    </Box>
  );
}

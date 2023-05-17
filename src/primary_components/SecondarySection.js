import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "../assets/screen.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import "./styles.css";

export default function SecondarySection() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animationPic = useAnimation();

  useEffect(() => {
    if (inView) {
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
        x: "-100vw",
      });
      animationPic.start({
        x: "-100vw",
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
          color: "white",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "600",
          padding: "50px 0px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
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
        <motion.div animate={animationPic}>
          <Box
            sx={{
              width: "16.5%",
              borderRadius: "10px",
              minWidth: "240px",
              height: "50vh",
              border: "3px solid #DD571C",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
              width: "100%",
              height: "50vh",
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
                    sx={{ color: "white" }}
                  >
                    More powerful than just a nudge! QuantumSMS supports
                    outbound or inbound campaigns and includes a drag and drop
                    flow-builder. Your customers are able to respond and
                    communicate with either the bot or engage with a live agent
                    in a 1:1 SMS exchange to get the answers they need in the
                    palm of their hand.
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
                  <AccessAlarmIcon sx={{ color: "white" }} />
                  <Typography
                    className="styled-font-heading"
                    sx={{ color: "white" }}
                  >
                    No more being buried in emails and sending inconsistent
                    information! Available as a Google Chrome Plug-In or
                    Microsoft Outlook Add-In, QuantumMail will enable your bot
                    to read inbound emails and draft responses using the
                    knowledge within your bot's brain.
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
                  <AccessAlarmIcon sx={{ color: "white" }} />
                  <Typography
                    className="styled-font-heading"
                    sx={{ color: "white" }}
                  >
                    Staff shortages and long hold times got you down?! Integrate
                    your IvyQuantum™ bot with the telephony system of your
                    choice and have the bot answer natural language questions
                    via phone.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Button
            variant="contained"
            size="large"
            sx={{
              border: "1px solid #DD571C",
              boxShadow: 0,
              color: "black",
              width: "30%",
              minWidth: "200px",
              background: "#702321",
              margin: "20px auto",
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

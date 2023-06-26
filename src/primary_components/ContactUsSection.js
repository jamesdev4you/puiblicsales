import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function ContactUsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bbool0l",
        "template_utscod7",
        form.current,
        "4_NE7-Wk3G8d8tgmG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          "linear-gradient(to bottom, rgba(100, 27, 14, 1), rgba(100, 27, 14, .7))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <motion.div animate={controls} variants={squareVariants} initial="hidden">
        <Card
          ref={ref}
          style={{
            maxWidth: "850px",
            marginBottom: "50px",
            marginRight: "auto",
            marginLeft: "auto",
            padding: "20px 5px",
            border: "3px solid #DD571C",
            background: "#0D0400",
            borderRadius: "50px",
            margin: "13px",
          }}
        >
          <CardContent sx={{ color: "white" }}>
            <Typography gutterBottom variant="h5" sx={{ fontFamily: "Ubuntu" }}>
              Contact Us
            </Typography>
            <Typography sx={{ paddingBottom: "15px", fontFamily: "Ubuntu" }}>
              Once you press submit, we will get your information and contact
              you within 24 hours!
            </Typography>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                      },
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    name="user_firstname"
                    label="First Name"
                    placeholder="Enter First Name"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                      },
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    name="user_lastname"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                      },
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    type="email"
                    name="user_email"
                    label="Email"
                    placeholder="Enter email"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                      },
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    type="number"
                    name="user_phone"
                    label="Number"
                    placeholder="Enter Phone Number"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    sx={{
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root": {
                        color: "white",
                      },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                      },
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Enter information about your issue here"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} margin={"auto"} paddingitem>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      fontFamily: "Ubuntu",
                      width: "100%",
                      height: "80%",
                      margin: "auto",
                      color: "white",
                      border: "1px solid white",
                      background: "#702321",
                      "&:hover": {
                        opacity: ".8",
                        background: "#5D2012",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

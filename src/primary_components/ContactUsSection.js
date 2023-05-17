import React, { useRef } from "react";
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactUsSection() {
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
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        background:
          "linear-gradient(to bottom, rgba(100, 27, 14, 1), rgba(100, 27, 14, .7))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContant: "center",
      }}
    >
      <Card
        style={{
          maxWidth: "850px",
          marginBottom: "50px",
          marginRight: "auto",
          marginLeft: "auto",
          padding: "20px 5px",
          border: "3px solid #DD571C",
          background: "black",
          borderRadius: "50px",
          margin: "13px",
        }}
      >
        <CardContent sx={{ color: "white" }}>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>
          <Typography sx={{ paddingBottom: "15px" }}>
            Once you press submit, we will get your information and contact you
            within 24 hours!
          </Typography>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  sx={{
                    backgroundColor: "white",
                    color: "grey",
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
                  sx={{ backgroundColor: "white" }}
                  name="user_lastname"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  sx={{ backgroundColor: "white" }}
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
                  sx={{ backgroundColor: "white" }}
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
                  sx={{ backgroundColor: "white" }}
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
              <Grid xs={12} item>
                <Button
                  type="submit"
                  value="Send"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

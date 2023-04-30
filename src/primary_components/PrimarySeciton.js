import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "../assets/PrimaryBackground.jpg";
import "./styles.css";
import { motion } from "framer-motion";

export default function PrimarySeciton() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <motion.div
        sx={{ height: "70px", width: "70px" }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <SmartToyIcon sx={{ height: "70px", width: "70px" }} />
        {/* place your icon here. To Speed up or Slow down animation change duration in motion.div! */}
      </motion.div>
      <Typography
        className="styled-font-heading"
        sx={{
          color: "neon",
          fontSize: "2.5em",
          fontWeight: "600",
          textAlign: "center",
          width: "20%",
          minWidth: "400px",
        }}
      >
        Connect, Profit, & Save with Salesbot
      </Typography>
      <Typography
        className="styled-font-p"
        sx={{
          fontSize: "1.5rem",
          fontWeight: "500",
          width: "30%",
          minWidth: "360px",
          textAlign: "center",
        }}
      >
        Tools you need to create AI chatbots, and an engine to enhance your
        experience with advanced AI models.
      </Typography>
      <Button
        className="styled-font-p"
        variant="contained"
        size="large"
        sx={{
          color: "white",
          border: "1px solid white",
          background: "linear-gradient(#9198e5, #e66465);",
          marginTop: "30px",
          transition: "background 1s, color 1s",
          width: "150px",
          "&:hover": {
            opacity: ".7",
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
}

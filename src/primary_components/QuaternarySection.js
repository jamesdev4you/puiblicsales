import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import PeopleIcon from "@mui/icons-material/People";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BusinessIcon from "@mui/icons-material/Business";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import "./styles.css";
import "../index.css";

export default function QuaternarySection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(to bottom, rgba(154, 72, 4, 1),rgba(118, 32, 27, 1))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "40%",
          height: "50vh",
          minWidth: "450px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "white",

              fontFamily: "Ubuntu",
            }}
          >
            With SalesBot,
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Ubuntu",
            }}
          >
            lorem ipsum lorem lor
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Ubuntu",
            }}
          >
            lorem ipsum lorem
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "1.5em",
              width: "60%",
              margin: "5px 0 40px 0",
              fontFamily: "Normal",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusan. Sed unde omn unde omnis iste error sit.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            placeholder="Enter Email Here."
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
              width: "80%",
              margin: "0",
              padding: "0",
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: "30%",
              height: "80%",
              color: "white",
              border: "1px solid white",
              background: "#702321",
              "&:hover": {
                opacity: ".8",
                background: "#5D2012",
              },
            }}
          >
            Sign up
          </Button>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginTop: "10px",

            color: "white",
          }}
        >
          <Typography sx={{ fontFamily: "Normal" }}>
            <CheckIcon />
            14 Free Day Trial
          </Typography>

          <Typography sx={{ fontFamily: "Normal" }}>
            <CheckIcon />
            No Credit Card Needed
          </Typography>

          <Typography sx={{ fontFamily: "Normal" }}>
            <CheckIcon />
            Money Back Guaranteed
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xl: "40%", xs: "none" },
          height: "50vh",
          paddingTop: "100px",
          display: { xs: "none", xl: "flex" },
          flexDirection: "row",
        }}
      >
        <motion.div
          animate={{ rotate: [0, 5, 5, 0] }}
          transition={{
            delay: 4,
            repeat: Infinity,
            repeatDelay: 3,
            duration: 1,
          }}
        >
          <PeopleIcon sx={{ width: "100px", height: "100px" }} />
        </motion.div>
        <motion.div
          initial={{ y: "-20%", x: "120%" }}
          animate={{ x: ["-130%", "980%", "980%", "-130%"] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 0 }}
        >
          <MonetizationOnIcon sx={{ width: "70px", height: "70px" }} />
        </motion.div>
        <motion.div
          initial={{ x: "-70%", y: "0" }}
          animate={{ x: ["-70%", "480%", "480%", "-70%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <SmartToyIcon sx={{ width: "100px", height: "100px" }} />
        </motion.div>
        <motion.div
          initial={{ x: "500%" }}
          animate={{ rotate: [0, -5, -5, 0] }}
          transition={{
            delay: 2.5,
            repeat: Infinity,
            repeatDelay: 3,
            duration: 1,
          }}
        >
          <BusinessIcon sx={{ width: "100px", height: "100px" }} />
        </motion.div>
      </Box>
    </Box>
  );
}

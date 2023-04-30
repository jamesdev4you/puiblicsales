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

export default function QuaternarySection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(to bottom, rgba(254, 137, 25, .8), rgba(213, 124, 121, 1))",
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
            sx={{ textAlign: "center", fontSize: "2.0rem", fontWeight: "bold" }}
          >
            With SalesBot,
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "2.0rem", fontWeight: "bold" }}
          >
            lorem ipsum lorem lor
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "2.0rem", fontWeight: "bold" }}
          >
            lorem ipsum lorem
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.1em",
              width: "40%",
              margin: "5px 0 40px 0",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusan. Sed unde omn unde omnis iste error sit.
          </Typography>
        </Box>
        <Box sx={{ width: "60%", display: "flex", gap: "10px" }}>
          <TextField
            id="outlined-basic"
            placeholder="Enter Email Here."
            variant="outlined"
            sx={{ width: "70%", margin: "0", padding: "0" }}
          />
          <Button
            variant="contained"
            sx={{
              color: "black",
              background:
                "linear-gradient( rgba(187, 73, 0, 0.6), rgba(240, 158, 121, 0.8))",
              "&:hover": {
                opacity: ".8",
                background:
                  "linear-gradient( rgba(187, 73, 0, 0.4), rgba(240, 158, 121, 0.8))",
              },
            }}
          >
            Sign up Free
          </Button>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <CheckIcon />
          <Typography>14 Free Day Trial</Typography>
          <CheckIcon />
          <Typography>No Credit Card Needed</Typography>
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
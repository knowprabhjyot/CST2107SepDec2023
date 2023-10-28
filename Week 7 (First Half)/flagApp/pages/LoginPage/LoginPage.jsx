import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebaseConfig";
import { getAuthErrorMessages } from "../../utils";

const LoginPage = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [notificationMessage, setNotificationMessage] = useState("");
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationSeverity, setOpenNotificationSeverity] = useState("info");

  const loginUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      setOpenNotificationSeverity("success");
      setNotificationMessage("Fetching User Profile...");
      setOpenNotification(true);


      if (user) {
        setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem("current-user", JSON.stringify(user))

          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      const errorMessage = getAuthErrorMessages(error.code);
      setOpenNotificationSeverity("error");
      setNotificationMessage(errorMessage);
      setOpenNotification(true);
      setIsLoading(false);
    }
  };

  const handleNotificationClose = () => {
    setOpenNotification(false);
  }

  return (
    <Paper
      style={{ width: 600, textAlign: "center", margin: "auto" }}
      elevation={4}
    >
      <Snackbar
        open={openNotification}
        autoHideDuration={6000}
      >
        <Alert onClose={handleNotificationClose} severity={notificationSeverity}>{notificationMessage}</Alert>
      </Snackbar>

      <form onSubmit={loginUser}>
        <Typography variant="h4" fontWeight="bold" padding="8px">
          Login Here!
        </Typography>
        <Box
          height="450px"
          display="flex"
          flexDirection="column"
          gap="18px"
          padding="24px"
        >
          <Box textAlign="center">
            <img width={200} src="/logo.png" alt="" />
          </Box>
          <TextField
            fullWidth
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            placeholder="Enter your email"
            onChange={(event) =>
              setLoginData({ ...loginData, email: event.target.value })
            }
            value={loginData.email}
            required
          />
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            placeholder="Enter your password"
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
            }
            value={loginData.password}
            required
            inputProps={{
              minLength: 6,
            }}
          />
          <Button
            disabled={isLoading}
            color="secondary"
            type="submit"
            variant="contained"
          >
            {isLoading && <CircularProgress color="secondary" size={20} />}
            Login
          </Button>

          <Link to="/register">{"Don't have an account ?"}</Link>
        </Box>
      </form>
    </Paper>
  );
};

LoginPage.propTypes = {};

export default LoginPage;

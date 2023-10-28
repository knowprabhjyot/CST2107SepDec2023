import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Alert, Box, Button, CircularProgress, Paper, Snackbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebaseConfig";
import { getAuthErrorMessages } from "../../utils";

const RegisterPage = (props) => {

  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationSeverity, setOpenNotificationSeverity] = useState("info");

  const registerUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.password
      );

      setOpenNotificationSeverity("success");
      setNotificationMessage("Creating User Profile...");
      setOpenNotification(true);

      if (user) {
        setTimeout(() => {
          setIsLoading(false);
          navigate("/");
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
    <Paper style={{ width: 600, textAlign: 'center', margin: 'auto'}} elevation={4}>
      <form onSubmit={registerUser}>

      <Snackbar
        open={openNotification}
        autoHideDuration={6000}
      >
        <Alert onClose={handleNotificationClose} severity={notificationSeverity}>{notificationMessage}</Alert>
      </Snackbar>


        <Typography variant="h4" fontWeight="bold" padding="8px">
          Register Here!
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
              setRegisterData({ ...registerData, email: event.target.value })
            }
            value={registerData.email}
            required
          />
          <TextField
            fullWidth
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            placeholder="Enter your password"
            onChange={(event) =>
              setRegisterData({ ...registerData, password: event.target.value })
            }
            value={registerData.password}
            required
            inputProps={{
              minLength: 6,
            }}
          />
          <Button disabled={isLoading} type="submit" variant="contained">
            { isLoading &&  <CircularProgress color="secondary" size={20} />}
            Register
          </Button>

          <Link to="/">Already have an account ?</Link>
        </Box>
      </form>
    </Paper>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;

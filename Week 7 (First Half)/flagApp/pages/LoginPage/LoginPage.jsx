import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (event) => {
    event.preventDefault();
    console.log(loginData, "loginData");
  };

  return (
    <Paper elevation={4}>
      <form onSubmit={loginUser}>
        <Typography variant='h4' fontWeight='bold' padding="8px">Login Here!</Typography>
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
            style={{ width: 400 }}
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
            style={{ width: 400 }}
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
          <Button color="secondary" type="submit" variant="contained">
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

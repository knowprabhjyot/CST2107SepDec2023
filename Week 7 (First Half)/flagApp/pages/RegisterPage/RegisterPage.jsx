import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper } from "@mui/material";
import { Link } from 'react-router-dom';

const RegisterPage = (props) => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const registerUser = (event) => {
    event.preventDefault();
    console.log(registerData, "registerData");
  };

  return (
    <Paper elevation={4}>
      <form onSubmit={registerUser}>
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
              setRegisterData({ ...registerData, email: event.target.value })
            }
            value={registerData.email}
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
              setRegisterData({ ...registerData, password: event.target.value })
            }
            value={registerData.password}
            required
            inputProps={{
              minLength: 6,
            }}
          />
          <Button type="submit" variant="contained">
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

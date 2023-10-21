import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [userEmail, _setUserEmail] = useState(props.data.email);

  const signoutUser = async () => {
    // call Firebase for logout
    await signOut(auth);
    // clear localstoreage
    localStorage.removeItem("current-user");
    // send the user to login page
    navigate("/");
  };

  return (
    <AppBar style={{ marginBottom: 20 }} position="static">
      <Toolbar disableGutters>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          gap="16px"
          justifyContent="space-between"
          marginLeft="24px"
        >
          <Box display="flex" gap="16px" marginLeft="24px">
            Hello, {userEmail}
            <Link to="/home">
              <Typography color="white">Home</Typography>
            </Link>
            <Link to="/wishlist">
              <Typography color="white">Wishlist</Typography>
            </Link>
          </Box>
          <Button onClick={signoutUser} variant="contained" color="secondary">
            Signout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
    data: PropTypes.any
};

export default Navbar;

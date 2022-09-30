import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IndividualCards from "./IndividualCards";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import "../index.css";

function NavBar() {
  const [users, setUsers] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const getUsers = async () => {
    setButtonClicked(true);
    try {
      const { data } = await axios.get(`https://reqres.in/api/users?page=1`);
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button onClick={() => getUsers()} color="inherit">
                Get Users
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      {users.length === 0 && buttonClicked ? (
        <div className="center">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid-container">
          {users.map((user) => {
            return (
              <div className="margin" key={user.id}>
                <IndividualCards data={user} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default NavBar;

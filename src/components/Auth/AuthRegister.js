import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
} from "@material-ui/core";
import { useAsyncError, useNavigate } from "react-router-dom";
import { PostWithoutAuth } from "../Services/HttpService";
import { useStepContext } from "@mui/material";

function AuthRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNo, setTelNo] = useState("");

  let navigate = useNavigate();

  const handleUsername = (value) => {
    setUsername(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleFirstName = (value) => {
    setFirstName(value);
  };

  const handleLastName = (value) => {
    setLastName(value);
  };

  const handleTelNo = (value) => {
    setTelNo(value);
  };

  const sendRequest = (path) => {
    PostWithoutAuth("/auth/" + path, {
      userName: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      telNo: telNo,
    })
      .then((res) => res.json())
      .then((result) => {
        if (path === "register") {
          navigate("/auth/login");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleButton = (path) => {
    sendRequest(path);
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setTelNo("");
    console.log(localStorage);
  };

  const routeChange = () => {
    navigate("/auth/login");
  };

  return (
    <FormControl>
      <InputLabel style={{ top: 40 }}>Username</InputLabel>
      <Input
        value={username}
        style={{ top: 60 }}
        onChange={(i) => handleUsername(i.target.value)}
      />

      <InputLabel style={{ top: 120 }}>Password</InputLabel>
      <Input
        value={password}
        style={{ top: 90 }}
        onChange={(i) => handlePassword(i.target.value)}
      />

      <InputLabel style={{ top: 200 }}>Name</InputLabel>
      <Input
        value={firstName}
        style={{ top: 120 }}
        onChange={(i) => handleFirstName(i.target.value)}
      />

      <InputLabel style={{ top: 280 }}>Surname</InputLabel>
      <Input
        value={lastName}
        style={{ top: 150 }}
        onChange={(i) => handleLastName(i.target.value)}
      />

      <InputLabel style={{ top: 360 }}>Tel No</InputLabel>
      <Input
        value={telNo}
        style={{ top: 180 }}
        onChange={(i) => handleTelNo(i.target.value)}
      />

      <Button
        variant="contained"
        style={{ marginTop: 220, background: "#8c9017", color: "white" }}
        onClick={() => handleButton("register")}
      >
        Register
      </Button>

      <FormHelperText style={{ margin: 20 }}>
        Are you already registered?
      </FormHelperText>

      <Button
        variant="contained"
        style={{ background: "#8c9017", color: "white" }}
        onClick={routeChange}
      >
        Login
      </Button>
    </FormControl>
  );
}

export default AuthRegister;

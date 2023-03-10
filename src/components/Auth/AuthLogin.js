import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { PostWithoutAuth } from "../Services/HttpService";

function AuthLogin() {
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

  const routeChange = () => {
    navigate("/auth/register");
  };

  const sendRequest = (path) => {
    PostWithoutAuth("/auth/" + path, {
      userName: username,
      password: password,
    })
      .then((res) => res.json())
      .then((result) => {
        if (path === "login") {
          localStorage.setItem("tokenKey", result.accessToken);
          localStorage.setItem("refreshKey", result.refreshToken);
          localStorage.setItem("currentUser", result.userId);
          localStorage.setItem("userName", result.username);
          localStorage.setItem("firstName", result.firstName);
          localStorage.setItem("lastName", result.lastName);
          localStorage.setItem("telNo", result.telNo);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleButton = (path) => {
    sendRequest(path);
    setUsername("");
    setPassword("");
    console.log(localStorage);
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

      <Button
        variant="contained"
        style={{ marginTop: 120, background: "#8c9017", color: "white" }}
        onClick={() => handleButton("login")}
      >
        Login
      </Button>

      <FormHelperText style={{ margin: 20 }}>
        Not registered yet?
      </FormHelperText>
      <Button
        variant="contained"
        style={{ background: "#8c9017", color: "white" }}
        onClick={routeChange}
      >
        Register
      </Button>
    </FormControl>
  );
}

export default AuthLogin;

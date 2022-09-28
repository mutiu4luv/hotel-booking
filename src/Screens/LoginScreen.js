import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import "./Login.css";
// import CircularIndeterminate from "../Components/Progress";
import Loading from "../components/Loading";
import FormContainer from "../components/FormContainer";
import { Button, Col, Form, Row } from "react-bootstrap";

// toast.configure();

const LoginScreen = () => {
  const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("password");
  const [loading, setLoading] = useState(false);
  const [message, setMeesage] = useState(false);
  const userId = localStorage.getItem("userId");
  // useEffect(() => {
  //   if (userId) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/");
  //   }
  // }, [navigate, userId]);

  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      username: username,

      password: password,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("/api/auth/login", data, headers)
      .then((res) => {
        console.log(res.data);
        setLoading(false);

        if (res.data) {
          setUserName("");

          setPassword("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);
          localStorage.setItem("userId", res.data._id);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("phoneNumber", res.data.phoneNumber);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("city", res.data.city);
          localStorage.setItem("country", res.data.country);
          localStorage.setItem("profilePicture", res.data.profilePicture);
          localStorage.setItem("coverPicture", res.data.coverPicture);
          localStorage.setItem("Verified", res.data.Verified);
          localStorage.setItem("Followers", res.data.followers);
          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          // toast.success("Login successful");
          navigate("/bookingscreen");
        } else {
          alert("Login sucessful");
          // toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("login failed");
        // toast.error("Invalid email & Password");
      });
  };
  return (
    // <div className="split">

    <FormContainer>
      <h1>Login </h1>
      {Loading && <div style={{ color: "orange" }}>Loading...</div>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>userName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your school registrationNumber  "
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={mode}
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          {mode === "password" ? (
            <VisibilityIcon
              style={{
                display: "flex",
                position: "relative",
                top: "-30px",
                float: "right",
              }}
              onClick={handleClick}
            />
          ) : (
            <VisibilityOff onClick={handleClick} />
          )}
        </Form.Group>

        <Button type="submit" variant="primary">
          Login In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New User?<Link to="/signup">Signup </Link>{" "}
        </Col>
      </Row>
    </FormContainer>
    // </div>
  );
};

export default LoginScreen;

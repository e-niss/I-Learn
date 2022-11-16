import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./LoginForm.css";

function LoginForm(props) {
  const [id, setId] = useState(-1);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useGlobalContext();
  const handleSubmitClick = (e) => {
    e.preventDefault();
    var compte = JSON.stringify({
      email: email,
      password: password,
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: compte,
      redirect: "follow",
    };
    fetch("http://localhost:8082/eleves/Verify", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setId(data);
        context.setUser({ id: data });
        console.log(context.user.id);
        if (data !== -1) {
          navigate("/");
        }
        if (data == -1) {
          alert("Email ou mot de passe incorrect");
        }
      });
  };

  return (
    <>
      <div className="login-form-separator"></div>
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center login-form-container">
        <form onSubmit={handleSubmitClick}>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check"></div>
          <div className="btn-submit">
            <button
              type="submit"
              className="btn btn-primary "
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="alert alert-success mt-2" role="alert"></div>
        <div className="registerMessage">
          <span>Dont have an account? </span>
          <span className="loginText">Register</span>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

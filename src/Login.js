import React, { useState } from "react";

function Login(props) {
  const [disabled, cDisabled] = useState(false);
  const [user, cUser] = useState("");
  const [password, cPassword] = useState("");

  const onChange = (e, changer) => {
    e.preventDefault();
    changer(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    console.log(e.target.username.value, e.target.password.value);
    props.client
      .login(e.target.username.value, e.target.password.value)
      .then((response) => {
        cDisabled(false);
        props.loggedIn(response.data.token);
      })
      .catch(() => {
        alert("an error occured please try again");
        cDisabled(false);
      });
  };

  return (
    <>
      Login
      <br />
      <form onSubmit={(e) => submitHandler(e)}>
        username
        <br />
        <input
          onChange={(e) => onChange(e, cUser)}
          type="text"
          name="username"
          value={user}
          disabled={disabled}
        />
        <br />
        password
        <br />
        <input
          onChange={(e) => onChange(e, cPassword)}
          type="password"
          name="password"
          value={password}
          disabled={disabled}
        />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Login;

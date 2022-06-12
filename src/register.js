import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  let [name, setname] = useState(" ");
  let [email, setemail] = useState(" ");
  let [type, settype] = useState(" ");
  let [password, setpassword] = useState(" ");
  let [cpassword, setcpassword] = useState("");
  let [isauth, setauth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("user");
    if (token) {
      setauth(true);
      navigate("/");
    }
  });

  async function submitHandler() {
    let data = { name: name, email: email, type: type, password: password };
    let result = await axios.post("http://192.168.43.221:4000/signup", data);

    let token = JSON.stringify(result.data);
    console.log(token);
    localStorage.setItem("user", token);
    console.log(localStorage.getItem("user"));
  }

  return (
    <div>
      <input
        type={"text"}
        placeholder="name"
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type={"email"}
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="type"
        onChange={(e) => settype(e.target.value)}
      />
      <input
        type={"password"}
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <input
        type={"password"}
        placeholder="confirm password"
        onChange={(e) => setcpassword(e.target.value)}
      />
      <button onClick={submitHandler}>submit</button>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import axios from "axios";
function Login() {
  let [email, setemail] = useState("");

  let [password, setpassword] = useState("");

  async function submitHandler() {
    let data = { email: email, password: password };
    // localStorage.setItem("user", "chethancm2001");
    let token = localStorage.getItem("user");
    let result = await axios.get("http://192.168.43.221:3000", {
      headers: { Authorization: `Bearer ${token}` },
    });
    // let result = await axios.post("http://192.168.43.221:3000/signup", data);
    // console.log(result);
    console.log(result);
  }
  return (
    <div>
      <input
        type={"email"}
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />

      <input
        type={"password"}
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={submitHandler}>submit</button>
    </div>
  );
}
export default Login;

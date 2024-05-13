import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

const Register = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const adressRef = useRef(null);
  const roleRef = useRef(null);

  const handleSignUp = () => {
    let name = usernameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let role = roleRef.current.value;
    let phone = phoneRef.current.value;
    let adress = adressRef.current.value;
    axios
      .post("http://localhost:7000/register", {
        name,
        email,
        password,
        role,
        phone,
        adress,
      })
      .then((response) => {
        console.log("added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ marginTop: "800px" }}>
      <div class="signup__container" style={{ marginTop: "100px" }}>
        <div class="container__child signup__form">
          <form action="#">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                ref={usernameRef}
                class="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="your name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                ref={emailRef}
                class="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="your email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                ref={passwordRef}
                class="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="choose your password"
                required
              />
            </div>
            <div class="form-group">
              <label for="Role">Role</label>
              <input
                ref={roleRef}
                class="form-control"
                type="text"
                name="role"
                id="passwordRepeat"
                placeholder="your role"
                required
              />
            </div>
            <div class="form-group">
              <label for="adress">Repeat Password</label>
              <input
                ref={adressRef}
                class="form-control"
                type="text"
                name="adress"
                id="passwordRepeat"
                placeholder="your adress"
                required
              />
            </div>
            <div class="form-group">
              <label for="phone">Repeat Password</label>
              <input
                ref={phoneRef}
                class="form-control"
                type="text"
                name="phone"
                id="passwordRepeat"
                placeholder="your phone number"
                required
              />
            </div>
            <div class="m-t-lg">
              <ul class="list-inline">
                <li>
                  <input
                    class="btn btn--form"
                    type="submit"
                    value="Register"
                    onClick={handleSignUp}
                  />
                </li>
                {/* <li>
                  <Link class="signup__link" to="/">
                    I am already a member
                  </Link>
                </li> */}
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

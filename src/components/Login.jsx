import React, { Component } from "react";
import API from "../apis/API";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    const { id } = e.target;

    this.setState({
      [id]: value,
    });
  }

  handleRegister(e) {
    const { email, password } = this.state;

    API.instance
      .post("/users", { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  }

  handleLogin(e) {
    const { email, password } = this.state;

    API.instance
      .post("/sessions", { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  }

  render() {
    return (
      <div className="container text-center">
        <form className="m-0 p-3">
          <div className="row">
            <div className="col-lg-12 col-lg-offset-12 m-0 p-3">
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-lg-offset-12 m-0 p-3">
              <label htmlFor="email">
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark"
            onClick={this.handleRegister}
          >
            Register
          </button>
          <button
            type="submit"
            className="btn btn-dark"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

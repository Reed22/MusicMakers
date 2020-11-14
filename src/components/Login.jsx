import React, { Component } from "react";
import API from "../apis/API";
import { Redirect } from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      serverRes: "",
      redirect: false  //REED ADD
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);

  }

  handleChange(e) {
    const { value } = e.target;
    const { id } = e.target;

    this.setState({
      [id]: value,
    });
  }

  //REED ADD
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }
  //REED ADD
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/profile' />
    }
  }

  handleRegister(e) {
    const { email, password } = this.state;

    API.instance
      .post("/users", { email, password })
      .then((res) => {
        console.log(res);
        this.setRedirect()
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  }

  handleLogin(e) {
    const { email, password } = this.state;

    API.instance
      .post(
        "/sessions",
        { email, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        this.setState({ serverRes: res.data });
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  }

  render() {
    const { serverRes } = this.state;

    return (
      <div className="container text-center">
        {this.renderRedirect()}
        <form className="m-0 p-3">
          <div className="row">
            <div className="col-lg-12 col-lg-offset-12 m-0 p-3">
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  className="form-control p-1"
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
                  className="form-control p-1"
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark m-1"
            onClick={this.handleRegister}
          >
            Register
          </button>
          <button
            type="submit"
            className="btn btn-dark m-1"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </form>
        {/* TODO use bootstrap to make text success or danger based on result*/}
        <div>{serverRes}</div>
      </div>
    );
  }
}

export default Login;

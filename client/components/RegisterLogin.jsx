import React, { Component } from "react";


import Header from './Header';
import jwtDecode from 'jwt-decode';
import './RegisterLogin.css';

class RegisterLogin extends Component {
      constructor(props) {
          super(props)
          this.state = {
            username: "",
            password: "",
            email: ""
          }
          this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleInputChange(e) {
          const { name, value } = e.target;
          this.setState({
              [name]: value
          });
      }

      saveToken(respBody){
        localStorage.setItem('authToken', respBody.token)
        const user = jwtDecode(respBody.token);
        return user;
      }

      handlePostData(url, data) {
          const userData = JSON.stringify(data);
          const option = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: usersData
          }
          fetch(url, options)
              .then(resp => {
                  if (!resp.ok) throw new Error(resp.statusMessage);
                  return resp.json();
              })
              .then(this.saveToken)
      }

      registerPostRequest(data){
          this.handlePostData(data.url, data.post);
      }

      render() {
          return (
            <div>
            <Header/>

            <div className="registerLogin">
              <div className="registerLogin_register">
                <Register registerPostRequest={this.regisPostRequest.bind(this)} />
              </div>
              <br/>

              <div className="registerLogin_login">
                    <Login registerPostRequest={this.registerPostRequest.bind(this)} />
              </div>
            </div>
            </div>
          )
      }
}

export default RegisterLogin;

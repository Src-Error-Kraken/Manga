import React, { Component } from "react";
import jwtDecode from 'jwt-decode';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            email: ""
        }
        this.userData;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        this.userData = {
            url: '/api/login',
            post: this.state
        }

    }
    printToken(){

        const token = localStorage.getItem('authToken');
        const user = jwtDecode(token);
        console.log('token', user)
    }
    handleSubmit(e) {
        // e.preventDefault();
        this.props.registerPostRequest(this.userData);
    }

    render() {
        return (

            <div className="login">
                <form  className="login__form">
                    <div>
                        <label className="login__label">Email:
                            <br/>
                            <input className="login__input" type="email" onChange={this.handleInputChange} value={this.state.email} name="email" />
                        </label>
                    </div>
                    <div>
                        <label className="login__label">Password:
                            <br/>
                            <input className="login__input" type="password" onChange={this.handleInputChange} value={this.state.password} name="password" />
                        </label>
                    </div>
                    <Link to="/"><p onClick={this.handleSubmit} className="login__btn">Login</p></Link>
                </form>
            </div>
        )
    }
}

export default Login;

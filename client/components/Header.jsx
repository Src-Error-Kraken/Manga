import React, { Component } from "react";
import { Link } from "react-router-dom";
import JwtDecode from "jwt-decode";
import './Header.css';

class Header extends Component {
  constructor(props){
      super(props)

      this.state ={
          currentUser: "Guest",
          key: Math.random()
      }
      this.guest = "Guest";
  }

  getUser {
      let user = "";
      if (localStorage.getItem('authToken')) {
          user = jwtDecode(localStorage.getItem('authToken'));
          return user;
      }
  }

  componentDidMount(){


  }

  logOut(){
      localStorage.setItem('authToken', '')
  }

render(){
      return (
        <div>
          <div className="header">

          <nav >
            <ul className="nav_bar">
                <li><link to="/" className="nav-bar">Home</Link></li>
                <li><link to="/register_login" className="nav-bar">Register Login</Link></li>
                <li><link to={localStorage.getItem('authToken') ? '/collection' : '/'} className="nav-bar">Collection</Link></li>
                <li className={localStorage.getItem('authToken') ? 'show' : 'hide'} onClick={this.logOut}><Link to="/" className="nav-bar">Logout</Link></li>
            </ul>
          </nav>
        </div>

        <div className="dropDown">

            <label className="dropDown_button" for="toggle">
                    <span className="dropDown_icon"> &nbsp; </span>
            </label>
            <input type="checkbox" className="dropDown_checkbox" id="toggle" />
            <div className="dropDown_background"> &nbsp; </div>
            <nav className="dropDown_nav">
              <ul className="dropDown_list">
                  <li><Link to="/" className="nav-bar two">Home</Link></li>
                  <li><Link to="/register_login" className="nav-bar two">Register Login</Link></li>
                  <li><Link to={localStorage.getItem('authToken') ? '/collection' : '/'} className="nav-bar two">Collection</Link></li>
                  <li className={localStorage.getItem('authToken') ? 'show' : 'hide'} onClick={this.logOut}><Link to="/" className="nav-bar two">Logout</Link></li>
              </ul>
            </nav>
        </div>
        </div>

        <div className="nav_greet">
              <h3 className="greet-header">Welcome {localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')).username : ''}</h3>
             <SearchBar />
        </div>
      )
}

}

export default Header;

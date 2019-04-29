import React, {Component} from 'react';
import './css/General.css';
import {withRouter} from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <h1>¡Bienvenido a Super Zapatos!</h1>
      </div>
    );
  }
}

export default withRouter(Header);
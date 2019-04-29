import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
//CSS
import '../global/css/General.css';

// Component
import TabMenu from './Menu/TabMenu'
// Data

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message
    }
  }


  render() {
    return (
      <div>
        <div className="Body">
            <TabMenu />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

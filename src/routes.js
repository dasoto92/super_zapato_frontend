import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { withAlert } from "react-alert";

// Components
import App from './components/App';
import Home from './components/Home';

const AppRoutes = () =>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </App>;
export default withAlert(AppRoutes);

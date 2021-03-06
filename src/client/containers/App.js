import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Profiles from './Profiles';
import Dashboard from './Dashboard';
import Feed from './Feed';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';

const App = () => (
    <Router>   
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/profiles' component={Profiles} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/feed' component={Feed} />
        </Switch>
    </Router>
);

App.propTypes = {};

export default App;
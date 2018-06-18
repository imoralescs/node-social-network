import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Profiles from './Profiles';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';

const App = () => (
    <Router>
        <div className='App'>   
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/profiles' component={Profiles} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
    </Router>
);

App.propTypes = {};

export default App;
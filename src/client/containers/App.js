import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';

const App = () => (
    <Router>
        <div className='App'>
 
                <Route exact path='/' component={Landing} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
            <Switch>
                <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
    </Router>
);

App.propTypes = {};

export default App;
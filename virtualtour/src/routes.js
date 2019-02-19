import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from './Views/HomePage/HomePage'
import Registration from './Views/Registration/Registration'
import Login from './Views/Login/Login'
import App from './App'
import Dashboard from './Views/Dashboard/Dashboard'
import UpdateProfile from './Views/UpdateUser/UpdateProfile'
import addProperty from './Views/Add Property/addProperty'



export default (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route exact path='/private' component={Dashboard} />
        <Route path='/private/updateuser' component={UpdateProfile} />
        <Route path='/private/addproperty' component={addProperty} />
    </Switch>
)
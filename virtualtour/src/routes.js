import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from './Views/HomePage/HomePage'
import Registration from './Views/Registration/Registration'
import Login from './Views/Login/Login'
import App from './App'
import Dashboard from './Views/Dashboard/Dashboard'
import UpdateUser from './Views/UpdateUser/UpdateUser'
import addProperty from './Views/Add Property/addProperty'
import RentaCamera from './Views/RentaCamera/RentaCamera'



export default (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route exact path='/private' component={Dashboard} />
        <Route path='/private/updateuser' component={UpdateUser} />
        <Route path='/private/addproperty' component={addProperty} />
        <Route path='/private/rentacamera' component={RentaCamera} />
    </Switch>
)
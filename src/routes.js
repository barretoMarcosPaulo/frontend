import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'

import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Dashboard from './pages/Dashboard/index'
import New from './pages/New/index'
import Reports from './pages/Reports/index'
import Details from './pages/Details/index'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/new" component={New}/>
                <Route path="/register" component={Register}/>
                <Route path="/reports" component={Reports}/>
                <Route path="/details" component={Details}/>
            </Switch>
        </BrowserRouter>
    )
}
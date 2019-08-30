import React from 'react';
import { Switch, Link, HashRouter, Route } from 'react-router-dom';
import PrimaryPage from './components/PrimaryPage/PrimaryPage';
import LoginRegisterPage from './components/LoginRegisterPage/LoginRegisterPage';
import ConsumerProfilePage from './components/ConsumerProfilePage/ConsumerProfilePage';
import ProcessorDashboardPage from './components/ProcessorDashboardPage/ProcessorDashboardPage';
import BusinessRecyclerPage from './components/BusinessRecyclerPage/BusinessRecyclerPage';
import NotFound from './components/NotFound/NotFound';

export default (
    <Switch>
        <Route exact path='/' render={() => <PrimaryPage />} />
        <Route path='/loginregister' component={LoginRegisterPage} />
        <Route path='/user' component={ConsumerProfilePage} />
        <Route path='/processor' component={ProcessorDashboardPage} />
        <Route path='/business' component={BusinessRecyclerPage} />
        <Route component={NotFound} />
    </Switch>
);
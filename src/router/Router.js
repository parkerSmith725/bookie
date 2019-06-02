import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import LandingPage from './../components/LandingPage/LandingPage';
import EventsPage from './../components/EventsPage/EventsPage';
import EventPage from './../components/EventPage/EventPage';

class Router extends React.Component{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={LandingPage} exact={true} />
                        <Route path="/events" component={EventsPage} exact={true} />
                        <Route path="/event/:id" component={EventPage} exact={true} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
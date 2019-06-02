import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import LandingPage from './../components/LandingPage/LandingPage';
import EventsPage from './../components/EventsPage/EventsPage';
import EventPage from './../components/EventPage/EventPage';
import OrganizerPage from './../components/OrganizerPage/OrganizerPage';
import BandPage from './../components/BandPage/BandPage';
import SignupPage from './../components/SignupPage/SignupPage';

class Router extends React.Component{
    constructor(props){
        super(props);

        this.bands = [{
            _id:'bandid123',
            name:'My Awesome Band',
            desc:`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus 
                tempus, iaculis erat ut, pulvinar ante. Ut consequat, arcu nec venenatis 
                viverra, diam risus sodales ipsum, eu dictum orci ligula a sem. Duis eu 
                auctor nunc. Morbi et eros vitae sem ultrices volutpat eu eu orci.
            `,
            genre:'Band',
            types:['Jazz','Funk'],
            exp:'3',
            image:'/assets/BandProfile.jpg',
            cover:'/assets/BandCover.jpg',
            reviews:[{
                name:'Cool Events Co.',
                review:`
                    My awesome band put on a great show.
                `,
                liked:true
            }]
        },{
            _id:'bandid124',
            name:'DJ Paul',
            desc:`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus 
                tempus, iaculis erat ut, pulvinar ante. Ut consequat, arcu nec venenatis 
                viverra, diam risus sodales ipsum, eu dictum orci ligula a sem. Duis eu 
                auctor nunc. Morbi et eros vitae sem ultrices volutpat eu eu orci.
            `,
            genre:'DJ',
            types:['Hip hop'],
            exp:'3',
            image:'/assets/DJProfile.jpg',
            cover:'/assets/DJCover.jpg',
            reviews:[{
                name:'Cool Events Co.',
                review:`
                    DJ Paul was great!
                `,
                liked:true
            }]
        }];

        this.events = [{
            _id:'1234',
            name:'Joe Ipsum',
            eventsCreated:'Joe has done 5 events on Bookie',
            reviews:[{
                name:'Some Band',
                review:`
                    Joe was very organized and knew what he was doing
                `,
                liked:true
            }],
            title:'Saturday Night at Marquee',
            description:`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus 
                tempus, iaculis erat ut, pulvinar ante. Ut consequat, arcu nec venenatis 
                viverra, diam risus sodales ipsum, eu dictum orci ligula a sem. Duis eu 
                auctor nunc. Morbi et eros vitae sem ultrices volutpat eu eu orci. Praesent 
                facilisis nisl eu dui rutrum, sed dapibus massa fringilla. In semper purus 
                quis suscipit sollicitudin. Donec commodo non est et cursus. In eu varius 
                felis. Nam tincidunt vel enim in dapibus.
            `,
            genre:'Band',
            lookingFor:['Jazz','Funk'],
            exp:'10',
            price:'$230',
            image:'/assets/profile1.jpg',
            time:'7:30 - 10:30, 3 Hours',
            date:'June 16'
        },{
            _id:'1234',
            name:'Lauren Ipsum',
            eventsCreated:'Lauren has done 2 events on Bookie',
            reviews:[{
                name:'A Band',
                review:`
                    Lauren was very organized and knew what he was doing
                `,
                liked:true
            }],
            title:'Friday Night Hip Hop',
            description:`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus 
                tempus, iaculis erat ut, pulvinar ante. Ut consequat, arcu nec venenatis 
                viverra, diam risus sodales ipsum, eu dictum orci ligula a sem. Duis eu 
                auctor nunc. Morbi et eros vitae sem ultrices volutpat eu eu orci. Praesent 
                facilisis nisl eu dui rutrum, sed dapibus massa fringilla. In semper purus 
                quis suscipit sollicitudin. Donec commodo non est et cursus. In eu varius 
                felis. Nam tincidunt vel enim in dapibus.
            `,
            genre:'DJ',
            lookingFor:['Hip Hop'],
            exp:'2',
            price:'$230',
            image:'/assets/profile1.jpg',
            time:'7:30 - 10:30, 3 Hours',
            date:'June 16'
        }];
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={LandingPage} exact={true} />
                        <Route path="/signup" component={SignupPage} exact={true} />
                        <Route 
                            path="/events" 
                            exact={true}
                            render={(routeProps) => (
                                <EventsPage {...routeProps} events={this.events} />
                            )}
                        />
                        <Route 
                            path="/event/:id" 
                            exact={true}
                            render={(routeProps) => (
                                <EventPage {...routeProps} events={this.events} />
                            )}
                        />
                        <Route 
                            path="/org/:orgid" 
                            exact={true}
                            render={(routeProps) => (
                                <OrganizerPage {...routeProps} events={this.events} bands={this.bands} />
                            )}
                        />
                        <Route 
                            path="/band/:bandid" 
                            exact={true}
                            render={(routeProps) => (
                                <BandPage {...routeProps} events={this.events} bands={this.bands} />
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
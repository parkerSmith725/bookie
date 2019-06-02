import React from 'react';
import './OrganizerPage.css';

import Header from './../Header/Header';
import Band from './../Band/Band';

class OrganizerPage extends React.Component{
    render(){
        let {events,bands} = this.props;
        let id = this.props.match.params.orgid;
        let event = events.filter((event) => {
            return event._id === id;
        })[0];
        
        if(!event){
            return null;
        }

        let cover = {
            backgroundImage:"url('/assets/Hero.jpg')"
        };

        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div style={{height:'400px',marginBottom:'30px'}} className="row">
                        <div className="col-12">
                            <div style={cover} className="event-page-header"></div>
                        </div>
                    </div>
                    <div className="org-page">
                        <div className="row">
                            <div className="col-12">
                                <h4>
                                    My Event
                                </h4>
                                <h1 className="organizer-page-header">
                                    {event.title}
                                </h1>
                                <div>
                                    {event.description}
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}} className="row">
                            <div className="col-12">
                                <h1>
                                    Bands that want to play
                                </h1>
                                <div className="row">
                                    {bands.map((band) => {
                                        return (
                                            <div key={band._id} className="col-6">
                                                <Band
                                                    band={band}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrganizerPage;
import React from 'react';
import './EventPage.css';

import Header from './../Header/Header';
import ProfileImage from './../ProfileImage/ProfileImage';
import Reviews from './../Reviews/Reviews';

class EventPage extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render(){
        let {events} = this.props;
        let id = this.props.match.params.id;
        let event = events.filter((event) => {
            return event._id === id;
        })[0];

        let cover = {
            backgroundImage:"url('/assets/Hero.jpg')"
        };

        if(!event){
            return null;
        }

        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div style={{height:'400px',marginBottom:'30px'}} className="row">
                        <div className="col-12">
                            <div style={cover} className="event-page-header"></div>
                        </div>
                    </div>
                    <div className="event-page">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="event-page-title">
                                    {event.title}
                                </h1>
                                <span className="event-page-date">
                                    <i className="material-icons">
                                        date_range
                                    </i> <span className="center-text">{event.date}</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="material-icons">
                                        access_time
                                    </i> <span className="center-text">{event.time} </span>
                                </span>
                                <h4 className="event-page-price">
                                    {event.price}
                                </h4>
                                <div className="event-page-desc">
                                    {event.description}
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}} className="row">
                            <div className="col">
                                <h4>Genre</h4>
                                <span>
                                    {event.genre}
                                </span>
                            </div>
                            <div className="col">
                                <h4>Looking For</h4>
                                {event.lookingFor.map((item) => {
                                    return (
                                        <div key={item}>
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="col">
                                <h4>Required Experience</h4>
                                <span>
                                    {event.exp} gigs on Bookie
                                </span>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}} className="row">
                            <div className="col">
                                <h4>
                                    Event Organizer
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <ProfileImage image={event.image} />
                            </div>
                            <div className="col">
                                
                                <span className="event-page-organizer">
                                    {event.name}
                                </span>
                                <span className="event-page-created">
                                    {event.eventsCreated}
                                </span>
                            </div>
                        </div>
                        
                        <div style={{marginTop:'40px'}} className="row">
                            <div className="col">
                                <h4>Reviews</h4>
                                <Reviews 
                                    reviews={event.reviews}
                                />
                            </div>
                        </div>

                        
                    </div>
                    <div style={{marginTop:'20px'}} className="row">
                        <div className="col">
                            <div className="event-page-CTA">
                                <div style={{height:'100%'}} className="row align-items-center no-gutters">
                                    <div style={{textAlign:'center'}} className="col-12">
                                        <h1 className="event-page-CTA-header">
                                            Want to play this gig?
                                        </h1>
                                        <div className="event-page-button">
                                            Apply to play
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventPage;
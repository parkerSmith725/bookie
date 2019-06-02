import React from 'react';
import './Event.css';
import ProfileImage from './../ProfileImage/ProfileImage';

class Event extends React.Component{
    render(){
        let {event} = this.props;
        return (
            <div className="event">
                <div className="row">
                    <div className="col-auto">
                        <ProfileImage image={event.image} />
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h1 className="event-name">
                                    {event.name}
                                </h1>
                                <span className="event-date">
                                    {event.date} {event.time}
                                </span>
                                
                            </div>
                            <div className="col">
                                <h1 className="event-price">
                                    {event.price}
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="event-title">
                                    Event
                                </span>
                                <span className="event-desc">
                                    {event.description}
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="event-title">
                                    Genre
                                </span>
                                <span className="event-desc">
                                    {event.genre}
                                </span>
                            </div>
                            <div className="col">
                                <span className="event-title">
                                    Band Type
                                </span>
                                <span className="event-desc">
                                    {event.lookingFor.map((item,i) => {
                                        if(i === 0){
                                            return (
                                                <span key={i}>{item}</span>
                                            );
                                        } else {
                                            return (
                                                <span key={i}>, {item}</span>
                                            );
                                        }
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 event-button-col">
                        <div className="event-button">
                            Apply
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
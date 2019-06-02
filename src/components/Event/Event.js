import React from 'react';
import {withRouter} from 'react-router-dom';
import './Event.css';
import ProfileImage from './../ProfileImage/ProfileImage';

class Event extends React.Component{
    constructor(props){
        super(props);

        this.handleMore = this.handleMore.bind(this);
    }

    handleMore(){
        this.props.history.push('/event/'+this.props.event._id);
    }

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
                                    {event.title}
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
                        <div className="row" style={{marginTop:'20px'}}>
                            <div className="col">
                                <span className="event-title">
                                    Event
                                </span>
                                <span className="event-title">
                                    {event.title}
                                </span>
                                <span className="event-desc">
                                    {event.description.substring(0,200)}...
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 event-button-col">
                        <div onClick={this.handleMore} className="event-button">
                            See More
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Event);
import React from 'react';
import './EventsPage.css';
import Header from './../Header/Header';
import Event from './../Event/Event';

class EventsPage extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        let {events} = this.props;
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="events-page">
                        {events.map((event) => {
                            return (
                                <Event 
                                    key={event._id}
                                    event={event}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsPage;
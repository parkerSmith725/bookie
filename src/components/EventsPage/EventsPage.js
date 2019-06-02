import React from 'react';
import './EventsPage.css';
import Header from './../Header/Header';
import Event from './../Event/Event';

class EventsPage extends React.Component{
    constructor(props){
        super(props);

        this.events = [{
            _id:'1234',
            name:'Joe Ipsum',
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
            price:'$230',
            image:'/assets/profile1.jpg',
            time:'7:30 - 10:30, 3 Hours',
            date:'June 16'
        },{
            _id:'1234',
            name:'Lauren Ipsum',
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
            price:'$230',
            image:'/assets/profile2.jpg',
            time:'7:30 - 10:30, 3 Hours',
            date:'June 16'
        },{
            _id:'1234',
            name:'Lauren Ipsum',
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
            price:'$230',
            image:'/assets/profile1.jpg',
            time:'7:30 - 10:30, 3 Hours',
            date:'June 16'
        },{
            _id:'1234',
            name:'Lauren Ipsum',
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
            price:'$230',
            image:'/assets/profile1.jpg',
            time:'7:30 - 10:30, 3 Hours',
            date:'June 16'
        },];
    }
    render(){
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="events-page">
                        {this.events.map((event) => {
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
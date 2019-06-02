import React from 'react';
import {withRouter} from 'react-router-dom';
import './Band.css';

import ProfileImage from './../ProfileImage/ProfileImage';

class Band extends React.Component{
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.history.push('/band/'+this.props.band._id);
    }

    render(){
        let {band} = this.props;

        return (
            <div onClick={this.handleClick} className="band-item">
                <div className="row">
                    <div className="col-auto">
                        <ProfileImage 
                            image={band.image}
                        />
                    </div>
                    <div className="col">
                        <div className="band-name">
                            {band.name}
                        </div>
                        <div className="band-genre">
                            {band.genre}
                        </div>
                        <div className="band-types">
                            {band.types.map((type,i) => {
                                if(i === 0){
                                    return (
                                        <span key={type}>
                                            {type}
                                        </span>
                                    );
                                } else {
                                    return (
                                        <span key={type}>
                                            , {type}
                                        </span>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'20px'}} className="row">
                    <div className="col">
                        <h4>
                            {band.exp} gigs on Bookie
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="band-desc">
                            {band.desc}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Band);
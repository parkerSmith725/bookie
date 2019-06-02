import React from 'react';
import './BandPage.css';

import Header from './../Header/Header';
import ProfileImage from './../ProfileImage/ProfileImage';
import Reviews from './../Reviews/Reviews';
import BandLink from './../BandLink/BandLink';

class BandPage extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render(){
        let {bands} = this.props;
        let id = this.props.match.params.bandid;
        let band = bands.filter((band) => {
            return band._id === id;
        })[0];
        
        if(!band){
            return null;
        }

        let cover = {
            backgroundImage:`url(${band.cover})`
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
                    <div className="band-page">
                        <div className="row">
                            <div className="col-auto">
                                <ProfileImage 
                                    large
                                    image={band.image}
                                />
                            </div>
                            <div className="col">
                                <h1>
                                    {band.name}
                                </h1>
                                <h4>
                                    {band.exp} gigs on Bookie
                                </h4>
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
                        <div style={{marginTop:'30px'}} className="row">
                            <div className="col-12">
                                <h5>
                                    About Us
                                </h5>
                                <div className="band-desc">
                                    {band.desc}
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}}  className="row">
                            <div className="col">
                                <h5>
                                    Our Work
                                </h5>
                                <BandLink 
                                    to="https://spotify.com"
                                    image="/assets/spotify.png"
                                />
                                <BandLink 
                                    to="https://soundcloud.com"
                                    image="/assets/soundcloud.png"
                                />
                                <BandLink 
                                    to="https://youtube.com"
                                    image="/assets/youtube.png"
                                />
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}} className="row">
                            <div className="col">
                                <Reviews 
                                    reviews={band.reviews}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BandPage;
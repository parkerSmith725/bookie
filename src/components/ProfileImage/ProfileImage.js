import React from 'react';
import './ProfileImage.css';

class ProfileImage extends React.Component{
    render(){
        let style = {
            backgroundImage:`url(${this.props.image})`
        };
        return (
            <div className="profile-image" style={style}>
            
            </div>
        );
    }
}

export default ProfileImage;
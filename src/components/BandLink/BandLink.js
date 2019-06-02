import React from 'react';
import './BandLink.css';

class BandLink extends React.Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        window.open(this.props.to);
    }

    render(){
        let {image} = this.props;
        return (
            <div className="band-link-container" onClick={this.onClick}>
                <img className="band-link-image" src={image} />
            </div>
        );
    }
}

export default BandLink;
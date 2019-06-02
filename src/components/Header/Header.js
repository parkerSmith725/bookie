import React from 'react';
import {withRouter} from 'react-router-dom';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.home = this.home.bind(this);
    }

    home(){
        this.props.history.push('/');
    }

    render(){
        return (
            <div className="header-container container-fluid">
                <div className="row">
                    <div className="col-6">
                        <span onClick={this.home} className="logo">Bookie</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
import React from 'react';
import {withRouter} from 'react-router-dom';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.home = this.home.bind(this);
        this.signup = this.signup.bind(this);
    }

    home(){
        this.props.history.push('/');
    }

    signup(){
        this.props.history.push('/signup');
    }

    render(){
        return (
            <div className={this.props.noBorder ? ("header-container container-fluid") : ("border header-container container-fluid")}>
                <div className="row align-items-center">
                    <div className="col-6">
                        <span onClick={this.home} className="logo">Bookie</span>
                    </div>

                    <div style={{textAlign:'right',paddingRight:'30px'}} className="col-6">
                        <span onClick={this.signup} className="signup-link">Signup</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
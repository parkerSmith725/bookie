import React from 'react';
import axios from 'axios';
import './SignupPage.css';

import Header from './../Header/Header';

class SignupPage extends React.Component{
    constructor(props){
        super(props);

        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            email:'',
            firstName:'',
            lastName:'',
            bandName:'',
            company:'',
            isBand:true
        };
    }

    signup(){
        axios.post(process.env.REACT_APP_API_URL+'/signup',{
            email:this.state.email,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            type:this.state.isBand,
            bandName:this.state.bandName
        }).then(() => {
            if(this.state.isBand){
                this.props.history.push('/events');
            } else {
                this.props.history.push('/org/1234');
            }
        }).catch((err) => {

        })
    }

    handleChange(e){
        let value = e.target.value;
        let name = e.target.name;

        this.setState(() => {
            return {[name]:value};
        });
    }

    handleSelect(value){
        this.setState(() => {
            return {isBand:value};
        });
    }

    render(){
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col">
                            <div className="signup-form">
                                <div className='row signup-row'>
                                    <div className="col">
                                        <h3 className="signup-header">
                                            Welcome to Bookie! Please signup to get started.
                                        </h3>
                                    </div>
                                </div>
                                <div className='row signup-row'>
                                    <div className="col">
                                        <span className="signup-label">
                                            Are you a band or organizer?
                                        </span>
                                    </div>
                                </div>
                                <div className='row signup-row'>
                                    <div className="col">
                                        <div onClick={() => {this.handleSelect(true)}} className={this.state.isBand ? ("signup-select selected") : ("signup-select")}>
                                            Band
                                        </div>
                                        <div onClick={() => {this.handleSelect(false)}} className={this.state.isBand ? ("signup-select") : ("signup-select selected")}>
                                            Organizer
                                        </div>
                                    </div>
                                </div>
                                <div className='row signup-row'>
                                    <div className="col">
                                        <span className="signup-label">
                                            Email
                                        </span>
                                        <input 
                                            className="signup-input"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            name={'email'}
                                            placeholder="Your email..."
                                        />
                                    </div>
                                </div>
                                <div className='row signup-row'>
                                    <div className="col">
                                        <span className="signup-label">
                                            First Name
                                        </span>
                                        <input 
                                            className="signup-input"
                                            value={this.state.firstName}
                                            onChange={this.handleChange}
                                            name={'firstName'}
                                            placeholder="Your first name..."
                                        />
                                    </div>
                                </div>
                                <div className='row signup-row'>
                                    <div className="col">
                                        <span className="signup-label">
                                            Last Name
                                        </span>
                                        <input 
                                            className="signup-input"
                                            value={this.state.lastName}
                                            onChange={this.handleChange}
                                            name={'lastName'}
                                            placeholder="Your last name..."
                                        />
                                    </div>
                                </div>
                                {this.state.isBand && (
                                    <div className='row signup-row'>
                                        <div className="col">
                                            <span className="signup-label">
                                                Band/DJ Name
                                            </span>
                                            <input 
                                                className="signup-input"
                                                value={this.state.bandName}
                                                onChange={this.handleChange}
                                                name={'bandName'}
                                                placeholder="Your band/dj name..."
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className='row'>
                                    <div style={{textAlign:'right'}} className="col">
                                        <div onClick={this.signup} className="signup-button">Signup</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;
import React from 'react';
import axios from 'axios';

import Header from './../Header/Header';

class SignupPage extends React.Component{
    constructor(props){
        super(props);

        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email:'',
            firstName:'',
            lastName:'',
            bandName:'',
            company:'',
            isBand:''
        };
    }

    signup(){
        axios.post(process.env.REACT_APP_API_URL+'/signup',{
            email:this.state.email,
            firstName:this.state.firstName,
            lastName:this.state.lastName
        }).then(() => {

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

    render(){
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col">
                            <div className="signup-form">
                                <div className='row'>
                                    <div className="col">
                                        <input 
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            name={'email'}
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col">
                                        <input 
                                            value={this.state.firstName}
                                            onChange={this.handleChange}
                                            name={'firstName'}
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col">
                                        <input 
                                            value={this.state.lastName}
                                            onChange={this.handleChange}
                                            name={'lastName'}
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col">
                                        <button onClick={this.signup}>Signup</button>
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
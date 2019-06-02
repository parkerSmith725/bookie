import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return (
            <div className="header-container container-fluid">
                <div className="row">
                    <div className="col-6">
                        <span className="logo">Bookie</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
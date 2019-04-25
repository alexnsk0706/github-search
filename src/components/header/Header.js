import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {};
    }
    toggle() {
        this.setState({});
    }
    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Github</strong>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
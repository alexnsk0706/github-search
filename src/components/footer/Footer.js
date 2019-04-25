import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Вверх</a>
                    </p>
                    <p>all rights reserved how to write© 2019. </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
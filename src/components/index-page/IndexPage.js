import React, {Component} from 'react';
import Header from '../header/Header';
import Main from './main/Main'
import Footer from '../footer/Footer'

class IndexPage extends Component {


    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default IndexPage;
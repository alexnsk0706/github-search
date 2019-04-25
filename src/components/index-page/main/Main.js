import React, {Component} from 'react';
import './Main.css';
import axios from 'axios';
import {DebounceInput} from 'react-debounce-input';

class Main extends Component {

    constructor(props) {
        super(props);
        this.changeText = this.changeText.bind(this);
        this.state = {
            text: "",
            projects: [],
            minLength: 3,
            debounceTimeout: 1500,
            infinite: false,
        };
    }

    changeText(event) {
        this.setState({
            text: event.target.value
        }, () => {
            axios.get('https://api.github.com/search/repositories?q=' + this.state.text)
                .then(res => {
                    const projects = res.data;
                    this.setState({projects: res.data.items})
                })
        });
    }

    render() {
        const {
            minLength, debounceTimeout, infinite
        } = this.state;
        return (
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Github-search</h1>
                        <div className="input-group-text-center">
                            <DebounceInput
                                minLength={minLength}
                                debounceTimeout={infinite ? -1 : debounceTimeout} className="from-control"
                                type="text" value={this.state.text} placeholder="search"
                                onChange={this.changeText}/>
                        </div>
                    </div>
                    {this.state.text}
                </section>
                {/*<div className="album py-5 bg-light">*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-6 box-shadow">
                                <div className="card-body">
                                    <div class="alert alert-dark" role="alert">
                                        {this.state.projects.map(projects => <li>{projects.name} <b>stargazers:</b>{projects.stargazers_count} <b>watchers:</b>{projects.watchers_count} <a href={projects.svn_url}>url</a>
                                        </li>)}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*</div>*/}
            </main>
        );
    }
}

export default Main;
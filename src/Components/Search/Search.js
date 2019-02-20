import React, { Component } from 'react';
import './Search.css';
import Display from '../Display/Display.js';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            repos: [],
            validUser: null,
            isLoading: false
        }
        this.searchUsers = this.searchUsers.bind(this);
    }

    handleChange = (event) => {
        this.setState({username: event.target.value});
    }
    searchUsers = () =>{
        this.setState({isLoading: true})
        return axios.get('https://api.github.com/users/' + this.state.username + '/repos').then((res) => {
            this.setState({repos: res.data, isLoading: false, validUser: true});
        }).catch(error => {
            this.setState({validUser: false, isLoading: false})
            return error;
        });
    }

    render () {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button type="submit" className="search-button" onClick={this.searchUsers}>Search</button>
                <br />
                <Display repos={this.state.repos} validUser={this.state.validUser} isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default Search;
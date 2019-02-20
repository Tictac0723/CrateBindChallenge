import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
    
    render () {
        if(this.props.repos.length === 0 && !this.props.validUser && this.props.validUser !== null &&  this.props.isLoading === false) {
            return (
                <div>
                    <br />
                    <div>
                        WHOOPS, looks like there isn't anyone here by that name!
                    </div>
                </div>
            )
        } else if(this.props.isLoading === true) {
            return (
                <div>
                    <img className="loader" src={require('./loading.gif')} alt='a loader gif' />
                    <br />
                    Hold Your Horses! We're lookin'!
                </div>
            )
        }
        else if(this.props.validUser === false) {
            return (
                <div>
                    <br />
                    Ya done goofed! Looks like this isn't a valid user. Sorry bud!
                    <br />
                    <img src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif" alt="whoops gif" />
                </div>
            )
        }
        else if(this.props.validUser && this.props.repos.length === 0) {
            return (
                <div>
                    <br />
                    Looks like this person doesn't have any repos!
                    <br />
                    <img src="https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif" alt="why no repos?" />
                </div>
            )
        }
        else{
            return (
                <div className="user-repos">
                    {this.props.repos.sort((a,b) => {
                        return parseFloat(b.watchers) - parseFloat(a.watchers);
                    })
                    .map((repo, i) => {
                        if(repo.fork !== true) {   
                        return (
                            <a href={repo.html_url} key={i}>
                            <div className="repo-card">
                                <div className="repo-name">{repo.name}</div>
                                <hr />
                                <div className="repo-description">{repo.description}</div>
                                <div className="repo-language">{repo.language}</div>
                            </div>
                            </a>
                        ) 
                        }
                    })}
                </div>
            )
        }
    }
}

export default Display;
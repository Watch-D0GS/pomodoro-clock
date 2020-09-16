import React,{Component} from 'react';
import {Button} from '@material-ui/core';
import {Add,Remove} from '@material-ui/icons';

class SessionLabel extends Component{
    render(){
        return(
            <div id='session-label'>
                Session
                <Button aria-label='increment' id='session-increment' onClick={this.props.increment}>
                    <Add onClick={this.props.increment} />
                </Button>
                <div id='session-length'>{this.props.sessionLength}</div>
                <Button aria-label='decrement' id='session-decrement' onClick={this.props.decrement}>
                    <Remove onClick={this.props.decrement} />
                </Button>
            </div>
        )
    }
}

export default SessionLabel;
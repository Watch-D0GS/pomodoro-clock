import React,{Component}from 'react';
import {Button} from '@material-ui/core';
import {Add,Remove} from '@material-ui/icons';

class BreakLabel extends Component{
    render(){
        return(
            <div id='break-label'>
                Break
                <Button id='break-increment' onClick={this.props.increment}>
                    <Add />
                </Button>
                <div id='break-length'>{this.props.breakLength}</div>
                <Button id='break-decrement' onClick={this.props.decrement}>
                    <Remove />
                </Button>
            </div>
        )
    }
}

export default BreakLabel;
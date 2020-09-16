import React,{Component} from 'react';

class TimerLabel extends Component{
    render(){
        return(
            <div id='timer-label'>{this.props.indicator}
                <div id='time-left'>{this.props.time}</div>
            </div>
        )
    }
}

export default TimerLabel;
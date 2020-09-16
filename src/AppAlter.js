import React,{Component} from 'react';
import './App.css';
import BreakLabel from './Components/BreakLabel';
import SessionLabel from './Components/SessionLabel';
import TimerLabel from './Components/TimerLabel';
import {Button,Paper} from '@material-ui/core';
class App extends Component{
  constructor(props){
    super (props);
    this.state={
      breakLength:5,
      sessionLength:25,
      displayMins:25,
      displaySec:'00',
      timerId:'',
      running:false,
      break:false,
      timerIndicator:'POMODORO'
    }
    this.handleDecrement=this.handleDecrement.bind(this);
    this.handleIncrement=this.handleIncrement.bind(this);
    this.reset=this.reset.bind(this);
    this.start=this.start.bind(this);
    this.stop=this.stop.bind(this);
    this.handleStartStop=this.handleStartStop.bind(this);
  }
  reset(){
    this.setState({
      breakLength:5,
      sessionLength:25,
      displayMins:25,
      displaySec:'00'
    })
  }
  handleDecrement(e){
    const {id}=e.target;
    if(id==='break-decrement' && this.state.breakLength>1){
      this.setState({
        breakLength:this.state.breakLength-1,
      })
    }
    else if (id==='session-decrement' && this.state.sessionLength>1){
      this.setState({
        sessionLength:this.state.sessionLength-1,
        displayMins:this.state.sessionLength-1
      })
    }
  }
  handleIncrement(e){
    const {id}=e.target;
    if(id==='break-increment' && this.state.breakLength<60){
      this.setState({
        breakLength:this.state.breakLength+1,
      })
    }
    else if (id==='session-increment' && this.state.sessionLength<60){
      this.setState({
        sessionLength:this.state.sessionLength+1,
        displayMins:this.state.sessionLength+1
      })
    }
  }
  start(){
    let mins=this.state.displayMins;
    let secs=mins*60+Number(this.state.displaySec);
    const countDownId=setInterval(
      ()=>{
        if(secs>0){
          secs=secs-1;
          let dispmin=Math.floor(secs/60);
          let dispsec=secs%60;
          if(dispmin<10){
            dispmin='0'+dispmin;
          }
          if (dispsec<10){
            dispsec='0'+dispsec;
          }
          this.setState({
            displayMins:dispmin,
            displaySec:dispsec,
            timerId:countDownId,
            running:true
          })
        }else{
          if(this.state.break===false){
            secs=this.state.breakLength*60;
            secs=secs-1;
            let dispmin=Math.floor(secs/60);
            let dispsec=secs%60;
            if(dispmin<10){
              dispmin='0'+dispmin;
            }
            if (dispsec<10){
              dispsec='0'+dispsec;
            }
            this.setState({
              displayMins:dispmin,
              displaySec:dispsec,
              timerIndicator:'BREAK TIME',
              break:true
            })
          }
        }
      }      
    ,1000)
  }
  stop(){
    clearInterval(this.state.timerId);
    this.setState({
      running:false
    })
  }
  handleStartStop(){
    if(this.state.running===false){
      this.start()
    }else{
      this.stop()
    }
  }
  render(){
    return(
      <Paper elevation={3} className='container'>
        <BreakLabel increment={this.handleIncrement} breakLength={this.state.breakLength} decrement={this.handleDecrement} />
        <div className='interface'>
          <TimerLabel indicator={this.state.timerIndicator} mins={this.state.displayMins} sec={this.state.displaySec} />
          <div className='btn-grp'>
            <Button variant='contained' color='primary' id='start_stop' onClick={this.handleStartStop}>start/stop</Button>
            <Button variant='contained' color='secondary' id='reset' onClick={this.reset}>Reset</Button>
          </div>
        </div>
        <SessionLabel increment={this.handleIncrement} sessionLength={this.state.sessionLength} decrement={this.handleDecrement} />
      </Paper>
    )
  }  
}
export default App;

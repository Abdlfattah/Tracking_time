import React, { Component } from 'react'
import TimerModal from './timer_modal'
import TrackerView from './timer_view'
import ButtonsGroup from './timer_buttons'
import style from './style.css'


class Timer extends Component {

  state={
    time:0,
    start:0,
    isOn: false,
    modalOpen:false,
    description:'',
  }

  handleTimer= () => {
    if(this.state.isOn){
      clearInterval(this.timer)
      this.setState({isOn: false})
    }
    else{
      this.setState({
        isOn: true,
        time: this.state.time,
        start: Date.now() - this.state.time
      })
      this.timer = setInterval(() => this.setState({
      time: Math.trunc((Date.now() - this.state.start)/1000)
      }), 1000);
    }
    
  }

  handleInput = (e) => this.setState({ description:e.target.value })

  
  handleSubmit = () =>{ 
    const time = this.state.time
    this.props.bookTime(this.state.description, time)
    this.setState({time:0})
  }
  handleModal = () => {
    this.setState({
      modalOpen:!this.state.modalOpen,
      isOn:false,
      description:''
    })
    this.props.resetModal()
    clearInterval(this.timer)
}


  render() {
    return (
         <div>
              <div className={style.timer_container}>
                  <TrackerView time={this.state.time} />  
                  <ButtonsGroup
                    handleTimer={this.handleTimer}
                    isOn={this.state.isOn}
                    handleModal={this.handleModal}          
                  />
                </div>
                <TimerModal
                  handleSubmit={this.handleSubmit}
                  handleModal={this.handleModal}
                  modalOpen={this.state.modalOpen}
                  description={this.state.description}
                  handleInput={this.handleInput}
                  time={this.state.time}
                  success={this.props.success}
                  showMessage={this.props.showMessage}
                />
         </div>
    )
  }
}

export default Timer

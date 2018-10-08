import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTrackedTime, getTrackedTime } from '../../actions'
import Timer from './timer'



class Tracker extends Component {

  state={
    success:false,
    showMessage:false
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.tracked_time.post){
        const data = nextProps.tracked_time.post
        if(data.success){
            this.setState({ 
            success:nextProps.tracked_time.post.success,
            showMessage:true
            })           
        }
        else this.setState({ 
          showMessage:true 
        })
    } 
  }

  bookTime = (description,time) =>{
      this.setState({
        showMessage:false,
        booking:false
      })
      this.props.dispatch(postTrackedTime({
        description,
        duration:time,
      }))
  }

  resetModal = () => {
    this.setState({ showMessage:false })
    this.props.dispatch(getTrackedTime())
  }

  render() {
    return (
      <div>
          <Timer 
            success={this.state.success} 
            showMessage={this.state.showMessage}
            bookTime={(data,time)=>this.bookTime(data,time)}
            resetModal={this.resetModal}
          />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      tracked_time: state.tracked_time
    }
}

export default connect(mapStateToProps)(Tracker)

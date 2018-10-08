import React, { Component } from 'react'

import { connect } from  'react-redux'
import { getTrackedTime } from '../../actions'

import TrackedTimeList from './tracked_time_list'
import Filter from './filter'

class TrackedTime extends Component {

  state={
    loading:false,
    items:[],
    success:false,
    searchByDate:false
  }

  componentWillMount = () =>{
    this.setState({ loading:true })
    this.props.dispatch(getTrackedTime())
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.tracked_time.get){
      const data = nextProps.tracked_time.get
      if(data.success){
        this.setState({
          success:true,
          items:data.items,
          loading:false
        })
      }
    }
  }

  filter = (text,startDate='',endDate='') =>{
    this.setState({ loading:true })
    this.props.dispatch(getTrackedTime(text,startDate,endDate))
  }

 
  render() {
    return (
      <div>
        <Filter 
          filter={this.filter}
          items={this.state.items}
        />
        <TrackedTimeList items={this.state.items}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tracked_time: state.tracked_time
  }
}

export default connect(mapStateToProps)(TrackedTime)

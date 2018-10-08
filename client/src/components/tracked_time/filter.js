import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import { Button, Icon, Input, Label, Menu } from 'semantic-ui-react'
import style from './style.css'
 
export default class Filter extends React.Component {

    state = {
      startDate: moment(),
      endDate:moment(),
      text:'',
      showFilterByDate:false
    };
 
  handleChangeStart = (date) => {
    this.setState({
      startDate: date
    });
    if(this.state.showFilterByDate){
        this.props.filter(this.state.text,date,this.state.endDate)
    }
  }

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    });
    if(this.state.showFilterByDate){
        this.props.filter(this.state.text,this.state.startDate,date)
    }
  }

  handleInput = (e) =>{
    const value = e.target.value
    this.setState({ text:value })
    if(this.state.showFilterByDate){
        this.props.filter(value,this.state.startDate,this.state.endDate)
    }
    else this.props.filter(value)
  }

  render() {
    return( 
        <div className={style.filter_container}>
            <div className={style.search}>
                <Input 
                    icon 
                    placeholder='Search...'   
                >
                    <input onChange={this.handleInput}/>
                    <Icon name='search' />
                </Input>
            </div>
            {!this.state.showFilterByDate?
                <div className={style.show_filter_by_date}>
                    <Button 
                        onClick={()=>this.setState({showFilterByDate:true})}
                        color='facebook'
                    >
                        Filter By date
                    </Button>
                </div>
                :<div className={style.date_container}>
                    <div 
                        className={style.close_button}
                        onClick={()=>this.setState({showFilterByDate:false})}
                    >
                        <Icon
                            name='close' 
                            floating='left'
                            size='large'
                        />
                    </div>
                            <div className={style.date}>
                                <Label pointing='below'>
                                    Start
                                </Label>
                                <DatePicker
                                    selected={this.state.startDate}
                                    selectsStart
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeStart}
                                    dateFormat="DD/MM/YYYY"
                                />
                            </div>
                            <div className={style.date}>
                                <Label pointing='below'>
                                    End
                                </Label>
                                <DatePicker
                                    selected={this.state.endDate}
                                    selectsEnd
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeEnd}
                                    dateFormat="DD/MM/YYYY"
                                />
                            </div>
                </div>         
            }
        </div>
        
    )
    }   
}
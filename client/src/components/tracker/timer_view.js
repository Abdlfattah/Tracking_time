import React from 'react'
import moment from 'moment'
import { Segment, Statistic } from 'semantic-ui-react'
import style from './style.css'

function TimerView({time}) {
    return (
        <div className={style.counter_container}>
            <Segment textAlign='center' compact>
                <Statistic>
                    <Statistic.Value>
                        {moment.duration(time,'seconds').hours()}
                    </Statistic.Value>
                    <Statistic.Label>
                        <p>Hours</p>
                    </Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        {moment.duration(time,'seconds').minutes()}
                    </Statistic.Value>
                    <Statistic.Label>
                        <p>Minutes</p>
                    </Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        {moment.duration(time,'seconds').seconds()}
                    </Statistic.Value>
                    <Statistic.Label>
                        <p>Second</p>
                    </Statistic.Label>
                </Statistic>
            </Segment>
            
        </div>
    )
}

export default TimerView

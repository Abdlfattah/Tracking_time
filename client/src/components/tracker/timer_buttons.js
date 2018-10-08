import React from 'react'
import { Button, Icon} from 'semantic-ui-react'
import style from './style.css'

function TimerButtons({handleTimer, handleModal, isOn}) {
    
    return (
                <div className={style.button_container}>
                    <Button.Group>
                        <Button
                            onClick={handleTimer}
                            color='blue'
                            icon
                        >
                            {isOn?
                                    <Icon 
                                    size='large' 
                                    name='pause'/>
                                :
                                    <Icon 
                                    size='large' 
                                    name='play'/>
                            }
                        </Button>
                        <Button 
                            color='green'
                            basic
                            icon
                            onClick={handleModal}
                        >
                            <Icon color='green' name='circle'/>
                            <b>Book Time</b>
                        </Button>
                    </Button.Group>
                </div>
    )
}

export default TimerButtons

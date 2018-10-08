import React from 'react'
import { Modal, Form, TextArea, Button } from 'semantic-ui-react'
import TimerView from './timer_view'
import style from './style.css'

function TimerModal({
    time, 
    handleInput,
    description,
    handleSubmit,
    handleModal,
    modalOpen,
    success,
    showMessage,
}) {


    const renderModal = () => {
        let template=''
        if(showMessage){
            template = (
                <div className={style.modal_container}>
                    <Modal.Content>
                        <div className={style.modal_message}>
                                {success?
                                    <p>Successfully added</p>
                                    :
                                    <p>Something wrong happend</p>
                                }
                        </div>    
                    </Modal.Content>
                    <Modal.Actions>
                        <Button 
                            basic 
                            onClick={handleModal}
                            fluid
                        >
                            {success?
                                <p>OK</p>
                                :<p>Try again</p>
                            }
                        </Button>
                    </Modal.Actions>
                </div>
            )
        }
        else{
            template = (
                <div className={style.modal_container}>
                    <Modal.Content>
                        <TimerView time={time}/>
                    </Modal.Content>
                    <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <TextArea
                                required   
                                value={description}
                                name='description' 
                                placeholder='Write about your task'
                                onChange={(e)=>handleInput(e)} 
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button fluid color='linkedin'>Book</Button>
                        </Form.Field>
                    </Form>
                    </Modal.Content>
                </div>
            )
        }
        return template
    }
    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={handleModal}
                size='small'
            >
                <Modal.Header>Make a description of what you worked on</Modal.Header>
                {renderModal()}
            </Modal>
        </div>
    )
}

export default TimerModal

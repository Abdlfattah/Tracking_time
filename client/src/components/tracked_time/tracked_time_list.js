import React from 'react'
import { Table } from 'semantic-ui-react'
import moment from 'moment'


function TrackedTimeList({items}) {

    const renderItems = () => {
        return items.map((item,i)=>(
            <Table.Row key={i}>
                <Table.Cell textAlign='center'>
                <b>{moment.duration(item.duration,"seconds").hours()}</b>h: 
                <b>{moment.duration(item.duration,"seconds").minutes()}</b>m: 
                <b>{moment.duration(item.duration,"seconds").seconds()}</b>s
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    {item.description}
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    {moment(item.createdAt).format('DD/MM/YYYY')}
                </Table.Cell>
            </Table.Row>
        ))
        }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center'>Duration</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Description</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Created At</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {renderItems()}
                </Table.Body>
            </Table>
        </div>
    )
}

export default TrackedTimeList

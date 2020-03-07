import React from 'react'
import {List, Icon, Avatar} from 'antd'
import Image from './Image'
import logo from '../../logo.jpg'

function Message(props) {
    const AvatarSrc = props.who==='Cora' ? <Image src={logo} width={32} height={32} mode='fit'/>  : <Icon type='smile'/>  
    return (
        <List.Item style={{padding: '1rem'}}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc}/>}
                title={props.who}
                description={props.text}
            />
        </List.Item>
    )// return
}// msg

export default Message

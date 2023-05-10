import {useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {useChat} from '../context/ChatContex'
import {init ,subscribeChat,subscribeInitialMessage} from '../socketApi'
function Container() {
  const {setMessages} = useChat()
  useEffect (()=>{
    init()
    subscribeInitialMessage((messages)=>{
      setMessages(messages)
    })
    subscribeChat((message)=>{
      setMessages((prevstate)=>[...prevstate,{message}])
    })
  },[]) 
  return (
    <div>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container
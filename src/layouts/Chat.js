import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import {Messages} from '../components/Messages';
import {UsersForm} from '../components/UsersForm';

export const Chat = () => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");

  const changeSender = e => setSender(e.target.value);
  const changeReceiver = e => setReceiver(e.target.value);

  return (
     <Container>
       <UsersForm changeSender={changeSender} changeReceiver={changeReceiver}/>
       <Messages receiverEmail={receiver} senderEmail={sender}/>
     </Container>
  )
}

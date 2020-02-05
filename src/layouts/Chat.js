import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Messages} from '../components/Messages';
import Card from 'react-bootstrap/Card';
import {UsersForm} from '../components/UsersForm';
import {Contacts} from '../components/Contacts';

export const Chat = () => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");

  const changeSender = e => setSender(e.target.value);

  return (
     <Container>
       <Row>
         <Col>
           <Contacts setReceiver={setReceiver} sender={sender}/>
         </Col>
         <Col>
           <UsersForm changeSender={changeSender} receiver={receiver}/>
         </Col>
       </Row>
       <Messages receiverEmail={receiver} senderEmail={sender}/>
     </Container>
  )
}

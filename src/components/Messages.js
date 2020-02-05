import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {url} from '../App';
import Button from 'react-bootstrap/Button';
import {Message} from './Message';
import {MessageInput} from './MessageInput';

export const Messages = ({senderEmail, receiverEmail}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (senderEmail && receiverEmail)
      fetch(`${url}/messages?senderEmail=${senderEmail}&receiverEmail=${receiverEmail}`, {
        mode: 'cors'
      })
         .then(response => response.json())
         .then(messages => {
           setMessages(messages);
         })
  }, [senderEmail, receiverEmail]);

  return (
     <Container>
       <MessageInput senderEmail={senderEmail} receiverEmail={receiverEmail}/>
       {messages.map(message => <Message message={message}/>)}
     </Container>
  );
};


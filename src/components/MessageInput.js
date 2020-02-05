import React, {useState} from 'react';
import {url} from '../App';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const MessageInput = ({senderEmail, receiverEmail}) => {
  const [message, setMessage] = useState("");

  const changeMessage = e => setMessage(e.target.value);

  const saveMessage = e => {
    e.preventDefault();
    fetch(`${url}/messages`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender: {email: senderEmail},
        receiverEmail,
        message
      })
    });
  };

  return (
     <Form>
       <Form.Group controlId="message">
         <Form.Label>Mensaje</Form.Label>
         <Form.Control as="textarea" rows="3" onChange={changeMessage}/>
       </Form.Group>
       <Button variant="primary" type="submit" onClick={saveMessage}>
         Enviar
       </Button>
     </Form>
  )
};

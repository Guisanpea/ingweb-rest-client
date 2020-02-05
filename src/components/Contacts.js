import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import {url} from '../App';

export const Contacts = ({setReceiver, sender}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (sender)
      fetch(`${url}/users/${sender}/contacts`, {
        mode: 'cors'
      })
         .then(response => response.json())
         .then(contacts => {
           setContacts(contacts);
         })
  }, [sender]);
  return contacts.map(contact => (
        <Card onClick={() => setReceiver(contact.email)}>
          <Card.Body>{contact.email}</Card.Body>
        </Card>
     )
  );
};


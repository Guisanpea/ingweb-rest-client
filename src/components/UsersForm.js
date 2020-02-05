import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const UsersForm = ({changeSender, changeReceiver}) => {
  return <Col>
    <Form>
      <Form.Group as={Row} controlId="sender">
        <Form.Label column sm="2">
          Origen
        </Form.Label>
        <Col sm="10">
          <Form.Control onChange={changeSender} as="input"/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="receiver">
        <Form.Label column sm="2">
          Destino
        </Form.Label>
        <Col sm="10">
          <Form.Control onChange={changeReceiver}/>
        </Col>
      </Form.Group>
    </Form>
  </Col>;
};

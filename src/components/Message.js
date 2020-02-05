import React from 'react';
import Card from 'react-bootstrap/Card';
import * as PropTypes from 'prop-types';

export const Message = ({message}) => {
  //2020-2-5-17-50-39

  const time = message.time.slice(0, 3).join("-") + " " + message.time.slice(3).join(":");

  return <Card>
    <Card.Header as="h5">{time}</Card.Header>
    <Card.Body>
      <Card.Text>
        {message.message}
      </Card.Text>
    </Card.Body>
  </Card>;
};

Message.propTypes = {message: PropTypes.any};

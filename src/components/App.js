import React, { Component } from 'react';
import { Container, Card, Col, Row } from 'reactstrap';

import '../assets/stylesheets/css/style.css';
import image from '../assets/images/image.png';

class App extends Component {
  render() {
    const title = 'Hello React Skeleton';
    return (
      <div>
        <Container />
        <Card />
        <Col>
          <Row />
          <Row />
          <Row />
        </Col>
        <div className="hello">{title}</div>
        <img src={image} />
      </div>
    );
  }
}

export default App;

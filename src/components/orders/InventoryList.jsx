import React from 'react';
import Sidebar from '../home/sidebar';
import CardItem from './CardItem';
import {Container, Row, Col, Button} from 'react-bootstrap/';

const InventoryList = () => {

      return (
        <Container>
            <Row style={{ width:'80vw'}}>
                <Col lg={2}>
                    <Sidebar />
                </Col>
                <Col lg={10} className="scroll" style={{backgroundColor: 'white'}}>
                    <Row>
                    <Col className="d-flex">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    </Col>
                    </Row>
                    <Row>
                    <Col className="d-flex">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      );
    };
    
    export default InventoryList;
import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import homeImage from '../../assets/homeImage.jpg';
import '../../App.css';


const HomePage = () => {

  const navigate = useNavigate();

  const navOrders = () => {
    navigate("/orders");
  };  
  
    return (
      <Container>
        <Row className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#ffe599'}}>
          <Col>
            <h5 className="display-5">Inventory Management</h5>
            <p>Welcome to the Inventory Management System (IMS). This system is designed to help you efficiently manage and track your inventory, ensuring that you always have the right products in stock and can quickly respond to changes in demand. Whether you're managing a small warehouse, a retail store, or a large supply chain, our system provides you with the tools you need to stay organized and make data-driven decisions.</p>
            <div className="icon" onClick={navOrders}>
             <div className="text-box">Goods Ordering</div>
            </div>
            <div className="icon" onClick={() => handleClick('Search')}>
            <div className="text-box">Inventory Management</div>
            </div>
            <div className="icon" onClick={() => handleClick('User')}>
            <div className="text-box">Delivery Routing</div>
            </div>
            <div className="icon" onClick={() => handleClick('Settings')}>
            <div className="text-box">Delivery Management</div>
            </div>
          </Col>
          <Col>
          <img src={homeImage} alt="Inventory Management System" style={{ width: '100%', height: 'auto' }}/>
          </Col>
          </Row>
        </Container>
    );
  };
  
  export default HomePage;
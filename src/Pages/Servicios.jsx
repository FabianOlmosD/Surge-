import React from 'react';
import FiveAccordions from "./FiveAccordions.jsx";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Servicios = () => {
  return (
    <Container className="card-container">
      <Card border="warning ">
       <Card.Body className='consultoria-section card-text text-white'>
        <h3 className='text-white text-center'>NUESTROS SERVICIOS</h3>
        <FiveAccordions />
       </Card.Body>
      </Card>
    </Container>
  );
};



export default Servicios;
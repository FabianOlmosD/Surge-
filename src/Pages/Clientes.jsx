import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ch from '../Fotos/ch.jpg';
import pf from '../Fotos/pf.jpg';
import rd from '../Fotos/rd.jpg';
import tc from '../Fotos/tc.jpg';
import '../index.css'

function clientes () {
  return (
    <Container className="card-container">
      <Card border="warning ">
      <Card.Body className='consultoria-section card-text text-white'>
        <h3 className='text-center'>NUESTROS CLIENTES</h3>
        <Row >
        <Col >
        <div >
         <Card style={{ width: '14rem', height:'26rem' }} >
         
         <Card.Img variant="top" src={pf} />
         
           <Card.Body className="card-body-right">
           <Card.Title >Performance Center</Card.Title>
           <Card.Text>
            Empresa lider en Argentina dedicada a la importación, comercialización y venta de neumáticos, 
            con una trayectoria de mas de 50 años en el rubro.
           </Card.Text>
           <Button variant="primary" href="https://performancecenter.com.ar/" target="_blank">Ir al sitio</Button>
           </Card.Body>
         </Card>
        </div>
        </Col>
  
       
        <Col>
        <div >
        <Card style={{ width: '14rem', height:'26rem' }}>
        <div className='margintop'>
         <Card.Img variant="top" src={ch} />
         </div>
           <Card.Body>
           <Card.Title>Chipititas</Card.Title>
           <Card.Text >
            Empresa de Argentina dedicada a la importación, fabricación y venta de ropa para bebes, 
            se destaca en su orignales confecciones.
            </Card.Text>
           <Button variant="primary" href="https://chipititas.com.ar/" target="_blank">Ir al sitio</Button>
          </Card.Body>
         </Card>
        </div>
        </Col>
         
        <Col>
        <div >
        <Card style={{ width: '14rem', height:'26rem' }}>
        
         <Card.Img variant="top" src={rd}  />
        
           <Card.Body>
           <Card.Title>Rodados Dancar</Card.Title>
           <Card.Text>
           Empresa de Argentina dedicada a la importación, fabricación y venta de artículos de 
           bicicleteria, con una trayectoria de mas de 20 años en el rubro.
           </Card.Text>
           <Button variant="primary" href="https://rodadosdancar.com.ar/" target="_blank">Ir al sitio</Button>
          </Card.Body>
         </Card>
        </div>
        </Col>

        <Col>
        <div >
        <Card style={{ width: '14rem', height:'26rem' }}>
        
         <Card.Img variant="top" src={tc} />
        
           <Card.Body>
           <Card.Title>Todo Calculadoras</Card.Title>
           <Card.Text>
           Empresa de Argentina dedicada a la importación y venta de calculadoras 
           cientificas, oficiales CASIO, con una trayectoria de mas de 30 años en el rubro.
           </Card.Text>
           <Button variant="primary" href="https://todocalculadoras.com.ar/" target="_blank">Ir al sitio</Button>
          </Card.Body>
         </Card>
        </div>
        </Col>

        


      </Row>
     
      </Card.Body>
          </Card>
          </Container>
  );
}

export default clientes;


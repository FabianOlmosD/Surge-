import React from 'react';
import '../FiveAccordions.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Surge from '../Fotos/Surgepng.png';  // Importa el logo

const Home = () => {
  return (
    <>
      <Container className="card-container">
               <Card border="warning">
          <Card.Body className="consultoria-section card-text text-white">
            <div>
              <h3 className="text-center">BIENVENIDOS A</h3>
              <div className="logo-container">
          <img src={Surge} alt="Logo de la empresa" className="responsive-logo" />
        </div>
              <ul>
                <li><strong>Optimización de Procesos:</strong> Simplificamos tus operaciones para aumentar la <br /> productividad y reducir costos.</li>
                <li><strong>Desarrollo de Planes de Negocio:</strong> Creamos planes detallados y viables para guiar <br /> el crecimiento de tu empresa.</li>
                <li><strong>Asesoría en Marketing y Ventas:</strong> Potenciamos tu presencia en línea y offline para <br /> atraer más clientes y aumentar las ventas.</li>
                <li><strong>Gestión de Recursos Humanos:</strong> Mejoramos la gestión del talento humano y <br /> fomentamos un ambiente de trabajo eficaz.</li>
                <h3>¿Por Qué Elegirnos?</h3>
                <li><strong>Experiencia Comprobada:</strong> Nuestro equipo cuenta con la experiencia y <br /> conocimientos necesarios para brindarte soluciones efectivas.</li>
                <li><strong>Enfoque Personalizado:</strong> Adaptamos nuestras estrategias a las necesidades únicas.<br /> de tu empresa.</li>
                <li><strong>Compromiso con el Éxito:</strong> Nos dedicamos a tu éxito y trabajamos contigo para <br /> lograr resultados tangibles.<br /> de tu empresa.</li>
              </ul>
              <p>Confía en nosotros para llevar tu negocio al siguiente nivel en MercadoLibre. Simplifica tu proceso de venta y deja que nuestro equipo experto se encargue de todo. ¡Contáctanos hoy mismo para comenzar a destacarte en el mercado digital!</p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../FiveAccordions.css';





function FiveAccordions() {

  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>SERVICIOS DE CONSULTORIA Y GESTION</Accordion.Header>
        <Accordion.Body className="consultoria-section">
          <h3>Ofrecemos una amplia gama de servicios de asesoría empresarial, incluyendo:</h3>
          <ul >
            <li><strong>Optimización de Procesos:</strong> Simplificamos tus operaciones para aumentar la <br /> productividad y reducir costos.</li>
            <li><strong>Desarrollo de Planes de Negocio:</strong> Creamos planes detallados y viables para guiar <br /> el crecimiento de tu empresa.</li>
            <li><strong>Asesoría en Marketing y Ventas:</strong> Potenciamos tu presencia en línea y offline para <br /> atraer más clientes y aumentar las ventas.</li>
            <li><strong>Gestión de Recursos Humanos:</strong> Mejoramos la gestión del talento humano y <br /> fomentamos un ambiente de trabajo eficaz.</li>
            <h3>¿Por Qué Elegirnos?</h3>
            <li><strong>Experiencia Comprobada:</strong> Nuestro equipo cuenta con la experiencia y <br /> conocimientos necesarios para brindarte soluciones efectivas.</li>
            <li><strong>Enfoque Personalizado:</strong> Adaptamos nuestras estrategias a las necesidades únicas. <br /> de tu empresa.</li>
            <li><strong>Compromiso con el Éxito:</strong> Nos dedicamos a tu éxito y trabajamos contigo para <br /> lograr resultados tangibles. <br /> de tu empresa.</li>
          </ul>
          <p>Confía en nosotros para llevar tu negocio al siguiente nivel en MercadoLibre. Simplifica tu proceso de venta y deja que nuestro equipo experto se encargue de todo. ¡Contáctanos hoy mismo para comenzar a destacarte en el mercado digital!</p>
         
       
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1"  >
        <Accordion.Header>ASESORÍA EN ECOMMERCE</Accordion.Header>
        <Accordion.Body className='asesoria-section'>
        <h3>Impulsa tu Negocio en Línea con Nuestra Asesoría en eCommerce</h3>
        <p>En <strong>SURGE</strong>, somos expertos en ayudar a empresas a alcanzar su máximo potencial en el mundo del comercio electrónico. Nuestro equipo está aquí para ofrecerte la orientación y las soluciones necesarias para optimizar tus operaciones y maximizar tus ventas en línea.</p>

        <h3>¿Qué Ofrecemos?</h3>
        <p>Ofrecemos servicios especializados en ecommerce que abarcan desde la creación de tiendas en línea hasta estrategias avanzadas de marketing digital:</p>
        <ul>
            <li><strong>Desarrollo de Tiendas Virtuales:</strong> Creamos plataformas de ecommerce atractivas y <br /> funcionales, adaptadas a tus necesidades y objetivos.</li>
            <li><strong>Optimización de Experiencia de Usuario:</strong> Mejoramos la navegación y el diseño <br /> de tu tienda para aumentar las conversiones y la retención de clientes.</li>
            <li><strong>Gestión de Catálogo y Contenido:</strong> Organizamos y optimizamos tus productos con <br /> descripciones convincentes y atractivas.</li>
            <li><strong>Estrategias de Marketing Digital:</strong> Implementamos campañas efectivas de SEO, <br /> SEM y redes sociales para aumentar la visibilidad y el tráfico de tu tienda en línea.</li>
            <li><strong>Análisis de Datos y Mejora Continua:</strong> Utilizamos datos para tomar decisiones <br /> informadas y optimizar constantemente tus operaciones de ecommerce.</li>
        </ul>

        <h3>¿Por Qué Elegirnos?</h3>
        <p>Nuestro equipo cuenta con experiencia comprobada en ecommerce y está comprometido con la excelencia. Adaptamos nuestras soluciones a las necesidades específicas de tu negocio y tu mercado objetivo. Nos enfocamos en resultados medibles, como el aumento de ventas y la mejora de la experiencia del cliente.</p>

        <h3>¡Da el Salto al Éxito en eCommerce!</h3>
        <p>Ya sea que estés comenzando en el mundo del comercio electrónico o buscando optimizar una tienda existente, estamos aquí para ayudarte a alcanzar tus metas. <strong>¡Contacta con nosotros hoy mismo para una consulta personalizada y lleva tu negocio en línea al siguiente nivel!</strong></p>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>MERCADOLIBRE</Accordion.Header>
        <Accordion.Body className="mercadolibre-section">
          <h2>Potencia tu negocio con nuestros servicios especializados!</h2>
          <p>Enfocados en vendedores de MercadoLibre, ofrecemos una solución integral para optimizar tus ventas. Desde la captura profesional de imágenes hasta la gestión completa de publicaciones, nos encargamos de cada detalle para garantizar tu éxito.</p>
          <h3>Nuestros servicios incluyen:</h3>
          <ul>
            <li><strong>Fotografía de Producto:</strong> Imágenes de alta calidad que resaltan tus artículos.</li>
            <li><strong>Edición Profesional:</strong> Aseguramos que cada foto sea perfecta y representativa.</li>
            <li><strong>Optimización de Publicaciones:</strong> Títulos precisos y descripciones atractivas para aumentar visibilidad.</li>
            <li><strong>Gestión de Preguntas y Respuestas:</strong> Mantenemos una comunicación fluida con tus clientes.</li>
            <li><strong>Análisis Estadísticos:</strong> Reportes detallados para tomar decisiones informadas.</li>
            <li><strong>Rankings de Ventas:</strong> Identificamos oportunidades y potenciamos tus resultados.</li>
          </ul>
          <p>Confía en nosotros para llevar tu negocio al siguiente nivel en MercadoLibre. Simplifica tu proceso de venta y deja que nuestro equipo experto se encargue de todo. ¡Contáctanos hoy mismo para comenzar a destacarte en el mercado digital!</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>MARKETING</Accordion.Header>
        <Accordion.Body className="marketing-section">
        <h3>Impulsa tu Negocio con Nuestros Servicios de Marketing</h3>
        <p>En <strong>Nombre de tu Empresa</strong>, estamos dedicados a ayudar a empresas a alcanzar sus objetivos de crecimiento y visibilidad a través de estrategias efectivas de marketing. Contamos con un equipo de expertos listos para colaborar contigo y llevar tu negocio al siguiente nivel.</p>

        <h3>¿Qué Ofrecemos?</h3>
        <p>Ofrecemos una amplia gama de servicios de marketing diseñados para maximizar el alcance y el impacto de tu empresa:</p>
        <ul>
            <li><strong>Optimización de SEO:</strong> Mejoramos tu presencia en línea para aumentar la visibilidad orgánica <br /> en los motores de búsqueda.</li>
            <li><strong>Campañas de Publicidad Digital:</strong> Creamos y gestionamos campañas efectivas en plataformas <br /> como Google Ads y redes sociales.</li>
            <li><strong>Estrategias de Contenido:</strong> Desarrollamos contenido atractivo y relevante para aumentar el <br /> compromiso de tu audiencia.</li>
            <li><strong>Email Marketing:</strong> Diseñamos y ejecutamos campañas de email efectivas para llegar a tus <br /> clientes potenciales.</li>
            <li><strong>Análisis y Reportes:</strong> Utilizamos datos para evaluar el rendimiento y ajustar las estrategias <br /> según sea necesario.</li>
        </ul>

        <h3>¿Por Qué Elegirnos?</h3>
        <p>Nuestro equipo cuenta con la experiencia y el conocimiento necesarios para ofrecer resultados tangibles. Nos enfocamos en comprender tu negocio y tus objetivos para diseñar estrategias personalizadas que generen impacto y retorno de inversión.</p>

        <h3>¡Potencia tu Marca y Aumenta tus Ventas!</h3>
        <p>Ya sea que necesites mejorar tu presencia en línea, aumentar tus conversiones o fortalecer tu imagen de marca, estamos aquí para ayudarte a lograrlo. <strong>¡Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos colaborar en el éxito de tu negocio!</strong></p>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion> 
  );
}

export default FiveAccordions;

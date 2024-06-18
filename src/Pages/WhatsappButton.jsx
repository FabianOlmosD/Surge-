import React from 'react';
import './FiveAccordions'; // Importa los estilos para el botó

function WhatsappButton() {
  const phoneNumber = '5491163569666'; // Reemplaza con tu número de teléfono

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <img src="src/whatsapp-icon.png" alt="WhatsApp" className="whatsapp-icon" />
      
    </button>
  );
}

export default WhatsappButton;

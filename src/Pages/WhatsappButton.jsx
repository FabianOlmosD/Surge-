import React from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png'; // Asegúrate de que la ruta sea correcta

const phoneNumber = '5491163569666'; // Reemplaza con tu número de teléfono

const handleClick = () => {
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, '_blank');
};

const WhatsappButton = () => {
  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </button>
  );
}

export default WhatsappButton;

import React from 'react';

function Nosotros() {
  const googleMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.588007112781!2d-64.10159952360675!3d-30.981977474464962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432639d942a8321%3A0xb78b4f439621e267!2zQ2FzdHVsbyBQZcOxYSA4NjMsIEplc3VzIE1hcsOtYSwgQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1699549316876!5m2!1ses-419!2sar';
  const ubicacion = 'Ubicación del Lugar';
  const telefono = 'Teléfono: 03525 44-4255';
  const nosDedicamosA = 'Nos dedicamos a la venta de lanas y mercería, así como a la confección de prendas tejidas a medida para todo público.';

  return (
    <div className='container'>
      <h1 className='titulo'>{nosDedicamosA}</h1>
      
<br />
      <h2>{telefono}</h2>
      <br />
      <h3>{ubicacion}</h3>
      <iframe
        title="Google Maps"
        width="600"
        height="450"
        frameBorder="0"
        src={googleMapUrl}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
     
    </div>
  );
}

export default Nosotros;


// === CONFIG: reemplaza este número por el número real del conductor ===
  const PHONE_E164 = '+5493704815221'; // formato E.164: +[código país][sin ceros ni signos]
  const DRIVER_NAME = 'Alejandro Sebastian Mouchard ';

  
  // actualiza displays
  document.getElementById('phone-display').textContent = PHONE_E164.replace('+54','+54 ');
  document.getElementById('driver-name').textContent = DRIVER_NAME;
  document.getElementById('year').textContent = new Date().getFullYear();

  // arma link directo a WhatsApp
  function makeWhatsAppLink(text){
    const base = 'https://wa.me/' + PHONE_E164.replace(/\D/g,'') + '?text=' + encodeURIComponent(text);
    return base;
  }

  // Hero button
  const heroBtn = document.getElementById('whatsapp-hero');
  heroBtn.href = makeWhatsAppLink('Hola! Me gustaría reservar un traslado.\nNombre: \nLugar de salida: \nDestino: \nFecha y hora:');

  // Footer button
  const footerBtn = document.getElementById('whatsapp-footer');
  footerBtn.href = makeWhatsAppLink('Hola! Quiero recibir información y tarifas.');

  // Form de reserva rápida
  document.getElementById('quick-book').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value || 'Sin nombre';
    const pickup = document.getElementById('pickup').value || 'No indicado';
    const dest = document.getElementById('dest').value || 'No indicado';
    const when = document.getElementById('when').value || 'En breve';

    const msg = `Hola ${DRIVER_NAME}, quiero reservar un traslado.%0ANombre: ${name}%0ALugar de salida: ${pickup}%0ADestino: ${dest}%0AFecha/hora: ${when}`;
    const url = makeWhatsAppLink(decodeURIComponent(msg));
    window.open(url, '_blank');
  });

  // Mejoras pequeñas de accesibilidad: focus visible
  document.addEventListener('keyup', function(e){ if(e.key === 'Tab') document.body.classList.add('show-focus'); });

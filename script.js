
document.addEventListener("DOMContentLoaded", function() {
  const alreadyVisited = document.cookie.includes("vizitat=da");

  if (alreadyVisited) {
    document.body.innerHTML = `
      <div style="text-align: center; padding: 3em; font-family: Arial;">
        <h2 style="color: darkred;">🔒 Acces restricționat</h2>
        <p>Ai beneficiat deja de accesul gratuit pe SwissRoHub.ch.</p>
        <p>Pentru a continua, efectuează o contribuție unică de <strong>5 CHF / EUR</strong>.</p>
        <h3>Plată prin:</h3>
        <ul style="list-style: none; font-size: 1.2em;">
          <li>💳 Twint: <strong>+41 76 711 03 58</strong></li>
          <li>📧 Confirmare: <strong>vegga2007@gmail.com</strong></li>
        </ul>
        <p>Pentru întrebări sau confirmare rapidă, contactează-ne pe WhatsApp:</p>
        <a href="https://wa.me/41767110358" style="display:inline-block;padding:10px 20px;background:#25D366;color:white;border-radius:5px;text-decoration:none;font-weight:bold;">
          📱 WhatsApp Contact
        </a>
      </div>
    `;
  } else {
    document.cookie = "vizitat=da; max-age=" + 30*24*60*60 + "; path=/";
  }
});

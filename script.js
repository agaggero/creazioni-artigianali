/* =========================================================
   Creazioni Artigianali - catalogo e contatto WhatsApp

   COME MODIFICARE (due cose sole):
   1) NUMERO WHATSAPP -> cambia la riga WHATSAPP_NUMBER qui sotto.
   2) PRODOTTI        -> aggiungi/modifica/rimuovi gli oggetti nell'
                         elenco "products" (nome, image, description, price).
   Le foto del catalogo compaiono da sole.
   ========================================================= */

/* ---------------------------------------------------------
   1) NUMERO WHATSAPP
   Prefisso internazionale + numero, SENZA "+", spazi o zeri iniziali.
   Esempio per l'Italia: "39" + cellulare -> "393401234567"
   Sostituisci le X con il numero vero.
   --------------------------------------------------------- */
const WHATSAPP_NUMBER = "393475555826";

/* ---------------------------------------------------------
   2) PRODOTTI
     name        -> nome mostrato sotto la foto
     image       -> foto dentro la cartella images/
     description -> una riga breve (puoi anche lasciarla "")
     price       -> prezzo (lascia "" per non mostrarlo, es. "25 €")
   --------------------------------------------------------- */
const products = [
  {
    name: "Fuoriporta \"Home\" con rose rosa",
    image: "images/fuoriporta-home-rosa.jpg",
    description: "Tondo in legno con rose rosa e fiocco in raso.",
    price: ""
  },
  {
    name: "Fuoriporta \"Home sweet home\" bianco",
    image: "images/fuoriporta-home-bianco.jpg",
    description: "Rose bianche e verde delicato su tondo in legno.",
    price: ""
  },
  {
    name: "Ghirlanda bianca \"Grateful\"",
    image: "images/ghirlanda-grateful.jpg",
    description: "Rose bianche, verde fresco e casetta al centro.",
    price: ""
  },
  {
    name: "Cuore floreale fuoriporta",
    image: "images/cuore-floreale.jpg",
    description: "Cuore di rose rosa cipria con nastro in raso.",
    price: ""
  },
  {
    name: "Composizione verticale rosa antico",
    image: "images/composizione-verticale-rosa-antico.jpg",
    description: "Cascata di rose panna e rosa antico.",
    price: ""
  },
  {
    name: "Composizione verticale romantica",
    image: "images/composizione-verticale-romantica.jpg",
    description: "Rose e fiori nei toni del rosa e panna.",
    price: ""
  },
  {
    name: "Centrotavola floreale rosa",
    image: "images/centrotavola-rosa.jpg",
    description: "Rose rosa e panna con fiocco in raso.",
    price: ""
  },
  {
    name: "Zucca decorativa in tessuto",
    image: "images/zucca-decorativa.jpg",
    description: "Zucca in tessuto con fiori rosa e nastri.",
    price: ""
  },
  {
    name: "Cuscino decorativo con fiori",
    image: "images/cuscino-fiori.jpg",
    description: "Cuscino verde salvia con spilla floreale.",
    price: ""
  },
  {
    name: "Sacchetto profumato con fiori",
    image: "images/sacchetto-profumato.jpg",
    description: "Tessuto a fiori con roselline applicate.",
    price: ""
  },
  {
    name: "Orchidea artificiale in vaso",
    image: "images/orchidea-vaso.jpg",
    description: "Orchidee rosa in vaso, sempre fiorite.",
    price: ""
  },
  {
    name: "Composizioni fiorite in vaso",
    image: "images/composizioni-vaso.jpg",
    description: "Vasetti con fiori rosa e verde misto.",
    price: ""
  },
  {
    name: "Ghirlanda natalizia con gnomo",
    image: "images/ghirlanda-natalizia-gnomo.jpg",
    description: "Verde, bacche rosse, pigne e gnomo in maglia.",
    price: ""
  },
  {
    name: "Ghirlanda natalizia a stella",
    image: "images/ghirlanda-natalizia-stella.jpg",
    description: "A stella, con bacche, pigne e nastro rosso.",
    price: ""
  },
  {
    name: "Fiocco natalizio rosso",
    image: "images/fiocco-natalizio-rosso.jpg",
    description: "Fiocco in velluto con rose, bacche e pigne.",
    price: ""
  },
  {
    name: "Box regalo a cuore con cioccolatini",
    image: "images/box-cuore-cioccolatini.jpg",
    description: "Cioccolatini e roselline rosse a forma di cuore.",
    price: ""
  }
];

/* =========================================================
   Da qui in poi non serve modificare nulla.
   ========================================================= */

/* Piccola icona WhatsApp (SVG) */
const WA_ICON =
  '<svg class="wa-icon" viewBox="0 0 32 32" aria-hidden="true">' +
  '<path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.7-12.81-12.7zm0 23.04h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.6 10.6 0 0 1-1.62-5.65c0-5.86 4.77-10.62 10.63-10.62 2.84 0 5.5 1.11 7.51 3.12a10.56 10.56 0 0 1 3.11 7.51c0 5.86-4.77 10.63-10.62 10.63zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55-.18-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.64 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.41 5.41 4.78.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z"/>' +
  '</svg>';

/* Link WhatsApp con messaggio gia pronto */
function buildWhatsappLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

/* Una foto con il suo nome e il contatto WhatsApp */
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const message = "Ciao, vorrei avere informazioni su: " + product.name;
  const link = buildWhatsappLink(message);

  const descHtml = product.description
    ? '<p class="product-description">' + product.description + "</p>"
    : "";
  const priceHtml = product.price
    ? '<p class="product-price">' + product.price + "</p>"
    : "";

  card.innerHTML =
    '<div class="product-image-wrap">' +
      '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
    "</div>" +
    '<h2 class="product-name">' + product.name + "</h2>" +
    descHtml +
    priceHtml +
    '<a class="product-contact" href="' + link + '" target="_blank" rel="noopener">' +
      WA_ICON + "Chiedi informazioni" +
    "</a>";

  return card;
}

/* Inserisce tutte le foto nella pagina */
function renderCatalog() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  products.forEach(function (product) {
    grid.appendChild(createProductCard(product));
  });
}

/* Imposta il contatto WhatsApp della sezione "Ritiro e consegna" */
function setupGeneralWhatsapp() {
  const link = document.getElementById("general-whatsapp");
  if (!link) return;
  const message = "Ciao, vorrei avere informazioni sulle vostre creazioni.";
  link.href = buildWhatsappLink(message);
  link.innerHTML = WA_ICON + "Scrivimi su WhatsApp";
}

/* Avvio */
document.addEventListener("DOMContentLoaded", function () {
  renderCatalog();
  setupGeneralWhatsapp();
});

import type { CampsiteConfig } from "../types";

/**
 * Camping Ramsbacher — Rennweg am Katschberg, Kärnten.
 * Alle Texte/Fakten belegt aus camp-ram.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich Fotos von der eigenen Website (eigene Platz-Aufnahmen
 * + von der Region/Tourismusverband bereitgestellte Umgebungsfotos, die der
 * Platz selbst verwendet) in /public/campsites/camp-ram/.
 * EHRLICH:
 *  - KEIN See am Platz → `see` ausgelassen (nie "am See" geframt).
 *  - Reale Preisliste 2026 vorhanden → keine Platzhalterpreise.
 *  - Keine Unterkünfte (nur Stellplätze) → `mobilheime` ausgelassen.
 *  - Kein verwertbares eigenes Logo gescrapt (nur SVG/Fremdlogo) → `logo` weg,
 *    Footer zeigt die Wortmarke.
 *  - Generische Stock-Fotos (Freepik/sabyna75) bewusst NICHT verwendet.
 */
const IMG = "/campsites/camp-ram";

export const campRam: CampsiteConfig = {
  name: "Camping Ramsbacher",
  shortName: "Ramsbacher",
  slug: "camp-ram",
  ort: "Rennweg am Katschberg",
  region: "Kärnten",
  brandKind: "Sommer- & Wintercamping",
  regionLong: "Region Katschberg-Lieser-Maltatal · Kärnten · Österreich",

  claim: "Naturnah campen mitten in den Bergen am Katschberg",
  claimEmphasis: "mitten in den Bergen",
  intro:
    "Sommer- und Wintercamping am ruhigen Ortsrand von Rennweg — naturnah, komfortabel und ganzjährig geöffnet, eingebettet in die Bergwelt zwischen Hohen Tauern und Nockbergen.",

  statement: {
    text: "Bei uns campst du naturnah mit Komfort — mitten in den Kärntner Bergen, Sommer wie Winter.",
    emphasis: "mitten in den Kärntner Bergen",
  },

  pillars: [
    {
      title: "Mitten in den Bergen",
      text: "Ruhig am Ortsrand von Rennweg, eingebettet in die Bergwelt — umgeben von Wiesen und mit Blick auf die Alpen.",
      image: { src: `${IMG}/blick-rennweg-sommer.webp`, alt: "Blick auf Rennweg und das umliegende Bergtal im Sommer" },
    },
    {
      title: "Sommer aktiv",
      text: "Wandern, Rad- und E-Bike-Touren starten direkt vom Campingplatz — in den Bergen und Tälern rund um den Katschberg.",
      image: { src: `${IMG}/wandern-maltatal.webp`, alt: "Wanderin mit Blick auf einen Bergsee im Maltatal" },
    },
    {
      title: "Winter & Schnee",
      text: "Ganzjährig geöffnet und ideal für Wintercamper: Mit dem Gratis-Skibus geht es bequem ins Skigebiet Aineck-Katschberg.",
      image: { src: `${IMG}/camping-winter-drohne.webp`, alt: "Verschneite Drohnenaufnahme vom Camping Ramsbacher im Winter" },
    },
  ],

  usps: [
    "Ganzjährig geöffnet",
    "65 parzellierte Stellplätze",
    "Hunde gratis",
    "WLAN an allen Stellplätzen",
    "Beheizte Sanitäranlagen",
    "Gratis-Skibus ins Skigebiet",
  ],

  trust: {
    heading: "Worauf du dich bei Camping Ramsbacher verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Ramsbacher, ganzjährig geöffnet und mitten in der Bergwelt am Katschberg — mit beheizten Sanitäranlagen, eigenem Quellwasser und allem Komfort für entspannte Campingtage.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  saison: { von: "Ganzjährig", bis: "geöffnet" },

  hero: {
    aerial: {
      src: `${IMG}/luftaufnahme-camping-ramsbacher.webp`,
      alt: "Luftaufnahme von Camping Ramsbacher — weiße Wohnwagen auf grünen, parzellierten Wiesen",
    },
  },

  camping: {
    heading: "Wiesencamping am Katschberg",
    intro:
      "65 großzügige, parzellierte Wiesen-Stellplätze von 70–95 m² mit asphaltierter Zufahrt, Stromanschluss an jedem Platz und 2,5 m hohen Heckenabtrennungen für viel Privatsphäre.",
    features: [
      {
        title: "Eingebettet in die Bergwelt",
        text: "Nur 4 km von der Tauernautobahn (A10) und doch ruhig am Ortsrand von Rennweg — umgeben von Wiesen und Bergen.",
        image: { src: `${IMG}/lage-rennweg-luftaufnahme.webp`, alt: "Luftaufnahme von Rennweg mit Campingplatz, Tennisplatz und Schwimmbad" },
      },
      {
        title: "Beheizte Sanitäranlagen",
        text: "Gepflegte, beheizte Sanitäranlagen mit Fußbodenheizung und Lüftung: 10 Duschen, 10 Waschbecken, 8 Einzel-Waschkabinen und 8 WCs.",
        image: { src: `${IMG}/sanitaeranlagen.webp`, alt: "Beheizte Sanitäranlage mit Duschen und Waschbecken am Camping Ramsbacher" },
      },
      {
        title: "Spülraum & eigenes Quellwasser",
        text: "Spülraum, Waschmaschine, Trockner und Skiraum — Trinkwasserstellen am ganzen Platz mit Wasser aus eigener Quelle.",
        image: { src: `${IMG}/spuelraum.webp`, alt: "Spülraum mit Edelstahl-Spülbecken am Campingplatz" },
      },
      {
        title: "Abendküche zum Mitnehmen",
        text: "Ab 18:00 Uhr gibt es Take-away am Platz — Burger, Pommes, Salate und Snacks, auf Wunsch per WhatsApp vorbestellt.",
        image: { src: `${IMG}/take-away-abendkueche.webp`, alt: "Frisch zubereitetes Gericht aus der Take-away-Küche" },
      },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Rund um den Platz wird es Kindern nie langweilig: Auf dem Platz sorgen Minigolf, Tennis, Skatepark, Beachvolleyball und ein Kinderspielplatz für Bewegung — und die Familienregion Katschberg hält noch viel mehr bereit.",
    features: [
      {
        title: "Almspielplatz am Katschberg",
        text: "Der Almspielplatz auf dem Katschberg verbindet Spielen und Natur auf besondere Weise — ein Riesenspaß für große und kleine Entdecker.",
        image: { src: `${IMG}/almspielplatz-katschberg.webp`, alt: "Kinder am Almspielplatz auf dem Katschberg" },
      },
      {
        title: "Eselpark Maltatal",
        text: "Der Eselpark im Maltatal ist ein besonderes Erlebnis für die ganze Familie — Tiere zum Staunen und Streicheln.",
        image: { src: `${IMG}/eselpark-maltatal-eselfamilie.webp`, alt: "Familie streichelt Esel im Eselpark Maltatal" },
      },
      {
        title: "Wasserabenteuerpark Fallbach",
        text: "Nur wenige Minuten entfernt wartet der Wasserabenteuerpark Fallbach mit dem eindrucksvollen Fallbach-Wasserfall.",
        image: { src: `${IMG}/wasserpark-fallbach.webp`, alt: "Familie am Fallbach-Wasserfall im Maltatal" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Erlebnisse rund um den Platz",
    intro:
      "Berge, Täler und Almen direkt vor der Tür — im Sommer wie im Winter starten Touren und Ausflüge direkt ab dem Campingplatz.",
    items: [
      {
        title: "Familienwandern im Pöllatal",
        text: "Vom Platz direkt los: gemütliche Wege im Pöllatal oder Panoramatouren in den Bergen — für jeden die passende Route.",
        image: { src: `${IMG}/familienwandern-poellatal.webp`, alt: "Familie bei einer Wanderung im Pöllatal" },
      },
      {
        title: "Mountainbike & E-Bike",
        text: "Rund um den Platz wartet ein Paradies für Radler — etwa die rund 30 km lange MTB-Gontalrunde am Katschberg.",
        image: { src: `${IMG}/mountainbike-katschberg.webp`, alt: "E-Mountainbiken am Katschberg" },
      },
      {
        title: "Skifahren am Katschberg",
        text: "80 km Pisten und 17 moderne Lifte: Mit dem Gratis-Skibus geht es direkt vom Platz ins Skigebiet Aineck-Katschberg.",
        image: { src: `${IMG}/skifahren-katschberg.webp`, alt: "Familie beim Skifahren am Katschberg" },
      },
      {
        title: "Rodeln & Winterspaß",
        text: "Naturrodelbahn, Winterwanderungen, Schneeschuhtrails und Pferdeschlittenfahrten — Winter abseits der Piste rund um den Katschberg.",
        image: { src: `${IMG}/rodeln-winter.webp`, alt: "Familie beim Rodeln im Schnee" },
      },
      {
        title: "Katschberger Adventweg",
        text: "Durch verschneite Wälder und an festlich geschmückten Hütten mit regionalen Schmankerln vorbei — Weihnachtszauber am Katschberg.",
        image: { src: `${IMG}/adventweg-katschberg.webp`, alt: "Festlich beleuchtete Almhütte am Katschberger Adventweg" },
      },
      {
        title: "Hofladen & Selbstgemachtes",
        text: "Im Hofladen findest du regionale Produkte und liebevoll handgefertigte Unikate — mit Liebe gemacht von Karina Piker.",
        image: { src: `${IMG}/hofladen.webp`, alt: "Hofladen mit regionalen Produkten und Selbstgemachtem" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 Tauernautobahn zur Ausfahrt Rennweg am Katschberg (AS 113), weiter auf der B99 Richtung Rennweg bis Gries 53 — nur rund 4 km von der Autobahn.",
      },
      {
        title: "Lage & Umgebung",
        text: "Ruhig am Ortsrand von Rennweg, vorbei an Tennisplatz und Schwimmbad — eingebettet in die Region Katschberg-Lieser-Maltatal.",
      },
      {
        title: "Mobil vor Ort",
        text: "Mit dem Gäste-Mobilitätsticket erreichst du die Ausflugsziele der Region flexibel und kostenlos mit den öffentlichen Verkehrsmitteln.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Katschberg",
    headingEmphasis: "Katschberg",
    intro:
      "Berge, Schnee, gutes Essen und jede Menge Natur — ein paar Eindrücke von Camping Ramsbacher und seiner Umgebung.",
    tag: "Sommer & Winter",
    images: [
      { src: `${IMG}/kulinarik-jause.webp`, alt: "Reich angerichtete Jause mit Käse, Schinken und Aufstrichen" },
      { src: `${IMG}/marienkapelle-alm.webp`, alt: "Marienkapelle auf einer Almwiese am Katschberg" },
      { src: `${IMG}/skifahren-aussicht.webp`, alt: "Skifahrer mit Aussicht über das Skigebiet am Katschberg" },
      { src: `${IMG}/kulinarik-gericht.webp`, alt: "Frisch zubereitetes Gericht auf dem Teller" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle deinen Zeitraum und die Personenzahl — Familie Ramsbacher meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz inkl. 2 Personen pro Nacht · zzgl. Ortstaxe €2,40 (ab 18 J.) und Strom €4,80/Tag · Kinder bis 3 J. frei, ermäßigt bis 18 J., Hunde gratis.",
    highlight: {
      title: "Hunde gratis",
      text: "Der Vierbeiner ist kostenlos dabei — und Kinder bis 3 Jahre übernachten gratis.",
    },
    categories: [
      // Reale Preisliste Camping Ramsbacher 2026 (Stellplatz Caravan/Auto + 2 Personen pro Nacht).
      // Sommer: Stellplatz 12,50 + 2×10,50 = 33,50 · Aufpreis/Pers. 10,50
      { id: "sommer", label: "Sommer", perNight: 33.5, perExtraGuest: 10.5 },
      // Winter: Stellplatz 12,50 + 2×12,50 = 37,50 · Aufpreis/Pers. 12,50
      { id: "winter", label: "Winter", perNight: 37.5, perExtraGuest: 12.5 },
      // Nebensaison: Stellplatz 11,00 + 2×9,50 = 30,00 · Aufpreis/Pers. 9,50
      { id: "nebensaison", label: "Nebensaison", perNight: 30, perExtraGuest: 9.5 },
    ],
  },

  kontakt: {
    tel: "+43 660 38 49 495",
    telHref: "tel:+436603849495",
    mail: "info@camp-ram.at",
    adresse: "Gries 53 · 9863 Rennweg am Katschberg · Kärnten",
    coords: { lat: 47.032319, lng: 13.595171 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Take-away", href: "#camping" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Almspielplatz", href: "#kinder" },
        { label: "Eselpark Maltatal", href: "#kinder" },
        { label: "Wasserpark Fallbach", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Wandern & Radfahren", href: "#aktivitaeten" },
        { label: "Skifahren", href: "#aktivitaeten" },
        { label: "Adventweg", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campRam;

export type Dish = {
  no?: string;
  name: string;
  desc?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  dishes: Dish[];
};

/**
 * Alle Angaben stammen 1:1 aus der offiziellen Speisekarte (PDF) des
 * Restaurants Anesis. Keine Gerichte oder Preise erfunden.
 */
export const menu: MenuCategory[] = [
  {
    id: "vorspeisen",
    title: "Kalte & warme Vorspeisen",
    note: "Zu allen Vorspeisen servieren wir Ihnen Brot.",
    dishes: [
      {
        no: "1",
        name: "Vorspeisenteller / Meze",
        desc: "Bei Platten ab 2 Personen berechnen wir pro Person 12,50",
        price: "15,90",
      },
      {
        no: "2",
        name: "Schafskäse-Creme",
        desc: "Eine griechische Spezialität, die Sie probieren sollten",
        price: "8,00",
      },
      { no: "3", name: "Tarama", desc: "Eine griechische Kaviarcreme mit Krabben", price: "8,50" },
      { no: "4", name: "Tzatziki", price: "5,90" },
      {
        no: "5",
        name: "Feta",
        desc: "Original griechischer Käse aus Schafs- und Ziegenmilch mit Zwiebelringen, Tomaten und Olivenöl",
        price: "8,90",
      },
      {
        no: "6",
        name: "Gebackener Schafskäse",
        desc: "Original griechischer Käse aus Schafs- und Ziegenmilch mit Zwiebelringen, Tomaten und Olivenöl",
        price: "9,90",
      },
      {
        no: "7",
        name: "Saganaki in Sesamkruste",
        desc: "Original griechischer Käse in knuspriger Sesamkruste, serviert mit Honig",
        price: "10,90",
      },
      {
        no: "8",
        name: "Halloumi gegrillt",
        desc: "Zypriotischer Hartkäse gegrillt auf Rucola, mit Olivenöl",
        price: "8,90",
      },
      { no: "9", name: "Panierte Champignons", desc: "mit Tzatziki", price: "9,90" },
      {
        no: "10",
        name: "Griechische Bruschetta",
        desc: "mit Zwiebeln, frischen Tomaten, Basilikum und Feta",
        price: "6,90",
      },
      { no: "11", name: "Dolmadakia", desc: "gefüllte Weinblätter mit Tzatziki", price: "9,00" },
      {
        no: "12",
        name: "Garnelen auf griechische Art",
        desc: "White Tiger Garnelen in Tomatensauce mit Schafskäse, leicht pikant",
        price: "12,90",
      },
    ],
  },
  {
    id: "suppen-salate",
    title: "Suppen & Salatkreationen",
    dishes: [
      { no: "20", name: "Bohnensuppe", desc: "kräftig – nach Hausfrauenart", price: "6,90" },
      { no: "21", name: "Tomatensuppe", desc: "mit Sahne und viel Basilikum", price: "6,90" },
      {
        no: "30",
        name: "Bauernsalat",
        desc: "frischer Salat mit Schafskäse, Oliven, Peperoni und Olivenöl-Dressing",
        price: "12,90",
      },
      {
        no: "31",
        name: "Mittelmeersalat",
        desc: "knackiger gemischter Salat mit Lachsfilet, Garnelen, Tomaten und roten Zwiebeln",
        price: "17,50",
      },
      {
        no: "32",
        name: "Surf 'n' Turf Salat",
        desc: "knackiger gemischter Salat mit Rinderstreifen, Garnelen, Tomaten und roten Zwiebeln",
        price: "17,50",
      },
      {
        no: "33",
        name: "Anesis Salat (Haussalat)",
        desc: "knackiger gemischter Salat mit Tomaten, Feta, Granatapfelkernen, Walnüssen und Rosinen",
        price: "16,50",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta-Spezialitäten",
    dishes: [
      {
        no: "240",
        name: "Kritharaki",
        desc: "Reisnudeln in leichter Tomatensauce und mit Käse überbacken",
        price: "13,50",
      },
      { no: "241", name: "Bandnudeln", desc: "mit Lachsfilet und Schafskäse gratiniert", price: "16,90" },
      { no: "242", name: "Bandnudeln", desc: "mit Lachs und Krabben", price: "17,50" },
    ],
  },
  {
    id: "schwein-grill",
    title: "Vom Schwein & vom Grill",
    note: "Dazu wahlweise Champignon-Tomaten-Reis oder Pommes frites, mit Tzatziki und Grillsauce. Zu allen Gerichten servieren wir Ihnen einen Salat.",
    dishes: [
      {
        no: "50",
        name: "Souvlaki vom Schweinefilet",
        desc: "Saftig gegrillte Spieße aus zartem Schweinefilet",
        price: "18,90",
      },
      { no: "51", name: "Gyros", desc: "würzig mariniertes geschnetzeltes Fleisch vom Spieß", price: "17,90" },
      { no: "52", name: "Medaillons vom Schweinefilet", desc: "auf dem Grill gegart", price: "18,90" },
      {
        no: "60",
        name: "Gyros und Souvlaki",
        desc: "Gyros vom Schwein und gegrillter Schweinefleischspieß",
        price: "21,90",
      },
      {
        no: "61",
        name: "Grillteller",
        desc: "Bifteki, zartes Schweinesteak, Hähnchenbrust und saftiges Gyros",
        price: "22,90",
      },
      { no: "62", name: "Filetteller", desc: "Zartes Schweinefilet, Rinderfilet und saftiges Gyros", price: "26,90" },
      { no: "63", name: "Steakplatte", desc: "Zartes Schweinesteak, Rumpsteak und saftiges Gyros", price: "25,90" },
    ],
  },
  {
    id: "gefluegel",
    title: "Geflügel vom Grill",
    note: "Dazu wahlweise Champignon-Tomaten-Reis oder Pommes frites. Zu allen Geflügelgerichten servieren wir Ihnen einen Salat.",
    dishes: [
      {
        no: "70",
        name: "Hähnchenbrustfilet gegrillt",
        desc: "Zartes, saftiges Hähnchenbrustfilet frisch gegrillt",
        price: "21,90",
      },
      {
        no: "71",
        name: "Hähnchenbrustfilet mit Metaxasauce",
        desc: "Saftiges Hähnchenbrustfilet mit würziger Metaxasauce",
        price: "22,90",
      },
      {
        no: "72",
        name: "Marinierte Hähnchenbrust auf dem Spieß",
        desc: "Zart marinierte Hähnchenbrust am Spieß gegrillt",
        price: "23,90",
      },
    ],
  },
  {
    id: "rind",
    title: "Spezialitäten vom Rind",
    note: "Unsere argentinischen Steaks grillen wir auf dem Lavasteingrill, sofern nicht anders gewünscht medium. Dazu mediterranes Gemüse und eine Ofenkartoffel mit Sauerrahm.",
    dishes: [
      { no: "80", name: "Bifteki, ca. 220 g", desc: "gehacktes Rindersteak (sehr mager)", price: "18,90" },
      { no: "81", name: "Bifteki „Spezial“, ca. 220 g", desc: "gehacktes Rindersteak (sehr mager)", price: "19,90" },
      { no: "82", name: "Rumpsteak aus Argentinien, ca. 220 g", price: "28,90" },
      { no: "83", name: "Zartes Filetsteak, ca. 220 g", price: "30,90" },
    ],
  },
  {
    id: "ueberbacken",
    title: "Überbacken & im Pfännchen",
    note: "Überbackene Gerichte mit Edamerkäse. Dazu wahlweise Champignon-Tomaten-Reis oder Pommes frites, dazu ein Salat.",
    dishes: [
      { no: "90", name: "Gyros überbacken", desc: "in Metaxasauce", price: "20,90" },
      { no: "91", name: "Souvlaki überbacken", desc: "in Metaxasauce", price: "21,90" },
      { no: "92", name: "Schweinemedaillons überbacken", desc: "in Metaxasauce", price: "20,90" },
      {
        no: "100",
        name: "Gyros im Pfännchen",
        desc: "mit Zwiebeln, Paprika und Champignons mit Metaxasauce",
        price: "20,90",
      },
      {
        no: "101",
        name: "Schweinefilet im Pfännchen",
        desc: "mit Zwiebeln, Paprika und Champignons mit Metaxasauce",
        price: "22,90",
      },
      {
        no: "102",
        name: "Hähnchenfilet im Pfännchen",
        desc: "mit Zwiebeln, Paprika und Champignons mit Metaxasauce",
        price: "21,90",
      },
    ],
  },
  {
    id: "lamm",
    title: "Spezialitäten vom Lamm",
    note: "Unser Lammfleisch beziehen wir von den Salzwiesen Schottlands. Dazu mediterranes Gemüse und eine Ofenkartoffel mit Sauerrahm.",
    dishes: [
      { no: "110", name: "Bifteki vom Lamm, ca. 200 g", desc: "Lammhacksteaks mit mediterranem Gemüse", price: "23,90" },
      { no: "111", name: "Gegrillte Lammkoteletts", desc: "mit mediterranem Gemüse, dazu Metaxasauce", price: "28,90" },
      {
        no: "112",
        name: "Lammspieß",
        desc: "Mariniertes Lammfleisch auf dem Lavastein gegrillt, mit mediterranem Gemüse und Metaxasauce",
        price: "27,90",
      },
      { no: "113", name: "Lammfilet, ca. 200 g", desc: "mit mediterranem Gemüse, dazu Metaxasauce", price: "29,90" },
      {
        no: "114",
        name: "Das Beste vom Lamm",
        desc: "Eine Auswahl aus zartem Lammfilet, Lammkotelett und Lammrücken, saftig gebraten, dazu mediterranes Gemüse und Metaxasauce",
        price: "32,90",
      },
      {
        no: "115",
        name: "Chef's Lammragout",
        desc: "Ein Lieblingsgericht unseres Küchenchefs – zartes Lammragout mit weißen und grünen Bohnen, mit Schafskäse überbacken",
        price: "27,90",
      },
    ],
  },
  {
    id: "fisch",
    title: "Fisch & Meeresfrüchte",
    note: "Dazu servieren wir mediterranes Gemüse und Rosmarinkartoffeln sowie einen Salat.",
    dishes: [
      { no: "120", name: "Baby-Kalamaris", desc: "Zarter Tintenfisch, pikant gewürzt und knusprig gebraten", price: "25,90" },
      {
        no: "121",
        name: "Baby-Kalamaris mit Schafskäse gefüllt",
        desc: "Zarter Tintenfisch, gefüllt mit würzigem Schafskäse und mediterran verfeinert",
        price: "26,90",
      },
      {
        no: "122",
        name: "Potpourri von Meeresfrüchten vom Grill",
        desc: "Scampi, Kalamaria, Rotbarsch, Tiefseekrabben und Lachs",
        price: "30,90",
      },
      { no: "123", name: "Vier gegrillte Garnelen", desc: "Ohne Schalen, mit feinem Knoblauch verfeinert", price: "30,90" },
      { no: "124", name: "Lachsfilet vom Grill", desc: "Zart gegrilltes Lachsfilet", price: "26,90" },
      { no: "125", name: "Dorade Royal", desc: "Frische Dorade Royal vom Grill", price: "27,90" },
    ],
  },
  {
    id: "kinder-beilagen",
    title: "Für kleine Gäste, Beilagen & Saucen",
    dishes: [
      { no: "130", name: "Vier Fischstäbchen", desc: "mit Pommes frites, wahlweise Ketchup oder Mayo", price: "10,90" },
      { no: "131", name: "Souvlaki", desc: "am Spieß mit Pommes frites oder Reis und Ketchup", price: "10,90" },
      { no: "132", name: "Rinderhacksteak", desc: "mit Pommes frites, wahlweise Ketchup oder Mayo", price: "10,90" },
      { no: "133", name: "Nuggets", desc: "mit Pommes frites, wahlweise Ketchup oder Mayo", price: "10,90" },
      { no: "140", name: "Buntes mediterranes Gemüse", price: "6,90" },
      { no: "141", name: "Pommes frites", price: "4,90" },
      { no: "142", name: "Kroketten", price: "4,90" },
      { no: "143", name: "Champignon-Tomaten-Reis", price: "4,90" },
      { no: "144", name: "Ofenkartoffel mit Sauerrahm", price: "5,90" },
      { no: "150", name: "Metaxasauce", price: "4,50" },
      { no: "151", name: "Ketchup", price: "1,00" },
      { no: "152", name: "Mayonnaise", price: "1,00" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Eis-Spezialitäten",
    dishes: [
      { no: "160", name: "Orangen-Crème brûlée", price: "7,90" },
      { no: "161", name: "Tartufo Pistazie", price: "7,90" },
      { no: "162", name: "Tartufo Nero", price: "7,90" },
      { no: "163", name: "Tartufo Limoncello", price: "7,90" },
      { no: "164", name: "Griechischer Joghurt", desc: "mit Honig und Walnüssen", price: "6,90" },
      { no: "165", name: "Cassata-Eis", desc: "nach sizilianischer Art mit kandierten Früchten", price: "7,90" },
      {
        no: "166",
        name: "Eis nach Wahl",
        desc: "Erdbeer, Schokolade, Vanille, Straciatella, Pistazie – je XL Kugel",
        price: "2,00",
      },
      {
        no: "167",
        name: "Sorbet nach Wahl",
        desc: "Gerne informieren wir Sie über unsere aktuellen Sorten – je XL Kugel",
        price: "2,00",
      },
    ],
  },
  {
    id: "getraenke",
    title: "Aperitif, Wein & Kaffee",
    note: "Die vollständige Getränkekarte mit Schorlen, Bieren, Weinen und Spirituosen finden Sie in unserer Speisekarte als PDF.",
    dishes: [
      { no: "170", name: "Aperol Spritz", price: "7,90" },
      { no: "171", name: "Sarti Spritz", price: "7,90" },
      { no: "172", name: "Limoncello Spritz", price: "7,90" },
      { no: "173", name: "Lillet Wild Berry", price: "7,90" },
      { no: "230", name: "Kourtaki – Griechischer Landwein", desc: "Rot oder Weiß, trocken · 0,2 l", price: "5,80" },
      { no: "260", name: "Kaffee", desc: "Tasse · aus Bohnen der Hannoverschen Kaffeemanufaktur", price: "2,90" },
    ],
  },
];

export const lunchDishes: Dish[] = [
  {
    name: "Bifteki",
    desc: "Saftig gewürztes Hackfleisch mit Kräutern, dazu Ofenkartoffel und Sour Cream",
    price: "15,90",
  },
  {
    name: "Doradenfilet",
    desc: "Zartes Doradenfilet mit mediterranem Gemüse und feinen Kräutern",
    price: "15,90",
  },
  {
    name: "Gyros",
    desc: "Herzhaftes Gyros vom Grill, dazu unser mit Champignons, Tomaten und Kräutern zubereiteter Reis",
    price: "15,90",
  },
  {
    name: "Bauernsalat",
    desc: "Knackiger griechischer Bauernsalat mit Tomaten, Gurken, Zwiebeln, Feta und Oliven",
    price: "15,90",
  },
];

export const openingHours = [
  { day: "Montag", times: ["11:30 – 14:30", "17:00 – 22:00"] },
  { day: "Dienstag", times: ["Geschlossen"] },
  { day: "Mittwoch", times: ["11:30 – 14:30", "17:00 – 22:00"] },
  { day: "Donnerstag", times: ["11:30 – 14:30", "17:00 – 22:00"] },
  { day: "Freitag", times: ["11:30 – 14:30", "17:00 – 22:00"] },
  { day: "Samstag", times: ["17:00 – 22:00"] },
  { day: "Sonntag", times: ["17:00 – 22:00"] },
];

export const services = [
  "Barrierefrei",
  "Catering",
  "Außenbereich",
  "Parkplätze",
  "Private Veranstaltungen",
  "Raucherbereich",
  "Essen zum Mitnehmen",
  "Hochzeiten",
  "Kostenloses WLAN",
  "Haustiere erlaubt",
];

export const MENU_PDF = "/pdf/speisekarte.pdf";
export const LUNCH_PDF = "/pdf/mittagstisch.pdf";
export const RESERVATION_URL = "#reservierung";
export const PHONE = "+49 5191 18700";
export const PHONE_HREF = "tel:+49519118700";
export const EMAIL = "restaurantanesis26@gmail.com";

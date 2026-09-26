import type { T } from '../i18n/ui';

export interface EventItem {
  slug: string;
  name: T;
  kicker: T;
  dates: T;
  location: T;
  /** Short role label on the gallery card and event page. */
  role: T;
  roleBody: T;
  about: { en: string[]; el: string[] };
  facts: T[];
  credits: { label: T; value: T }[];
  url?: string;
  cover: string;
  /** `contain` shows the whole image (posters) instead of cropping to fill the frame. */
  images: { src: string; alt: T; fit?: 'contain' }[];
}

// Newest first — the gallery keeps this order.
export const events: EventItem[] = [
  {
    slug: 'olympus-adrenaline-festival',
    name: { en: '3rd Olympus Adrenaline & Nature Festival', el: '3ο Olympus Adrenaline & Nature Festival' },
    kicker: { en: 'Pieria · Mount Olympus', el: 'Πιερία · Όλυμπος' },
    dates: { en: '3–4 October 2026', el: '3–4 Οκτωβρίου 2026' },
    location: { en: 'Litochoro Park & across Pieria', el: 'Πάρκο Λιτοχώρου & σε όλη την Πιερία' },
    role: { en: 'Supporting participating companies', el: 'Υποστήριξη εταιρειών που συμμετέχουν' },
    roleBody: {
      en: 'We support companies that exhibit and deliver activities at the festival, helping them make the most of their participation.',
      el: 'Υποστηρίζουμε εταιρείες που εκθέτουν ή κάνουν δράσεις στο φεστιβάλ, ώστε να βγάλουν το μέγιστο από τη συμμετοχή τους.',
    },
    about: {
      en: [
        'The most exciting weekend in Pieria. Two days of adrenaline and nature activities at the foot of Mount Olympus — in Litochoro Park and across the region.',
        'Entry and all activities are free; visitors book their place in the activities they want. The weekend opens with a ceremony featuring the fortissimo Electric Quartet.',
      ],
      el: [
        'Το πιο δυνατό Σαββατοκύριακο στην Πιερία. Δύο μέρες με δράσεις αδρεναλίνης και φύσης στους πρόποδες του Ολύμπου — στο Πάρκο Λιτοχώρου και σε όλη την Πιερία.',
        'Η είσοδος και όλες οι δράσεις είναι δωρεάν — κλείνεις θέση σε όποιες σε ενδιαφέρουν. Το Σαββατοκύριακο ξεκινά με τελετή έναρξης με τις fortissimo Electric Quartet.',
      ],
    },
    facts: [
      { en: 'Free entry & activities', el: 'Δωρεάν είσοδος & δράσεις' },
      { en: '2 days', el: '2 ημέρες' },
      { en: '3rd edition', el: '3η διοργάνωση' },
    ],
    credits: [
      {
        label: { en: 'Organized by', el: 'Διοργάνωση' },
        value: {
          en: 'Regional Unit of Pieria · Pieria Tourism Development & Promotion Organization (P.O.T.A.P.) · Municipality of Dion–Olympus · Pieria Chamber of Commerce',
          el: 'Περιφερειακή Ενότητα Πιερίας · Πιερικός Οργανισμός Τουριστικής Ανάπτυξης & Προβολής (Π.Ο.Τ.Α.Π.) · Δήμος Δίου–Ολύμπου · Επιμελητήριο Πιερίας',
        },
      },
      {
        label: { en: 'Curated by', el: 'Επιμέλεια διοργάνωσης' },
        value: { en: 'Open Ways Events & Travel', el: 'Open Ways Events & Travel' },
      },
      {
        label: { en: 'Under the auspices of', el: 'Υπό την αιγίδα' },
        value: { en: 'Greek National Tourism Organisation (EOT)', el: 'Ελληνικός Οργανισμός Τουρισμού (ΕΟΤ)' },
      },
    ],
    cover: '/images/events/olympus/village.webp',
    images: [
      { src: '/images/events/olympus/poster.webp', alt: { en: 'Festival poster, 3–4 October 2026', el: 'Αφίσα του φεστιβάλ, 3–4 Οκτωβρίου 2026' }, fit: 'contain' },
      { src: '/images/events/olympus/village.webp', alt: { en: 'Exhibitor stands in Litochoro', el: 'Περίπτερα εκθετών στο Λιτόχωρο' } },
      { src: '/images/events/olympus/concert.webp', alt: { en: 'Night concert in an open-air amphitheatre', el: 'Βραδινή συναυλία σε υπαίθριο αμφιθέατρο' } },
    ],
  },
  {
    slug: 'vamos-flamenco-camp',
    name: { en: 'Vamos Flamenco Camp', el: 'Vamos Flamenco Camp' },
    kicker: { en: 'Hola Flamenco Festival · 7th edition', el: 'Hola Flamenco Festival · 7η διοργάνωση' },
    dates: { en: '13–19 July 2026', el: '13–19 Ιουλίου 2026' },
    location: { en: 'Vamos, Apokoronas, Crete', el: 'Βάμος, Αποκόρωνας, Κρήτη' },
    role: { en: 'Co-organizers · Website & social media', el: 'Συνδιοργανωτές · Ιστοσελίδα & social media' },
    roleBody: {
      en: 'We co-organize the camp with the Hola Flamenco Festival team and run everything digital — the website, social media and the online presence that brings flamencos from across Europe to a Cretan village.',
      el: 'Συνδιοργανώνουμε το camp μαζί με την ομάδα του Hola Flamenco Festival και έχουμε όλο το digital — την ιστοσελίδα, τα social media και την online παρουσία.',
    },
    about: {
      en: [
        'A week in a Cretan village, for people who already live flamenco. Workshops in dance, guitar, cante and percussion — mornings in class, afternoons at the beach, nights that end on the cajón.',
        'Between classes, the group explores Crete together. And somewhere along the way, flamenco stops being something you study and becomes something you live.',
      ],
      el: [
        'Μια εβδομάδα σε ένα χωριό της Κρήτης, για ανθρώπους που ήδη ζουν το φλαμένκο. Εργαστήρια χορού, κιθάρας, cante και κρουστών — πρωινά στην αίθουσα, απογεύματα στην παραλία, βράδια που τελειώνουν στο cajón.',
        'Ανάμεσα στα μαθήματα, γυρίζουμε μαζί την Κρήτη. Και κάπου εκεί, το φλαμένκο σταματά να είναι κάτι που μαθαίνεις — γίνεται κάτι που ζεις.',
      ],
    },
    facts: [
      { en: 'Dance · guitar · cante · percussion', el: 'Χορός · κιθάρα · cante · κρουστά' },
      { en: '1 week', el: '1 εβδομάδα' },
      { en: 'All levels', el: 'Όλα τα επίπεδα' },
    ],
    credits: [
      {
        label: { en: 'Organized by', el: 'Διοργάνωση' },
        value: { en: 'Hola Flamenco Festival & HEADRUN', el: 'Hola Flamenco Festival & HEADRUN' },
      },
    ],
    url: 'https://www.holaflamencofestival.com/vamos-flamenco-camp-crete/',
    cover: '/images/events/vamos/hero.jpg',
    images: [
      { src: '/images/events/vamos/hero.jpg', alt: { en: 'Vamos Flamenco Camp — photo 1', el: 'Vamos Flamenco Camp — φωτογραφία 1' } },
      { src: '/images/events/vamos/gallery-4.jpg', alt: { en: 'Vamos Flamenco Camp — photo 2', el: 'Vamos Flamenco Camp — φωτογραφία 2' } },
      { src: '/images/events/vamos/gallery-5.jpg', alt: { en: 'Vamos Flamenco Camp — photo 3', el: 'Vamos Flamenco Camp — φωτογραφία 3' } },
    ],
  },
];

export const clients = [
  { name: 'EnableHero', logo: '/images/clients/enablehero.svg', country: { en: 'Estonia', el: 'Εσθονία' } },
  { name: 'MONEYBYRD', logo: '/images/clients/moneybyrd.svg', country: { en: 'USA', el: 'ΗΠΑ' } },
  { name: 'WeSchool', logo: '/images/clients/weschool.png', country: { en: 'Italy', el: 'Ιταλία' } },
  { name: 'd.MBA', logo: '/images/clients/dmba.png', country: { en: 'Slovenia', el: 'Σλοβενία' } },
  { name: 'Tokeet', logo: '/images/clients/tokeet.png', country: { en: 'Canada', el: 'Καναδάς' } },
  { name: 'ooBann', logo: '/images/clients/oobann.png', country: { en: 'Greece', el: 'Ελλάδα' } },
];

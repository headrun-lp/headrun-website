export const languages = { en: 'EN', el: 'ΕΛ' } as const;
export type Lang = keyof typeof languages;
export type T = Record<Lang, string>;

export const ui = {
  meta: {
    description: {
      en: 'HEADRUN — growth consulting for innovative companies, and organization, digital, marketing and sales support for events, camps and group activities.',
      el: 'HEADRUN — συμβουλευτική ανάπτυξης για καινοτόμες εταιρείες, και οργάνωση, digital, marketing και πωλήσεις για εκδηλώσεις, camps και ομαδικές δραστηριότητες.',
    },
  },
  nav: {
    consulting: { en: 'Consulting', el: 'Συμβουλευτική' },
    events: { en: 'Events', el: 'Εκδηλώσεις' },
    contact: { en: 'Contact', el: 'Επικοινωνία' },
  },
  home: {
    h1: {
      en: 'We grow companies.<br><span class="text-gradient">We bring people together.</span>',
      el: 'Αναπτύσσουμε εταιρείες.<br><span class="text-gradient">Φέρνουμε ανθρώπους κοντά.</span>',
    },
    cta: { en: 'Let’s talk', el: 'Ας μιλήσουμε' },
  },
  consulting: {
    title: { en: 'Growth consulting', el: 'Συμβουλευτική ανάπτυξης' },
    lead: {
      en: 'We help innovative companies build a repeatable growth engine — from positioning to closed revenue. Hands-on, data-driven, and built to keep running after we leave.',
      el: 'Βοηθάμε καινοτόμες εταιρείες να μεγαλώσουν σταθερά — από το πώς παρουσιάζονται μέχρι το κλείσιμο πωλήσεων. Πρακτικά, με βάση τα νούμερα, και με συστήματα που δουλεύουν και μετά από εμάς.',
    },
    servicesTitle: { en: 'What we do', el: 'Τι κάνουμε' },
    services: [
      {
        title: { en: 'Positioning & offer', el: 'Positioning & προσφορά' },
        body: {
          en: 'ICP, value proposition, pricing and messaging that make the right buyers say yes.',
          el: 'Ποιος είναι ο ιδανικός πελάτης, τι του προσφέρετε, πόσο κοστίζει και πώς το λέτε.',
        },
      },
      {
        title: { en: 'Acquisition', el: 'Απόκτηση πελατών' },
        body: {
          en: 'Outbound, content, paid and partnerships — channels tested, measured and scaled.',
          el: 'Outbound, περιεχόμενο, διαφήμιση και συνεργασίες — δοκιμάζουμε, μετράμε και κρατάμε ό,τι φέρνει πελάτες.',
        },
      },
      {
        title: { en: 'Sales & CRM', el: 'Πωλήσεις & CRM' },
        body: {
          en: 'Pipeline design, sequences and CRM setup, so no lead falls through the cracks.',
          el: 'Στήνουμε pipeline, αυτόματα emails και CRM, ώστε να μη χάνεται κανένας πελάτης.',
        },
      },
      {
        title: { en: 'Lifecycle & retention', el: 'Διατήρηση πελατών' },
        body: {
          en: 'Onboarding, nurturing and win-back journeys that grow revenue per customer.',
          el: 'Onboarding, emails και καμπάνιες που κρατούν τους πελάτες και τους κάνουν να αγοράζουν ξανά.',
        },
      },
      {
        title: { en: 'Automation', el: 'Αυτοματισμοί' },
        body: {
          en: 'Workflows that connect your tools and take the manual work out of growth.',
          el: 'Συνδέουμε τα εργαλεία σας και κόβουμε τη χειροκίνητη δουλειά.',
        },
      },
      {
        title: { en: 'Analytics & reporting', el: 'Μετρήσεις & αναφορές' },
        body: {
          en: 'Dashboards and metrics that show what works — and what to do next.',
          el: 'Dashboards που δείχνουν τι δουλεύει — και τι να κάνετε μετά.',
        },
      },
    ],
    clientsTitle: { en: 'Some of our clients', el: 'Μερικοί από τους πελάτες μας' },
    ctaTitle: { en: 'Ready to grow?', el: 'Θέλετε να μεγαλώσετε;' },
    ctaBody: {
      en: 'Tell us where you are and where you want to be. We’ll come back with a plan.',
      el: 'Πείτε μας πού είστε σήμερα και πού θέλετε να φτάσετε. Θα σας προτείνουμε ένα πλάνο.',
    },
    cta: { en: 'Contact us', el: 'Επικοινωνήστε μαζί μας' },
  },
  events: {
    title: { en: 'Events, camps & group activities', el: 'Εκδηλώσεις, camps & ομαδικές δραστηριότητες' },
    lead: {
      en: 'From festivals to week-long camps, we help organizers fill the room and deliver an experience people talk about.',
      el: 'Από φεστιβάλ μέχρι camps μιας εβδομάδας, βοηθάμε τους διοργανωτές να φέρουν κόσμο και να δώσουν μια εμπειρία που θα θυμάται.',
    },
    supportTitle: { en: 'How we support events', el: 'Πώς υποστηρίζουμε τις εκδηλώσεις' },
    support: [
      {
        title: { en: 'Organization', el: 'Οργάνωση' },
        body: {
          en: 'Planning, logistics, venues, partners and on-site coordination.',
          el: 'Σχεδιασμός, logistics, χώροι, συνεργάτες και συντονισμός την ημέρα της εκδήλωσης.',
        },
      },
      {
        title: { en: 'Digital', el: 'Digital' },
        body: {
          en: 'Websites, social media, content, photo and video.',
          el: 'Ιστοσελίδες, social media, περιεχόμενο, φωτογραφία και video.',
        },
      },
      {
        title: { en: 'Marketing', el: 'Marketing' },
        body: {
          en: 'Campaigns, PR, partnerships and promotion that build an audience.',
          el: 'Καμπάνιες, δημόσιες σχέσεις και συνεργασίες που φέρνουν κόσμο.',
        },
      },
      {
        title: { en: 'Sales', el: 'Πωλήσεις' },
        body: {
          en: 'Ticketing, registrations, payments and follow-up funnels.',
          el: 'Εισιτήρια, εγγραφές, πληρωμές και follow-up.',
        },
      },
    ],
    galleryTitle: { en: 'Events', el: 'Εκδηλώσεις' },
  },
  event: {
    back: { en: 'All events', el: 'Όλες οι εκδηλώσεις' },
    dates: { en: 'Dates', el: 'Ημερομηνίες' },
    location: { en: 'Location', el: 'Τοποθεσία' },
    about: { en: 'About', el: 'Σχετικά' },
    role: { en: 'Our role', el: 'Ο ρόλος μας' },
    credits: { en: 'Credits', el: 'Συντελεστές' },
    visit: { en: 'Visit the website', el: 'Δείτε την ιστοσελίδα' },
    prev: { en: 'Previous photo', el: 'Προηγούμενη φωτογραφία' },
    next: { en: 'Next photo', el: 'Επόμενη φωτογραφία' },
  },
  contact: {
    title: { en: 'Let’s talk', el: 'Ας μιλήσουμε' },
    lead: {
      en: 'A growth challenge, an event to launch, or just an idea — write to us and we’ll get back to you within two working days.',
      el: 'Θέλετε να αναπτύξετε την εταιρεία σας, να στήσετε μια εκδήλωση ή έχετε απλώς μια ιδέα; Γράψτε μας και θα σας απαντήσουμε μέσα σε δύο εργάσιμες.',
    },
    cta: { en: 'Email us', el: 'Στείλτε μας email' },
  },
  footer: {
    address: {
      en: 'Agiou Athanasiou 21, 15125 Marousi, Greece',
      el: 'Αγίου Αθανασίου 21, 15125 Μαρούσι',
    },
    gemi: { en: 'G.E.MI. No.', el: 'Αρ. Γ.Ε.ΜΗ.' },
    rights: { en: 'All rights reserved.', el: 'Όλα τα δικαιώματα διατηρούνται.' },
  },
  notFound: {
    title: { en: 'Page not found', el: 'Η σελίδα δεν βρέθηκε' },
    back: { en: 'Back to home', el: 'Επιστροφή στην αρχική' },
  },
} as const;

export const company = {
  name: 'HEADRUN',
  email: 'team@headrun.eu',
  gemi: '169948108000',
};

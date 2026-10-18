/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 * File paths are relative so this template works inside /khwahish/ or any folder.
 */

window.INVITATION_CONFIG = {
  site: {
    title: "Dawat-e-Nikah — Namra Akbani & Osama Akbani",
    description:
      "You are warmly invited to celebrate the Dawat-e-Nikah of Namra Akbani and Osama Akbani.",
  },

  couple: {
    brideInitial: "N",
    groomInitial: "O",
    bride: {
      name: "Namra Akbani",
      shortName: "Namra",
      signatureName: "Namra",
      relation: "Daughter of",
      parents: "Mohd Iqbal Akbani & Khairunnisa Akbani",
    },
    groom: {
      name: "Osama Akbani",
      shortName: "Osama",
      signatureName: "Osama",
      relation: "Son of",
      parents: "Mohd Rashid Akbani & Sharifa Akbani",
    },
  },

  copy: {
    bismillah: "﷽",
    bismillahTranslation:
      "",
    welcomeLine: "With the blessings of Allah,\nwe cordially invite you to the\n<span class=\"hero-event-title\">Dawat-e-Nikah</span>\nof",
    invitation:
      "",
    heroClosing:
      "As we begin this blessed new journey in faith and love.",
    welcomeTitle: "A Blessed Beginning",
    welcomeBody:
      "Two families, one beautiful beginning, and a lifetime of memories waiting to unfold. With the blessings of Almighty Allah and our families, Namra Akbani and Osama Akbani begin their journey together in faith and love.",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We look forward to celebrating with you.",
    dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
  },

  wedding: {
    isoDate: "2026-12-25T19:00:00+05:30",
    date: "December 25, 2026",
    day: "Friday",
    time: "After Jum'ah · Dinner 7:00 PM onwards",
    timezone: "IST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./media/intro-placeholder.mp4",
    introPoster:
      "./media/intro-placeholder.webp",
    music: "./media/sakina.mp3",

    gallery: [],
  },

  // Wedding-day programme (timeline section)
  program: [
    {
      time: "After Jum'ah",
      title: "Nikah",
      note: "Masjid-e-Mustafa, Nagpur · Solemnisation of Nikah with the blessings of elders & loved ones.",
    },
    {
      time: "07:00 PM onwards",
      title: "Dawat-e-Nikah (Dinner)",
      note: "Canal Garden, Kalamna Road, Kamptee, Nagpur · An evening of dinner, celebration, and togetherness.",
    },
  ],

  venue: {
    name: "Canal Garden",
    address:
      "Kalamna Road, Kamptee, Nagpur",
    mapUrl: "https://share.google/4gm1Tw9QegqYo3MBl",
  },

dressCode: {
  title: "Festive Traditional",
  description:
    "Traditional and festive attire is welcome as we come together to celebrate this special occasion with family and loved ones.",
  swatches: [
    "#7A1F2B",
    "#234638",
    "#C49A56",
    "#7A4968",
    "#31506B",
  ],
},

  // Pre-wedding & additional functions shown in the event cards section
  preWeddingEvents: [
    {
      name: "Nikah Ceremony",
      date: "December 25, 2026 (Friday)",
      time: "After Jum'ah",
      location: "Masjid-e-Mustafa, Nagpur",
      mapLink: "https://share.google/4gm1Tw9QegqYo3MBl",
    },
    {
      name: "Dawat-e-Nikah & Dinner",
      date: "December 25, 2026 (Friday)",
      time: "07:00 PM onwards",
      location: "Canal Garden, Kalamna Road, Kamptee, Nagpur",
      mapLink: "https://share.google/4gm1Tw9QegqYo3MBl",
    },
  ],

  rsvp: {
    deadline: "Kindly respond at your earliest convenience",
    contact: "For assistance, please reach out to the family",
    fields: {
      name: "Your full name",
      email: "Email address",
      attendance: ["Joyfully accepts", "Regretfully declines"],
      guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
      note: "A message for the couple",
    },
  },

theme: {
  ivory: "#F1E3CE",       /* warm candlelit cream */
  plum: "#3A070C",        /* deepest burgundy */
  lavender: "#6F0B17",    /* wine red */
  mauve: "#A51520",       /* rose/crimson accent */
  lilac: "#D0B294",       /* warm nude / muted beige */
  champagne: "#C9A35F",   /* antique gold */
},
};

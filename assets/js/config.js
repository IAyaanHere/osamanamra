/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 * File paths are relative so this template works inside /khwahish/ or any folder.
 */

window.INVITATION_CONFIG = {
  site: {
    title: "Adina & Gulam Mohammad — Wedding Invitation",
    description:
      "You are warmly invited to celebrate the Nikah & Reception of Adina and Gulam Mohammad.",
  },

  couple: {
    brideInitial: "A",
    groomInitial: "G",
    bride: {
      name: "Adina",
      shortName: "Adina",
      signatureName: "Adina",
      relation: "Daughter of",
      parents: "Mr. Rizwan Sheikh",
    },
    groom: {
      name: "Gulam Mohammad",
      shortName: "Gulam",
      signatureName: "Gulam",
      relation: "Son of",
      parents: "Mr. Salim Patel",
    },
  },

  copy: {
    bismillah: "﷽",
    bismillahTranslation:
      "",
    welcomeLine: "With the blessings of their families,\nwe joyfully invite you to the wedding of",
    invitation:
      "",
    heroClosing:
      "As they begin their forever in faith and love.",
    welcomeTitle: "Moments, Softly Held",
    welcomeBody:
      "Two families, one beautiful beginning, and a lifetime of memories waiting to unfold. With the blessings of their families, Gulam Mohammad and Adina begin their journey together in faith and love.",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We can't wait to celebrate with you.",
    dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
  },

  wedding: {
    // Countdown targets the Reception — November 27, 2026 at 7:00 PM IST.
    isoDate: "2026-11-27T19:00:00+05:30",
    date: "November 27, 2026",
    day: "Friday",
    time: "07:00 PM onwards",
    timezone: "IST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./media/intro-placeholder.mp4",
    introPoster:
      "./media/intro-placeholder.webp",
    music: "./media/shukran-laka-rabbi.mp3",

    // Replace gallery URLs with your own hosted files or image URLs.
    gallery: [
      {
        src: "./media/gallery/01.webp",
        alt: "A softly lit wedding detail",
        caption: "",
      },
      {
        src: "./media/gallery/02.webp",
        alt: "A joyful wedding celebration",
        caption: "",
      },
      {
        src: "./media/gallery/03.webp",
        alt: "Elegant wedding florals and table setting",
        caption: "",
      },
    ],
  },

  // Wedding-day programme (timeline section)
  program: [
    {
      time: "November 25",
      title: "Nikah",
      note: "V.C. FARMS, Dighori, Nagpur · The beginning of a new journey together, with duas and the blessings of loved ones.",
    },
    {
      time: "November 27",
      title: "Reception",
      note: "7:00 PM onwards · V.C. FARMS, Dighori, Nagpur · An evening of togetherness, heartfelt wishes, and celebration.",
    },
  ],

  venue: {
    name: "V.C. FARMS",
    address:
      "Near Challenger Gym-2, Behind Indian Oil Petrol Pump, Dighori, Nagpur.",
    mapUrl: "https://maps.app.goo.gl/HeJCZMPjas1ZKZLk8",
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
      name: "Nikah",
      date: "November 25, 2026",
      time: "Evening",
      location: "V.C. FARMS, Dighori, Nagpur",
      mapLink: "https://maps.app.goo.gl/HeJCZMPjas1ZKZLk8",
    },
    {
      name: "Reception",
      date: "November 27, 2026",
      time: "7:00 PM onwards",
      location: "V.C. FARMS, Dighori, Nagpur",
      mapLink: "https://maps.app.goo.gl/HeJCZMPjas1ZKZLk8",
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

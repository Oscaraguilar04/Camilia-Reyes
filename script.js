/* Camila Reyes — site interactions
   Social metrics live in index.html as [data-stat] text nodes.
   Featured homes are the HOMES array below — swap images/copy for a live client. */

const HOMES = [
  {
    price: "$749,000",
    place: "North Park · Townhome energy, house feelings",
    title: "North Park townhome",
    specs: "3 bd · 2.5 ba · 1,420 sq ft",
    image: "assets/home-townhome.jpg",
    alt: "Beige two-story home in North Park at dusk",
    note: "Camila's pick",
    copy: "Walkable to coffee and dinner, with enough space that it does not feel like a starter box. The kind of listing Camila films because the neighborhood does half the selling.",
  },
  {
    price: "$575,000",
    place: "Mission Valley · Condo living, central everything",
    title: "Mission Valley condo",
    specs: "2 bd · 2 ba · 1,050 sq ft",
    image: "assets/home-condo.jpg",
    alt: "Bright plant-filled condo living room",
    note: "",
    copy: "For people who want to be in the middle of San Diego without buying a commute. Light, plants, and a layout that works if you still work from the couch sometimes.",
  },
  {
    price: "$689,000",
    place: "La Mesa · Starter home with actual yard",
    title: "La Mesa starter home",
    specs: "3 bd · 2 ba · 1,280 sq ft",
    image: "assets/home-starter.jpg",
    alt: "Single-story home in La Mesa at dusk with hills behind it",
    note: "good for first-time buyers",
    copy: "More room than the coastal zip codes at this number. A real first house: bedrooms that are bedrooms, a yard, and a drive that still keeps you connected to the city.",
  },
  {
    price: "$1,125,000",
    place: "South Park · Updated single-family",
    title: "South Park single-family",
    specs: "3 bd · 2 ba · 1,680 sq ft",
    image: "assets/home-sfr.jpg",
    alt: "Modern wood-and-white house glowing at dusk",
    note: "",
    copy: "The listing people send their group chat. Updated, photogenic, and in a neighborhood that still feels like neighbors know each other.",
  },
];

const HOODS = [
  {
    name: "North Park",
    kicker: "Walkable · Character · Older homes",
    blurb:
      "Restaurants, murals, and bungalows with opinions. If you want to walk to dinner and still feel like you're in a neighborhood — not a resort — this is usually the first place Camila shows.",
    who: "First-time buyers who want life within a few blocks, not a 20-minute drive to it.",
    image: "assets/hood-north-park.jpg",
    alt: "Busy North Park cafe with communal tables and industrial details",
    videoImg: "assets/content-650k.jpg",
    video: "What $650K Gets You in North Park",
    cta: "Explore North Park",
  },
  {
    name: "South Park",
    kicker: "Residential charm · Neighborhood atmosphere",
    blurb:
      "Quieter than North Park, still close enough that you do not feel exiled. Front porches, regulars at the same coffee shop, and streets that look good in late light.",
    who: "People who want character without needing a scene every night.",
    image: "assets/hood-south-park.jpg",
    alt: "Craftsman-style home with a wide lawn and patio seating",
    videoImg: "assets/content-south-park.jpg",
    video: "Living in South Park",
    cta: "Explore South Park",
  },
  {
    name: "Mission Valley",
    kicker: "Central · Condo living · Convenience",
    blurb:
      "The practical yes. Freeways, shopping, and condo buildings that make sense if your life is already split across the county. Not the most romantic zip — often the smartest first move.",
    who: "Relocators and buyers who want location over a cute street name.",
    image: "assets/hood-mission-valley.jpg",
    alt: "Modern beige-and-charcoal condo building against a blue sky",
    videoImg: "assets/content-condo.jpg",
    video: "Should You Buy a Condo in 2026?",
    cta: "Explore Mission Valley",
  },
  {
    name: "La Mesa",
    kicker: "More space · Still connected",
    blurb:
      "A little more house, a little more sky. You are not abandoning San Diego — you are trading walk-to-everything for a yard and a payment that does not require magical thinking.",
    who: "Anyone priced out of the trendy pockets who still wants to stay in the county.",
    image: "assets/hood-la-mesa.jpg",
    alt: "Spacious two-story home with a wide lawn in golden light",
    videoImg: "assets/content-relocate.jpg",
    video: "Before You Move to San Diego…",
    cta: "Explore La Mesa",
  },
];

const VIDEOS = [
  {
    cat: "Home Tour",
    title: "What $650K Gets You in San Diego",
    copy: "A North Park walkthrough for people who are tired of listings that hide the street.",
    image: "assets/content-650k.jpg",
  },
  {
    cat: "Buyer Education",
    title: "3 Things First-Time Buyers Get Wrong",
    copy: "The myths that stall people for months — explained without the lecture voice.",
    image: "assets/content-buyers.jpg",
  },
  {
    cat: "Neighborhood Guide",
    title: "Living in South Park",
    copy: "Charm, coffee, and what it actually feels like to live there on a Tuesday.",
    image: "assets/content-south-park.jpg",
  },
  {
    cat: "Market Advice",
    title: "Should You Buy a Condo in 2026?",
    copy: "When a condo is a smart first move in San Diego, and when it is just a pretty trap.",
    image: "assets/content-condo.jpg",
  },
  {
    cat: "Relocation",
    title: "Before You Move to San Diego…",
    copy: "Weather is the easy part. This is the commute, price, and neighborhood honesty.",
    image: "assets/content-relocate.jpg",
  },
  {
    cat: "Just Listed",
    title: "New Walkthrough: South Park",
    copy: "An updated single-family filmed the way Camila actually tours homes.",
    image: "assets/content-listed.jpg",
  },
];

const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const homeModal = document.getElementById("home-modal");
const videoModal = document.getElementById("video-modal");

let activeHome = 0;

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

function openMenu() {
  mobileNav.hidden = false;
  menuToggle.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close menu");
}

menuToggle.addEventListener("click", () => {
  if (mobileNav.hidden) openMenu();
  else closeMenu();
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

function renderHome(index) {
  const home = HOMES[index];
  activeHome = index;

  const image = document.getElementById("tour-image");
  image.src = home.image;
  image.alt = home.alt;
  document.getElementById("tour-price").textContent = home.price;
  document.getElementById("tour-place").textContent = home.place;
  document.getElementById("tour-specs").textContent = home.specs;

  const note = document.getElementById("tour-note");
  note.textContent = home.note;
  note.classList.toggle("is-hidden", !home.note);

  document.querySelectorAll(".tour-thumb").forEach((thumb, i) => {
    const selected = i === index;
    thumb.classList.toggle("is-active", selected);
    thumb.setAttribute("aria-selected", String(selected));
  });
}

document.querySelectorAll(".tour-thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => renderHome(Number(thumb.dataset.home)));
});

function openHomeModal() {
  const home = HOMES[activeHome];
  document.getElementById("modal-image").src = home.image;
  document.getElementById("modal-image").alt = home.alt;
  document.getElementById("modal-price").textContent = home.price;
  document.getElementById("modal-title").textContent = home.title;
  document.getElementById("modal-specs").textContent = home.specs;
  document.getElementById("modal-copy").textContent = home.copy;
  if (typeof homeModal.showModal === "function") homeModal.showModal();
}

document.querySelectorAll("[data-open-home]").forEach((button) => {
  button.addEventListener("click", openHomeModal);
});

document.querySelectorAll(".reel-card").forEach((card) => {
  card.tabIndex = 0;
  const open = () => {
    const video = VIDEOS[Number(card.dataset.video)];
    document.getElementById("video-image").src = video.image;
    document.getElementById("video-cat").textContent = video.cat;
    document.getElementById("video-title").textContent = video.title;
    document.getElementById("video-copy").textContent = video.copy;
    if (typeof videoModal.showModal === "function") videoModal.showModal();
  };
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", () => {
    homeModal.close();
    videoModal.close();
  });
});

homeModal.addEventListener("click", (event) => {
  if (event.target === homeModal) homeModal.close();
});

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) videoModal.close();
});

function renderHood(index) {
  const hood = HOODS[index];
  const img = document.getElementById("hood-img");
  img.src = hood.image;
  img.alt = hood.alt;
  document.getElementById("hood-kicker").textContent = hood.kicker;
  document.getElementById("hood-name").textContent = hood.name;
  document.getElementById("hood-blurb").textContent = hood.blurb;
  document.getElementById("hood-for").textContent = hood.who;
  document.getElementById("hood-video-img").src = hood.videoImg;
  document.getElementById("hood-video-title").textContent = hood.video;
  const cta = document.getElementById("hood-cta");
  cta.textContent = hood.cta;

  document.querySelectorAll(".hood-tabs button").forEach((tab, i) => {
    tab.setAttribute("aria-selected", String(i === index));
  });
}

document.querySelectorAll(".hood-tabs button").forEach((tab) => {
  tab.addEventListener("click", () => renderHood(Number(tab.dataset.hood)));
});

function setIntent(value) {
  const radio = document.querySelector(`input[name="intent"][value="${value}"]`);
  if (radio) radio.checked = true;
}

document.querySelectorAll("[data-intent]").forEach((link) => {
  link.addEventListener("click", () => setIntent(link.dataset.intent));
});

function validateField(field) {
  const valid = field.checkValidity();
  field.setAttribute("aria-invalid", String(!valid));
  return valid;
}

function handleForm(form, status, success) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = [...form.querySelectorAll("input, textarea")];
    const ok = fields.every(validateField);
    if (!ok) {
      status.textContent = "A few fields still need you.";
      const first = fields.find((field) => !field.checkValidity());
      if (first) first.focus();
      return;
    }
    status.textContent = success;
    form.reset();
  });
}

handleForm(
  document.getElementById("contact-form"),
  document.getElementById("contact-status"),
  "Got it. Camila will text or email you back — this demo does not send a live message."
);

handleForm(
  document.getElementById("guide-form"),
  document.getElementById("guide-status"),
  "Guide reserved. On a live site this would land in your inbox."
);

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

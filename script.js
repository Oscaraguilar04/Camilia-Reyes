/* Camila Reyes — site interactions.
   Featured homes, neighborhood guides and video cards are content arrays below.
   Swap the copy and image paths here to adapt the site for a live client.
   Social reach figures live in index.html, in the #proof section. */

const HOMES = [
  {
    price: "$749,000",
    place: "North Park · Updated townhome on a walkable block",
    title: "North Park townhome",
    specs: "3 bd · 2.5 ba · 1,420 sq ft",
    image: "assets/home-townhome.jpg",
    alt: "Row of attached brick-and-stucco townhomes with private garages",
    note: "Camila's pick",
    copy: "Attached on one side with a private garage — rare at this price this close in. Walking distance to coffee and dinner, updated kitchen, and low exterior upkeep.",
  },
  {
    price: "$575,000",
    place: "Mission Valley · Central condo, low maintenance",
    title: "Mission Valley condo",
    specs: "2 bd · 2 ba · 1,050 sq ft",
    image: "assets/home-condo.jpg",
    alt: "Bright condo living room with plants and large windows",
    note: "",
    copy: "For buyers who want to be central without taking on a commute or a yard. Good light, in-unit laundry, and an HOA that covers the exterior.",
  },
  {
    price: "$689,000",
    place: "La Mesa · Single-story starter home with a yard",
    title: "La Mesa starter home",
    specs: "3 bd · 2 ba · 1,280 sq ft",
    image: "assets/home-starter.jpg",
    alt: "Single-story home in La Mesa at dusk with hills behind it",
    note: "good for first-time buyers",
    copy: "More room than the coastal ZIP codes at this price. Three real bedrooms, a usable back yard, and a straightforward drive into the city.",
  },
  {
    price: "$1,125,000",
    place: "South Park · Updated single-family",
    title: "South Park single-family",
    specs: "3 bd · 2 ba · 1,680 sq ft",
    image: "assets/home-sfr.jpg",
    alt: "Modern wood-and-white house glowing at dusk",
    note: "",
    copy: "Renovated with restraint — original character kept where it matters. Quiet street, established neighbors, and a short walk to the 30th Street corridor.",
  },
];

const HOODS = [
  {
    name: "North Park",
    kicker: "Walkable · Character · Older homes",
    blurb:
      "Restaurants, small shops and 1920s bungalows on tight lots. If you want to walk to dinner and still feel like you live in a neighborhood, this is usually the first area Camila shows.",
    who: "First-time buyers who want daily life within a few blocks instead of a 20-minute drive.",
    image: "assets/hood-north-park.jpg",
    alt: "North Park cafe with communal tables and warm wood interiors",
    videoImg: "assets/content-650k.jpg",
    video: "What $650K Gets You in North Park",
    cta: "Ask About North Park",
  },
  {
    name: "South Park",
    kicker: "Residential charm · Quiet blocks",
    blurb:
      "Quieter than North Park and still close to everything. Front porches, a handful of neighborhood restaurants, and streets people actually walk in the evening.",
    who: "Buyers who want character and calm, with the option to walk somewhere for dinner.",
    image: "assets/hood-south-park.jpg",
    alt: "Craftsman-style home with a wide lawn and patio seating",
    videoImg: "assets/content-south-park.jpg",
    video: "Living in South Park",
    cta: "Ask About South Park",
  },
  {
    name: "Mission Valley",
    kicker: "Central · Condos · Convenience",
    blurb:
      "The practical choice. Freeway access, shopping, and condo buildings that make sense when your week is spread across the county. Less charm, far less driving.",
    who: "Relocating buyers and anyone who values location and low maintenance over a specific street.",
    image: "assets/hood-mission-valley.jpg",
    alt: "Modern beige-and-charcoal condo building against a blue sky",
    videoImg: "assets/content-condo.jpg",
    video: "Should You Buy a Condo in 2026?",
    cta: "Ask About Mission Valley",
  },
  {
    name: "La Mesa",
    kicker: "More space · Still connected",
    blurb:
      "A little more house and a little more yard for the same budget. You trade walk-to-everything for square footage and a monthly payment that leaves room to breathe.",
    who: "Buyers priced out of the central neighborhoods who still want to stay in San Diego County.",
    image: "assets/hood-la-mesa.jpg",
    alt: "Spacious two-story home with a wide lawn in golden light",
    videoImg: "assets/content-relocate.jpg",
    video: "Moving to San Diego",
    cta: "Ask About La Mesa",
  },
];

const VIDEOS = [
  {
    cat: "Home Tour",
    title: "What $650K Gets You in San Diego",
    copy: "A full North Park walkthrough, including the parts most listing photos leave out.",
    image: "assets/content-650k.jpg",
  },
  {
    cat: "Buyer Education",
    title: "First-Time Buyer Mistakes",
    copy: "Three assumptions that stall first-time buyers for months, and what to do instead.",
    image: "assets/content-buyers.jpg",
  },
  {
    cat: "Neighborhood Guide",
    title: "Living in South Park",
    copy: "What the neighborhood is actually like on a weekday, not just on a Saturday morning.",
    image: "assets/content-south-park.jpg",
  },
  {
    cat: "Market Advice",
    title: "Should You Buy a Condo in 2026?",
    copy: "When a condo is the smart first purchase in San Diego, and when the HOA math stops working.",
    image: "assets/content-condo.jpg",
  },
  {
    cat: "Relocation",
    title: "Moving to San Diego",
    copy: "Commutes, pricing and neighborhood fit — the things worth sorting out before you land.",
    image: "assets/content-relocate.jpg",
  },
  {
    cat: "Just Listed",
    title: "New Listing Tour: South Park",
    copy: "An updated single-family home walked room by room, the way Camila tours with clients.",
    image: "assets/content-listed.jpg",
  },
];

const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const homeModal = document.getElementById("home-modal");
const videoModal = document.getElementById("video-modal");

let activeHome = 0;
let lastFocused = null;

/* Header */

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

function closeMenu() {
  mobileNav.hidden = true;
  document.body.classList.remove("nav-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

function openMenu() {
  mobileNav.hidden = false;
  document.body.classList.add("nav-open");
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNav.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});

/* Featured homes */

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
    thumb.setAttribute("aria-pressed", String(selected));
  });
}

document.querySelectorAll(".tour-thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => renderHome(Number(thumb.dataset.home)));
});

/* Modals */

function openModal(dialog) {
  if (typeof dialog.showModal !== "function") return;
  lastFocused = document.activeElement;
  dialog.showModal();
}

function closeModals() {
  [homeModal, videoModal].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
}

function openHomeModal() {
  const home = HOMES[activeHome];
  const image = document.getElementById("modal-image");
  image.src = home.image;
  image.alt = home.alt;
  document.getElementById("modal-price").textContent = home.price;
  document.getElementById("modal-title").textContent = home.title;
  document.getElementById("modal-specs").textContent = home.specs;
  document.getElementById("modal-copy").textContent = home.copy;
  openModal(homeModal);
}

document.querySelectorAll("[data-open-home]").forEach((button) => {
  button.addEventListener("click", openHomeModal);
});

document.querySelectorAll(".reel-hit").forEach((button) => {
  button.addEventListener("click", () => {
    const video = VIDEOS[Number(button.dataset.video)];
    document.getElementById("video-image").src = video.image;
    document.getElementById("video-cat").textContent = video.cat;
    document.getElementById("video-title").textContent = video.title;
    document.getElementById("video-copy").textContent = video.copy;
    openModal(videoModal);
  });
});

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeModals);
});

[homeModal, videoModal].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  });
});

/* Neighborhood guides */

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
  document.getElementById("hood-cta").textContent = hood.cta;

  document.querySelectorAll(".hood-tabs button").forEach((tab, i) => {
    tab.setAttribute("aria-pressed", String(i === index));
  });
}

document.querySelectorAll(".hood-tabs button").forEach((tab) => {
  tab.addEventListener("click", () => renderHood(Number(tab.dataset.hood)));
});

/* Forms */

function setIntent(value) {
  const radio = document.querySelector(`input[name="intent"][value="${value}"]`);
  if (radio) radio.checked = true;
}

document.querySelectorAll("[data-intent]").forEach((link) => {
  link.addEventListener("click", () => setIntent(link.dataset.intent));
});

function handleForm(form, status, success) {
  const fields = [...form.querySelectorAll("input, textarea")];

  fields.forEach((field) => {
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true" && field.checkValidity()) {
        field.setAttribute("aria-invalid", "false");
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const invalid = fields.filter((field) => !field.checkValidity());
    fields.forEach((field) => {
      field.setAttribute("aria-invalid", String(!field.checkValidity()));
    });

    if (invalid.length) {
      status.textContent = "Please complete the highlighted fields.";
      invalid[0].focus();
      return;
    }

    status.textContent = success;
    form.reset();
    fields.forEach((field) => field.setAttribute("aria-invalid", "false"));
  });
}

handleForm(
  document.getElementById("contact-form"),
  document.getElementById("contact-status"),
  "Thank you — your message is in. Camila follows up by text or email, usually the same day."
);

handleForm(
  document.getElementById("guide-form"),
  document.getElementById("guide-status"),
  "Thank you — the San Diego Relocation Guide is on its way to your inbox."
);

/* Smooth anchor scrolling that respects the fixed header */

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

/* Reveal on scroll — staggered for the content cards, skipped for reduced motion */

if (document.documentElement.classList.contains("has-reveal")) {
  const items = [...document.querySelectorAll(".reveal")];

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const group = el.closest(".reel-scroller");
          if (group) {
            const siblings = [...group.querySelectorAll(".reveal")];
            el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 90}ms`;
          }
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add("is-visible"));
  }
}

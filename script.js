
/* ---------------------------------------------------------------------
   IMAGES
   Replace each URL to change the corresponding image site-wide.
--------------------------------------------------------------------- */
const images = {
  // CHANGE THIS URL TO UPDATE THE HERO BACKGROUND
  hero: "dr.jpeg",

  // CHANGE THIS URL TO UPDATE THE ABOUT / ORIGIN STORY IMAGE
  about: "hero.jpg",

};

/* ---------------------------------------------------------------------
   HERO SHOWCASE — scrolling strip of hero/character images.
   Paste your own image URLs below (original artwork, licensed stock,
   or photos you have the rights to use). Copyrighted characters
   (e.g. Marvel/DC art) can't be included, so bring your own visuals —
   each entry just needs a name label and an image URL.
   Add or remove entries freely; the strip updates automatically.
--------------------------------------------------------------------- */
const heroShowcase = [
  { name: "Hero One", image: "dooms.jpeg" },
  { name: "Hero Two", image: "iron.jpg" },
  { name: "Hero Three", image: "capt.jpg" },
  { name: "Hero Four", image: "spidy.jpeg" },
  { name: "Hero Five", image: "thor.jpeg" },
  { name: "Hero Six", image: "panther.jpeg" },
  {name:"Hero Seven", image:"batman.jpg"},
  {name:"Hero Eight", image:"super.jpeg"},
  {name:"Hero Nine", image:"harry.jpg"}
];

/* ---------------------------------------------------------------------
   SIDE IMAGES — fixed images running down the left and right edges
   of the website (visible on wider screens). Paste your own image
   URLs below; leave as-is to keep the side blank.
--------------------------------------------------------------------- */
const sideImages = {
  // CHANGE THIS URL TO UPDATE THE LEFT-SIDE IMAGE
  left: "hero.jpg",

  // CHANGE THIS URL TO UPDATE THE RIGHT-SIDE IMAGE
  right: "PASTE_RIGHT_SIDE_IMAGE_URL_HERE"
};

/* ---------------------------------------------------------------------
   HOME PAGE SIDE IMAGES — fill the empty space to the left and right
   of the hero content on the home page only. Paste your own image
   URLs below; leave as-is to keep that side blank.
--------------------------------------------------------------------- */
const homeSideImages = {
  // CHANGE THIS URL TO UPDATE THE HOME PAGE LEFT IMAGE
  left: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",

  // CHANGE THIS URL TO UPDATE THE HOME PAGE RIGHT IMAGE
  right: "PASTE_HOME_RIGHT_IMAGE_URL_HERE"
};

/* ---------------------------------------------------------------------
   EVENT IMAGES — one per mission card
--------------------------------------------------------------------- */
const eventImages = {
  paperPresentation: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
  circuitCraze: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  codexQuiz: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  hrManager: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  Animetocartoon: "spider.jpg",
  nonTech2: "spo.jpg",
  nonTech3: "twist.jpg",
  hackathon: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
};

/* ---------------------------------------------------------------------
   REGISTRATION LINK
   Change this ONE value to update every "Register" button/link
   across the entire site (navbar, hero, final CTA, mission modal).
--------------------------------------------------------------------- */
const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSejWsI82NWt-ei_FZhNEsyf-W2RD_z6SDziYhEfHEB9VXGLMw/viewform?usp=header";

/* ---------------------------------------------------------------------
   EVENT INFO — location & Instagram
   Change ONLY these two values to update them everywhere on the site.
--------------------------------------------------------------------- */
const eventInfo = {
  // 📍 EVENT LOCATION — used in "The Headquarters" section
  location: "https://maps.app.goo.gl/fhGfwdp8nrzZHGW39?g_st=ac ",

  // 📸 INSTAGRAM LINK — used by every Instagram icon/button on the site
  instagram: "https://www.instagram.com/valiant_2k_26?igsi=c2doODgxZ2U3aGg="
};

/* Other contact links — edit freely */
const contactInfo = {
  email: "valient2k26official@gmail.com",
  phone: "+919344301006 & 8015841303"
};

/* ---------------------------------------------------------------------
   TECHNICAL EVENTS — drives the navbar dropdown AND the mission cards.
   Add, remove or rename events here; the site updates automatically.
--------------------------------------------------------------------- */
const technicalEvents = [
  {
    name: "Paper Presentation",
    tagline: "Present &bull; Innovate &bull; Inspire",
    image: eventImages.paperPresentation,
    description: "Present your ideas, research work, innovations, or projects on any topic of your choice. This event provides a platform for participants to showcase their knowledge, creativity, and presentation skills before a panel of judges",
    rules:'📌 Participant Instructions• Please send your PPT along with your Team Name before arriving at the event.• Kindly report at the venue on time.• Please strictly follow your allotted presentation time.• Kindly follow the assigned presentation order.• If you have any doubts or difficulties, please feel free to contact the Event Coordinator.For any queries, please contact the coordinator',
    team: "1–2 Members",
    coordinator1: "B.Vinyaksha IV year  9342890016",
    coordinator2: "V.Pon Jayashree IV year",
  },
  {
    name: "Circuit Craze",
    tagline: "Build &bull; Debug &bull; Conquer",
    image: eventImages.circuitCraze,
    description: `Put your circuit knowledge and problem-solving skills to the test! Participants will face exciting challenges ranging from technical quizzes and circuit building to real-world problem analysis. Demonstrate your understanding of electronic components, circuit design, and practical applications to emerge victorious.

🟢 Round 1 – Circuit Quiz: Technical MCQs based on electronics and circuit fundamentals.
🟡 Round 2 – Circuit Connect: Build the displayed circuit using the given components.
🔴 Round 3 – Solution Sprint: Analyze a problem statement, identify the required components, and explain the working of the proposed solution.`,
    team: "2 Members",
    coordinator1: "K.Mahalingam IV year 8015841303" ,
    coordinator2: "V.Dharshini IV year",
  },
  {
    name: "Codex Quiz",
    tagline: "Think &bull; Solve &bull; Win",
    image: eventImages.codexQuiz,
    description: `🟢 Round 1 – Code Quest (10 Min): 15 MCQs on Java/Python basics, output prediction and logical reasoning.
🟡 Round 2 – Bug Hunter (10 Min): 15 questions to identify errors, explain the error and correct the code.
🔴 Round 3 – Code Rush (15 Min): 5 coding problems testing logic and problem-solving.`,
    rules: "Follow the allotted time for each round. No mobile phones or unfair means allowed. Judges' decisions are final. In case of a tie, the fastest team in the final round wins.",
    team: "2 Members",
    coordinator1: "K.Alagu Ram balaji IV year 9360597564",
    coordinator2: "K.Mahalakshmi IV year",
  },
  {
    name: "HR Manager",
    tagline: "Communicate &bull; Lead &bull; Conquer",
    image: eventImages.hrManager,
    description: `🟢 Round 1 – Company Connect (10 Min)
Identify the company from logos, products, taglines, or clues. Questions based on top IT, Core, and Product-based companies.
🟡 Round 2 – Technical Screening (10 Min)
Aptitude & Logical Reasoning, Basic Programming Concepts, Technical MCQs related to Engineering fundamentals.
🔴 Round 3 – HR Decision Desk (15 Min)
Resume Analysis, HR Scenario-Based Questions, Hiring & Team Management Challenges, Communication and Decision-Making Tasks.`,
    rules: `Follow the time limit for each round. No mobile phones or external assistance. Judges' decisions are final. Teams are evaluated on accuracy, technical knowledge, and problem-solving skills.`,
    team: "1 Member",
    coordinator1: "M.B.Mugesh IV year 8438905144",
    coordinator2: "S.Nithya IV year",
  },
];

/* ---------------------------------------------------------------------
   HACKATHON — a separate 24-hour event happening after the symposium.
   Kept out of the Technical Missions grid and given its own dedicated
   section on the page (see #hackathon in symposium.html). Opens the full
   VALIANT 2K26 Hackathon microsite in a new tab.
--------------------------------------------------------------------- */
const hackathonEvent = {
  name: "Hackathon",
  tagline: "Code &bull; Create &bull; Conquer",
  image: eventImages.hackathon,
  blurb: "A 8 hour national level hackathon held after the symposium. One problem statement, one team of four, Eight hours to prove it wasn't luck.",
  date: "01 Oct 2026",
  venue: "AAA College of Engineering & Technology",
  team: "Up to 4 Members",
  fee: "&#8377;350 per team",
  link: "hackathon.html",
  linkTarget: "_blank",
  ctaLabel: "View Hackathon &rarr;"
};

/* ---------------------------------------------------------------------
   NON-TECHNICAL EVENTS — edit names, taglines and images freely.
--------------------------------------------------------------------- */
const nonTechnicalEvents = [
  {
    name: "Cartoon to Cinema",
    tagline: "Guess • Act • Conquer",
    image: eventImages.Animetocartoon,
    description: '🟢 Round 1 – Quick Shots -15 MCQs based on cartoons, anime, movies, web series, and pop culture. Test your knowledge and speed. 🟡 Round 2 – Guess It Fast -Give clues and guess characters, movies, actors, and famous references. Teamwork and communication are key.🔴 Round 3 – No Choices, Just Answers Rapid-fire direct questions with no options. -Think fast and answer accurately to win. 🚀',
    team: "2 Members",
    coordinator1: "R.Keerthivasan IV year  9443657597",
    coordinator2: "K.Kalaiyarasan IV year"
  },
  {
    name: "Partify",
    tagline: "Tune In • Turn Up • Triumph 🎧🎤",
    image: eventImages.nonTech2,
    description: "Get ready to groove, guess, and enjoy the rhythm! Partify is a music-based event that tests your knowledge of songs, tunes, and beats while celebrating the joy of music and entertainment. 🎶✨",
    team: "2 Member",
    coordinator1: "A.Syed abuthahir IV year 8838806680",
    coordinator2: "S.Bhavani IV year"
  },
  {
    name: "Twist & Think",
    tagline: "Logic • Strategy • Success",
    image: eventImages.nonTech3,
    description: "Challenge your mind with exciting puzzles, brain teasers, and tricky questions that test your logic, creativity, and problem-solving skills. Think beyond the obvious and find your way to victory!",
    team: "2 Member",
    coordinator1: "M.Ebi Joyal IV year 9043613433",
    coordinator2: "M.Sri Nandhini IV year"
  },
  
];

/* ---------------------------------------------------------------------
   EVENT DATE — set the real symposium date/time for the countdown.
--------------------------------------------------------------------- */
const eventDate = new Date("2026-09-30T09:00:00");


/* ======================================================================
   RENDER / LOGIC — no need to edit below this line
====================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- apply image config ---------- */
  document.getElementById("heroBg").style.backgroundImage = `url("${images.hero}")`;
  document.getElementById("aboutImg").src = images.about;

  /* ---------- apply side images (left/right) ---------- */
  applySideImage("sideImageLeft", sideImages.left);
  applySideImage("sideImageRight", sideImages.right);

  /* ---------- apply home page side images (left/right) ---------- */
  applySideImage("heroSideLeft", homeSideImages.left, ["PASTE_HOME_LEFT_IMAGE_URL_HERE", "PASTE_HOME_RIGHT_IMAGE_URL_HERE"]);
  applySideImage("heroSideRight", homeSideImages.right, ["PASTE_HOME_LEFT_IMAGE_URL_HERE", "PASTE_HOME_RIGHT_IMAGE_URL_HERE"]);

  function applySideImage(id, url, placeholders) {
    const el = document.getElementById(id);
    if (!el) return;
    const blanks = placeholders || ["hero.jpg", "PASTE_RIGHT_SIDE_IMAGE_URL_HERE"];
    if (url && !blanks.includes(url)) {
      el.style.backgroundImage = `url("${url}")`;
      el.classList.add("has-image");
    }
  }

  /* ---------- apply registration link everywhere ---------- */
  ["registerLinkNav", "registerLinkHero", "registerLinkFinal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = registrationLink;
  });

  /* ---------- apply eventInfo (location + instagram) everywhere ---------- */
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(eventInfo.location);
  document.getElementById("hqLocationLink").href = mapsUrl;

  ["hqInstagram", "footerInstagram"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = eventInfo.instagram;
  });

  /* ---------- other contact links ---------- */
  document.getElementById("hqEmail").href = "mailto:" + contactInfo.email;
  document.getElementById("hqEmail").querySelector("strong").textContent = contactInfo.email;
  document.getElementById("hqPhone").href = "tel:" + contactInfo.phone;
  document.getElementById("hqPhone").querySelector("strong").textContent = contactInfo.phone;

  /* ---------- build nav dropdowns ---------- */
  buildDropdown("technicalPanel", technicalEvents);
  buildDropdown("nonTechnicalPanel", nonTechnicalEvents);

  function buildDropdown(containerId, list) {
    const el = document.getElementById(containerId);
    el.innerHTML = list.map((ev, i) => `
      <button class="dropdown-item" data-group="${containerId}" data-index="${i}">
        <span class="dropdown-item-name">${ev.name}</span>
        <span class="dropdown-item-tag">${ev.tagline}</span>
      </button>
    `).join("");
  }

  /* ---------- build mission cards ---------- */
  buildMissionGrid("technicalGrid", technicalEvents, "technicalPanel");
  buildMissionGrid("nonTechnicalGrid", nonTechnicalEvents, "nonTechnicalPanel");

  /* ---------- populate the dedicated Hackathon section ---------- */
  const hackathonBg = document.getElementById("hackathonBg");
  if (hackathonBg) {
    hackathonBg.style.backgroundImage = `url("${hackathonEvent.image}")`;
    document.getElementById("hackathonBlurb").textContent = hackathonEvent.blurb;
    document.getElementById("hackathonDate").textContent = hackathonEvent.date;
    document.getElementById("hackathonVenue").textContent = hackathonEvent.venue;
    document.getElementById("hackathonTeam").textContent = hackathonEvent.team;
    document.getElementById("hackathonFee").innerHTML = hackathonEvent.fee;
    const hackathonLink = document.getElementById("hackathonLink");
    hackathonLink.href = hackathonEvent.link;
    hackathonLink.target = hackathonEvent.linkTarget || "_blank";
    hackathonLink.innerHTML = hackathonEvent.ctaLabel;
  }

  function buildMissionGrid(containerId, list, groupKey) {
    const el = document.getElementById(containerId);
    el.innerHTML = list.map((ev, i) => `
      <article class="mission-card" data-group="${groupKey}" data-index="${i}" tabindex="0">
        <div class="mission-card-img" style="background-image:url('${ev.image}')"></div>
        <div class="mission-card-body">
          <p class="mission-card-tag">${ev.tagline}</p>
          <h3 class="mission-card-name">${ev.name}</h3>
          <p class="mission-card-meta">${ev.team}</p>
          <span class="mission-card-cta">${ev.ctaLabel || "Event Details &rarr;"}</span>
        </div>
      </article>
    `).join("");
  }

  /* ---------- click handling: dropdown items + mission cards open modal ---------- */
  const dataSets = { technicalPanel: technicalEvents, nonTechnicalPanel: nonTechnicalEvents };

  document.body.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-group][data-index]");
    if (!trigger) return;
    const group = trigger.getAttribute("data-group");
    const index = Number(trigger.getAttribute("data-index"));
    const ev = dataSets[group][index];
    if (ev.link) {
      window.open(ev.link, ev.linkTarget || "_blank", "noopener");
      closeAllDropdowns();
      closeMobileMenu();
      return;
    }
    openModal(ev);
    closeAllDropdowns();
    closeMobileMenu();
  });

  /* ---------- mission briefing modal ---------- */
  const modalBackdrop = document.getElementById("modalBackdrop");
  function openModal(ev) {
    document.getElementById("modalTitle").textContent = ev.name;
    document.getElementById("modalTagline").innerHTML = ev.tagline;
    document.getElementById("modalDesc").textContent = ev.description;
    document.getElementById("modalTeam").textContent = ev.team;
    document.getElementById("modalFee").textContent = ev.coordinator1 || "";
    document.getElementById("modalrules").textContent = ev.rules || "";

    document.getElementById("modalVenue").textContent = ev.coordinator2 || "";
    modalBackdrop.classList.add("open");
    document.body.classList.add("no-scroll");
  }
  function closeModal() {
    modalBackdrop.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => { if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeLightbox(); } });

  /* ---------- hero showcase (scrolling strip) ---------- */
  const heroTrack = document.getElementById("heroShowcaseTrack");
  const heroHtml = heroShowcase.map(h => `
    <div class="hero-showcase-card">
      ${h.image && h.image !== "PASTE_YOUR_HERO_IMAGE_URL_HERE"
        ? `<img src="${h.image}" alt="${h.name}">`
        : `<span>${h.name}</span>`}
    </div>
  `).join("");
  heroTrack.innerHTML = heroHtml + heroHtml; // duplicated for seamless loop

  /* ---------- navbar scroll state ---------- */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  /* ---------- desktop dropdown toggling ---------- */
  const dropdowns = document.querySelectorAll(".nav-dropdown");
  dropdowns.forEach(dd => {
    const btn = dd.querySelector(".nav-drop-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        dd.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
  document.addEventListener("click", closeAllDropdowns);
  function closeAllDropdowns() {
    dropdowns.forEach(dd => {
      dd.classList.remove("open");
      dd.querySelector(".nav-drop-btn").setAttribute("aria-expanded", "false");
    });
  }

  /* ---------- mobile menu ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  function closeMobileMenu() {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  /* ---------- animated stat counters ---------- */
  const statEls = document.querySelectorAll(".stat-num");
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  statEls.forEach(el => statObserver.observe(el));

  function animateCount(el) {
    const target = Number(el.getAttribute("data-target"));
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + (progress === 1 ? "+" : "");
      if (target === 1) el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target === 1 ? "1" : target + "+";
    }
    requestAnimationFrame(tick);
  }

  /* ---------- scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    ".origin-image, .origin-text, .mission-card, .tl-item"
  );
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------- countdown ---------- */
  function updateCountdown() {
    const now = new Date();
    let diff = eventDate - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    document.getElementById("cdDays").textContent = String(days).padStart(2, "0");
    document.getElementById("cdHours").textContent = String(hours).padStart(2, "0");
    document.getElementById("cdMins").textContent = String(mins).padStart(2, "0");
    document.getElementById("cdSecs").textContent = String(secs).padStart(2, "0");
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ---------- hero + final CTA particles ---------- */
  spawnParticles("heroParticles", 36);
  spawnParticles("finalParticles", 24);

  function spawnParticles(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = (Math.random() * 10).toFixed(2) + "s";
      p.style.animationDuration = (8 + Math.random() * 10).toFixed(2) + "s";
      p.style.width = p.style.height = (2 + Math.random() * 3).toFixed(1) + "px";
      container.appendChild(p);
    }
  }

  /* ---------- cinematic intro ---------- */
  const intro = document.getElementById("intro");
  const skipBtn = document.getElementById("skipIntro");
  const alreadySeen = sessionStorage.getItem("valientIntroSeen");

  function endIntro() {
    intro.classList.add("intro-hide");
    document.body.classList.remove("intro-active");
    sessionStorage.setItem("valientIntroSeen", "1");
    setTimeout(() => { intro.style.display = "none"; }, 900);
  }

  if (alreadySeen) {
    intro.style.display = "none";
  } else {
    document.body.classList.add("intro-active");
    skipBtn.addEventListener("click", endIntro);
    setTimeout(() => intro.classList.add("show-line1"), 600);
    setTimeout(() => intro.classList.add("show-line2"), 2400);
    setTimeout(() => intro.classList.add("show-title"), 4200);
    setTimeout(() => intro.classList.add("show-final"), 5600);
    setTimeout(endIntro, 7400);
  }

});

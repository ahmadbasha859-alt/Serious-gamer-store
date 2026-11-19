// ==========================================
// SERIOUS GAMER — المنطق الكامل 60FPS (2026–2027)
// عرض الألعاب كاسم فقط + خلفية حية + قائمة حول
// ==========================================

const grid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const themeBtn = document.getElementById("themeBtn");
const navButtons = document.querySelectorAll(".nav-btn");
const sortChips = document.querySelectorAll(".sort-chip");
const resultsCount = document.getElementById("resultsCount");
const lastUpdateEl = document.getElementById("lastUpdate");

const openAboutBtn = document.getElementById("openAboutBtn");
const aboutOverlay = document.getElementById("aboutOverlay");
const aboutClose = document.getElementById("aboutClose");

const overlay = document.getElementById("detailOverlay");
const detailCover = document.getElementById("detailCover");
const detailTitle = document.getElementById("detailTitle");
const detailTitleAr = document.getElementById("detailTitleAr");
const detailDeveloper = document.getElementById("detailDeveloper");
const detailGenre = document.getElementById("detailGenre");
const detailStatus = document.getElementById("detailStatus");
const detailRating = document.getElementById("detailRating");
const detailDate = document.getElementById("detailDate");
const detailNotes = document.getElementById("detailNotes");
const detailDownloads = document.getElementById("detailDownloads");
const detailSize = document.getElementById("detailSize");
const detailClose = document.getElementById("detailClose");
const favBtn = document.getElementById("favBtn");
const downloadsWrap = document.getElementById("downloadsWrap");
const commentsList = document.getElementById("commentsList");
const ratingBarFill = document.getElementById("ratingBarFill");
const suggestedList = document.getElementById("suggestedList");

const gamesList = Array.isArray(window.games) ? window.games : (typeof games !== "undefined" && Array.isArray(games) ? games : []);

let currentView = "all";
let searchQuery = "";
let currentSort = "newest";
let currentGameId = null;
let ratingBarTimer = null;

// ==========================================
// ثوابت التخزين
// ==========================================
const LS_KEYS = {
  FAVS: "sg_favs_2026",
  THEME: "sg_theme_2026",
  VIEW: "sg_view_2026",
  SORT: "sg_sort_2026"
};

// ==========================================
// المفضلة
// ==========================================
function getFavorites() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LS_KEYS.FAVS) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(list) {
  try {
    localStorage.setItem(LS_KEYS.FAVS, JSON.stringify(list));
  } catch (e) {
    // تجاهل أخطاء التخزين
  }
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(function (x) { return x !== id; });
  } else {
    favs.push(id);
  }
  saveFavorites(favs);
}

// ==========================================
// حفظ واستعادة الإعدادات
// ==========================================
function saveSettings() {
  try {
    localStorage.setItem(LS_KEYS.THEME, document.body.classList.contains("light") ? "light" : "dark");
    const viewToSave = currentView === "about" ? "all" : currentView;
    localStorage.setItem(LS_KEYS.VIEW, viewToSave);
    localStorage.setItem(LS_KEYS.SORT, currentSort);
  } catch (e) {
    // تجاهل أخطاء التخزين
  }
}

function restoreSettings() {
  try {
    const theme = localStorage.getItem(LS_KEYS.THEME);
    if (theme === "light") {
      document.body.classList.add("light");
    } else if (theme === "dark") {
      document.body.classList.remove("light");
    }
  } catch (e) {
    // تجاهل
  }

  try {
    const savedView = localStorage.getItem(LS_KEYS.VIEW);
    if (savedView && ["all", "playing", "done", "fav"].includes(savedView)) {
      currentView = savedView;
      navButtons.forEach(function (b) {
        b.classList.toggle("active", b.dataset.view === savedView);
      });
    }
  } catch (e) {
    // تجاهل
  }

  try {
    const savedSort = localStorage.getItem(LS_KEYS.SORT);
    if (savedSort && ["newest", "rating", "downloads", "title"].includes(savedSort)) {
      currentSort = savedSort;
      sortChips.forEach(function (c) {
        c.classList.toggle("active", c.dataset.sort === savedSort);
      });
    }
  } catch (e) {
    // تجاهل
  }
}

// ==========================================
// أدوات مساعدة
// ==========================================
const STATUS_LABELS = {
  playing: "قيد اللعب",
  done: "مكتمل",
  dropped: "متروك"
};

function formatDate(dateStr) {
  try {
    const parts = String(dateStr).split("-");
    if (parts.length !== 3) return String(dateStr || "");
    return parts[2] + "/" + parts[1] + "/" + parts[0];
  } catch (e) {
    return String(dateStr || "");
  }
}

function formatCount(n) {
  const num = Number(n) || 0;
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return String(num);
}

function nameToColor(name) {
  const safeName = String(name || "SG");
  let hash = 0;
  for (let i = 0; i < safeName.length; i++) {
    hash = safeName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = 135 + (Math.abs(hash) % 45); // نطاق أخضر زمردي متناسق
  return "hsl(" + hue + ", 62%, 34%)";
}

function initials(name) {
  const parts = String(name || "SG").trim().split(/\s+/);
  if (parts.length >= 2) {
    return parts[0].charAt(0) + parts[1].charAt(0);
  }
  return safeFirstChar(name);
}

function safeFirstChar(name) {
  const trimmed = String(name || "S").trim();
  return trimmed ? trimmed.charAt(0) : "S";
}

// ==========================================
// شارة "جديد" + آخر تحديث
// ==========================================
function isNewGame(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return false;
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  return d > thirtyDaysAgo;
}

function applyLastUpdate() {
  if (!lastUpdateEl || gamesList.length === 0) {
    if (lastUpdateEl) lastUpdateEl.textContent = "أرشيف 2026–2027 جاهز";
    return;
  }

  let latest = null;
  for (let i = 0; i < gamesList.length; i++) {
    const d = new Date(gamesList[i].date);
    if (!isNaN(d.getTime()) && (!latest || d > latest)) {
      latest = d;
    }
  }

  if (!latest) return;

  const diffDays = Math.floor((Date.now() - latest.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < 1) {
    lastUpdateEl.textContent = "آخر تحديث: اليوم";
  } else if (diffDays === 1) {
    lastUpdateEl.textContent = "آخر تحديث: أمس";
  } else if (diffDays < 30) {
    lastUpdateEl.textContent = "آخر تحديث: منذ " + diffDays + " يوم";
  } else {
    lastUpdateEl.textContent = "آخر تحديث: منذ " + Math.floor(diffDays / 30) + " شهر";
  }
}

// ==========================================
// عرض الألعاب كاسم فقط بدون صور مصغرة
// ==========================================
function createGameNameCard(game, index) {
  const card = document.createElement("div");
  card.className = "game-name-card";
  card.dataset.id = String(game.id);

  const leftBlock = document.createElement("div");
  leftBlock.className = "card-left-block";

  const indexBadge = document.createElement("span");
  indexBadge.className = "card-index-badge";
  indexBadge.textContent = String(index + 1).padStart(2, "0");

  const titleZone = document.createElement("div");
  titleZone.className = "card-title-zone";

  const titleRow = document.createElement("div");
  titleRow.className = "card-title-row";

  const titleEl = document.createElement("div");
  titleEl.className = "game-title";
  titleEl.textContent = game.title;

  titleRow.appendChild(titleEl);

  if (isNewGame(game.date)) {
    const newBadge = document.createElement("span");
    newBadge.className = "new-badge";
    newBadge.textContent = "جديد";
    titleRow.appendChild(newBadge);
  }

  const subEl = document.createElement("div");
  subEl.className = "game-title-sub";
  subEl.textContent = game.titleAr + " • " + (STATUS_LABELS[game.status] || game.status);

  titleZone.appendChild(titleRow);
  titleZone.appendChild(subEl);

  leftBlock.appendChild(indexBadge);
  leftBlock.appendChild(titleZone);

  const rightBlock = document.createElement("div");
  rightBlock.className = "card-right-block";

  const ratingPill = document.createElement("span");
  ratingPill.className = "game-rating-pill";
  ratingPill.textContent = "★ " + game.rating;

  const favBtnCard = document.createElement("button");
  favBtnCard.type = "button";
  favBtnCard.className = "card-fav-btn" + (isFavorite(game.id) ? " is-fav" : "");
  favBtnCard.setAttribute("aria-label", "مفضلة");
  favBtnCard.dataset.favId = String(game.id);
  favBtnCard.innerHTML = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4.5 4.5 8.5C19 16.65 12 21 12 21z" stroke-linejoin="round"/></svg>';

  rightBlock.appendChild(ratingPill);
  rightBlock.appendChild(favBtnCard);

  card.appendChild(leftBlock);
  card.appendChild(rightBlock);

  return card;
}

// ==========================================
// الفلترة والترتيب
// ==========================================
function getFilteredGames() {
  const activeFilterView = currentView === "about" ? "all" : currentView;

  const list = gamesList.filter(function (game) {
    if (activeFilterView === "playing" && game.status !== "playing") return false;
    if (activeFilterView === "done" && game.status !== "done") return false;
    if (activeFilterView === "fav" && !isFavorite(game.id)) return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const inTitle = String(game.title || "").toLowerCase().includes(q);
      const inTitleAr = String(game.titleAr || "").includes(searchQuery);
      const inGenre = String(game.genre || "").toLowerCase().includes(q);
      const inDeveloper = String(game.developer || "").toLowerCase().includes(q);
      if (!inTitle && !inTitleAr && !inGenre && !inDeveloper) return false;
    }

    return true;
  });

  if (currentSort === "newest") {
    list.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
  } else if (currentSort === "rating") {
    list.sort(function (a, b) { return (Number(b.rating) || 0) - (Number(a.rating) || 0); });
  } else if (currentSort === "downloads") {
    list.sort(function (a, b) { return (Number(b.downloadCount) || 0) - (Number(a.downloadCount) || 0); });
  } else if (currentSort === "title") {
    list.sort(function (a, b) { return String(a.title).localeCompare(String(b.title)); });
  }

  return list;
}

function renderGames() {
  const filtered = getFilteredGames();
  resultsCount.innerHTML = "عدد الألعاب: <strong>" + filtered.length + "</strong>";

  const fragment = document.createDocumentFragment();

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-msg";
    empty.textContent = "لا توجد ألعاب مطابقة.";
    fragment.appendChild(empty);
  } else {
    for (let i = 0; i < filtered.length; i++) {
      fragment.appendChild(createGameNameCard(filtered[i], i));
    }
  }

  grid.replaceChildren(fragment);
}

// ==========================================
// روابط التحميل
// ==========================================
function renderDownloads(game) {
  const frag = document.createDocumentFragment();

  const title = document.createElement("h3");
  title.className = "downloads-title";
  title.textContent = "روابط التحميل";
  frag.appendChild(title);

  if (!game.downloads || game.downloads.length === 0) {
    const empty = document.createElement("p");
    empty.className = "downloads-empty";
    empty.textContent = "لا توجد روابط متاحة حالياً.";
    frag.appendChild(empty);
    downloadsWrap.replaceChildren(frag);
    return;
  }

  game.downloads.forEach(function (dl) {
    const a = document.createElement("a");
    a.className = "download-btn";
    a.href = dl.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const left = document.createElement("span");
    left.className = "source-name";

    const dot = document.createElement("span");
    dot.className = "source-dot " + (dl.source || "other");

    const label = document.createElement("span");
    label.textContent = dl.name;

    left.appendChild(dot);
    left.appendChild(label);

    const ext = document.createElement("span");
    ext.className = "ext-icon";
    ext.textContent = "↗";

    a.appendChild(left);
    a.appendChild(ext);
    frag.appendChild(a);
  });

  downloadsWrap.replaceChildren(frag);
}

// ==========================================
// التعليقات
// ==========================================
function renderComments(game) {
  const frag = document.createDocumentFragment();

  if (!game.comments || game.comments.length === 0) {
    const empty = document.createElement("p");
    empty.className = "downloads-empty";
    empty.textContent = "لا توجد تعليقات بعد.";
    frag.appendChild(empty);
    commentsList.replaceChildren(frag);
    return;
  }

  game.comments.forEach(function (c) {
    const comment = document.createElement("div");
    comment.className = "comment";

    const head = document.createElement("div");
    head.className = "comment-head";

    const avatar = document.createElement("div");
    avatar.className = "comment-avatar";
    avatar.style.background = nameToColor(c.name);
    avatar.textContent = initials(c.name);

    const info = document.createElement("div");
    info.className = "comment-info";

    const name = document.createElement("div");
    name.className = "comment-name";
    name.textContent = c.name;

    const meta = document.createElement("div");
    meta.className = "comment-meta";

    const stars = document.createElement("span");
    const rateNum = Number(c.rating) || 0;
    stars.textContent = "★".repeat(Math.min(5, Math.max(0, rateNum))) + "☆".repeat(Math.max(0, 5 - rateNum));
    stars.style.color = "#facc15";
    stars.style.fontSize = "10px";

    const sentiment = document.createElement("span");
    sentiment.className = "comment-sentiment " + (c.sentiment || "");
    sentiment.textContent = c.sentiment === "positive" ? "👍" : (c.sentiment === "negative" ? "👎" : "•");

    meta.appendChild(stars);
    meta.appendChild(sentiment);

    info.appendChild(name);
    info.appendChild(meta);

    head.appendChild(avatar);
    head.appendChild(info);

    const body = document.createElement("p");
    body.className = "comment-body";

    const dialectTag = document.createElement("span");
    dialectTag.className = "dialect-tag";
    dialectTag.textContent = c.dialect || "لاعب";

    body.appendChild(dialectTag);
    body.appendChild(document.createTextNode(c.text || ""));

    comment.appendChild(head);
    comment.appendChild(body);
    frag.appendChild(comment);
  });

  commentsList.replaceChildren(frag);
}

// ==========================================
// ألعاب مشابهة بدون صور مصغرة
// ==========================================
function renderSuggested(game) {
  if (!suggestedList) return;
  const frag = document.createDocumentFragment();

  let similar = gamesList.filter(function (g) {
    return g.id !== game.id && g.genre === game.genre;
  });

  if (similar.length < 3) {
    const others = gamesList.filter(function (g) {
      return g.id !== game.id && similar.indexOf(g) === -1;
    });
    similar = similar.concat(others).slice(0, 5);
  }

  similar.slice(0, 5).forEach(function (g) {
    const card = document.createElement("div");
    card.className = "suggested-card";
    card.dataset.suggestId = String(g.id);

    const title = document.createElement("div");
    title.className = "suggested-title";
    title.textContent = g.title;

    const rating = document.createElement("div");
    rating.className = "suggested-rating";
    rating.textContent = "★ " + g.rating;

    card.appendChild(title);
    card.appendChild(rating);
    frag.appendChild(card);
  });

  suggestedList.replaceChildren(frag);
}

// ==========================================
// صفحة التفاصيل وقائمة حول
// ==========================================
function syncBodyScrollLock() {
  const anyOpen = overlay.classList.contains("open") || (aboutOverlay && aboutOverlay.classList.contains("open"));
  document.body.style.overflow = anyOpen ? "hidden" : "";
}

function openDetail(id) {
  const game = gamesList.find(function (g) { return g.id === id; });
  if (!game) return;

  currentGameId = id;

  if (detailCover) {
    detailCover.style.background = "";
  }

  detailTitle.textContent = game.title;
  detailTitleAr.textContent = game.titleAr;
  detailDeveloper.textContent = game.developer;
  detailGenre.textContent = game.genre;
  detailStatus.textContent = STATUS_LABELS[game.status] || game.status;
  detailStatus.className = "tag tag-status " + game.status;
  detailRating.textContent = "★ " + game.rating;
  detailDate.textContent = formatDate(game.date);
  detailNotes.textContent = game.notes;
  detailDownloads.textContent = formatCount(game.downloadCount);
  detailSize.textContent = game.size;

  if (ratingBarFill) {
    clearTimeout(ratingBarTimer);
    ratingBarFill.style.width = "0%";
    ratingBarTimer = setTimeout(function () {
      ratingBarFill.style.width = Math.min(100, Math.max(0, Number(game.rating) * 10)) + "%";
    }, 60);
  }

  renderDownloads(game);
  renderSuggested(game);
  renderComments(game);

  favBtn.classList.toggle("is-fav", isFavorite(id));

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  syncBodyScrollLock();
}

function closeDetail() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  currentGameId = null;
  syncBodyScrollLock();
}

function openAbout() {
  if (!aboutOverlay) return;
  aboutOverlay.classList.add("open");
  aboutOverlay.setAttribute("aria-hidden", "false");
  syncBodyScrollLock();
}

function closeAbout() {
  if (!aboutOverlay) return;
  aboutOverlay.classList.remove("open");
  aboutOverlay.setAttribute("aria-hidden", "true");
  syncBodyScrollLock();
  if (currentView === "about") {
    currentView = "all";
    navButtons.forEach(function (b) {
      b.classList.toggle("active", b.dataset.view === "all");
    });
  }
}

// ==========================================
// خلفية حية ديناميكية 60FPS ثابتة عبر Canvas
// ==========================================
(function initLiveGreenBackground() {
  const canvas = document.getElementById("liveBgCanvas");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  let width = 0;
  let height = 0;
  let dpr = 1;
  let rafId = null;
  let lastTime = 0;
  let elapsed = 0;
  let isPaused = false;

  const particles = [];
  const PARTICLE_COUNT = 22;

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seedParticles() {
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * (width || 480),
        y: Math.random() * (height || 800),
        r: 1.5 + Math.random() * 2.5,
        vy: 14 + Math.random() * 22,
        vx: (Math.random() - 0.5) * 10,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function drawFrame(now) {
    if (isPaused) return;
    if (!lastTime) lastTime = now;
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    elapsed += dt;

    ctx.clearRect(0, 0, width, height);

    const isLight = document.body.classList.contains("light");
    const waveColor = isLight ? "rgba(5, 150, 105, 0.08)" : "rgba(16, 185, 129, 0.09)";
    const dotColor = isLight ? "rgba(5, 150, 105, 0.24)" : "rgba(74, 222, 128, 0.22)";

    // موجات خضراء سلسة منخفضة الكلفة
    ctx.strokeStyle = waveColor;
    ctx.lineWidth = 1.5;
    for (let w = 0; w < 2; w++) {
      ctx.beginPath();
      const baseY = height * (0.28 + w * 0.36);
      for (let x = 0; x <= width + 24; x += 24) {
        const y = baseY + Math.sin(x * 0.012 + elapsed * (1.2 + w * 0.4) + w) * 18;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // جزيئات طاقة خضراء تتحرك بسلاسة
    ctx.fillStyle = dotColor;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y -= p.vy * dt;
      p.x += (p.vx + Math.sin(elapsed * 1.5 + p.phase) * 6) * dt;

      if (p.y < -12) {
        p.y = height + 12;
        p.x = Math.random() * width;
      }
      if (p.x < -12) p.x = width + 12;
      if (p.x > width + 12) p.x = -12;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    rafId = requestAnimationFrame(drawFrame);
  }

  function handleVisibility() {
    if (document.hidden) {
      isPaused = true;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    } else if (isPaused) {
      isPaused = false;
      lastTime = 0;
      rafId = requestAnimationFrame(drawFrame);
    }
  }

  resizeCanvas();
  seedParticles();
  window.addEventListener("resize", function () {
    resizeCanvas();
    seedParticles();
  }, { passive: true });
  document.addEventListener("visibilitychange", handleVisibility);

  rafId = requestAnimationFrame(drawFrame);
})();

// ==========================================
// التفاعل وتفويض الأحداث
// ==========================================
let searchTimer = null;
searchInput.addEventListener("input", function (e) {
  const value = e.target.value.trim();
  clearTimeout(searchTimer);
  searchTimer = setTimeout(function () {
    searchQuery = value;
    renderGames();
  }, 150);
});

// تفويض نقر شبكة الألعاب
grid.addEventListener("click", function (e) {
  const favTarget = e.target.closest(".card-fav-btn");
  if (favTarget && favTarget.dataset.favId) {
    e.stopPropagation();
    const id = Number(favTarget.dataset.favId);
    toggleFavorite(id);
    favTarget.classList.toggle("is-fav");
    if (currentView === "fav") renderGames();
    return;
  }

  const cardTarget = e.target.closest(".game-name-card");
  if (cardTarget && cardTarget.dataset.id) {
    openDetail(Number(cardTarget.dataset.id));
  }
});

// تفويض نقر الألعاب المشابهة داخل التفاصيل
if (suggestedList) {
  suggestedList.addEventListener("click", function (e) {
    const sugCard = e.target.closest(".suggested-card");
    if (sugCard && sugCard.dataset.suggestId) {
      openDetail(Number(sugCard.dataset.suggestId));
    }
  });
}

navButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const view = btn.dataset.view;
    if (view === "about") {
      navButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      currentView = "about";
      openAbout();
      return;
    }

    navButtons.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    currentView = view;
    saveSettings();
    renderGames();
  });
});

sortChips.forEach(function (chip) {
  chip.addEventListener("click", function () {
    sortChips.forEach(function (c) { c.classList.remove("active"); });
    chip.classList.add("active");
    currentSort = chip.dataset.sort;
    saveSettings();
    renderGames();
  });
});

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
  saveSettings();
});

if (openAboutBtn) {
  openAboutBtn.addEventListener("click", openAbout);
}

if (aboutClose) {
  aboutClose.addEventListener("click", closeAbout);
}

if (aboutOverlay) {
  aboutOverlay.addEventListener("click", function (e) {
    if (e.target === aboutOverlay) closeAbout();
  });
}

detailClose.addEventListener("click", closeDetail);

overlay.addEventListener("click", function (e) {
  if (e.target === overlay) closeDetail();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (overlay.classList.contains("open")) {
      closeDetail();
    } else if (aboutOverlay && aboutOverlay.classList.contains("open")) {
      closeAbout();
    }
  }
});

favBtn.addEventListener("click", function () {
  if (currentGameId === null) return;
  toggleFavorite(currentGameId);
  const nowFav = isFavorite(currentGameId);
  favBtn.classList.toggle("is-fav", nowFav);

  const cardFav = grid.querySelector('.card-fav-btn[data-fav-id="' + currentGameId + '"]');
  if (cardFav) {
    cardFav.classList.toggle("is-fav", nowFav);
  }

  if (currentView === "fav") renderGames();
});

// ==========================================
// التشغيل
// ==========================================
restoreSettings();
applyLastUpdate();
renderGames();

// ==========================================
// SERIOUS GAMER — المنطق الكامل
// ==========================================

// العناصر
const grid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const themeBtn = document.getElementById("themeBtn");
const navButtons = document.querySelectorAll(".nav-btn");
const sortChips = document.querySelectorAll(".sort-chip");
const resultsCount = document.getElementById("resultsCount");

// عناصر التفاصيل
const overlay = document.getElementById("detailOverlay");
const detailCover = document.getElementById("detailCover");
const detailMonogram = document.getElementById("detailMonogram");
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

// الحالة
let currentView = "all";
let searchQuery = "";
let currentSort = "newest";
let currentGameId = null;

// ==========================================
// المفضلة
// ==========================================

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("sg_favs") || "[]");
  } catch (e) {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem("sg_favs", JSON.stringify(list));
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
// أدوات
// ==========================================

const STATUS_LABELS = {
  playing: "قيد اللعب",
  done: "مكتمل",
  dropped: "متروك"
};

const SENTIMENT_LABELS = {
  positive: "إيجابي",
  negative: "سلبي"
};

function formatDate(dateStr) {
  const parts = dateStr.split("-");
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}

function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
}

// لون عشوائي ثابت لكل اسم (لتوليد ألوان avatars)
function nameToColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 60%, 50%)`;
}

function initials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return parts[0].charAt(0) + parts[1].charAt(0);
  }
  return name.charAt(0);
}

// ==========================================
// بناء بطاقة اللعبة
// ==========================================

function createGameCard(game) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.dataset.id = game.id;

  // الغلاف
  const cover = document.createElement("div");
  cover.className = `game-cover pattern-${game.cover.pattern}`;
  cover.style.background = `linear-gradient(135deg, ${game.cover.colorA}, ${game.cover.colorB})`;

  // شارة الحالة
  const statusBadge = document.createElement("span");
  statusBadge.className = "cover-status " + game.status;
  statusBadge.textContent = STATUS_LABELS[game.status];
  cover.appendChild(statusBadge);

  // الرسم
  const art = document.createElement("div");
  art.className = "cover-art";
  art.innerHTML = game.cover.art;
  cover.appendChild(art);

  // زر المفضلة
  const favBtnCard = document.createElement("button");
  favBtnCard.className = "card-fav-btn" + (isFavorite(game.id) ? " is-fav" : "");
  favBtnCard.innerHTML = '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4.5 4.5 8.5C19 16.65 12 21 12 21z" stroke-linejoin="round"/></svg>';
  favBtnCard.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleFavorite(game.id);
    favBtnCard.classList.toggle("is-fav");
    if (currentView === "fav") renderGames();
  });
  cover.appendChild(favBtnCard);

  // شارة التحميلات
  const dlBadge = document.createElement("span");
  dlBadge.className = "cover-downloads";
  dlBadge.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>' + formatCount(game.downloadCount);
  cover.appendChild(dlBadge);

  // معلومات
  const info = document.createElement("div");
  info.className = "game-info";

  const title = document.createElement("div");
  title.className = "game-title";
  title.textContent = game.title;

  const meta = document.createElement("div");
  meta.className = "game-meta";

  const developer = document.createElement("span");
  developer.textContent = game.developer;

  const rating = document.createElement("span");
  rating.className = "game-rating";
  rating.textContent = "★ " + game.rating;

  meta.appendChild(developer);
  meta.appendChild(rating);
  info.appendChild(title);
  info.appendChild(meta);

  card.appendChild(cover);
  card.appendChild(info);

  card.addEventListener("click", function () {
    openDetail(game.id);
  });

  return card;
}

// ==========================================
// الفلترة والترتيب
// ==========================================

function getFilteredGames() {
  let list = games.filter(function (game) {
    if (currentView === "playing" && game.status !== "playing") return false;
    if (currentView === "done" && game.status !== "done") return false;
    if (currentView === "fav" && !isFavorite(game.id)) return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const inTitle = game.title.toLowerCase().includes(q);
      const inTitleAr = game.titleAr.includes(searchQuery);
      const inGenre = game.genre.toLowerCase().includes(q);
      const inDeveloper = game.developer.toLowerCase().includes(q);
      if (!inTitle && !inTitleAr && !inGenre && !inDeveloper) return false;
    }

    return true;
  });

  if (currentSort === "newest") {
    list.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
  } else if (currentSort === "rating") {
    list.sort(function (a, b) { return b.rating - a.rating; });
  } else if (currentSort === "downloads") {
    list.sort(function (a, b) { return b.downloadCount - a.downloadCount; });
  } else if (currentSort === "title") {
    list.sort(function (a, b) { return a.title.localeCompare(b.title); });
  }

  return list;
}

// ==========================================
// عرض الشبكة
// ==========================================

function renderGames() {
  grid.innerHTML = "";
  const filtered = getFilteredGames();

  // تحديث عدّاد النتائج
  resultsCount.innerHTML = "عدد الألعاب: <strong>" + filtered.length + "</strong>";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-msg";
    empty.textContent = "لا توجد ألعاب مطابقة.";
    grid.appendChild(empty);
    return;
  }

  filtered.forEach(function (game, index) {
    const card = createGameCard(game);
    card.style.animationDelay = (index * 0.04) + "s";
    grid.appendChild(card);
  });
}

// ==========================================
// روابط التحميل
// ==========================================

function renderDownloads(game) {
  downloadsWrap.innerHTML = "";

  const title = document.createElement("h3");
  title.className = "downloads-title";
  title.textContent = "روابط التحميل";
  downloadsWrap.appendChild(title);

  if (!game.downloads || game.downloads.length === 0) {
    const empty = document.createElement("p");
    empty.className = "downloads-empty";
    empty.textContent = "لا توجد روابط متاحة حالياً.";
    downloadsWrap.appendChild(empty);
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
    dot.className = "source-dot " + dl.source;

    const label = document.createElement("span");
    label.textContent = dl.name;

    left.appendChild(dot);
    left.appendChild(label);

    const ext = document.createElement("span");
    ext.className = "ext-icon";
    ext.textContent = "↗";

    a.appendChild(left);
    a.appendChild(ext);
    downloadsWrap.appendChild(a);
  });
}

// ==========================================
// التعليقات
// ==========================================

function renderComments(game) {
  commentsList.innerHTML = "";

  if (!game.comments || game.comments.length === 0) {
    const empty = document.createElement("p");
    empty.className = "downloads-empty";
    empty.textContent = "لا توجد تعليقات بعد.";
    commentsList.appendChild(empty);
    return;
  }

  game.comments.forEach(function (c) {
    const comment = document.createElement("div");
    comment.className = "comment";

    // الرأس
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
    let starStr = "";
    for (let i = 0; i < 5; i++) {
      starStr += i < c.rating ? "★" : "☆";
    }
    stars.textContent = starStr;
    stars.style.color = "#fbbf24";
    stars.style.fontSize = "10px";

    const sentiment = document.createElement("span");
    sentiment.className = "comment-sentiment " + c.sentiment;
    sentiment.textContent = c.sentiment === "positive" ? "👍 " : "👎 ";

    meta.appendChild(stars);
    meta.appendChild(sentiment);

    info.appendChild(name);
    info.appendChild(meta);

    head.appendChild(avatar);
    head.appendChild(info);

    // النص
    const body = document.createElement("p");
    body.className = "comment-body";

    const dialectTag = document.createElement("span");
    dialectTag.className = "dialect-tag";
    dialectTag.textContent = c.dialect;

    body.appendChild(dialectTag);
    body.appendChild(document.createTextNode(c.text));

    comment.appendChild(head);
    comment.appendChild(body);
    commentsList.appendChild(comment);
  });
}

// ==========================================
// صفحة التفاصيل
// ==========================================

function openDetail(id) {
  const game = games.find(function (g) { return g.id === id; });
  if (!game) return;

  currentGameId = id;

  detailCover.style.background = `linear-gradient(135deg, ${game.cover.colorA}, ${game.cover.colorB})`;

  // الرسم
  if (detailMonogram) detailMonogram.style.display = "none";
  const oldArt = detailCover.querySelector('.cover-art');
  if (oldArt) oldArt.remove();

  const art = document.createElement("div");
  art.className = "cover-art";
  art.innerHTML = game.cover.art;
  detailCover.appendChild(art);

  detailTitle.textContent = game.title;
  detailTitleAr.textContent = game.titleAr;
  detailDeveloper.textContent = game.developer;
  detailGenre.textContent = game.genre;
  detailStatus.textContent = STATUS_LABELS[game.status];
  detailStatus.className = "tag tag-status " + game.status;
  detailRating.textContent = "★ " + game.rating;
  detailDate.textContent = formatDate(game.date);
  detailNotes.textContent = game.notes;
  detailDownloads.textContent = formatCount(game.downloadCount);
  detailSize.textContent = game.size;

  renderDownloads(game);
  renderComments(game);

  favBtn.classList.toggle("is-fav", isFavorite(id));

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  currentGameId = null;
}

// ==========================================
// التفاعل
// ==========================================

searchInput.addEventListener("input", function (e) {
  searchQuery = e.target.value.trim();
  renderGames();
});

navButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    navButtons.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    currentView = btn.dataset.view;
    renderGames();
  });
});

sortChips.forEach(function (chip) {
  chip.addEventListener("click", function () {
    sortChips.forEach(function (c) { c.classList.remove("active"); });
    chip.classList.add("active");
    currentSort = chip.dataset.sort;
    renderGames();
  });
});

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
});

detailClose.addEventListener("click", closeDetail);

overlay.addEventListener("click", function (e) {
  if (e.target === overlay) closeDetail();
});

favBtn.addEventListener("click", function () {
  if (currentGameId === null) return;
  toggleFavorite(currentGameId);
  favBtn.classList.toggle("is-fav");
  const cards = document.querySelectorAll(".game-card");
  cards.forEach(function (c) {
    if (Number(c.dataset.id) === currentGameId) {
      const cb = c.querySelector(".card-fav-btn");
      if (cb) cb.classList.toggle("is-fav");
    }
  });
});

// التشغيل
renderGames();
// ==========================================
// SERIOUS GAMER — ألعاب بورت للأندرويد
// ==========================================

const games = [
  {
    id: 1,
    title: "Max Payne 2",
    titleAr: "ماكس باين 2",
    developer: "Rockstar Games",
    genre: "Third-Person Shooter",
    status: "playing",
    rating: 9.6,
    date: "2003-10-14",
    size: "92 MB",
    downloadCount: 38400,
    notes: "لعبة نوار بوليسية أسطورية. نظام Bullet Time ثوري، وقصة سينمائية لا تُنسى. نسخة البورت للأندرويد ممتازة وتعمل بسلاسة.",
    cover: {
      colorA: "#8b1a1a",
      colorB: "#1a0505",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M35 15 L35 55 Q35 85 50 85 Q65 85 65 55 L65 15 Z"/>
        <path d="M35 30 L65 30"/>
        <circle cx="50" cy="45" r="5"/>
        <path d="M20 90 L80 90"/>
      </svg>`
    },
    downloads: [
      { source: "apkpure", name: "ApkPorts", url: "https://apkports.com/game/max-payne-2-the-fall-of-max-payne-cc1885" }
    ],
    comments: [
      { name: "أحمد المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "يا جدعان دي تحفة! لعبتها زمان على البلايستيشن 2، ولقيتها للأندرويد. الـ Bullet time حاجة تانية خالص." },
      { name: "خالد العتيبي", dialect: "خليجي", sentiment: "positive", rating: 5, text: "القصة سينمائية بشكل خيالي، والجو النوار بوليسي على أصوله. من أفضل الألعاب اللي لعبتها." },
      { name: "يوسف بغدادي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أسطورة والله، ذكريات الطفولة رجعت. تشتغل تمام على الأندرويد بدون لاغ." }
    ]
  },
  {
    id: 2,
    title: "The Punisher",
    titleAr: "المعاقب",
    developer: "THQ",
    genre: "Third-Person Shooter",
    status: "done",
    rating: 8.8,
    date: "2005-01-18",
    size: "420 MB",
    downloadCount: 27600,
    notes: "لعبة عنيفة وقوية مبنية على شخصية المعاقب من مارفل. تنفيذ ممتاز لنظام القتال، وجو داكن يعكس شخصية Frank Castle تماماً.",
    cover: {
      colorA: "#4a4a4a",
      colorB: "#0a0a0a",
      pattern: "grid",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M30 20 L50 10 L70 20 L70 45 L50 55 L30 45 Z"/>
        <path d="M40 35 L50 45 L60 35"/>
        <circle cx="40" cy="30" r="2" fill="currentColor"/>
        <circle cx="60" cy="30" r="2" fill="currentColor"/>
        <path d="M50 55 L50 90"/>
        <path d="M30 90 L70 90"/>
      </svg>`
    },
    downloads: [
      { source: "other", name: "APKVision", url: "https://apkvision.org/games/the-punisher-135770/download/v1.0-apk/" }
    ],
    comments: [
      { name: "مصطفى الطرابلسي", dialect: "مغربي", sentiment: "positive", rating: 5, text: "اللعبة عنيفة كيف ما كنا كنبغيو، الـ Punisher كامل على الجوال. ممتازة بزاف." },
      { name: "عبدالله الحربي", dialect: "خليجي", sentiment: "positive", rating: 4, text: "حلوة وأجواء الظلامية فيها، بس التحكم باللمس صعب شوي في البداية." },
      { name: "علي كربلائي", dialect: "عراقي", sentiment: "negative", rating: 3, text: "حلوه بس بيها مشاكل تحكم، ويحتاج تعديل للتحكم باللمس." }
    ]
  },
  {
    id: 3,
    title: "Conflict: Global Terror",
    titleAr: "كونفليكت: الإرهاب العالمي",
    developer: "Pivotal Games",
    genre: "Tactical Shooter",
    status: "playing",
    rating: 8.5,
    date: "2005-10-04",
    size: "350 MB (APK) + ISO",
    downloadCount: 18900,
    notes: "لعبة تكتيكية جماعية ممتازة. تدير فريق من 4 جنود في مهام إرهابية حول العالم. نسخة البورت تشمل APK + ملف ISO.",
    cover: {
      colorA: "#2d5a2d",
      colorB: "#0a1a0a",
      pattern: "grid",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 40 L50 25 L80 40 L80 55 L50 70 L20 55 Z"/>
        <circle cx="50" cy="47" r="8"/>
        <path d="M50 47 L75 47"/>
        <path d="M35 80 L65 80"/>
      </svg>`
    },
    downloads: [
      { source: "apkpure", name: "APK (v1.1)", url: "https://dl.apkvision.org/conflict-global-terror/Conflict-Global-Terror-v1.1-full-apkvision.apk" },
      { source: "other", name: "ملف ISO (البيانات)", url: "https://dl.apkvision.net/conflict-global-terror/CGT-apkvision.iso" }
    ],
    comments: [
      { name: "سارة دمشقية", dialect: "شامي", sentiment: "positive", rating: 4, text: "لعبة تكتيكية رائعة، التحكم بالفريق وخطط المهام حلوة كتير." },
      { name: "كريم الجزائري", dialect: "مغربي", sentiment: "positive", rating: 4, text: "التكتيك فيها ممتع، ولكن يلزمك وقت طويل باش تفهم النظام." },
      { name: "فهد العنزي", dialect: "خليجي", sentiment: "negative", rating: 3, text: "الرسومات قديمة طبعاً لأنها 2005، بس التكتيك نفسه حلو." }
    ]
  },
  {
    id: 4,
    title: "Black",
    titleAr: "بلاك",
    developer: "Criterion Games",
    genre: "First-Person Shooter",
    status: "done",
    rating: 9.2,
    date: "2006-02-24",
    size: "420 MB (APK) + ISO",
    downloadCount: 31200,
    notes: "أفضل FPS على PS2 في جيله. تأثيرات بصرية ثورية، أصوات أسلحة واقعية، وتدمير بيئة مذهل. البورت للأندرويد يقدم التجربة كاملة.",
    cover: {
      colorA: "#1a1a2e",
      colorB: "#000000",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="35"/>
        <circle cx="50" cy="50" r="15"/>
        <circle cx="50" cy="50" r="3" fill="currentColor"/>
        <path d="M50 15 L50 35"/>
        <path d="M50 65 L50 85"/>
        <path d="M15 50 L35 50"/>
        <path d="M65 50 L85 50"/>
      </svg>`
    },
    downloads: [
      { source: "apkpure", name: "APK (v1.4.1)", url: "https://dl.apkvision.org/black/Black-Android-v1.4.1-full-apkvision.apk" },
      { source: "other", name: "ملف ISO (البيانات)", url: "https://dl.apkvision.org/black/Black-Android-apkvision.iso" }
    ],
    comments: [
      { name: "عبدالله الحربي", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أفضل FPS على PS2 بلا منازع! الصوت والتدمير خيالي، والنسخة الأندرويد ما خذلت." },
      { name: "مريم التونسية", dialect: "مغربي", sentiment: "positive", rating: 4, text: "الجودة ممتازة، ولكن التحكم باللمس صعيب شوية في البداية." },
      { name: "أحمد الصعيدي", dialect: "مصري", sentiment: "positive", rating: 5, text: "اللعبة دي كانت ثورة وقتها. الجرافيكس والتدمير لسه أحسن من ألعاب كتير اليوم." }
    ]
  },
  {
    id: 5,
    title: "Saints Row: The Third",
    titleAr: "ساينتس رو 3",
    developer: "Volition",
    genre: "Open World Action",
    status: "playing",
    rating: 9.0,
    date: "2011-11-15",
    size: "1.8 GB",
    downloadCount: 22700,
    notes: "لعبة عالم مفتوح مجنونة وعابثة. مزيج من الأكشن والفكاهة الساخرة. البورت للأندرويد يعطيك التجربة الأصلية مع تحكم لمسي معدّل.",
    cover: {
      colorA: "#8b1a8b",
      colorB: "#2a052a",
      pattern: "dots",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M50 15 L60 35 L80 35 L65 50 L72 70 L50 58 L28 70 L35 50 L20 35 L40 35 Z"/>
        <path d="M25 85 Q50 75 75 85"/>
        <circle cx="50" cy="45" r="6"/>
      </svg>`
    },
    downloads: [
      { source: "mediafire", name: "ModsFire", url: "https://modsfire.com/qy16ugfA49VjQb1" }
    ],
    comments: [
      { name: "رنا اللبنانية", dialect: "شامي", sentiment: "positive", rating: 5, text: "اللعبة مجنونة وبتضحك كتير. حرية كاملة تعمل شو ما بدك بالمدينة." },
      { name: "سعود القحطاني", dialect: "خليجي", sentiment: "positive", rating: 4, text: "عالم مفتوح ضخم وممتع، بس الحجم كبير يحتاج جهاز قوي." },
      { name: "زينب البصراوية", dialect: "عراقي", sentiment: "negative", rating: 3, text: "حلوة بس تحتاج موبايل قوي، على موبايلي القديم صارت تعلق." }
    ]
  },
  {
    id: 6,
    title: "PES 2017",
    titleAr: "بيس 2017",
    developer: "Konami",
    genre: "Sports / Football",
    status: "done",
    rating: 9.1,
    date: "2016-09-13",
    size: "1.2 GB",
    downloadCount: 45800,
    notes: "لعبة كرة القدم الكلاسيكية. جرافيكس ممتاز، تحكم دقيق، وواقعية في اللعب. البورت للأندرويد يقدم تجربة PES الحقيقية على هاتفك.",
    cover: {
      colorA: "#1a5a1a",
      colorB: "#0a1f0a",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="35"/>
        <path d="M50 30 L65 45 L58 65 L42 65 L35 45 Z"/>
        <path d="M50 15 L50 30"/>
        <path d="M80 35 L65 45"/>
        <path d="M80 65 L58 65"/>
        <path d="M50 85 L42 65"/>
        <path d="M20 65 L35 45"/>
        <path d="M20 35 L50 15"/>
      </svg>`
    },
    downloads: [
      { source: "apkpure", name: "APK (APKVision)", url: "https://apkvision.org/games/pro-evolution-soccer-2017-135145/" },
      { source: "other", name: "ملف البيانات (ApkPorts)", url: "https://apkports.com/game/pro-evolution-soccer-2017-33a7c9" }
    ],
    comments: [
      { name: "ماجد الشمري", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أفضل لعبة كرة قدم على الجوال بلا منازع. التحكم دقيق والجرافيكس خيالي." },
      { name: "مصطفى الطرابلسي", dialect: "مغربي", sentiment: "positive", rating: 4, text: "زوينة بزاف، ولكن الأندية فيها بعضها غير مرخص." },
      { name: "حسن المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "أنا من أيام PES 2006، ودي أحسن نسخة على الموبايل. تستاهل التحميل." }
    ]
  },
  {
    id: 7,
    title: "FC 2027 Mobile Offline",
    titleAr: "إف سي 2027 موبايل أوفلاين",
    developer: "AlphaTrix Gaming",
    genre: "Sports / Football",
    status: "playing",
    rating: 9.3,
    date: "2026-09-01",
    size: "2.5 GB (APK + OBB + DATA)",
    downloadCount: 18700,
    notes: "نسخة معدّلة من FC 2027 تعمل أوفلاين بالكامل. تحتاج تثبيت APK أولاً ثم وضع ملف OBB في مجلد Android/obb وملف DATA في مجلد Android/data. اللعبة تعمل بدون إنترنت وبجرافيكس ممتاز.",
    cover: {
      colorA: "#1a6b3a",
      colorB: "#0a1f12",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="32"/>
        <path d="M50 32 L64 44 L58 62 L42 62 L36 44 Z"/>
        <path d="M50 18 L50 32"/>
        <path d="M78 38 L64 44"/>
        <path d="M78 62 L58 62"/>
        <path d="M50 82 L42 62"/>
        <path d="M22 62 L36 44"/>
        <path d="M22 38 L50 18"/>
        <path d="M30 86 L70 86"/>
      </svg>`
    },
    downloads: [
      { source: "mediafire", name: "APK (الملف الأساسي)", url: "https://www.mediafire.com/file/lvwxo5nwccxe8yr/APK+FC26%25E2%2584%25A2+ANDROID+OFFLINE+BY+ALPHATRIX+GAMING.zip/file" },
      { source: "mediafire", name: "OBB (بيانات اللعبة)", url: "https://www.mediafire.com/file/ycxkoqne89x35zh/FIFA_16_OBB_BY+ALPHATRIX+GAMING.zip/file" },
      { source: "mediafire", name: "DATA (حفظ وإصلاح)", url: "https://www.mediafire.com/file/ifzt97yn2n02yjv/FC27_FIX_SAVE_TOURNAMENT.zip/file" }
    ],
    comments: [
      { name: "أحمد المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "يا جدعان دي أحسن من النسخة الأصلية! أوفلاين وبدون نت وبجرافيكس تحفة. شغالة زي الفل." },
      { name: "خالد العتيبي", dialect: "خليجي", sentiment: "positive", rating: 4, text: "حلوة والله، بس يبي لها مساحة كبيرة وتحميل ثلاث ملفات. إذا ركبتها صح تشتغل تمام." },
      { name: "علي كربلائي", dialect: "عراقي", sentiment: "negative", rating: 3, text: "حملت الملفات بس ما اشتغلت أول مرة، لازم ترتب المجلدات زين. بعد التعديل اشتغلت." }
    ]
  },
  {
    id: 8,
    title: "Rusted Warfare (Generals Zero Hour Mod)",
    titleAr: "رستد وورفير - مود جنرالز زيرو آور",
    developer: "Corroding Games / Mod Community",
    genre: "RTS / Strategy",
    status: "playing",
    rating: 9.2,
    date: "2017-11-15",
    size: "150 MB + Mod",
    downloadCount: 28700,
    notes: "لعبة استراتيجية RTS كلاسيكية بأسلوب Command & Conquer، مع مود Generals Zero Hour الشهير الذي يضيف جيوشاً ووحدات من اللعبة الأصلية. تعمل أوفلاين وخفيفة على الأجهزة.",
    cover: {
      colorA: "#8b5a2b",
      colorB: "#2a1a08",
      pattern: "grid",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 80 L80 80"/>
        <path d="M30 80 L30 55 L50 40 L70 55 L70 80"/>
        <path d="M42 80 L42 65 L58 65 L58 80"/>
        <circle cx="50" cy="28" r="10"/>
        <path d="M50 18 L50 8"/>
      </svg>`
    },
    downloads: [
      { source: "apkpure", name: "APKVision (APK v1.15.180)", url: "https://apkvision.org/games/strategy/rusted-warfare-rts-strategy-12366/download/v1.15.180-apk/" },
      { source: "drive", name: "Google Drive (Mod - Generals Zero Hour)", url: "https://drive.google.com/file/d/1jfbKLbPYCmK51VUsUZYil6ph1SOtrJJ2/view" }
    ],
    comments: [
      { name: "مهند البصري", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أحلى لعبة RTS على الموبايل، ومود جنرالز رجّعني لأيام الكمبيوتر. تحكم سلس وبدون نت." },
      { name: "أيمن جابري", dialect: "مصري", sentiment: "positive", rating: 5, text: "مود جنرالز زيرو آور ناقصها بس multiplayer أونلاين، غير كده اللعبة تحفة فنية." },
      { name: "سامي المعلمي", dialect: "مغربي", sentiment: "negative", rating: 3, text: "اللعبة زوينة ولكن تركيب المود صعيب شوية على المبتدئين، خاصك تتبع الشرح مزيان." }
    ]
  },
  {
    id: 9,
    title: "Plants vs Zombies Fusion (Mod)",
    titleAr: "بلانتس ضد زومبي فيوجن - مود",
    developer: "EA / Fan Mod (Fusion)",
    genre: "Tower Defense",
    status: "playing",
    rating: 9.0,
    date: "2024-03-01",
    size: "400 MB",
    downloadCount: 41200,
    notes: "نسخة معدّلة (Fusion) من PvZ تجمع نباتات من كل الأجزاء مع ميكانيكا دمج (Fusion) جديدة تسمح بتركيب نباتات هجينة قوية. محتوى ضخم ومستويات إضافية.",
    cover: {
      colorA: "#4caf50",
      colorB: "#0d2b0f",
      pattern: "dots",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M50 85 L50 50"/>
        <path d="M50 50 Q28 48 26 26 Q48 24 50 50 Z"/>
        <path d="M50 50 Q72 48 74 26 Q52 24 50 50 Z"/>
        <circle cx="50" cy="50" r="6" fill="currentColor"/>
        <path d="M40 85 L60 85"/>
      </svg>`
    },
    downloads: [
      { source: "other", name: "PVZ Fusion (APK)", url: "https://pvzfusion.io/pvz-fusion-apk-download" }
    ],
    comments: [
      { name: "حمزة الجزائري", dialect: "مغربي", sentiment: "positive", rating: 5, text: "الـ Fusion هذا إبداع! تدمج نباتين ويطلع لك نبات خارق. أحسن مود لـ PvZ بلا منازع." },
      { name: "منى المصرية", dialect: "مصري", sentiment: "positive", rating: 4, text: "حلوة جداً وبتفكرني باللعبة الأصلية، بس بعض المستويات صعبة أوي محتاجة مجهود." },
      { name: "عبدالرحمن الشامي", dialect: "شامي", sentiment: "negative", rating: 3, text: "كتير حلوة بس المود بياخد وقت طويل لتحميلو وتنصيبو، ومو كل الأجهزة بتشغلها." }
    ]
  },
  {
    id: 10,
    title: "Balatro (Arabic)",
    titleAr: "بالاترو - النسخة العربية",
    developer: "LocalThunk",
    genre: "Roguelike / Card",
    status: "playing",
    rating: 9.5,
    date: "2024-02-20",
    size: "200 MB",
    downloadCount: 38600,
    notes: "لعبة بطاقات روج-لايك إدمانية تعتمد على تكوين أيدي بوكر لتدمير الخصوم. النسخة العربية مترجمة بالكامل، جربتها وممتعة جداً.",
    cover: {
      colorA: "#dc2626",
      colorB: "#1a0606",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="22" y="18" width="40" height="56" rx="4"/>
        <rect x="38" y="26" width="40" height="56" rx="4"/>
        <path d="M58 50 L58 62 M52 56 L64 56"/>
      </svg>`
    },
    downloads: [
      { source: "other", name: "ETRDream (نسخة عربية)", url: "https://etrdream.com/game/balatro/" }
    ],
    comments: [
      { name: "يوسف الحلبي", dialect: "شامي", sentiment: "positive", rating: 5, text: "لعبة إدمان بشكل مو طبيعي! كل جولة بدك ترجع تلعب. الترجمة العربية ممتازة كمان." },
      { name: "خالد المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "أحلى لعبة بطاقات لعبتها في حياتي. فكرة الجوكرز والدمج عبقرية. ما فيش أحسن منها للتسلية." },
      { name: "فاطمة المغربية", dialect: "مغربي", sentiment: "neutral", rating: 4, text: "زوينة بزاف ولكن صعيبة شوية على اللي مابيعرفوش البوكر. خاصك تتعلم القواعد قبل." }
    ]
  },
  {
    id: 11,
    title: "Stick War: Legacy",
    titleAr: "ستيك وور: ليجاسي",
    developer: "Max Games Studios",
    genre: "Strategy / RTS",
    status: "playing",
    rating: 8.9,
    date: "2016-11-17",
    size: "90 MB",
    downloadCount: 42500,
    notes: "لعبة استراتيجية حربية بأسلوب الرسوم العصوية (Stickman). تبني جيشك، تجمع الذهب، وتدير معارك ضد قبائل الأعداء. النسخة المعدّلة تمنحك ذهباً وأحجاراً كريمة غير محدودة.",
    cover: {
      colorA: "#d97706",
      colorB: "#2a1a05",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="20" r="8"/>
        <path d="M50 28 L50 55"/>
        <path d="M50 35 L30 45"/>
        <path d="M50 35 L70 45"/>
        <path d="M50 55 L35 80"/>
        <path d="M50 55 L65 80"/>
        <path d="M70 45 L80 30"/>
        <path d="M80 30 L88 24"/>
      </svg>`
    },
    downloads: [
      { source: "other", name: "Google Play (النسخة الأصلية)", url: "https://play.google.com/store/apps/details?id=com.maxgames.stickwarlegacy" },
      { source: "other", name: "AN1 (نسخة معدّلة - Mod APK)", url: "https://an1.com/3381-stick-war-legacy-mod-apk-free.html" }
    ],
    comments: [
      { name: "أحمد المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "لعبة استراتيجية تحفة! فكرة الجيش العصوي بسيطة بس عميقة في التكتيك. النسخة المعدلة بتخليك تستمتع من غير انتظار." },
      { name: "خالد العتيبي", dialect: "خليجي", sentiment: "positive", rating: 4, text: "حلوة والله، أحسن شي فيها إنها خفيفة على الجوال وماتاخذ مساحة. بس ياليت المستويات أكثر." },
      { name: "مريم التونسية", dialect: "مغربي", sentiment: "negative", rating: 3, text: "اللعبة زوينة ولكن كتحس بالتكرار بعد مدة، كل المستويات كتشبه لبعضها." }
    ]
  },
  {
    id: 12,
    title: "Serious Sam: The Second Encounter",
    titleAr: "سيريوس سام: اللقاء الثاني",
    developer: "Croteam",
    genre: "First-Person Shooter",
    status: "playing",
    rating: 9.3,
    date: "2002-02-05",
    size: "450 MB",
    downloadCount: 19400,
    notes: "لعبة تصويب أسطورية بإيقاع جنوني. موجات لا تنتهي من الأعداء، أسلحة فتاكة، وأجواء أكشن خالص. نسخة البورت للأندرويد تقدم التجربة كاملة مع تحكم لمسي معدّل.",
    cover: {
      colorA: "#c2410c",
      colorB: "#2a0d03",
      pattern: "grid",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="30"/>
        <circle cx="50" cy="50" r="10"/>
        <path d="M50 20 L50 40"/>
        <path d="M50 60 L50 80"/>
        <path d="M20 50 L40 50"/>
        <path d="M60 50 L80 50"/>
        <circle cx="50" cy="50" r="3" fill="currentColor"/>
      </svg>`
    },
    downloads: [
      { source: "other", name: "AndroidApplications (APK)", url: "https://androidapplications.store/games/15647-serious-sam-the-second-encounter.html" }
    ],
    comments: [
      { name: "عبدالله الحربي", dialect: "خليجي", sentiment: "positive", rating: 5, text: "سيريوس سام أسطورة! أكشن بلا توقف وقتال مجنون. تحس إنك بطل حقيقي وأنت تلعبها." },
      { name: "حسن المصري", dialect: "مصري", sentiment: "positive", rating: 4, text: "لعبة أكشن بمعنى الكلمة، بتحس بالإثارة في كل لحظة. بس التحكم باللمس محتاج تعود شوية." },
      { name: "كريم الجزائري", dialect: "مغربي", sentiment: "negative", rating: 3, text: "اللعبة زوينة ولكن الرسومات قديمة شوية، وصعيب الواحد يتعود على التحكم." }
    ]
  },
  {
    id: 13,
    title: "Crazy Taxi Classic",
    titleAr: "كريزي تاكسي كلاسيك",
    developer: "SEGA",
    genre: "Racing / Arcade",
    status: "done",
    rating: 8.7,
    date: "2013-07-10",
    size: "150 MB",
    downloadCount: 25800,
    notes: "لعبة سباق تاكسي كلاسيكية من SEGA. توصيل الركاب بأسرع وقت مع حركات مجنونة وموسيقى الروك الأصلية. تجربة أركيد خالصة لا تفوت.",
    cover: {
      colorA: "#facc15",
      colorB: "#3a2a02",
      pattern: "dots",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 65 L15 55 Q15 48 22 48 L32 48 L40 32 L70 32 L78 48 L85 48 Q90 48 90 55 L90 65"/>
        <path d="M15 65 L90 65"/>
        <circle cx="30" cy="72" r="6"/>
        <circle cx="75" cy="72" r="6"/>
        <path d="M40 42 L50 42"/>
        <path d="M55 42 L65 42"/>
        <rect x="42" y="18" width="16" height="8" rx="2"/>
      </svg>`
    },
    downloads: [
      { source: "apkpure", name: "APKVision (APK v5.1)", url: "https://apkvision.org/games/racing/crazy-taxi-classic-9751/download/v5.1-apk/" }
    ],
    comments: [
      { name: "سعود القحطاني", dialect: "خليجي", sentiment: "positive", rating: 5, text: "لعبة الأركيد الأسطورية رجعت! ذكريات أيام السيجا. الموسيقى والسرعة تحس إنك في الأركيد فعلاً." },
      { name: "رنا اللبنانية", dialect: "شامي", sentiment: "positive", rating: 4, text: "كتير حلوة ومسلية، بتسترجع أيام زمان مع السيجا. تحدي السرعة والحركات ممتع." },
      { name: "أحمد الصعيدي", dialect: "مصري", sentiment: "negative", rating: 3, text: "اللعبة حلوة بس ناقصها بعض الأغاني الأصلية اللي كانت في النسخة الأولى. غير كده ممتازة." }
    ]
  },
  {
    id: 14,
    title: "صراع الرؤساء",
    titleAr: "صراع الرؤساء",
    developer: "Unknown",
    genre: "Fighting / Casual",
    status: "playing",
    rating: 8.4,
    date: "2023-05-15",
    size: "80 MB",
    downloadCount: 22800,
    notes: "لعبة قتال خفيفة ومسلية بشخصيات رؤساء. تحكم بسيط وأسلوب مرح. مثالية للتسلية السريعة في جلسات قصيرة.",
    cover: {
      colorA: "#b91c1c",
      colorB: "#1a0505",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="30" r="15"/>
        <path d="M50 45 L50 75"/>
        <path d="M50 55 L30 45"/>
        <path d="M50 55 L70 45"/>
        <path d="M50 75 L35 90"/>
        <path d="M50 75 L65 90"/>
        <path d="M38 22 L42 22"/>
        <path d="M58 22 L62 22"/>
      </svg>`
    },
    downloads: [
      { source: "other", name: "Google Play", url: "https://play.google.com/store/apps/details?id=president.kombat.fighting" }
    ],
    comments: [
      { name: "يوسف بغدادي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "لعبة مسلية وخفيفة، تصلح للتسلية السريعة. فكرة رؤساء يتقاتلون تحشيش مضبوط." },
      { name: "منى المصرية", dialect: "مصري", sentiment: "positive", rating: 4, text: "حلوة للتسلية، بولادي بيحبوا يلعبوها. تحكم سهل وماتاخدش مساحة." },
      { name: "فهد العنزي", dialect: "خليجي", sentiment: "negative", rating: 3, text: "حلوة كبداية بس تحتاج تطوير، الشخصيات قليلة والمستويات محدودة." }
    ]
  },
  {
    id: 15,
    title: "Gunship Battle",
    titleAr: "غانشيب باتل",
    developer: "JOYCITY Corp.",
    genre: "Action / Helicopter Combat",
    status: "playing",
    rating: 8.8,
    date: "2014-11-01",
    size: "650 MB",
    downloadCount: 34700,
    notes: "لعبة قتال مروحيات بجرافيكس ثلاثي الأبعاد ممتاز. قُد مروحيتك في مهام قتالية حول العالم، طوّر أسلحتك وحسّن أداءك. من أفضل ألعاب المروحيات على الموبايل.",
    cover: {
      colorA: "#2d5016",
      colorB: "#0a1f08",
      pattern: "grid",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 40 L80 40"/>
        <path d="M50 40 L50 30"/>
        <ellipse cx="50" cy="60" rx="14" ry="10"/>
        <path d="M36 60 L20 55 L20 68 L36 68"/>
        <path d="M64 60 L78 60 L78 65 L64 65"/>
        <path d="M45 70 L45 82"/>
        <path d="M55 70 L55 82"/>
        <path d="M40 82 L60 82"/>
      </svg>`
    },
    downloads: [
      { source: "other", name: "APKAward (Mod APK)", url: "https://apkaward.com/dwmod1?pid=1775" }
    ],
    comments: [
      { name: "طارق بغدادي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أحلى لعبة مروحيات على الموبايل، الجرافيكس خيالي والمهام متنوعة. تحس إنك طيار حقيقي." },
      { name: "خالد العتيبي", dialect: "خليجي", sentiment: "positive", rating: 4, text: "قوية وعالمية، بس بعض المهام صعبة تحتاج تطوير العتاد أول." },
      { name: "زينب البصراوية", dialect: "عراقي", sentiment: "negative", rating: 3, text: "حلوة بس حجمها كبير وتحتاج جهاز زين حتى تشتغل بسلاسة." }
    ]
  },
  {
    id: 16,
    title: "CS Xtreme V6",
    titleAr: "سي إس إكستريم V6",
    developer: "Fan Mod Community",
    genre: "First-Person Shooter",
    status: "playing",
    rating: 8.6,
    date: "2023-08-10",
    size: "800 MB",
    downloadCount: 29700,
    notes: "نسخة معدّلة (Mod) من Counter-Strike للأندرويد بمحتوى إضافي وخرائط جديدة. تجربة CS كلاسيكية على الموبايل مع تحسينات وإضافات من مجتمع اللاعبين.",
    cover: {
      colorA: "#78716c",
      colorB: "#0c0a09",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="32"/>
        <circle cx="50" cy="50" r="12"/>
        <path d="M50 18 L50 38"/>
        <path d="M50 62 L50 82"/>
        <path d="M18 50 L38 50"/>
        <path d="M62 50 L82 50"/>
        <circle cx="50" cy="50" r="3" fill="currentColor"/>
        <path d="M68 32 L78 22"/>
      </svg>`
    },
    downloads: [
      { source: "drive", name: "Google Drive (CS Xtreme V6)", url: "https://drive.usercontent.google.com/download?id=1EUAQJvbuDJra2zR7vG2HmKD3QEK0Afsi&export=download" }
    ],
    comments: [
      { name: "أحمد المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "سي إس على الموبايل! نسخة معدلة بخرايط جديدة وحماس. تذكرني بأيام النت كافيه." },
      { name: "عبدالله الحربي", dialect: "خليجي", sentiment: "positive", rating: 4, text: "حلوة والله، بس التحكم باللمس صعب شوي في البداية. إذا تعودت عليها تصير ممتازة." },
      { name: "مصطفى الطرابلسي", dialect: "مغربي", sentiment: "negative", rating: 3, text: "اللعبة زوينة ولكن خاصها جهاز قوي، على الهاتف ديالي كتقطع شوية." }
    ]
  },
  {
  id: 17,
  title: "Outbound Travelling Simulator",
  titleAr: "أوتراوند - محاكي السفر",
  developer: "Blingames",
  genre: "Simulation / Building",
  status: "playing",
  rating: 8.8,
  date: "2026-05-01",
  size: "110 MB",
  downloadCount: 1400,
  notes: "محاكي سفر وتجوال هادئ في عالم مستقبلي مريح. حوّل شاحنة كهربائية بسيطة إلى منزل متكامل على عجلات، وابنِ وازرع واطبخ أثناء استكشافك عالماً مفتوحاً بلا ضغوط أو مؤقتات.",
  cover: {
    colorA: "#0d9488",
    colorB: "#042f2e",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 65 L15 50 Q15 42 22 42 L32 42 L42 30 L72 30 L80 42 L85 42 Q90 42 90 50 L90 65"/>
      <path d="M15 65 L90 65"/>
      <circle cx="30" cy="72" r="6"/>
      <circle cx="75" cy="72" r="6"/>
      <path d="M42 42 L52 42"/>
      <path d="M58 42 L68 42"/>
      <circle cx="50" cy="18" r="6"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "APKVision (APK v1.5)", url: "https://apkvision.org/games/simulation/outbound-travelling-simulator-133400/download/v1.5-apk/" }
  ],
  comments: [
    { name: "يوسف الحلبي", dialect: "شامي", sentiment: "positive", rating: 5, text: "لعبة هادية وكتير حلوة، بتحس حالك مسافر فعلاً. بناء الشاحنة وتزيينها ممتع كتير." },
    { name: "أحمد المصري", dialect: "مصري", sentiment: "positive", rating: 4, text: "فكرة حلوة وجديدة، مفيش ضغط ولا مؤقتات. بس ياريت يضيفوا محتوى أكتر." },
    { name: "فهد العنزي", dialect: "خليجي", sentiment: "negative", rating: 3, text: "حلوة بس يبي لها وقت عشان تتعود على التحكم، والمحتوى قليل شوي." }
  ]
},
{
  id: 18,
  title: "Max Payne Mobile",
  titleAr: "ماكس باين موبايل",
  developer: "Rockstar Games",
  genre: "Third-Person Shooter",
  status: "playing",
  rating: 9.4,
  date: "2012-06-13",
  size: "1.36 GB",
  downloadCount: 762400,
  notes: "الجزء الأول من سلسلة النوار البوليسية الأسطورية. نظام Bullet Time الشهير، قصة سينمائية، وأسلوب لعب كلاسيكي. نسخة الأندرويد من Rockstar Games لكنها تعاني من مشاكل توافق مع بعض الأجهزة الحديثة.",
  cover: {
    colorA: "#6b21a8",
    colorB: "#1a052a",
    pattern: "lines",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M35 15 L35 55 Q35 85 50 85 Q65 85 65 55 L65 15 Z"/>
      <path d="M35 30 L65 30"/>
      <circle cx="50" cy="45" r="5"/>
      <path d="M20 90 L80 90"/>
      <path d="M25 22 L15 12"/>
      <path d="M75 22 L85 12"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "APKVision (APK v2.1.131)", url: "https://apkvision.org/games/arcade/max-payne-mobile-apk-1-52962/download/v2.1.131-apk/" }
  ],
  comments: [
    { name: "خالد العتيبي", dialect: "خليجي", sentiment: "positive", rating: 5, text: "الجزء الأول أسطورة، والـ Bullet Time ما زال أحلى شي في اللعبة. نسخة الجوال جيدة إذا اشتغلت." },
    { name: "حسن المصري", dialect: "مصري", sentiment: "positive", rating: 4, text: "اللعبة أصلها تحفة، بس للأسف بتكرش على الموبايلات الجديدة. لو ظبطت معاك هتستمتع جداً." },
    { name: "علي كربلائي", dialect: "عراقي", sentiment: "negative", rating: 3, text: "اللعبة حلوة بس ما تشتغل على تلفوني الجديد، لازم تحديثات من المطور." }
  ]
},
{
  id: 19,
  title: "Smurfs' Village",
  titleAr: "قرية السنافر",
  developer: "Garden City Games (سابقاً Capcom)",
  genre: "Simulation / City Building",
  status: "done",
  rating: 8.2,
  date: "2010-11-10",
  size: "1.65 GB (APK + OBB)",
  downloadCount: 10000000,
  notes: "لعبة بناء ومدن مبنية على مسلسل السنافر الشهير. ابنِ قريتك، ازرع المحاصيل، وازرع الأزهار، وأعد بناء منازل السنافر بعد هجوم شرير. تحتاج تحميل APK + ملف OBB ووضعه في المسار الصحيح.",
  cover: {
    colorA: "#2563eb",
    colorB: "#0a1a4d",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="35" r="18"/>
      <path d="M50 53 L50 80"/>
      <path d="M50 60 L30 50"/>
      <path d="M50 60 L70 50"/>
      <path d="M50 80 L35 92"/>
      <path d="M50 80 L65 92"/>
      <path d="M35 25 Q50 15 65 25"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "APKVision (APK + OBB)", url: "https://apkvision.org/games/arcade/smurfs-village-11234/" }
  ],
  comments: [
    { name: "منى المصرية", dialect: "مصري", sentiment: "positive", rating: 5, text: "لعبة حلوة ومسلية، بولادي بيحبوا السنافر جداً. بناء القرية والزراعة ممتعين." },
    { name: "رنا اللبنانية", dialect: "شامي", sentiment: "positive", rating: 4, text: "كتير حلوة وبتفكرني بطفولتي مع السنافر. بس بدها صبر لأنها بطيئة شوي." },
    { name: "سعود القحطاني", dialect: "خليجي", sentiment: "negative", rating: 3, text: "حلوة بس الحجم كبير واللعبة تصير بطيئة مع التقدم. يبي لها جهاز قوي." }
  ]
},
{
  id: 20,
  title: "Winning Eleven 2026 (WE 26)",
  titleAr: "وينينغ إليفن 2026",
  developer: "Konami / Mod Community",
  genre: "Sports / Football",
  status: "playing",
  rating: 8.9,
  date: "2026-07-01",
  size: "270 MB (APK) + محاكي ePSXe",
  downloadCount: 18500,
  notes: "نسخة معدّلة (Mod) من Winning Eleven تعمل بمحرك WE 2012 الكلاسيكي مع انتقالات موسم 2025/2026 محدّثة وأطقم حقيقية. تعمل أوفلاين بالكامل. تحتاج محاكي ePSXe لتشغيل ملف اللعبة.",
  cover: {
    colorA: "#15803d",
    colorB: "#052e16",
    pattern: "grid",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="32"/>
      <path d="M50 30 L65 42 L58 62 L42 62 L35 42 Z"/>
      <path d="M50 18 L50 30"/>
      <path d="M78 38 L65 42"/>
      <path d="M78 62 L58 62"/>
      <path d="M50 82 L42 62"/>
      <path d="M22 62 L35 42"/>
      <path d="M22 38 L50 18"/>
      <path d="M30 86 L70 86"/>
    </svg>`
  },
  downloads: [
    { source: "drive", name: "Google Drive (ملف اللعبة)", url: "https://drive.google.com/file/d/1STOEDSV4LdUgpOUD6PZTwMlm0nax8_L7/view" },
    { source: "other", name: "AN1 (محاكي ePSXe)", url: "https://an1.com/4140-epsxe-for-android.html" }
  ],
  comments: [
    { name: "ماجد الشمري", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أحلى شي إنها أوفلاين وبحجم صغير، والانتقالات محدثة. تحس إنك تلعب WE زمان على البلايستيشن." },
    { name: "مصطفى الطرابلسي", dialect: "مغربي", sentiment: "positive", rating: 4, text: "زوينة بزاف وخفیفة، ولكن خاصك محاكي ePSXe باش تشغلها. بعد التركيب كتخدم مزيان." },
    { name: "كريم الجزائري", dialect: "مغربي", sentiment: "negative", rating: 3, text: "الرسومات قديمة (PS2 style) والتحكم صعيب شوية، بس لللي كيبغي النوستالجيا راهي مليحة." }
  ]
},
{
  id: 21,
  title: "GTA: Vice City",
  titleAr: "جي تي إيه: فايس سيتي",
  developer: "Rockstar Games",
  genre: "Open World Action",
  status: "playing",
  rating: 9.5,
  date: "2012-12-06",
  size: "1.5 GB",
  downloadCount: 68400,
  notes: "أسطورة العالم المفتوح في الثمانينيات! مدينة فايس سيتي بأجوائها الاستوائية وموسيقاها الرائعة، وقصة تومي فيرسيتي في عالم الجريمة. نسخة الأندرويد الأصلية من Rockstar تعمل بسلاسة وتقدم التجربة كاملة على الهاتف.",
  cover: {
    colorA: "#ec4899",
    colorB: "#1a0514",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 65 L15 55 Q15 48 22 48 L32 48 L42 32 L72 32 L80 48 L85 48 Q90 48 90 55 L90 65"/>
      <path d="M15 65 L90 65"/>
      <circle cx="30" cy="72" r="6"/>
      <circle cx="75" cy="72" r="6"/>
      <path d="M42 42 L52 42"/>
      <path d="M58 42 L68 42"/>
      <circle cx="50" cy="18" r="8"/>
    </svg>`
  },
  downloads: [
    { source: "apkpure", name: "APKVision (APK v1.12)", url: "https://apkvision.org/games/action/grand-theft-auto-vice-city-apk-2820/" }
  ],
  comments: [
    { name: "أحمد المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "يا جدعان دي تحفة! فايس سيتي والموسيقى والأجواء، تحس إنك عايش في التمانينات فعلاً. شغالة زي الفل على الأندرويد." },
    { name: "خالد العتيبي", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أفضل لعبة GTA من ناحية الجو والموسيقى. المهمات ممتعة والسيارة والمطاردة ما لها حل. نسخة روكستار تستاهل." },
    { name: "يوسف الحلبي", dialect: "شامي", sentiment: "positive", rating: 4, text: "كتير حلوة والذكريات رجعت، بس التحكم باللمس بدو شوية تعود. غير هيك اللعبة أسطورة." }
  ]
},
{
  id: 22,
  title: "GTA: Vice City Definitive Edition",
  titleAr: "جي تي إيه: فايس سيتي - النسخة المعادة",
  developer: "Rockstar Games / Grove Street Games",
  genre: "Open World Action",
  status: "playing",
  rating: 8.3,
  date: "2023-12-14",
  size: "3 GB",
  downloadCount: 42300,
  notes: "النسخة المعادة (Definitive) من فايس سيتي بجرافيكس محدّث وإضاءة جديدة وتحكم محسّن. القصة والمهام نفسها، لكن الأداء على بعض الأجهزة يحتاج تعديل جرافيكس. تجربة مثيرة لمن يريد نسخة أحدث بصرياً.",
  cover: {
    colorA: "#f472b6",
    colorB: "#3a0a24",
    pattern: "lines",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 65 L15 55 Q15 48 22 48 L32 48 L42 32 L72 32 L80 48 L85 48 Q90 48 90 55 L90 65"/>
      <path d="M15 65 L90 65"/>
      <circle cx="30" cy="72" r="6"/>
      <circle cx="75" cy="72" r="6"/>
      <path d="M42 42 L52 42"/>
      <path d="M58 42 L68 42"/>
      <path d="M75 12 L77 18 L83 20 L77 22 L75 28 L73 22 L67 20 L73 18 Z"/>
    </svg>`
  },
  downloads: [
    { source: "apkpure", name: "APKVision (APK v1.0)", url: "https://apkvision.org/games/action/gta-vice-city-definitive-115249/" }
  ],
  comments: [
    { name: "أحمد الصعيدي", dialect: "مصري", sentiment: "positive", rating: 4, text: "الجرافيكس أحلى من الأصلية بكتير، والمهام نفسها حلوة. بس محتاجة موبايل قوي شوية عشان تشتغل بسلاسة." },
    { name: "سعود القحطاني", dialect: "خليجي", sentiment: "negative", rating: 3, text: "النسخة الأصلية أحسن منها بصراحة. النسخة دي فيها مشاكل أداء وبعض الأخطاء، يبي لها تحديثات." },
    { name: "كريم الجزائري", dialect: "مغربي", sentiment: "positive", rating: 4, text: "النسخة المعادة زوينة والتحكم تحسّن بزاف، ولكن خاصك جهاز قوي باش تخدم مزيان." }
  ]
},
{
  id: 23,
  title: "Undertale (Arabic)",
  titleAr: "أندرتيل - النسخة العربية",
  developer: "Toby Fox / Arabic Translation Community",
  genre: "RPG / Adventure",
  status: "playing",
  rating: 9.7,
  date: "2018-09-15",
  size: "200 MB",
  downloadCount: 51800,
  notes: "تحفة فنية RPG بلا منازع. اختياراتك تلعب دوراً في القصة، ونظام المعارك يعتمد على الرحمة أو القتال. النسخة العربية مترجمة بالكامل وتقدم تجربة كاملة. لعبة لازم تجربها مرة واحدة على الأقل في حياتك.",
  cover: {
    colorA: "#dc2626",
    colorB: "#1a0606",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M50 78 L30 58 Q22 50 22 40 Q22 28 34 28 Q44 28 50 38 Q56 28 66 28 Q78 28 78 40 Q78 50 70 58 Z"/>
      <path d="M40 42 L44 42"/>
      <path d="M56 42 L60 42"/>
    </svg>`
  },
  downloads: [
    { source: "mediafire", name: "MediaFire (APK عربي)", url: "https://www.mediafire.com/download/hl9q7exqfltpo5f" }
  ],
  comments: [
    { name: "يوسف الحلبي", dialect: "شامي", sentiment: "positive", rating: 5, text: "لعبة ما بتتنسي، القصة عميقة والشخصيات بتعلق بقلبك. الترجمة العربية ممتازة وسهّلت الفهم كتير." },
    { name: "منى المصرية", dialect: "مصري", sentiment: "positive", rating: 5, text: "أحلى لعبة اندي جربتها، اختياراتك في القصة بتفرق فعلاً. لو مش لاعبتها لازم تجربها على طول." },
    { name: "فهد العنزي", dialect: "خليجي", sentiment: "neutral", rating: 4, text: "حلوة والفكرة مبتكرة، بس نظام المعارك بالقلب يحتاج وقت للتعود. الترجمة ساعدتني أفهم القصة زين." }
  ]
},
{
  id: 24,
  title: "Dead Wasteland Survival",
  titleAr: "دِد وَيستلاند - البقاء",
  developer: "Just For Fun Games",
  genre: "Survival / Action",
  status: "done",
  rating: 8.3,
  date: "2023-06-10",
  size: "500 MB",
  downloadCount: 23400,
  notes: "لعبة بقاء في عالم ما بعد الكارثة. اجمع الموارد، اصنع أدواتك، وابنِ ملجأك، وقاتل الزومبي والأعداء. أسلوبها بسيط وممتع، وتصلح للجلسات القصيرة والطويلة على حد سواء.",
  cover: {
    colorA: "#92400e",
    colorB: "#1a0e05",
    pattern: "grid",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M30 30 Q30 15 50 15 Q70 15 70 30 L70 42 Q70 58 50 70 Q30 58 30 42 Z"/>
      <circle cx="40" cy="38" r="4" fill="currentColor"/>
      <circle cx="60" cy="38" r="4" fill="currentColor"/>
      <path d="M42 52 L50 58 L58 52"/>
      <path d="M45 70 L45 85"/>
      <path d="M55 70 L55 85"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "Google Play (النسخة الرسمية)", url: "https://play.google.com/store/apps/details?id=com.JustForFunGames.Wasteland" }
  ],
  comments: [
    { name: "طارق بغدادي", dialect: "عراقي", sentiment: "positive", rating: 4, text: "لعبة بقاء حلوة ومسلية، بناء الملجأ وصناعة الأدوات ممتعين. تصلح للتسلية بالجلسات القصيرة." },
    { name: "حسن المصري", dialect: "مصري", sentiment: "positive", rating: 4, text: "أسلوبها بسيط وممتع، والزومبي والأعداء بيخلوا اللعبة مشوقة. بس ياريت الخرايط أكتر شوية." },
    { name: "عبدالله الحربي", dialect: "خليجي", sentiment: "negative", rating: 3, text: "حلوة كبداية بس فيها تكرار شوي وتحتاج محتوى إضافي وتحديثات، ومع الوقت تحس بالرتابة." }
  ]
},
{
  id: 25,
  title: "Kingdom Two Crowns",
  titleAr: "كينغدم تو كراونز",
  developer: "Raw Fury / Noio",
  genre: "Strategy / Simulation",
  status: "playing",
  rating: 9.0,
  date: "2020-11-11",
  size: "500 MB",
  downloadCount: 28900,
  notes: "لعبة استراتيجية بأسلوب فني بسيط وعميق. ابنِ مملكتك، اجمع الذهب، درّب جنودك، وصد موجات الأعداء ليلاً. جمالها في بساطتها. تعمل بشكل ممتاز على الأندرويد وتقدم تجربة ممتعة وهادئة.",
  cover: {
    colorA: "#d97706",
    colorB: "#2a1a05",
    pattern: "lines",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M25 70 L30 40 L40 55 L50 35 L60 55 L70 40 L75 70 Z"/>
      <path d="M25 70 L75 70"/>
      <path d="M35 78 L65 78"/>
      <circle cx="50" cy="30" r="3" fill="currentColor"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "LiteAPKs (APK)", url: "https://liteapks.com/kingdom-two-crowns.html" }
  ],
  comments: [
    { name: "رنا اللبنانية", dialect: "شامي", sentiment: "positive", rating: 5, text: "لعبة بتجنن! بسيطة بالشكل وعميقة باللعب. كل يوم تكتشف إشي جديد، والليل والأعداء بحاجة تخطيط." },
    { name: "مصطفى الطرابلسي", dialect: "مغربي", sentiment: "positive", rating: 4, text: "اللعبة زوينة بزاف والستايل الفني رائع، ولكن صعيبة شوية على المبتدئين فالبداية." },
    { name: "ماجد الشمري", dialect: "خليجي", sentiment: "positive", rating: 4, text: "حلوة ومريحة، تصلح للتسلية الهادية. إدارة المملكة والدفاع عن الأسوار ممتعة." }
  ]
},
{
  id: 26,
  title: "Minecraft",
  titleAr: "ماينكرافت",
  developer: "Mojang Studios",
  genre: "Sandbox / Survival",
  status: "playing",
  rating: 9.6,
  date: "2011-11-18",
  size: "800 MB",
  downloadCount: 1520000,
  notes: "أسطورة الساندبوكس! ابنِ أي شيء تتخيله في عالم مفتوح بلا حدود. وضع البقاء يضيف الزومبي والتعدين والحِرَف، ووضع الإبداع يمنحك موارد لا نهائية. لعبة ما تحتاج تعريف.",
  cover: {
    colorA: "#16a34a",
    colorB: "#052e16",
    pattern: "grid",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M30 30 L50 20 L70 30 L70 50 L50 60 L30 50 Z"/>
      <path d="M30 50 L50 60 L50 80 L30 70 Z"/>
      <path d="M70 50 L50 60 L50 80 L70 70 Z"/>
      <path d="M40 40 L50 45 L60 40"/>
    </svg>`
  },
  downloads: [
    { source: "apkpure", name: "APKVision (APK v1.21)", url: "https://apkvision.org/games/arcade/minecraft-pe-apk-55409/" }
  ],
  comments: [
    { name: "أحمد المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "ماينكرافت مش محتاجة كلام، أنا بلعبها من سنين وما زلت أكتشف حاجات جديدة. حرية كاملة وإبداع بلا حدود." },
    { name: "خالد العتيبي", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أفضل لعبة ساندبوكس على الإطلاق. تبني وتبدع وتسوي أي شي تبي. مع الأصدقاء تصير أحلى بعد." },
    { name: "زينب البصراوية", dialect: "عراقي", sentiment: "positive", rating: 4, text: "حلوة ومسلية، ولادي يحبوها. تشتغل تمام على الأندرويد بس يبي لها جهاز زين حتى تشتغل بسلاسة." }
  ]
},
{
  id: 27,
  title: "Zombie Hunter 2",
  titleAr: "زومبي هانتر 2",
  developer: "ONEMB",
  genre: "Action / Shooter",
  status: "playing",
  rating: 8.5,
  date: "2023-03-20",
  size: "400 MB",
  downloadCount: 35600,
  notes: "لعبة تصويب ضد الزومبي بأسلوب أكشن سريع. أسلحة متنوعة، مستويات متعددة، وقتال مباشر ضد موجات الزومبي. مناسبة لمحبي ألعاب الأكشن والتحدي السريع على الموبايل.",
  cover: {
    colorA: "#b91c1c",
    colorB: "#1a0505",
    pattern: "grid",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="30"/>
      <circle cx="50" cy="50" r="8"/>
      <path d="M50 20 L50 42"/>
      <path d="M50 58 L50 80"/>
      <path d="M20 50 L42 50"/>
      <path d="M58 50 L80 50"/>
      <circle cx="50" cy="50" r="3" fill="currentColor"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "Google Play (النسخة الرسمية)", url: "https://play.google.com/store/apps/details?id=com.onemb.zombie.hunter" }
  ],
  comments: [
    { name: "فهد العنزي", dialect: "خليجي", sentiment: "positive", rating: 4, text: "أكشن سريع وحلو، وقتال الزومبي ممتع والأسلحة متنوعة. تصلح للتسلية السريعة في الاستراحة." },
    { name: "منى المصرية", dialect: "مصري", sentiment: "positive", rating: 4, text: "حلوة للتسلية وولادي بيحبوها. القتال سريع وممتع، بس بعض المستويات صعبة أوي." },
    { name: "علي كربلائي", dialect: "عراقي", sentiment: "neutral", rating: 3, text: "حلوة بس فيها تكرار شوية بالمستويات، وتحتاج تطوير بالمحتوى حتى تكون أحلى." }
  ]
},
{
  id: 28,
  title: "FIFA 16 MOD PES 19",
  titleAr: "فيفا 16 مود بيس 19",
  developer: "EA / Mod Community (Technogamer)",
  genre: "Sports / Football",
  status: "playing",
  rating: 8.8,
  date: "2024-02-15",
  size: "1.5 GB (APK + DATA + OBB)",
  downloadCount: 31200,
  notes: "نسخة معدّلة من FIFA 16 مع تحديثات PES 19 (انتقالات، أطقم، وجوه). تعمل أوفلاين بالكامل. طريقة التركيب: نصّب APK أولاً، ثم فك ضغط ملف DATA (كلمة السر: DATA PES 19 DIK YT) وضعه في مجلد Android/data، ثم ضع ملف OBB في مجلد Android/obb.",
  cover: {
    colorA: "#15803d",
    colorB: "#052e16",
    pattern: "lines",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="32"/>
      <path d="M50 30 L65 42 L58 62 L42 62 L35 42 Z"/>
      <path d="M50 18 L50 30"/>
      <path d="M78 38 L65 42"/>
      <path d="M78 62 L58 62"/>
      <path d="M50 82 L42 62"/>
      <path d="M22 62 L35 42"/>
      <path d="M22 38 L50 18"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "MEGA (APK)", url: "https://mega.nz/file/AIRGGZRZ#Gj6FmBArsWfBF8Y0CM-ZEeF6iyXMGPN25IOJnZb_j1E" },
    { source: "other", name: "MEGA (DATA - كلمة السر: DATA PES 19 DIK YT)", url: "https://mega.nz/file/8ZZHwDaA#m1kuIfhha4HeVXfOoOVA59jyBTpX5DA68fP0uaXU8G0" },
    { source: "mediafire", name: "MediaFire (OBB)", url: "https://www.mediafire.com/file/4utp434unjjf7tj/com.ea.gp.fifaworld_technogamer.in.zip/file" }
  ],
  comments: [
    { name: "كريم الجزائري", dialect: "مغربي", sentiment: "positive", rating: 5, text: "مود ممتاز! الانتقالات والأطقم محدثة واللعب أوفلاين بلا مشاكل. خاصك غير تتبع طريقة التركيب مزيان." },
    { name: "حسن المصري", dialect: "مصري", sentiment: "positive", rating: 4, text: "حلوة جداً والتحديثات واضحة، بس الملفات كبيرة والتركيب محتاج شوية صبر. بعد ما ظبطت شغالة تمام." },
    { name: "ماجد الشمري", dialect: "خليجي", sentiment: "negative", rating: 3, text: "اللعبة حلوة بس التركيب معقد شوي، خاصة كلمة السر ومكان الملفات. يبي لها شرح واضح عشان تشتغل صح." }
  ]
},
{
  id: 29,
  title: "Red Dustland Online",
  titleAr: "رد داستلاند أونلاين",
  developer: "Virtual Studio",
  genre: "Survival / Online",
  status: "playing",
  rating: 8.0,
  date: "2024-04-01",
  size: "600 MB",
  downloadCount: 17800,
  notes: "لعبة بقاء أونلاين في عالم صحراوي قاسٍ. اجمع الموارد، اصنع أدواتك، وتعاون أو تنافس مع لاعبين آخرين. تجربة بقاء اجتماعية بأسلوب بسيط وممتع.",
  cover: {
    colorA: "#dc2626",
    colorB: "#3a0a05",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="35" r="12"/>
      <path d="M50 20 L50 12"/>
      <path d="M62 22 L68 16"/>
      <path d="M38 22 L32 16"/>
      <path d="M15 70 Q50 55 85 70"/>
      <path d="M15 80 Q50 65 85 80"/>
      <path d="M25 90 Q50 78 75 90"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "Google Play (النسخة الرسمية)", url: "https://play.google.com/store/apps/details?id=com.VirtualStudio.RedDustlands" }
  ],
  comments: [
    { name: "مهند البصري", dialect: "عراقي", sentiment: "positive", rating: 4, text: "لعبة بقاء حلوة بأجواء صحراوية، واللعب مع ناس ثانيين يضيف متعة. تصلح للتسلية مع الأصدقاء." },
    { name: "سارة دمشقية", dialect: "شامي", sentiment: "positive", rating: 4, text: "فكرة حلوة وجو الصحراء مميز. البقاء وجمع الموارد ممتع، بس بدها تحديثات إضافية." },
    { name: "أحمد المصري", dialect: "مصري", sentiment: "neutral", rating: 3, text: "حلوة كفكرة بس محتاجة تطوير، والمحتوى قليل شوية. تستاهل المتابعة بعد التحديثات." }
  ]
},
{
  id: 30,
  title: "Super Fuser",
  titleAr: "سوبر فيوزر",
  developer: "Ruser Games",
  genre: "Merge / Fusion / Action",
  status: "playing",
  rating: 8.4,
  date: "2024-08-15",
  size: "150 MB",
  downloadCount: 46200,
  notes: "لعبة دمج وتطوير مخلوقات بأسلوب سريع وممتع. تدمج كائنات لتكوين نسخ أقوى، تفتح أنواع جديدة، وتخوض معارك ضد أعداء متزايدين. جرافيكس ثلاثي الأبعاد وإيقاع لعب مشوق، مناسبة للتسلية القصيرة والمتوسطة.",
  cover: {
    colorA: "#7c3aed",
    colorB: "#1a0533",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="35" cy="55" r="14"/>
      <circle cx="65" cy="55" r="14"/>
      <circle cx="50" cy="35" r="12"/>
      <path d="M50 23 L50 14"/>
      <path d="M35 55 L50 45 L65 55"/>
      <path d="M30 78 L70 78"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "Google Play (النسخة الرسمية)", url: "https://play.google.com/store/apps/details?id=com.rusergames.spiderfuser" }
  ],
  comments: [
    { name: "نادر القحطاني", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أدمنتها بسرعة! فكرة الدمج بسيطة بس فيها عمق، وكل ما تطور مخلوقاتك تحس بالإنجاز." },
    { name: "ريم الأيوبي", dialect: "شامي", sentiment: "positive", rating: 4, text: "اللعبة حلوة والجرافيكس نظيف، بس بعد شوي بتحس بالتكرار. لو يضيفوا أحداث أسبوعية بتصير أحلى." },
    { name: "محمود عبده", dialect: "مصري", sentiment: "neutral", rating: 3, text: "حلوة في أول ساعة، بعدها بتصير روتينية. محتاجة محتوى إضافي عشان تكمل." }
  ]
},
{
  id: 31,
  title: "FIFA 16 Classic (Full Career & Tournament)",
  titleAr: "فيفا 16 كلاسيك - وضع المسيرة والبطولات",
  developer: "EA / Mod Community (TechJ5 / Gunggaming)",
  genre: "Sports / Football",
  status: "playing",
  rating: 8.7,
  date: "2024-05-20",
  size: "1.4 GB (APK + DATA + OBB)",
  downloadCount: 29400,
  notes: "نسخة كلاسيكية معدّلة من FIFA 16 أوفلاين، تشمل وضع المسيرة الكامل والبطولات وكل الأطقم الأصلية. الملفات الثلاثة مضغوطة بصيغة 7z — تحتاج تطبيق مثل ZArchiver لفك الضغط. رتّب الملفات: APK تثبيت، DATA إلى Android/data، OBB إلى Android/obb.",
  cover: {
    colorA: "#0e7490",
    colorB: "#042b2e",
    pattern: "lines",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="32"/>
      <path d="M50 30 L65 42 L58 62 L42 62 L35 42 Z"/>
      <path d="M50 18 L50 30"/>
      <path d="M78 38 L65 42"/>
      <path d="M50 82 L42 62"/>
      <path d="M22 62 L35 42"/>
      <path d="M30 86 L70 86"/>
      <path d="M35 14 L50 8 L65 14"/>
    </svg>`
  },
  downloads: [
    { source: "mediafire", name: "MediaFire (APK - 7z)", url: "https://www.mediafire.com/file/jggl4ji24uje1i0/techj5gamesfifa16offline%25282%2529.7z/file" },
    { source: "mediafire", name: "MediaFire (DATA - 7z)", url: "https://www.mediafire.com/file/827t9lnxmuh3phn/FIFA_16_THEME_ORIGINAL_FULL_TURNAMEN_MODE_CAREER_MODE_YouTube_Gunggaming_15.7z/file?dkey=led2ivumhey&r=1227" },
    { source: "mediafire", name: "MediaFire (OBB - 7z)", url: "https://www.mediafire.com/file/mhaewwxd6d2ln04/FIFA-16-GABO.7z/file" }
  ],
  comments: [
    { name: "هيثم الشاوي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أحسن نسخة كلاسيك جربتها. وضع المسيرة شغال كامل والانتقالات حقيقية. بس انتبه، الملفات 7z لازم ZArchiver." },
    { name: "سناء بن حمودة", dialect: "مغربي", sentiment: "positive", rating: 4, text: "زوينة بزاف واللعب سلس، ولكن خاصك تكون دقيق فترتيب المجلدات. أنا غلطت أول مرة وأعدت من جديد." },
    { name: "راكان المطيري", dialect: "خليجي", sentiment: "negative", rating: 3, text: "اللعبة حلوة بس النصب معقد شوي ويبي له صبر. ياليت يخلون شرح واضح للخطوات بدل التخمين." }
  ]
},
{
  id: 32,
  title: "Pocket Build",
  titleAr: "بوكِت بيلد",
  developer: "MoonBear LTD",
  genre: "Sandbox / Building",
  status: "done",
  rating: 8.9,
  date: "2018-03-15",
  size: "200 MB",
  downloadCount: 125000,
  notes: "لعبة بناء ساندبوكس بسيطة وساحرة. تبني أي شيء تتخيله في عالم ثلاثي الأبعاد صغير بلا قيود شبكية أو خرائط جاهزة. آلاف العناصر المتاحة، تحكم سلس، وتجربة هادئة وممتعة لمن يحب الإبداع.",
  cover: {
    colorA: "#0d9488",
    colorB: "#042f2e",
    pattern: "grid",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M25 35 L50 22 L75 35 L75 60 L50 73 L25 60 Z"/>
      <path d="M25 35 L50 48 L75 35"/>
      <path d="M50 48 L50 73"/>
      <path d="M38 41 L50 48 L62 41"/>
      <path d="M15 82 L85 82"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "Google Play (النسخة الرسمية)", url: "https://play.google.com/store/apps/details?id=moonbear.PocketBuild" }
  ],
  comments: [
    { name: "غيث الصفدي", dialect: "شامي", sentiment: "positive", rating: 5, text: "أحلى لعبة بناء على الموبايل. أنا بنيت قلعة كاملة بلا حدود، وحسيت إني معماري. بلا نت بلا وجع راس." },
    { name: "شريف الجندي", dialect: "مصري", sentiment: "positive", rating: 4, text: "مريحة للأعصاب، بتبني على راحتك. بس ياريت يضيفوا عناصر أكثر وتفاعل أكثر مع العالم." },
    { name: "آية المالكي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "لعبة هادية وحلوة، بنيت بيها حديقة كاملة وأنا أسمع موسيقى. تنفع حق اللي يحب الإبداع والهدوء." }
  ]
},
{
  id: 33,
  title: "World Soccer Champs",
  titleAr: "وورلد سوكر تشامبس",
  developer: "Monkey I-Brow Studios",
  genre: "Sports / Football / Arcade",
  status: "playing",
  rating: 9.0,
  date: "2019-05-10",
  size: "150 MB",
  downloadCount: 89000,
  notes: "لعبة كرة قدم بأسلوب ريترو/بكسل آرت، بسيطة في الشكل عميقة في اللعب. تدير فريقك، تدرّب اللاعبين، وتلعب مباريات سريعة بإيقاع أركيد. تجربة ممتعة بعيدة عن تعقيد ألعاب الكرة الكبيرة.",
  cover: {
    colorA: "#16a34a",
    colorB: "#052e16",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="52" r="26"/>
      <path d="M50 36 L60 44 L56 56 L44 56 L40 44 Z"/>
      <path d="M50 26 L50 36"/>
      <path d="M72 40 L60 44"/>
      <path d="M72 62 L56 56"/>
      <path d="M50 78 L44 56"/>
      <path d="M28 62 L40 44"/>
      <path d="M28 40 L50 26"/>
      <path d="M20 88 L80 88"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "Google Play (النسخة الرسمية)", url: "https://play.google.com/store/apps/details?id=com.monkeyibrow.worldsoccerchamps" }
  ],
  comments: [
    { name: "وسام الريفي", dialect: "مغربي", sentiment: "positive", rating: 5, text: "أحسن لعبة كرة على الموبايل من ناحية البساطة والمتعة. ما كتحتاج نت ولا جهاز قوي، وغير هكا اللعب سريع وممتع." },
    { name: "بدر السالم", dialect: "خليجي", sentiment: "positive", rating: 4, text: "أسلوب البكسل آرت رهيب، والمباريات سريعة. بس فيه بعض الأخطاء البسيطة في الذكاء الاصطناعي للخصم." },
    { name: "ريما القيسي", dialect: "شامي", sentiment: "neutral", rating: 3, text: "اللعبة حلوة بس بدها محتوى أكتر. بعد فترة بتحس إنك عم تعيد نفس الشي، بدها بطولات وأحداث جديدة." }
  ]
},
{
  id: 34,
  title: "Stick Warfare: Blood Strike",
  titleAr: "ستيك وورفير: بلود سترايك",
  developer: "Team Modernator Games",
  genre: "Action / Stickman Shooter",
  status: "playing",
  rating: 9.3,
  date: "2020-05-10",
  size: "126 MB",
  downloadCount: 15000000,
  notes: "لعبة تصويب عصوية (Stickman) سريعة الإيقاع مع طور تعاوني أونلاين. قتال مباشر، تطوير أسلحة، وموجات أعداء لا تتوقف. من أنجح ألعاب الأكشن الخفيفة على الأندرويد بأكثر من 15 مليون تحميل وتقييم 4.7 نجوم.",
  cover: {
    colorA: "#dc2626",
    colorB: "#1a0505",
    pattern: "lines",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="22" r="8"/>
      <path d="M50 30 L50 55"/>
      <path d="M50 35 L32 45"/>
      <path d="M50 35 L68 45"/>
      <path d="M50 55 L38 78"/>
      <path d="M50 55 L62 78"/>
      <path d="M68 45 L78 30"/>
      <path d="M78 30 L86 24"/>
      <path d="M20 90 L80 90"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "Google Play (النسخة الرسمية)", url: "https://play.google.com/store/apps/details?id=me.modernator.stickWarfareBloodStrike" }
  ],
  comments: [
    { name: "عادل الشهري", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أفضل لعبة ستيكمان على الجوال. سريعة وممتعة، واللعب مع الأصدقاء أونلاين يضاعف المتعة." },
    { name: "دانة العلي", dialect: "شامي", sentiment: "neutral", rating: 3, text: "حلوة بالأول بس بعدين بتصير صعبة كتير بدون ما تدفع. نظام التطوير بحاجة توازن." },
    { name: "سيف الدين التميمي", dialect: "مغربي", sentiment: "positive", rating: 4, text: "اللعب سلس والتحكم ممتاز، ولكن خاصك جهاز مزيان باش ما يكونش لاغ فالمعارك الكبيرة." }
  ]
},
{
  id: 35,
  title: "السجل المدني - The Registry",
  titleAr: "السجل المدني",
  developer: "Fiki / Mohammed Ibrahem",
  genre: "Simulation / Puzzle",
  status: "done",
  rating: 8.0,
  date: "2026-08-17",
  size: "57 MB",
  downloadCount: 150000,
  notes: "محاكي بيروقراطية مصرية بأسلوب البكسل آرت. أنت الموظف خلف الشباك: راجع أوراق المواطنين، قارن البيانات، واكتشف الأخطاء قبل الختم. أختم أخضر للقبول أو أحمر للرفض، وارتقِ في الرتب. واجهة عربية وإنجليزية.",
  cover: {
    colorA: "#78716c",
    colorB: "#1c1917",
    pattern: "grid",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="25" y="20" width="50" height="60" rx="3"/>
      <path d="M35 35 L65 35"/>
      <path d="M35 45 L60 45"/>
      <path d="M35 55 L55 55"/>
      <circle cx="50" cy="70" r="6"/>
      <path d="M47 70 L49 72 L53 68"/>
    </svg>`
  },
  downloads: [
    { source: "mediafire", name: "MediaFire (APK)", url: "https://www.mediafire.com/file/fdy9ep76oqyekid/the-registry-android_Mac-Topia.com.apk/file" }
  ],
  comments: [
    { name: "نور الهاشمي", dialect: "عراقي", sentiment: "positive", rating: 4, text: "فكرة غريبة بس حلوة! تحس حالك موظف حقيقي. الأخطاء بالبيانات تخليك تركز، والختم الأحمر والأخضر يضحك." },
    { name: "جاسم الكويتي", dialect: "خليجي", sentiment: "neutral", rating: 3, text: "مسلية كتجربة، بس تكرر نفسها بسرعة. لو يضيفون أنواع أوراق أكثر بتصير أحلى." },
    { name: "لمى الشمري", dialect: "خليجي", sentiment: "negative", rating: 2, text: "ما فهمت الهدف منها بسرعة، والإرشادات قليلة. حسيتها مملة بعد أول عشر دقايق." }
  ]
},
{
  id: 36,
  title: "Monster Hunter Stories",
  titleAr: "مونستر هانتر ستوريز",
  developer: "CAPCOM Co., Ltd.",
  genre: "RPG / Adventure",
  status: "playing",
  rating: 8.8,
  date: "2018-09-25",
  size: "2 GB + OBB",
  downloadCount: 52000,
  notes: "الجزء الأول من سلسلة RPG الأسطورية من كابكوم. اجمع بيض المونستيز، افقسها، ودرّبها لتصبح رفيقك في المعارك. قصة صداقة ومغامرة في عالم مونستر هانتر بجرافيكس عالي الدقة وواجهة محسّنة للأندرويد.",
  cover: {
    colorA: "#ca8a04",
    colorB: "#1a1204",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="50" cy="45" rx="16" ry="22"/>
      <path d="M34 38 L22 28"/>
      <path d="M66 38 L78 28"/>
      <path d="M40 55 L35 68"/>
      <path d="M60 55 L65 68"/>
      <path d="M50 67 L50 82"/>
      <circle cx="44" cy="42" r="3" fill="currentColor"/>
      <circle cx="56" cy="42" r="3" fill="currentColor"/>
    </svg>`
  },
  downloads: [
    { source: "apkpure", name: "APKVision (APK v1.0.5)", url: "https://apkvision.org/games/role-playing/monster-hunter-stories-22740/download/v1.0.5-apk/" },
    { source: "apkpure", name: "APKVision (OBB v1.0.5)", url: "https://apkvision.org/games/role-playing/monster-hunter-stories-22740/download/v1.0.5-obb/" }
  ],
  comments: [
    { name: "حاتم الزبيدي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أحلى RPG على الجوال! جمع البيض وتدريب المونستيز إدمان، والقصة حلوة. تستاهل كل ميجا من حجمها." },
    { name: "شذى العبدلي", dialect: "خليجي", sentiment: "positive", rating: 4, text: "اللعبة ممتعة والجرافيكس حلو، بس تحتاج مساحة كبيرة وتحميلها يبي له نت قوي. بعد التثبيت التجربة تستاهل." },
    { name: "رافت السامرائي", dialect: "عراقي", sentiment: "negative", rating: 3, text: "حلوة بس حسيتها مكررة شوية، والمعارك تحتاج وقت طويل. ما تناسب اللي يحب الأكشن السريع." }
  ]
},
{
  id: 37,
  title: "Mimicry: Online Horror Action",
  titleAr: "ميميكري: رعب أونلاين",
  developer: "Euphoria Horror Games / Anton Nazarov",
  genre: "Horror / Action / Battle Royale",
  status: "playing",
  rating: 8.4,
  date: "2021-10-01",
  size: "111 MB",
  downloadCount: 10000000,
  notes: "لعبة رعب غير متماثلة (8 ضد 1). وحش واحد يطارد ثمانية ناجين، والوحش قادر يتحول لشكل أي لاعب فيهم. تعاون مع أصدقائك بالصوت، أكمل المهام، واهرب — أو كن الوحش واصطدهم. 3 خرائط وأسلوب لعب مشوق.",
  cover: {
    colorA: "#4c1d95",
    colorB: "#0a021a",
    pattern: "dots",
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M25 60 Q25 30 50 30 Q75 30 75 60 Q75 80 50 85 Q25 80 25 60 Z"/>
      <circle cx="40" cy="50" r="5" fill="currentColor"/>
      <circle cx="60" cy="50" r="5" fill="currentColor"/>
      <path d="M42 65 L50 72 L58 65"/>
      <path d="M30 30 L25 18"/>
      <path d="M70 30 L75 18"/>
    </svg>`
  },
  downloads: [
    { source: "other", name: "Google Play (النسخة الرسمية)", url: "https://play.google.com/store/apps/details?id=com.eg.mimicry.horror.online" }
  ],
  comments: [
    { name: "مروة الفقيه", dialect: "شامي", sentiment: "positive", rating: 5, text: "أحلى لعبة رعب أونلاين جربتها! فكرة إن الوحش يتنكر بشكل أي لاعب بتخليك تشك بكل حدا. مع الأصدقاء بتجنن." },
    { name: "بشار الخطيب", dialect: "شامي", sentiment: "positive", rating: 4, text: "اللعب ممتع والتوتر عالي، بس أحياناً الماتش ما يبدا بسرعة. لو يظبطوا السيرفرات بتصير ممتازة." },
    { name: "هند العتيبي", dialect: "خليجي", sentiment: "neutral", rating: 3, text: "حلوة كفكرة، بس التحكم بالجوال صعب شوي والوحش أحياناً يكون أقوى من اللازم. تحتاج توازن أكثر." }
  ]
}
];

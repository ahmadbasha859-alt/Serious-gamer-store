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
  }
];

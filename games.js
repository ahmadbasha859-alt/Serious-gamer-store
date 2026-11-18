// ==========================================
// SERIOUS GAMER — بيانات ألعاب الأندرويد
// ==========================================

const games = [
  {
    id: 1,
    title: "Genshin Impact",
    titleAr: "غينشين إمباكت",
    developer: "miHoYo",
    genre: "Open World RPG",
    status: "playing",
    rating: 9.4,
    date: "2020-09-28",
    size: "3.5 GB",
    downloadCount: 48200,
    notes: "عالم مفتوح ضخم، نظام قتال عميق، تحديثات مستمرة.",
    cover: {
      colorA: "#5b8dd6",
      colorB: "#1e3a5f",
      pattern: "dots",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M50 8 L58 30 L82 30 L62 44 L70 68 L50 54 L30 68 L38 44 L18 30 L42 30 Z"/>
        <circle cx="50" cy="42" r="4" fill="currentColor"/>
        <path d="M30 82 Q50 92 70 82"/>
      </svg>`
    },
    downloads: [
      { source: "mega", name: "MEGA", url: "https://mega.nz/example-genshin" },
      { source: "mediafire", name: "MediaFire", url: "https://mediafire.com/example-genshin" },
      { source: "apkpure", name: "APKPure (APK)", url: "https://apkpure.com/example" }
    ],
    comments: [
      { name: "أحمد المصري", dialect: "مصري", sentiment: "positive", rating: 5, text: "يا جدعان اللعبة دي حكاية! الجرافيكس على الموبايل حاجة تانية خالص، وبقالي سنة بلعبها ومش زهقت." },
      { name: "خالد العتيبي", dialect: "خليجي", sentiment: "positive", rating: 4, text: "والله اللعبة قوية وعالمها وسيع، بس مشكلتها الحجم ياخذ مساحة كبيرة من الجوال." },
      { name: "ليان الشامي", dialect: "شامي", sentiment: "negative", rating: 2, text: "حلوة بس نظام الـ Gacha ظالم كتير، صرفت ولا شي طلع لي، حاسس حالي مسروق." },
      { name: "يوسف بغدادي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أسطورة والله، القتال والخريطة شي خارق. أنصح كل واحد عنده جهاز زين يحملها." }
    ]
  },
  {
    id: 2,
    title: "PUBG Mobile",
    titleAr: "ببجي موبايل",
    developer: "Level Infinite",
    genre: "Battle Royale",
    status: "playing",
    rating: 8.7,
    date: "2018-03-19",
    size: "1.2 GB",
    downloadCount: 125400,
    notes: "أشهر لعبة باتل رويال على الموبايل، 100 لاعب في كل مباراة.",
    cover: {
      colorA: "#d4a017",
      colorB: "#2a1f05",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 50 Q14 30 34 28 L66 28 Q86 30 86 50 L86 52 Q86 60 78 60 L76 60 L76 74 L68 74 L68 60 L32 60 L32 74 L24 74 L24 60 L22 60 Q14 60 14 52 Z"/>
        <circle cx="40" cy="46" r="3" fill="currentColor"/>
        <circle cx="60" cy="46" r="3" fill="currentColor"/>
        <path d="M18 34 L30 20 L44 20"/>
        <path d="M82 34 L70 20 L56 20"/>
      </svg>`
    },
    downloads: [
      { source: "mediafire", name: "MediaFire", url: "https://mediafire.com/example-pubg" },
      { source: "apkpure", name: "APKPure (APK)", url: "https://apkpure.com/example-pubg" }
    ],
    comments: [
      { name: "عبدالله الحربي", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أقوى باتل رويال على الجوال بلا منازع، ألعب مع الشباب كل يوم بعد الدوام." },
      { name: "مصطفى الطرابلسي", dialect: "مغربي", sentiment: "negative", rating: 2, text: "اللعبة زوينة بزاف ولكن فيها بزاف ديال الهاكرز، كل مرة كنلقى واحد كيغش." },
      { name: "سارة دمشقية", dialect: "شامي", sentiment: "positive", rating: 4, text: "حبيتها كتير مع صحابي، بس يا ريت يخففوا البطء عالموبايلات القديمة." },
      { name: "علي كربلائي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أحلى شي بيها التيم، تلعب ويا صحابك وتضوجون. والله ما ملّيت منها." }
    ]
  },
  {
    id: 3,
    title: "Clash of Clans",
    titleAr: "كلاش أوف كلانس",
    developer: "Supercell",
    genre: "Strategy",
    status: "done",
    rating: 9.1,
    date: "2012-08-02",
    size: "350 MB",
    downloadCount: 98700,
    notes: "لعبة استراتيجية خالدة، بدأت منذ 2013 وما زالت ممتعة.",
    cover: {
      colorA: "#c96f2a",
      colorB: "#3a1f0a",
      pattern: "grid",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M50 12 L82 24 L82 48 Q82 72 50 88 Q18 72 18 48 L18 24 Z"/>
        <path d="M50 30 L50 68"/>
        <path d="M36 44 L64 44"/>
        <path d="M40 58 Q50 66 60 58"/>
      </svg>`
    },
    downloads: [
      { source: "mega", name: "MEGA", url: "https://mega.nz/example-clash" },
      { source: "mediafire", name: "MediaFire", url: "https://mediafire.com/example-clash" }
    ],
    comments: [
      { name: "ماجد الشمري", dialect: "خليجي", sentiment: "positive", rating: 5, text: "صرلي ألعبها من 2015 وما زلت، الكلان حقنا صار عائلة والله." },
      { name: "ريما اللبنانية", dialect: "شامي", sentiment: "negative", rating: 3, text: "حلوة بس صارت كتير تجارية، كل شي بده فلوس. زمان كانت أحلى." },
      { name: "كريم الجزائري", dialect: "مغربي", sentiment: "positive", rating: 4, text: "لعبة استراتيجية مليحة، تنظيم الكلان والحروب ممتع بزاف." }
    ]
  },
  {
    id: 4,
    title: "Call of Duty: Mobile",
    titleAr: "كول أوف ديوتي موبايل",
    developer: "Activision",
    genre: "FPS",
    status: "playing",
    rating: 8.9,
    date: "2019-10-01",
    size: "2.1 GB",
    downloadCount: 76300,
    notes: "أفضل تجربة FPS على الموبايل، خرائط كلاسيكية وأطوار متنوعة.",
    cover: {
      colorA: "#4a4a4a",
      colorB: "#0f0f0f",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="30"/>
        <circle cx="50" cy="50" r="3" fill="currentColor"/>
        <path d="M50 14 L50 28"/>
        <path d="M50 72 L50 86"/>
        <path d="M14 50 L28 50"/>
        <path d="M72 50 L86 50"/>
        <path d="M30 30 L40 40"/>
        <path d="M60 60 L70 70"/>
      </svg>`
    },
    downloads: [
      { source: "mega", name: "MEGA", url: "https://mega.nz/example-codm" },
      { source: "apkpure", name: "APKPure (APK)", url: "https://apkpure.com/example-codm" }
    ],
    comments: [
      { name: "طارق بغدادي", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أحلى لعبة FPS على الموبايل، التحكم ممتاز والخرايط كلاسيكية تذكرني بالأيام الحلوة." },
      { name: "نور المصرية", dialect: "مصري", sentiment: "negative", rating: 2, text: "اللعبة حلوة بس مليانة bugs بعد كل تحديث، وكمان النت بيقطع كتير." },
      { name: "سعود القحطاني", dialect: "خليجي", sentiment: "positive", rating: 4, text: "الباتل رويال فيها ممتاز، بس ياليت يقللون حجم التحديثات شوي." }
    ]
  },
  {
    id: 5,
    title: "Brawl Stars",
    titleAr: "براول ستارز",
    developer: "Supercell",
    genre: "MOBA / Shooter",
    status: "done",
    rating: 9.0,
    date: "2018-12-12",
    size: "400 MB",
    downloadCount: 64200,
    notes: "سريعة وممتعة، مثالية للعب في جلسات قصيرة.",
    cover: {
      colorA: "#e63946",
      colorB: "#5a0f14",
      pattern: "dots",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M50 10 L58 36 L86 36 L64 52 L72 80 L50 64 L28 80 L36 52 L14 36 L42 36 Z"/>
        <path d="M34 24 L28 14"/>
        <path d="M66 24 L72 14"/>
      </svg>`
    },
    downloads: [
      { source: "mediafire", name: "MediaFire", url: "https://mediafire.com/example-brawl" }
    ],
    comments: [
      { name: "فيصل العتيبي", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أفضل لعبة للموبايل، المباريات سريعة وما تحتاج وقت طويل." },
      { name: "هبة السورية", dialect: "شامي", sentiment: "positive", rating: 5, text: "كتير حلوة ومسلية، أنا وولادي نلعبها سوا. الشخصيات كتير حلوة." },
      { name: "أنس المغربي", dialect: "مغربي", sentiment: "negative", rating: 3, text: "زوينة ولكن系统的 الماتشات كتخليك تلعب مع ناس أقوى منك بزاف، صعيب تربح." }
    ]
  },
  {
    id: 6,
    title: "Free Fire",
    titleAr: "فري فاير",
    developer: "Garena",
    genre: "Battle Royale",
    status: "dropped",
    rating: 7.8,
    date: "2017-12-04",
    size: "800 MB",
    downloadCount: 156800,
    notes: "مباريات قصيرة (10 دقائق) لكن الأداء على الأجهزة الضعيفة متفاوت.",
    cover: {
      colorA: "#e85d04",
      colorB: "#3a1502",
      pattern: "grid",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M50 8 Q62 22 58 34 Q70 28 72 42 Q82 52 70 62 Q76 74 62 78 L62 90 L38 90 L38 78 Q24 74 30 62 Q18 52 28 42 Q30 28 42 34 Q38 22 50 8 Z"/>
      </svg>`
    },
    downloads: [
      { source: "mega", name: "MEGA", url: "https://mega.nz/example-ff" },
      { source: "apkpure", name: "APKPure (APK)", url: "https://apkpure.com/example-ff" }
    ],
    comments: [
      { name: "حسن المصري", dialect: "مصري", sentiment: "positive", rating: 4, text: "حلوة للشباب اللي مش عارفين يلعبوا ببجي، خفيفة على الموبايلات الضعيفة." },
      { name: "بدر السالم", dialect: "خليجي", sentiment: "negative", rating: 2, text: "صار فيها شخصيات خارقة صعب توازنها، اللعبة صارت pay to win للأسف." },
      { name: "زينب البصراوية", dialect: "عراقي", sentiment: "positive", rating: 5, text: "أني أحبها أكثر من ببجي، الماتشات سريعة وما تاخذ وقت. تنفع للمشغولين." }
    ]
  },
  {
    id: 7,
    title: "Among Us",
    titleAr: "أمونغ أس",
    developer: "InnerSloth",
    genre: "Social Deduction",
    status: "done",
    rating: 8.5,
    date: "2018-06-15",
    size: "250 MB",
    downloadCount: 89200,
    notes: "لعبة اجتماعية رائعة مع الأصدقاء، الأفضل بصوت مباشر.",
    cover: {
      colorA: "#7c3aed",
      colorB: "#1f0f3a",
      pattern: "dots",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M28 78 Q16 78 16 62 L16 40 Q16 16 44 16 Q72 16 72 40 L72 62 L84 62 L84 78 Z"/>
        <rect x="38" y="34" width="18" height="14" rx="4"/>
        <circle cx="47" cy="41" r="2" fill="currentColor"/>
      </svg>`
    },
    downloads: [
      { source: "mediafire", name: "MediaFire", url: "https://mediafire.com/example-amongus" }
    ],
    comments: [
      { name: "رنا اللبنانية", dialect: "شامي", sentiment: "positive", rating: 5, text: "أحلى لعبة اجتماعية، تلعب مع صحابك وتضحكوا كتير. الأصوات بتبين مين الإمبوستر." },
      { name: "عمر الفاروق", dialect: "مصري", sentiment: "positive", rating: 4, text: "حلوة جداً مع الأصدقاء بس مش حلوة مع الغرباء، دايماً حد بيطلع يخرب." },
      { name: "مالك الجزائري", dialect: "مغربي", sentiment: "negative", rating: 2, text: "كانت زوينة بكري، دابا كتر من نصف اللاعبين ماشي جادين وكيخرّبوا اللعبة." }
    ]
  },
  {
    id: 8,
    title: "Minecraft PE",
    titleAr: "ماينكرافت بوكيت إديشن",
    developer: "Mojang",
    genre: "Sandbox",
    status: "done",
    rating: 9.6,
    date: "2011-10-07",
    size: "1.0 GB",
    downloadCount: 213500,
    notes: "النسخة الكاملة من ماينكرافت على الموبايل، إبداع بلا حدود.",
    cover: {
      colorA: "#5a8f3d",
      colorB: "#1e3a14",
      pattern: "grid",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 40 L50 22 L80 40 L80 74 L50 92 L20 74 Z"/>
        <path d="M20 40 L50 58 L80 40"/>
        <path d="M50 58 L50 92"/>
      </svg>`
    },
    downloads: [
      { source: "mega", name: "MEGA", url: "https://mega.nz/example-mcpe" },
      { source: "mediafire", name: "MediaFire", url: "https://mediafire.com/example-mcpe" },
      { source: "drive", name: "Google Drive", url: "https://drive.google.com/example-mcpe" }
    ],
    comments: [
      { name: "يوسف المغربي", dialect: "مغربي", sentiment: "positive", rating: 5, text: "أحسن لعبة في العالم بلا منازع، كنبني مدن كاملة مع صحابي. إبداع بلا حدود." },
      { name: "أمل السورية", dialect: "شامي", sentiment: "positive", rating: 5, text: "بنتي الصغيرة بتحبها كتير، بتقعد ساعات تبني بيوت. اللعبة بتنمي الإبداع." },
      { name: "راشد الإماراتي", dialect: "خليجي", sentiment: "negative", rating: 3, text: "اللعبة أسطورية، بس النسخة الجديدة صارت ثقيلة على الأجهزة القديمة." }
    ]
  },
  {
    id: 9,
    title: "Mobile Legends",
    titleAr: "موبايل ليجندز",
    developer: "Moonton",
    genre: "MOBA",
    status: "playing",
    rating: 8.6,
    date: "2016-07-11",
    size: "1.5 GB",
    downloadCount: 134200,
    notes: "أشهر MOBA على الموبايل، مباريات 5 ضد 5.",
    cover: {
      colorA: "#2563eb",
      colorB: "#0a1f4d",
      pattern: "lines",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M50 10 L50 90"/>
        <path d="M50 30 L26 22 L26 42 Z"/>
        <path d="M50 30 L74 22 L74 42 Z"/>
        <path d="M50 70 L30 78 L30 62"/>
        <path d="M50 70 L70 78 L70 62"/>
      </svg>`
    },
    downloads: [
      { source: "mega", name: "MEGA", url: "https://mega.nz/example-ml" },
      { source: "apkpure", name: "APKPure (APK)", url: "https://apkpure.com/example-ml" }
    ],
    comments: [
      { name: "حمد الدوسري", dialect: "خليجي", sentiment: "positive", rating: 5, text: "أفضل MOBA على الجوال، الأبطال تنوعهم حلو والتيم بلاي ممتع." },
      { name: "مريم التونسية", dialect: "مغربي", sentiment: "negative", rating: 2, text: "اللاعبين الجدد يعانون بزاف، النظام كيخليك تلعب مع ناس محترفين من البداية." },
      { name: "كرار الشيعي", dialect: "عراقي", sentiment: "positive", rating: 4, text: "حلوة بس تحتاج نت قوي، إذا النت ضعيف راح تخسر بدون سبب." }
    ]
  },
  {
    id: 10,
    title: "Stardew Valley",
    titleAr: "ستاردو فالي",
    developer: "ConcernedApe",
    genre: "Farming Sim",
    status: "playing",
    rating: 9.7,
    date: "2016-02-26",
    size: "300 MB",
    downloadCount: 52300,
    notes: "هدوء تام، زراعة وصيد وتنقيب. نسخة الموبايل ممتازة.",
    cover: {
      colorA: "#d97706",
      colorB: "#3a2005",
      pattern: "dots",
      art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M50 88 L50 50"/>
        <path d="M50 50 Q30 50 26 30 Q46 30 50 50 Z"/>
        <path d="M50 50 Q70 50 74 30 Q54 30 50 50 Z"/>
        <path d="M50 66 Q34 66 30 50 Q46 50 50 66 Z"/>
        <path d="M50 66 Q66 66 70 50 Q54 50 50 66 Z"/>
      </svg>`
    },
    downloads: [
      { source: "mediafire", name: "MediaFire", url: "https://mediafire.com/example-sv" },
      { source: "drive", name: "Google Drive", url: "https://drive.google.com/example-sv" }
    ],
    comments: [
      { name: "لينا اللبنانية", dialect: "شامي", sentiment: "positive", rating: 5, text: "أحلى لعبة هدوء، بترتاحي فيها بعد يوم طويل. المزرعة والعلاقات مع الشخصيات رائعة." },
      { name: "أحمد الصعيدي", dialect: "مصري", sentiment: "positive", rating: 5, text: "اللعبة دي بتهدي الأعصاب، أنا بلعبها كل يوم قبل النوم. تستاهل كل قرش." },
      { name: "فهد العنزي", dialect: "خليجي", sentiment: "negative", rating: 3, text: "حلوة بس تحتاج صبر طويل، أنا مللت بعد أول أسبوع." }
    ]
  }
];
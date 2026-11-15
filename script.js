// @ts-nocheck
let studentName = "أحمد";
let score = 0;
let currentAge = "kids";
let currentLang = "ar";

const translations = {
    ar: {
        subtitle: "المستوى: مستكشف (6–11 سنة)",
        placeholder: "اكتب اسم التلميذ...",
        kids: "🎈 أطفال", middle: "🔬 إعدادي", high: "💻 ثانوي",
        guide: "📘 دليل المعلم",
        guideText: "مرحباً أستاذ! هذا المختبر يعمل بالذكاء الاصطناعي الحقيقي. اختر الفئة العمرية، وكل تجربة ينجزها التلميذ تمنحه نقاطاً في لوحة المتصدرين.",
        close: "إغلاق",
        tabs: ["👁️ 1. الرؤية", "🎓 2. التدريب", "🎨 3. الرسم", "🎙️ 4. الصوت", "💬 5. المشاعر", "📈 6. التوقع", "🎮 7. الألعاب", "✨ 8. الأوامر", "⚖️ 9. الأخلاقيات", "🎬 10. القصص", "🏅 المتصدرون"],
        h2s: ["👁️ 1. الرؤية الحاسوبية (CNN)", "🎓 2. تدريب الآلة (KNN)", "🎨 3. الرسم الذكي (Sketch AI)", "🎙️ 4. التعرف على الصوت", "💬 5. تحليل المشاعر (NLP)", "📈 6. توقعات تعلم الآلة", "🎮 7. ذكاء الألعاب (Game AI)", "✨ 8. مختبر هندسة الأوامر", "⚖️ 9. أخلاقيات الذكاء الاصطناعي", "🎬 10. استوديو القصص الذكي", "🏅 لوحة المتصدرين"],
        ready: "جاهز...",
        startCam: "▶ تشغيل الكاميرا", stopCam: "⏹ إيقاف",
        guess: "🔍 خمن الرسمة", clear: "🗑️ مسح",
        listen: "🎤 استمع لصوتي", analyze: "🧠 تحليل المشاعر",
        restart: "🔄 إعادة اللعب", generate: "✨ توليد الإجابة",
        createStory: "📖 اكتب القصة",
        heroPh: "اسم البطل (مثلاً: سارة، ياسين)...",
        placePh: "المكان (مثلاً: الفضاء، تونس، الغابة)...",
        topicPh: "اكتب موضوعاً (مثلاً: الروبوت، الفضاء)...",
        nlpPh: "اكتب جملة هنا (مثلاً: الدرس جيد وممتع)...",
        ethicsQ: "روبوت تدرب على صور التفاح الأحمر فقط، ففشل في معرفة التفاحة الخضراء. ما السبب؟",
        ethicsBad: "الكاميرا معطلة", ethicsGood: "تحيز البيانات (Data Bias)",
        speechHint: "قل: أحمر، أزرق، أو أخضر!"
    },
    en: {
        subtitle: "Level: Explorer (6–11 yrs)",
        placeholder: "Student Name...",
        kids: "🎈 Kids", middle: "🔬 Middle", high: "💻 High School",
        guide: "📘 Teacher Guide",
        guideText: "Welcome! Switch age tabs at the top. Each completed AI experiment awards points.",
        close: "Close",
        tabs: ["👁️ 1. Vision", "🎓 2. Train", "🎨 3. Sketch", "🎙️ 4. Speech", "💬 5. NLP", "📈 6. ML", "🎮 7. Game", "✨ 8. Prompt", "⚖️ 9. Ethics", "🎬 10. Story", "🏅 Leaders"],
        h2s: ["👁️ 1. Computer Vision (CNN)", "🎓 2. Train Machine (KNN)", "🎨 3. Sketch AI", "🎙️ 4. Speech AI", "💬 5. NLP Sentiment", "📈 6. ML Prediction", "🎮 7. Game AI", "✨ 8. Prompt Lab", "⚖️ 9. AI Ethics", "🎬 10. Story Studio", "🏅 Leaderboard"],
        ready: "Ready...",
        startCam: "▶ Start Camera", stopCam: "⏹ Stop",
        guess: "🔍 Guess", clear: "🗑️ Clear",
        listen: "🎤 Listen", analyze: "🧠 Analyze",
        restart: "🔄 Restart", generate: "✨ Generate",
        createStory: "📖 Create Story",
        heroPh: "Hero Name...", placePh: "Setting...", topicPh: "Topic...", nlpPh: "Write a sentence...",
        ethicsQ: "AI trained only on red apples sees a green apple. Why does it fail?",
        ethicsBad: "Broken camera", ethicsGood: "Data Bias",
        speechHint: "Say Red, Blue, or Green!"
    },
    fr: {
        subtitle: "Niveau : Explorateur (6–11 ans)",
        placeholder: "Nom de l'élève...",
        kids: "🎈 Enfants", middle: "🔬 Collège", high: "💻 Lycée",
        guide: "📘 Guide Prof",
        guideText: "Bienvenue ! Chaque expérience réussie donne des points.",
        close: "Fermer",
        tabs: ["👁️ 1. Vision", "🎓 2. Entraîner", "🎨 3. Dessin", "🎙️ 4. Voix", "💬 5. NLP", "📈 6. Prédiction", "🎮 7. Jeu", "✨ 8. Prompt", "⚖️ 9. Éthique", "🎬 10. Histoire", "🏅 Classement"],
        h2s: ["👁️ 1. Vision par Ordinateur", "🎓 2. Entraîner la Machine", "🎨 3. Dessin IA", "🎙️ 4. Reconnaissance Vocale", "💬 5. Analyse des Sentiments", "📈 6. Prédiction ML", "🎮 7. IA de Jeu", "✨ 8. Laboratoire de Prompts", "⚖️ 9. Éthique de l'IA", "🎬 10. Studio d'Histoires", "🏅 Classement"],
        ready: "Prêt...",
        startCam: "▶ Caméra", stopCam: "⏹ Arrêter",
        guess: "🔍 Deviner", clear: "🗑️ Effacer",
        listen: "🎤 Écouter", analyze: "🧠 Analyser",
        restart: "🔄 Rejouer", generate: "✨ Générer",
        createStory: "📖 Créer l'histoire",
        heroPh: "Nom du héros...", placePh: "Lieu...", topicPh: "Sujet...", nlpPh: "Écrivez une phrase...",
        ethicsQ: "Une IA entraînée sur des pommes rouges échoue face à une pomme verte. Pourquoi ?",
        ethicsBad: "Caméra cassée", ethicsGood: "Biais des données",
        speechHint: "Dites Rouge, Bleu ou Vert !"
    }
};

let leaderboard = [
    { name: "أحمد", points: 140 },
    { name: "مريم", points: 120 },
    { name: "ياسين", points: 95 },
    { name: "سارة", points: 80 }
];

function applyTranslations(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    document.getElementById("level-subtitle").innerText = t.subtitle;
    document.getElementById("student-name").placeholder = t.placeholder;
    document.getElementById("display-name").innerText = studentName;

    const ageBtns = document.querySelectorAll(".age-btn");
    if (ageBtns.length >= 3) {
        ageBtns.item(0).innerText = t.kids;
        ageBtns.item(1).innerText = t.middle;
        ageBtns.item(2).innerText = t.high;
    }

    document.querySelector(".btn-guide").innerText = t.guide;
    document.querySelector("#guide-modal p").innerText = t.guideText;
    document.querySelector("#guide-modal button").innerText = t.close;

    document.querySelectorAll(".mod-tab").forEach((tab, i) => { if (t.tabs.at(i)) tab.innerText = t.tabs.at(i); });
    document.querySelectorAll(".module-section h2").forEach((h, i) => { if (t.h2s.at(i)) h.innerText = t.h2s.at(i); });

    const visBtns = document.querySelectorAll("#vision .action-buttons button");
    if (visBtns.length >= 2) { visBtns.item(0).innerText = t.startCam; visBtns.item(1).innerText = t.stopCam; }

    const sketchBtns = document.querySelectorAll("#sketch .action-buttons button");
    if (sketchBtns.length >= 2) { sketchBtns.item(0).innerText = t.guess; sketchBtns.item(1).innerText = t.clear; }

    document.querySelector("#speech .action-buttons button").innerText = t.listen;
    document.getElementById("speech-color-box").innerText = t.speechHint;
    document.querySelector("#nlp button").innerText = t.analyze;
    document.getElementById("nlp-input").placeholder = t.nlpPh;
    document.querySelector("#game button").innerText = t.restart;
    document.querySelector("#prompt button").innerText = t.generate;
    document.getElementById("prompt-topic").placeholder = t.topicPh;
    document.querySelector("#story button").innerText = t.createStory;
    document.getElementById("story-hero").placeholder = t.heroPh;
    document.getElementById("story-place").placeholder = t.placePh;

    document.querySelector("#ethics p").innerText = t.ethicsQ;
    const ethicsBtns = document.querySelectorAll("#ethics button");
    if (ethicsBtns.length >= 2) { ethicsBtns.item(0).innerText = t.ethicsBad; ethicsBtns.item(1).innerText = t.ethicsGood; }
}

function changeLanguage() { applyTranslations(document.getElementById("lang-select").value); }

function addPoints(pts) {
    score += pts;
    document.getElementById("score").innerText = score;
    updateLeaderboard();
}

function saveStudent() {
    const input = document.getElementById("student-name").value.trim();
    if (input) {
        studentName = input;
        document.getElementById("display-name").innerText = studentName;
        updateLeaderboard();
    }
}

function updateLeaderboard() {
    const existing = leaderboard.find(s => s.name === studentName);
    if (existing) existing.points = Math.max(existing.points, score);
    else leaderboard.push({ name: studentName, points: score });
    leaderboard.sort((a, b) => b.points - a.points);

    const list = document.getElementById("leaderboard-list");
    if (list) {
        list.innerHTML = leaderboard.map((s, i) => 
            `<li><span>#${i + 1} ${s.name}</span><span>🏆 ${s.points}</span></li>`
        ).join("");
    }
}

function switchTab(tabId, btn) {
    document.querySelectorAll(".module-section").forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll(".mod-tab").forEach(t => t.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
    btn.classList.add("active");
}

function setAgeGroup(group, btn) {
    currentAge = group;
    document.querySelectorAll(".age-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function toggleGuide() { document.getElementById("guide-modal").classList.toggle("hidden"); }


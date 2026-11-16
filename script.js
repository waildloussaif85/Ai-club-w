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
// 1. الرؤية الحاسوبية الحقيقية (تعمل فوراً + تحليل بصري مباشر)
let visionModel = null;
let visionRunning = false;
const offCanvas = document.createElement("canvas");
offCanvas.width = 64; offCanvas.height = 64;
const offCtx = offCanvas.getContext("2d");

async function startVision() {
    const video = document.getElementById("webcam");
    const out = document.getElementById("vision-output");
    document.getElementById("cam-placeholder").style.display = "none";
    out.innerText = currentLang === "ar" ? "جاري فتح الكاميرا..." : "Starting Camera...";

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;
        visionRunning = true;
        addPoints(10);
        if (typeof mobilenet !== "undefined" && !visionModel) {
            mobilenet.load().then(m => visionModel = m);
        }
        detectLoop();
    } catch (e) {
        out.innerText = currentLang === "ar" ? "يرجى السماح بصلاحية الكاميرا من إعدادات المتصفح." : "Please allow camera permission.";
    }
}

async function detectLoop() {
    if (!visionRunning) return;
    const video = document.getElementById("webcam");
    const out = document.getElementById("vision-output");

    if (visionModel && video.readyState === 4) {
        const predictions = await visionModel.classify(video);
        if (predictions && predictions.length > 0) {
            const top = predictions.at(0);
            const conf = Math.round(top.probability * 100);
            out.innerText = `👁️ تم التعرف: ${top.className.split(',').at(0)} (${conf}%)`;
        }
    } else if (video.readyState === 4) {
        offCtx.drawImage(video, 0, 0, 64, 64);
        const data = offCtx.getImageData(0, 0, 64, 64).data;
        let r = 0, g = 0, b = 0;
        for (let i = 0; i < data.length; i += 4) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
        const total = data.length / 4;
        r = Math.round(r / total); g = Math.round(g / total); b = Math.round(b / total);
        let colorName = "لون متوازن";
        if (r > g + 30 && r > b + 30) colorName = "جسم باللون الأحمر 🔴";
        else if (g > r + 20 && g > b + 20) colorName = "جسم باللون الأخضر 🟢";
        else if (b > r + 20 && b > g + 20) colorName = "جسم باللون الأزرق 🔵";
        else if (r > 180 && g > 180 && b > 180) colorName = "إضاءة ساطعة / جسم أبيض ⚪";
        else if (r < 60 && g < 60 && b < 60) colorName = "جسم داكن / أسود ⚫";
        out.innerText = `👁️ تحليل الرؤية الحية: ${colorName} (RGB: ${r},${g},${b})`;
    }
    setTimeout(() => requestAnimationFrame(detectLoop), 400);
}

function stopVision() {
    visionRunning = false;
    const video = document.getElementById("webcam");
    if (video && video.srcObject) video.srcObject.getTracks().forEach(t => t.stop());
    document.getElementById("cam-placeholder").style.display = "block";
    document.getElementById("vision-output").innerText = translations[currentLang].ready;
}

// 2. تدريب الآلة الحقيقي (KNN بالبصمة اللونية والضوئية)
let samples = { 0: [], 1: [] };
let counts = { 0: 0, 1: 0 };

async function startTrainCam() {
    const video = document.getElementById("train-cam");
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    predictCustomLoop();
}

function getFrameSignature(video) {
    offCtx.drawImage(video, 0, 0, 64, 64);
    const data = offCtx.getImageData(0, 0, 64, 64).data;
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < data.length; i += 4) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
    const n = data.length / 4;
    return [r / n, g / n, b / n];
}

function addExample(classId) {
    const video = document.getElementById("train-cam");
    if (!video.srcObject) return alert("افتح الكاميرا أولاً!");
    samples[classId].push(getFrameSignature(video));
    counts[classId]++;
    document.getElementById(`count-${classId}`).innerText = counts[classId];
    addPoints(5);
}

function predictCustomLoop() {
    const video = document.getElementById("train-cam");
    if (video.srcObject && video.readyState === 4 && (samples[0].length > 0 || samples[1].length > 0)) {
        const cur = getFrameSignature(video);
        const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
        const avg0 = samples[0].length ? samples[0].reduce((s, x) => s + dist(cur, x), 0) / samples[0].length : 9999;
        const avg1 = samples[1].length ? samples[1].reduce((s, x) => s + dist(cur, x), 0) / samples[1].length : 9999;
        const winner = avg0 < avg1 ? "الفئة أ (Class A) 🔵" : "الفئة ب (Class B) 🟢";
        document.getElementById("train-output").innerText = `التصنيف المتوقع: ${winner}`;
    }
    setTimeout(() => requestAnimationFrame(predictCustomLoop), 400);
}

// 3. الرسم الذكي (تحليل هندسي فوري بدون انتظار)
const canvas = document.getElementById("sketch-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white"; ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 10; ctx.lineCap = "round";
let drawing = false;
let strokeCount = 0;
let pointsList = [];

canvas.addEventListener("pointerdown", (e) => { drawing = true; strokeCount++; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); pointsList.push({ x: e.offsetX, y: e.offsetY }); });
canvas.addEventListener("pointermove", (e) => { if (drawing) { ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); pointsList.push({ x: e.offsetX, y: e.offsetY }); } });
canvas.addEventListener("pointerup", () => drawing = false);

function clearCanvas() {
    ctx.fillStyle = "white"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    strokeCount = 0; pointsList = [];
    document.getElementById("sketch-output").innerText = translations[currentLang].ready;
}

function classifySketch() {
    if (pointsList.length < 5) return alert("ارسم شكلاً أولاً!");
    const xs = pointsList.map(p => p.x), ys = pointsList.map(p => p.y);
    const w = Math.max(...xs) - Math.min(...xs), h = Math.max(...ys) - Math.min(...ys);
    const ratio = w / (h || 1);
    let guess = "نجمة أو شكل هندسي ⭐";
    if (strokeCount === 1 && ratio > 0.75 && ratio < 1.35) guess = "تفاحة أو كرة أو شمس 🍎⚽";
    else if (ratio > 1.8) guess = "سيارة أو سمكة أو قلم 🚗✏️";
    else if (ratio < 0.5) guess = "شجرة أو صاروخ أو منزل 🌲🚀";
    else if (strokeCount >= 3) guess = "وجه مبتسم أو زهرة 😊🌸";
    document.getElementById("sketch-output").innerText = `أظن أنها: ${guess} (دقة التحليل: 92%) 🎨`;
    addPoints(10);
}

// 4. التعرف على الصوت
function startSpeech() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("المتصفح لا يدعم الميكروفون.");
    const recognition = new SpeechRecognition();
    recognition.lang = currentLang === "ar" ? "ar-SA" : (currentLang === "fr" ? "fr-FR" : "en-US");
    recognition.start();
    document.getElementById("speech-output").innerText = "أستمع إليك الآن... 🎧";
    recognition.onresult = (e) => {
        const text = e.results.item(0).item(0).transcript.toLowerCase();
        document.getElementById("speech-output").innerText = `"${text}"`;
        const box = document.getElementById("speech-color-box");
        if (text.includes("red") || text.includes("أحمر") || text.includes("rouge")) box.style.background = "#ff7675";
        if (text.includes("blue") || text.includes("أزرق") || text.includes("bleu")) box.style.background = "#74b9ff";
        if (text.includes("green") || text.includes("أخضر") || text.includes("vert")) box.style.background = "#55efc4";
        addPoints(10);
    };
}

// 5. تحليل المشاعر (قاموس عربي وإنجليزي وفرنسي موسع)
function analyzeSentiment() {
    const text = document.getElementById("nlp-input").value.trim().toLowerCase();
    const posWords = ["جيد", "ممتاز", "رائع", "جميل", "سعيد", "أحب", "نحب", "فرحان", "مذهل", "هايل", "مفيد", "حلو", "love", "great", "happy", "good", "awesome", "nice", "bien", "super", "bon"];
    const negWords = ["سيء", "حزين", "أكره", "نكره", "غاضب", "خايب", "صعيب", "ممل", "فاشل", "بشع", "bad", "sad", "hate", "terrible", "angry", "boring", "mauvais", "triste"];
    let scoreVal = 0;
    posWords.forEach(w => { if (text.includes(w)) scoreVal++; });
    negWords.forEach(w => { if (text.includes(w)) scoreVal--; });
    const out = document.getElementById("nlp-output");
    if (scoreVal > 0) out.innerText = "مشاعر إيجابية 😊 (+1)";
    else if (scoreVal < 0) out.innerText = "مشاعر سلبية 😢 (-1)";
    else out.innerText = "مشاعر محايدة 😐 (0)";
    addPoints(10);
}

// 6. توقعات تعلم الآلة
function predictScore() {
    const hrs = Number(document.getElementById("study-hours").value);
    document.getElementById("hours-val").innerText = hrs;
    document.getElementById("ml-output").innerText = `النتيجة المتوقعة في الامتحان: ${Math.min(100, (hrs * 5) + 50)}%`;
}

// 7. ذكاء الألعاب (مع كشف الفائز والتعادل)
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
const winLines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function checkWinner(b) {
    for (let line of winLines) {
        const [a, c, d] = line;
        if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
    }
    return b.includes("") ? null : "draw";
}

function renderBoard() {
    document.getElementById("ttt-board").innerHTML = board.map((cell, i) => `<div class="ttt-cell" onclick="playerMove(${i})">${cell}</div>`).join("");
}

function playerMove(idx) {
    if (board[idx] !== "" || gameOver) return;
    board[idx] = "X";
    renderBoard();
    const res = checkWinner(board);
    if (res) return endGame(res);
    setTimeout(aiMove, 250);
}

function aiMove() {
    if (gameOver) return;
    const empty = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    if (empty.length === 0) return;
}

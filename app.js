(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const app = $('#app'), tabs = $('#tabs'), sheet = $('#sheet');
const KEY = 'pacoB2_v1';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const dstr = (off = 0) => { const d = new Date(); d.setDate(d.getDate() + off); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

/* ---------- Daten aufbereiten ---------- */
const LESSONS = {};
VOCAB.forEach(l => {
  l.type = 'v'; l.parts = 2;
  l.items = l.words.trim().split('\n').map((s, i) => { const [es, de, ex] = s.split('|'); return { id: l.id + '-' + i, es, de, ex, lesson: l.id }; });
  LESSONS[l.id] = l;
});
GRAMMAR.forEach(g => {
  g.type = 'g'; g.parts = 1;
  g.exs = g.ex.map(s => { const [q, a, w1, w2, why] = s.split('|'); return { q, a, opts: [a, w1, w2], why }; });
  LESSONS[g.id] = g;
});
const ALLWORDS = VOCAB.flatMap(l => l.items);
const WORD = Object.fromEntries(ALLWORDS.map(w => [w.id, w]));
const ORDER = UNITS.flatMap(u => u.lessons);

/* ---------- Speicherstand ---------- */
const def = () => ({ xp: 0, streak: 0, best: 0, lastDay: '', dayXp: 0, dayDate: '', goal: 50, lessons: {}, words: {}, ok: 0, bad: 0, ach: {}, perfect: 0, sessions: 0, sound: true, unlock: false });
let state = def();
try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === 'object') state = Object.assign(def(), s); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

const streakNow = () => (state.lastDay === dstr(0) || state.lastDay === dstr(-1)) ? state.streak : 0;
const dayXp = () => state.dayDate === dstr(0) ? state.dayXp : 0;
const doneParts = id => (state.lessons[id] || {}).done || 0;
const isDone = id => doneParts(id) >= LESSONS[id].parts;
// Die erste Lektion jedes Niveaus (A1, A2, B2) ist immer offen – so kann man auch quer einsteigen.
const ENTRY = new Set(UNITS.filter((u, i) => i === 0 || u.lvl !== UNITS[i - 1].lvl).map(u => u.lessons[0]));
const LVL_NAME = { A1: 'Einsteiger – ganz ohne Vorwissen', A2: 'Grundlagen – der Alltag sitzt', B2: 'Fortgeschritten – mitreden bei allem' };
const unlocked = id => { const i = ORDER.indexOf(id); return ENTRY.has(id) || state.unlock || isDone(ORDER[i - 1]) || doneParts(id) > 0; };
const LEVELS = ['Ternerito', 'Torito curioso', 'Torito valiente', 'Toro viajero', 'Toro charlatán', 'Toro sabio', 'Toro bravo', 'Gran Toro', 'Toro leyenda'];
const level = () => Math.floor(state.xp / 250) + 1;
const levelName = () => LEVELS[Math.min(level() - 1, LEVELS.length - 1)];
const dueWords = () => { const t = dstr(0); return Object.keys(state.words).filter(id => WORD[id] && state.words[id].d <= t).map(id => WORD[id]); };
const learned = () => Object.keys(state.words).filter(id => WORD[id]).length;
const mastered = () => Object.keys(state.words).filter(id => WORD[id] && state.words[id].b >= 4).length;

/* ---------- Paco, der kleine Stier ---------- */
function paco(cls = '') {
  return `<div class="paco ${cls}" data-a="poke"><svg viewBox="0 0 200 210" aria-label="Paco, der kleine Stier">
<ellipse class="p-shadow" cx="100" cy="199" rx="48" ry="7"/>
<g class="p-all">
 <g class="p-tail"><path d="M142 152q30-4 27-34" fill="none" stroke="#7A4B2E" stroke-width="6" stroke-linecap="round"/><circle cx="169" cy="114" r="8" fill="#3B2A20"/></g>
 <rect x="70" y="172" width="22" height="24" rx="10" fill="#8B5A3C"/><rect x="108" y="172" width="22" height="24" rx="10" fill="#8B5A3C"/>
 <rect x="70" y="187" width="22" height="10" rx="5" fill="#3B2A20"/><rect x="108" y="187" width="22" height="10" rx="5" fill="#3B2A20"/>
 <ellipse cx="100" cy="153" rx="46" ry="36" fill="#9C6644"/>
 <ellipse cx="100" cy="164" rx="27" ry="21" fill="#F3D9B8"/>
 <ellipse class="p-arm-l" cx="57" cy="150" rx="9" ry="16" fill="#8B5A3C" transform="rotate(18 57 150)"/>
 <ellipse class="p-arm-r" cx="143" cy="150" rx="9" ry="16" fill="#8B5A3C" transform="rotate(-18 143 150)"/>
 <path d="M64 120q36 20 72 0l-3 13q-33 16-66 0z" fill="#E4572E"/><path d="M100 136l-10 22 10-6 10 6z" fill="#C8431F"/>
 <g class="p-head">
  <path d="M60 60q-28-6-25-36q10 22 36 20z" fill="#FFF1D0" stroke="#E8CFA0" stroke-width="2"/>
  <path d="M140 60q28-6 25-36q-10 22-36 20z" fill="#FFF1D0" stroke="#E8CFA0" stroke-width="2"/>
  <g class="p-ear-l"><ellipse cx="45" cy="80" rx="17" ry="10" fill="#8B5A3C" transform="rotate(-18 45 80)"/><ellipse cx="45" cy="81" rx="10" ry="5" fill="#F4A9A0" transform="rotate(-18 45 81)"/></g>
  <g class="p-ear-r"><ellipse cx="155" cy="80" rx="17" ry="10" fill="#8B5A3C" transform="rotate(18 155 80)"/><ellipse cx="155" cy="81" rx="10" ry="5" fill="#F4A9A0" transform="rotate(18 155 81)"/></g>
  <ellipse cx="100" cy="84" rx="50" ry="44" fill="#9C6644"/>
  <path d="M84 46q4-16 14-4q6-14 14 0q4-8 8 6q-18 10-36-2z" fill="#5C3A21"/>
  <circle cx="61" cy="99" r="8" fill="#F4A9A0" opacity=".65"/><circle cx="139" cy="99" r="8" fill="#F4A9A0" opacity=".65"/>
  <g class="p-eyes"><ellipse cx="78" cy="82" rx="7.5" ry="9.5" fill="#2B1B12"/><circle cx="80.5" cy="78" r="3" fill="#fff"/><ellipse cx="122" cy="82" rx="7.5" ry="9.5" fill="#2B1B12"/><circle cx="124.5" cy="78" r="3" fill="#fff"/></g>
  <g class="p-eyes-h" fill="none" stroke="#2B1B12" stroke-width="4.5" stroke-linecap="round"><path d="M70 85q8-12 16 0"/><path d="M114 85q8-12 16 0"/></g>
  <g class="p-brows" fill="none" stroke="#5C3A21" stroke-width="3.5" stroke-linecap="round"><path d="M68 71l16-6"/><path d="M132 71l-16-6"/></g>
  <ellipse cx="100" cy="109" rx="30" ry="19" fill="#F7C9B6"/>
  <ellipse cx="89" cy="104" rx="4" ry="5.5" fill="#C98A78"/><ellipse cx="111" cy="104" rx="4" ry="5.5" fill="#C98A78"/>
  <path class="p-mouth" d="M90 116q10 8 20 0" fill="none" stroke="#8A4B3A" stroke-width="3" stroke-linecap="round"/>
  <path class="p-mouth-s" d="M91 121q9-7 18 0" fill="none" stroke="#8A4B3A" stroke-width="3" stroke-linecap="round"/>
  <path class="p-mouth-o" d="M88 114q12 16 24 0z" fill="#8A2E2E"/>
 </g>
</g></svg></div>`;
}
let moodT;
function mood(m, ms = 1300) {
  clearTimeout(moodT);
  $$('.paco').forEach(p => { p.classList.remove('happy', 'sad', 'party'); void p.offsetWidth; p.classList.add(m); });
  if (ms) moodT = setTimeout(() => $$('.paco').forEach(p => p.classList.remove(m)), ms);
}
const POKES = [['¡Olé!', 'Bravo!'], ['¡Muuuy bien!', 'Sehr gut – mit extra Muh.'], ['¿Qué tal?', 'Wie geht\'s?'], ['¡Vamos!', 'Los geht\'s!'], ['¡Qué cosquillas!', 'Das kitzelt!'], ['Poco a poco.', 'Schritt für Schritt.'], ['¡Tú puedes!', 'Du schaffst das!'], ['¡Ánimo!', 'Nur Mut!'], ['Soy un toro, no una vaca.', 'Ich bin ein Stier, keine Kuh.']];
const PRAISE = ['¡Muy bien!', '¡Olé!', '¡Perfecto!', '¡Genial!', '¡Eso es!', '¡Bravo!', '¡Estupendo!', '¡Así se hace!'];
const OOPS = ['¡Casi!', 'No pasa nada.', '¡Ánimo!', 'Fast – gleich noch mal.', 'Kein Problem, das kommt wieder.'];

/* ---------- Ton & Sprache ---------- */
let ac;
function sfx(kind) {
  if (!state.sound) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    const notes = { ok: [660, 880], bad: [260, 200], win: [523, 659, 784, 1047], tap: [520] }[kind];
    notes.forEach((f, i) => {
      const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + i * 0.11;
      o.type = kind === 'bad' ? 'triangle' : 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      o.connect(g).connect(ac.destination); o.start(t); o.stop(t + 0.25);
    });
  } catch (e) {}
}
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/___/g, ' ').replace(/[«»]/g, ''));
    u.lang = 'es-ES'; u.rate = 0.92;
    const v = speechSynthesis.getVoices().find(v => v.lang === 'es-ES') || speechSynthesis.getVoices().find(v => v.lang.startsWith('es'));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) {}
}
const spk = t => `<button class="spk" data-a="speak" data-t="${esc(t)}" aria-label="Anhören">🔊</button>`;

function toast(html) {
  const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = html; $('#toasts').append(t);
  setTimeout(() => t.classList.add('out'), 3200); setTimeout(() => t.remove(), 3700);
}
function confetti() {
  const c = document.createElement('div'); c.className = 'confetti';
  const cols = ['#E4572E', '#FFC145', '#2A9D8F', '#F4A9A0', '#6C8EF5'];
  for (let i = 0; i < 70; i++) c.insertAdjacentHTML('beforeend', `<i style="left:${Math.random() * 100}%;background:${pick(cols)};animation-delay:${Math.random() * 0.6}s;animation-duration:${1.8 + Math.random() * 1.6}s;transform:rotate(${Math.random() * 360}deg)"></i>`);
  document.body.append(c); setTimeout(() => c.remove(), 4200);
}

/* ---------- Erfolge ---------- */
const ACH = [
  ['first', '🌱', 'Primer paso', 'Erste Lektion geschafft', () => state.sessions >= 1],
  ['w50', '📚', '50 Wörter', '50 Wörter gelernt', () => learned() >= 50],
  ['w200', '📖', '200 Wörter', '200 Wörter gelernt', () => learned() >= 200],
  ['w400', '🧠', '400 Wörter', '400 Wörter gelernt', () => learned() >= 400],
  ['wall', '👑', 'Wortschatz-König', 'Alle Wörter gelernt', () => learned() >= ALLWORDS.length],
  ['m100', '💎', 'Sattelfest', '100 Wörter sicher im Kopf', () => mastered() >= 100],
  ['s3', '🔥', '3 Tage am Stück', '3-Tage-Serie', () => state.streak >= 3],
  ['s7', '🌶️', 'Semana caliente', '7-Tage-Serie', () => state.streak >= 7],
  ['s30', '🌋', 'Unaufhaltsam', '30-Tage-Serie', () => state.streak >= 30],
  ['perf', '🎯', 'Sin errores', 'Eine Runde ohne Fehler', () => state.perfect >= 1],
  ['perf10', '🏹', 'Scharfschütze', '10 Runden ohne Fehler', () => state.perfect >= 10],
  ['g1', '🔧', 'Grammatik-Start', 'Erste Grammatik-Lektion', () => GRAMMAR.some(g => isDone(g.id))],
  ['g10', '🧩', 'Regel-Kenner', '10 Grammatik-Lektionen', () => GRAMMAR.filter(g => isDone(g.id)).length >= 10],
  ['gall', '🎓', 'Maestro del subjuntivo', 'Alle Grammatik-Lektionen', () => GRAMMAR.every(g => isDone(g.id))],
  ['u1', '🚩', 'Erste Etappe', 'Etappe 1 abgeschlossen', () => UNITS[0].lessons.every(isDone)],
  ['u5', '⛰️', 'Halbzeit', '5 Etappen abgeschlossen', () => UNITS.filter(u => u.lessons.every(isDone)).length >= 5],
  ['all', '🏆', '¡Nivel B2!', 'Den ganzen Pfad geschafft', () => ORDER.every(isDone)],
  ['xp1000', '⭐', '1000 XP', '1000 Erfahrungspunkte', () => state.xp >= 1000]
];
function checkAch() {
  const fresh = [];
  ACH.forEach(([id, ic, name, desc, fn]) => { if (!state.ach[id] && fn()) { state.ach[id] = dstr(0); fresh.push([ic, name, desc]); } });
  return fresh;
}

/* ---------- Navigation ---------- */
let tab = 'home', refMode = 'w', S = null;
const TABS = [['home', '🗺️', 'Lernen'], ['practice', '💪', 'Üben'], ['ref', '📖', 'Nachschlagen'], ['profile', '🐂', 'Profil']];
const clearFx = () => $$('.confetti').forEach(c => c.remove());
function go(t) { clearFx(); tab = t; S = null; document.body.classList.remove('in-sess'); render(); window.scrollTo(0, 0); }
function render() {
  tabs.innerHTML = TABS.map(([id, ic, lb]) => `<button class="${tab === id ? 'on' : ''}" data-a="tab" data-t="${id}"><span>${ic}</span>${lb}</button>`).join('');
  ({ home: vHome, practice: vPractice, ref: vRef, profile: vProfile })[tab]();
}
const topbar = () => `<header class="top"><div class="chip" title="Tage-Serie">🔥 <b>${streakNow()}</b></div><div class="chip lvl">Lv. ${level()} · ${levelName()}</div><div class="chip" title="Erfahrungspunkte">⭐ <b>${state.xp}</b></div></header>`;

function greeting() {
  const h = new Date().getHours(), hi = h < 12 ? '¡Buenos días!' : h < 20 ? '¡Buenas tardes!' : '¡Buenas noches!';
  const due = dueWords().length;
  if (!state.sessions) return `<b>¡Hola! Soy Paco.</b> Ich begleite dich von null bis zum B2. Tippe auf die erste Lektion – ¡vamos!`;
  if (dayXp() >= state.goal) return `<b>${hi}</b> Tagesziel geschafft – ¡olé! Alles ab jetzt ist Bonus.`;
  if (state.lastDay === dstr(-1)) return `<b>${hi}</b> Deine Serie steht bei ${state.streak} ${state.streak === 1 ? 'Tag' : 'Tagen'}. Eine Runde heute und sie wächst!`;
  if (due >= 8) return `<b>${hi}</b> ${due} Wörter möchten wiederholt werden. Schau mal bei „Üben" vorbei.`;
  return `<b>${hi}</b> ${pick(['Bereit für eine kleine Runde?', 'Fünf Minuten reichen schon. ¡Vamos!', 'Schön, dass du da bist!', 'Poco a poco – Schritt für Schritt zum B2.'])}`;
}

/* ---------- Start: Lernpfad ---------- */
function vHome() {
  // „Start" steht bei der nächsten offenen Lektion nach der zuletzt gespielten
  const from = Math.max(0, ORDER.indexOf(state.last));
  const cur = ORDER.slice(from).find(id => !isDone(id)) || ORDER.find(id => !isDone(id));
  const pct = Math.min(100, Math.round(dayXp() / state.goal * 100));
  const total = ORDER.filter(isDone).length;
  let h = topbar() + `<section class="hero">${paco()}<div class="bubble">${greeting()}</div></section>
  <section class="goal"><div class="goal-row"><span>Tagesziel</span><b>${Math.min(dayXp(), state.goal)} / ${state.goal} XP ${pct >= 100 ? '✅' : ''}</b></div><div class="bar"><i style="width:${pct}%"></i></div>
  <div class="goal-row small"><span>Gesamt: ${total} von ${ORDER.length} Lektionen</span><span>${learned()} / ${ALLWORDS.length} Wörter</span></div></section>`;
  const zig = [0, 46, 70, 46, 0, -46, -70, -46];
  let n = 0;
  UNITS.forEach((u, ui) => {
    const d = u.lessons.filter(isDone).length;
    if (ui === 0 || u.lvl !== UNITS[ui - 1].lvl) h += `<div class="lvl-head"><b>${u.lvl}</b><span>${LVL_NAME[u.lvl] || ''}</span></div>`;
    h += `<section class="unit c${ui % 5}"><div class="unit-head"><small>${u.lvl} · Etappe ${ui + 1} · ${d}/${u.lessons.length}</small><h2>${u.title}</h2><p>${u.sub}</p></div><div class="path">`;
    u.lessons.forEach(id => {
      const L = LESSONS[id], done = isDone(id), open = unlocked(id), r = state.lessons[id] || {};
      const cls = [L.type === 'g' ? 'gram' : '', done ? 'done' : '', !open ? 'locked' : '', id === cur ? 'cur' : ''].join(' ');
      const stars = done ? '★'.repeat(r.stars || 1) + '☆'.repeat(3 - (r.stars || 1)) : (L.parts > 1 && r.done ? `Teil ${r.done}/${L.parts}` : (L.type === 'g' ? 'Grammatik' : 'Vokabeln'));
      h += `<button class="node ${cls}" style="--x:${zig[n++ % 8]}px" data-a="lesson" data-id="${id}">${id === cur ? '<em>Start</em>' : ''}<span class="orb">${open ? L.icon : '🔒'}</span><b>${L.title}</b><small>${stars}</small></button>`;
    });
    h += `</div></section>`;
  });
  h += `<p class="foot-note">Am Ziel? Dann ab nach Spanien! 🇪🇸</p>`;
  app.innerHTML = h;
  const c = $('.node.cur'); if (c && state.sessions) setTimeout(() => c.scrollIntoView({ block: 'center', behavior: 'smooth' }), 150);
}

function openLesson(id) {
  const L = LESSONS[id];
  if (!unlocked(id)) { toast('🔒 Schließe zuerst die Lektion davor ab.'); mood('sad', 900); return; }
  const dp = doneParts(id);
  let btns = '';
  if (L.type === 'v') {
    for (let p = 0; p < L.parts; p++) {
      const st = p < dp ? 'done' : p === dp ? '' : 'off';
      btns += `<button class="btn ${p === Math.min(dp, L.parts - 1) ? '' : 'ghost'} ${st}" ${st === 'off' ? 'disabled' : ''} data-a="start" data-id="${id}" data-p="${p}">${p < dp ? '✓ ' : ''}Teil ${p + 1} · Wörter ${p * 10 + 1}–${p * 10 + 10}</button>`;
    }
  } else {
    btns = `<button class="btn" data-a="start" data-id="${id}" data-p="0">${dp ? 'Noch einmal üben' : 'Lektion starten'}</button><button class="btn ghost" data-a="gref" data-id="${id}">Nur die Erklärung lesen</button>`;
  }
  sheet.innerHTML = `<div class="sheet-bg" data-a="close"></div><div class="sheet-card"><div class="sheet-ic">${L.icon}</div><h2>${L.title}</h2><p>${L.type === 'v' ? '20 neue Wörter in 2 kurzen Teilen – mit Beispielsätzen aus dem Alltag.' : L.intro}</p>${btns}</div>`;
  sheet.hidden = false;
}

/* ---------- Übungs-Engine ---------- */
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[¿?¡!.,;:«»"]/g, '').replace(/\s+/g, ' ').trim();
const clean = s => s.toLowerCase().normalize('NFC').replace(/[¿?¡!.,;:«»"]/g, '').replace(/\s+/g, ' ').trim();
const noArt = s => s.replace(/^(el|la|los|las|un|una) /, '');

function mcWord(w, dir) {
  const pool = shuffle(LESSONS[w.lesson].items.filter(x => x !== w && x.de !== w.de && x.es !== w.es)).slice(0, 3);
  return dir === 'es'
    ? { t: 'mc', w, label: 'Was bedeutet das?', prompt: w.es, say: w.es, a: w.de, opts: [w.de, ...pool.map(x => x.de)] }
    : { t: 'mc', w, label: 'Wie heißt das auf Spanisch?', prompt: w.de, a: w.es, opts: [w.es, ...pool.map(x => x.es)], sayA: true };
}
function buildVocab(L, part) {
  const ws = L.items.slice(part * 10, part * 10 + 10), steps = [];
  for (let c = 0; c < 2; c++) {
    const ch = ws.slice(c * 5, c * 5 + 5);
    ch.forEach(w => steps.push({ t: 'intro', w }));
    shuffle(ch).forEach((w, i) => steps.push(mcWord(w, i % 2 ? 'de' : 'es')));
    steps.push({ t: 'match', ws: ch });
  }
  shuffle(ws).slice(0, 4).forEach(w => steps.push({ t: 'type', w }));
  return steps;
}
const gramStep = (g, e) => ({ t: 'mc', cloze: true, label: 'Was passt in die Lücke?', prompt: e.q, a: e.a, opts: e.opts, why: e.why, tag: g.title });
function buildGrammar(g) {
  const steps = [{ t: 'explain', g }];
  const ex = shuffle(g.exs).map(e => gramStep(g, e));
  const ord = g.examples.filter(([es]) => { const n = es.split(' ').length; return n >= 4 && n <= 9; }).slice(0, 2).map(([es, de]) => ({ t: 'order', es, de }));
  ex.splice(3, 0, ...ord.slice(0, 1)); if (ord[1]) ex.push(ord[1]);
  return steps.concat(ex);
}
function buildReview() {
  let ws = shuffle(dueWords()).slice(0, 12);
  if (ws.length < 6) ws = ws.concat(shuffle(Object.keys(state.words).map(id => WORD[id]).filter(w => w && !ws.includes(w))).slice(0, 10 - ws.length));
  return shuffle(ws).map((w, i) => i % 3 === 2 ? { t: 'type', w } : mcWord(w, i % 2 ? 'de' : 'es'));
}
function buildGramMix() {
  const gs = GRAMMAR.filter(g => doneParts(g.id) > 0);
  return shuffle(gs.flatMap(g => g.exs.map(e => gramStep(g, e)))).slice(0, 10);
}

function startSession(steps, meta) {
  S = Object.assign({ steps, i: 0, ok: 0, bad: 0 }, meta);
  clearFx(); sheet.hidden = true; document.body.classList.add('in-sess'); window.scrollTo(0, 0);
  app.innerHTML = `<div class="sess"><div class="sess-top"><button class="x" data-a="quit" aria-label="Beenden">✕</button><div class="bar"><i id="pb"></i></div>${paco('mini')}</div><div class="sess-body" id="sb"></div><div class="sess-foot" id="sf"></div></div>`;
  showStep();
}
function showStep() {
  if (S.i >= S.steps.length) return finish();
  const st = S.steps[S.i];
  $('#pb').style.width = (S.i / S.steps.length * 100) + '%';
  const sb = $('#sb'), sf = $('#sf');
  sb.innerHTML = ''; sf.innerHTML = ''; sf.className = 'sess-foot';
  sb.className = 'sess-body step-' + st.t;
  STEP[st.t](st, sb, sf);
  window.scrollTo(0, 0);
}
const next = () => { S.i++; showStep(); };
function footBtn(label, fn, disabled) {
  const sf = $('#sf'); sf.innerHTML = `<button class="btn" ${disabled ? 'disabled' : ''}>${label}</button>`;
  sf.firstChild.onclick = fn; return sf.firstChild;
}
function srs(id, ok) {
  const r = state.words[id] || (state.words[id] = { b: 0, d: dstr(0) });
  if (ok) { r.b = Math.min(5, r.b + 1); r.d = dstr([0, 1, 2, 4, 8, 16][r.b]); } else { r.b = Math.max(0, Math.min(r.b, 2) - 1); r.d = dstr(0); }
}
function judge(st, ok, info = {}) {
  if (ok) { S.ok++; state.ok++; sfx('ok'); mood('happy'); }
  else { S.bad++; state.bad++; sfx('bad'); mood('sad'); if (!st.retry) S.steps.push(Object.assign({}, st, { retry: true })); }
  if (st.w) srs(st.w.id, ok);
  save();
  const sf = $('#sf'); sf.className = 'sess-foot ' + (ok ? 'ok' : 'bad');
  sf.innerHTML = `<div class="fb"><b>${ok ? pick(PRAISE) : pick(OOPS)}</b>${!ok && info.answer ? `<p>Richtig ist: <strong>${info.answer}</strong></p>` : ''}${info.note ? `<p>${info.note}</p>` : ''}${info.why ? `<p class="why">💡 ${info.why}</p>` : ''}${!ok && !st.retry ? '<p class="again">Das kommt am Ende noch einmal dran.</p>' : ''}</div><button class="btn">Weiter</button>`;
  sf.querySelector('button').onclick = next;
}

const STEP = {
  intro(st, sb) {
    const w = st.w;
    if (!state.words[w.id]) { state.words[w.id] = { b: 0, d: dstr(0) }; save(); }
    sb.innerHTML = `<p class="q-label">✨ Neues Wort</p><div class="card intro"><div class="es">${w.es} ${spk(w.es)}</div><div class="de">${w.de}</div><div class="exs"><span>Beispiel</span><p>${w.ex} ${spk(w.ex)}</p></div></div>`;
    if (state.sound) speak(w.es);
    footBtn('Weiter', next);
  },
  mc(st, sb) {
    const prompt = st.cloze ? esc(st.prompt).replace('___', '<span class="blank">&nbsp;?&nbsp;</span>') : st.prompt;
    sb.innerHTML = `<p class="q-label">${st.label}</p><div class="card q ${st.cloze ? 'cloze' : ''}">${prompt}${st.say ? ' ' + spk(st.say) : ''}</div><div class="opts">${shuffle(st.opts).map(o => `<button class="opt">${o}</button>`).join('')}</div>`;
    if (st.say && state.sound) speak(st.say);
    $$('.opt', sb).forEach(b => b.onclick = () => {
      const ok = b.textContent === st.a;
      $$('.opt', sb).forEach(x => { x.disabled = true; if (x.textContent === st.a) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      if (st.cloze) { $('.blank', sb).textContent = st.a; $('.blank', sb).classList.add('filled'); if (state.sound && !st.prompt.includes('„')) speak(st.prompt.replace('___', st.a).replace(/\s*\([^)]*\)/g, '')); }
      else if (st.sayA && state.sound) speak(st.a);
      judge(st, ok, { answer: st.cloze ? null : st.a, why: st.why });
    });
  },
  type(st, sb) {
    const w = st.w;
    sb.innerHTML = `<p class="q-label">Schreib es auf Spanisch</p><div class="card q">${w.de}</div><input class="inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="auf Spanisch …"><div class="keys">${'áéíóúñü'.split('').map(c => `<button>${c}</button>`).join('')}</div>`;
    const inp = $('.inp', sb), btn = footBtn('Prüfen', check, true);
    inp.oninput = () => btn.disabled = !inp.value.trim();
    inp.onkeydown = e => { if (e.key === 'Enter' && inp.value.trim()) check(); };
    $$('.keys button', sb).forEach(k => k.onclick = () => { inp.value += k.textContent; inp.focus(); btn.disabled = false; });
    setTimeout(() => inp.focus(), 50);
    function check() {
      if (inp.disabled) return;
      inp.disabled = true; $$('.keys button', sb).forEach(k => k.disabled = true);
      const v = inp.value, exact = clean(v) === clean(w.es) || noArt(clean(v)) === noArt(clean(w.es));
      const near = norm(v) === norm(w.es) || noArt(norm(v)) === noArt(norm(w.es));
      inp.classList.add(near ? 'right' : 'wrong');
      if (state.sound) speak(w.es);
      judge(st, near, { answer: w.es, note: near && !exact ? `Fast perfekt – achte auf die Akzente: <strong>${w.es}</strong>` : '' });
    }
  },
  match(st, sb, sf) {
    const L = shuffle(st.ws), R = shuffle(st.ws);
    sb.innerHTML = `<p class="q-label">Finde die Paare</p><div class="match"><div>${L.map(w => `<button class="tile" data-k="${w.id}" data-s="es">${w.es}</button>`).join('')}</div><div>${R.map(w => `<button class="tile" data-k="${w.id}" data-s="de">${w.de}</button>`).join('')}</div></div>`;
    let sel = null, left = st.ws.length;
    $$('.tile', sb).forEach(b => b.onclick = () => {
      if (b.classList.contains('gone')) return;
      if (b.dataset.s === 'es' && state.sound) speak(b.textContent);
      if (!sel || sel.dataset.s === b.dataset.s) { if (sel) sel.classList.remove('sel'); sel = b; b.classList.add('sel'); return; }
      const a = sel; sel = null; a.classList.remove('sel');
      if (a.dataset.k === b.dataset.k) {
        [a, b].forEach(x => x.classList.add('gone')); S.ok++; state.ok++; sfx('ok');
        if (--left === 0) { mood('happy'); sf.className = 'sess-foot ok'; sf.innerHTML = `<div class="fb"><b>${pick(PRAISE)}</b></div><button class="btn">Weiter</button>`; sf.querySelector('button').onclick = next; save(); }
      } else {
        [a, b].forEach(x => { x.classList.add('shake'); setTimeout(() => x.classList.remove('shake'), 450); }); S.bad++; state.bad++; sfx('bad'); mood('sad', 700);
      }
    });
  },
  order(st, sb) {
    const toks = st.es.split(' ');
    sb.innerHTML = `<p class="q-label">Bau den Satz auf Spanisch</p><div class="card q">${st.de}</div><div class="line" id="ln"></div><div class="bank">${shuffle(toks.map((t, i) => [t, i])).map(([t, i]) => `<button class="tok" data-i="${i}">${t}</button>`).join('')}</div>`;
    const ln = $('#ln', sb), bank = $('.bank', sb), btn = footBtn('Prüfen', check, true);
    let locked = false;
    $$('.tok', sb).forEach(b => b.onclick = () => { if (locked) return; (b.parentNode === bank ? ln : bank).append(b); sfx('tap'); btn.disabled = bank.children.length > 0; });
    function check() {
      locked = true;
      const ok = norm([...ln.children].map(b => b.textContent).join(' ')) === norm(st.es);
      ln.classList.add(ok ? 'right' : 'wrong'); if (state.sound) speak(st.es);
      judge(st, ok, { answer: st.es });
    }
  },
  explain(st, sb) {
    sb.innerHTML = explainHTML(st.g);
    footBtn('Verstanden – los geht\'s!', next);
  }
};
function explainHTML(g) {
  return `<div class="gx"><div class="gx-hero"><span>${g.icon}</span><h2>${g.title}</h2><p>${g.intro}</p></div>
  ${g.sections.map(s => `<div class="card"><h3>${s.h}</h3>${s.t}</div>`).join('')}
  <div class="card"><h3>Beispiele aus dem Alltag</h3>${g.examples.map(([es, de]) => `<div class="exr">${spk(es)}<div><b>${es}</b><small>${de}</small></div></div>`).join('')}</div>
  <div class="tip">${paco('mini still')}<p><b>Pacos Tipp:</b> ${g.tip}</p></div></div>`;
}

function finish() {
  const total = S.ok + S.bad, acc = total ? S.ok / total : 1;
  const stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
  const xp = 10 + S.ok + (S.bad === 0 ? 5 : 0);
  const t = dstr(0);
  if (S.lessonId) {
    state.last = S.lessonId;
    const r = state.lessons[S.lessonId] || (state.lessons[S.lessonId] = { done: 0, stars: 0 });
    if (S.part >= r.done) r.done = S.part + 1;
    r.stars = Math.max(r.stars, stars);
  }
  const oldLv = level();
  if (state.lastDay !== t) { state.streak = state.lastDay === dstr(-1) ? state.streak + 1 : 1; state.lastDay = t; }
  state.best = Math.max(state.best, state.streak);
  if (state.dayDate !== t) { state.dayDate = t; state.dayXp = 0; }
  const goalBefore = state.dayXp >= state.goal;
  state.dayXp += xp; state.xp += xp; state.sessions++; if (S.bad === 0) state.perfect++;
  const fresh = checkAch(); save();
  const lvUp = level() > oldLv, goalHit = !goalBefore && state.dayXp >= state.goal;
  const lessonDone = S.lessonId && isDone(S.lessonId);
  const title = S.bad === 0 ? '¡Perfecto! Kein einziger Fehler!' : stars === 3 ? '¡Olé! Starke Runde!' : stars === 2 ? '¡Muy bien! Gut gemacht!' : '¡Hecho! Geschafft!';
  document.body.classList.add('in-sess');
  app.innerHTML = `<div class="result">${paco('party')}<h1>${title}</h1>
  <div class="stars">${[1, 2, 3].map(i => `<span class="${i <= stars ? 'on' : ''}" style="animation-delay:${i * 0.18}s">★</span>`).join('')}</div>
  <div class="tiles"><div><b>+${xp}</b><small>XP</small></div><div><b>${Math.round(acc * 100)}%</b><small>Richtig</small></div><div><b>🔥 ${state.streak}</b><small>Tage-Serie</small></div></div>
  ${lvUp ? `<div class="banner">🎉 Level ${level()} erreicht: <b>${levelName()}</b></div>` : ''}
  ${goalHit ? `<div class="banner">✅ Tagesziel geschafft!</div>` : ''}
  ${S.lessonId && !lessonDone ? `<div class="banner soft">Teil ${S.part + 1} von ${LESSONS[S.lessonId].parts} erledigt – weiter so!</div>` : ''}
  ${fresh.map(([ic, n, d]) => `<div class="banner gold">${ic} Neuer Erfolg: <b>${n}</b><small>${d}</small></div>`).join('')}
  <button class="btn" data-a="tab" data-t="${S.lessonId ? 'home' : 'practice'}">Weiter</button></div>`;
  sfx('win'); confetti(); mood('party', 0);
}

/* ---------- Üben ---------- */
function vPractice() {
  const due = dueWords().length, ln = learned(), gs = GRAMMAR.filter(g => doneParts(g.id) > 0).length;
  const boxes = [0, 0, 0, 0, 0, 0]; Object.keys(state.words).forEach(id => { if (WORD[id]) boxes[state.words[id].b]++; });
  const mx = Math.max(1, ...boxes);
  app.innerHTML = topbar() + `<h1 class="h">Üben</h1>
  <button class="pcard a" data-a="review" ${ln < 5 ? 'disabled' : ''}><span>🔁</span><div><b>Vokabel-Training</b><small>${ln < 5 ? 'Lerne zuerst ein paar Wörter im Lernpfad.' : due ? `${due} ${due === 1 ? 'Wort ist' : 'Wörter sind'} heute fällig` : 'Nichts fällig – freie Runde zum Auffrischen'}</small></div>${due ? `<em>${due}</em>` : ''}</button>
  <button class="pcard b" data-a="grammix" ${gs ? '' : 'disabled'}><span>🧩</span><div><b>Grammatik-Mix</b><small>${gs ? `10 gemischte Aufgaben aus ${gs} ${gs === 1 ? 'Lektion' : 'Lektionen'}` : 'Schließe zuerst eine Grammatik-Lektion ab.'}</small></div></button>
  <div class="card"><h3>Dein Wortgedächtnis</h3><p class="muted">Jedes richtige Wort wandert eine Stufe höher und kommt in größeren Abständen wieder. So bleibt es im Kopf.</p>
  <div class="boxes">${boxes.map((n, i) => `<div><i style="height:${Math.round(n / mx * 100)}%"></i><b>${n}</b><small>${['neu', '1 T.', '2 T.', '4 T.', '8 T.', 'sicher'][i]}</small></div>`).join('')}</div></div>`;
}

/* ---------- Nachschlagen ---------- */
function vRef() {
  app.innerHTML = topbar() + `<h1 class="h">Nachschlagen</h1><div class="seg"><button class="${refMode === 'w' ? 'on' : ''}" data-a="refmode" data-t="w">Wörter</button><button class="${refMode === 'g' ? 'on' : ''}" data-a="refmode" data-t="g">Grammatik</button></div><div id="rb"></div>`;
  const rb = $('#rb');
  if (refMode === 'g') {
    rb.innerHTML = GRAMMAR.map(g => `<button class="row" data-a="gref" data-id="${g.id}"><span>${g.icon}</span><div><b>${g.title}</b><small>${g.intro}</small></div>${isDone(g.id) ? '<em>✓</em>' : ''}</button>`).join('');
    return;
  }
  rb.innerHTML = `<input class="inp search" type="search" placeholder="Wort suchen (Spanisch oder Deutsch) …"><div id="wl"></div>`;
  const draw = q => {
    q = norm(q);
    $('#wl').innerHTML = VOCAB.map(l => {
      const ws = l.items.filter(w => !q || norm(w.es).includes(q) || norm(w.de).includes(q));
      if (!ws.length) return '';
      return `<h3 class="wl-h">${l.icon} ${l.title}</h3>` + ws.map(w => { const r = state.words[w.id]; return `<div class="wrow">${spk(w.es)}<div><b>${w.es}</b><small>${w.de}</small></div><span class="dots" title="Lernstufe">${r ? '●'.repeat(Math.max(1, r.b)) : ''}</span></div>`; }).join('');
    }).join('') || '<p class="muted center">Nichts gefunden.</p>';
  };
  draw(''); $('.search').oninput = e => draw(e.target.value);
}
function vGref(id) {
  sheet.hidden = true; S = null; document.body.classList.add('in-sess'); window.scrollTo(0, 0);
  app.innerHTML = `<div class="sess"><div class="sess-top"><button class="x" data-a="tab" data-t="${tab}" aria-label="Zurück">←</button><b class="sess-title">Grammatik</b></div><div class="sess-body">${explainHTML(LESSONS[id])}</div><div class="sess-foot"><button class="btn" data-a="start" data-id="${id}" data-p="0">Jetzt üben</button></div></div>`;
}

/* ---------- Profil ---------- */
function vProfile() {
  const tot = state.ok + state.bad, into = state.xp % 250;
  app.innerHTML = topbar() + `<section class="prof">${paco()}<h1>Level ${level()}</h1><p>${levelName()}</p><div class="bar"><i style="width:${into / 250 * 100}%"></i></div><small>Noch ${250 - into} XP bis Level ${level() + 1}</small></section>
  <div class="tiles four"><div><b>${learned()}</b><small>Wörter gelernt</small></div><div><b>${mastered()}</b><small>sicher im Kopf</small></div><div><b>${GRAMMAR.filter(g => isDone(g.id)).length}/${GRAMMAR.length}</b><small>Grammatik</small></div><div><b>${tot ? Math.round(state.ok / tot * 100) : 0}%</b><small>Trefferquote</small></div><div><b>🔥 ${streakNow()}</b><small>Serie</small></div><div><b>${state.best}</b><small>Rekord-Serie</small></div></div>
  <div class="card"><h3>Erfolge · ${Object.keys(state.ach).length}/${ACH.length}</h3><div class="ach">${ACH.map(([id, ic, n, d]) => `<div class="${state.ach[id] ? 'on' : ''}"><span>${ic}</span><b>${n}</b><small>${d}</small></div>`).join('')}</div></div>
  <div class="card set"><h3>Einstellungen</h3>
   <label><span>Ton & Aussprache</span><input type="checkbox" data-set="sound" ${state.sound ? 'checked' : ''}></label>
   <label><span>Alle Lektionen freischalten</span><input type="checkbox" data-set="unlock" ${state.unlock ? 'checked' : ''}></label>
   <label><span>Tagesziel</span><select data-set="goal">${[[20, 'Locker · 20 XP'], [50, 'Normal · 50 XP'], [100, 'Ehrgeizig · 100 XP'], [150, 'Toro bravo · 150 XP']].map(([v, l]) => `<option value="${v}" ${state.goal == v ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
   <button class="btn ghost" data-a="export">Fortschritt sichern (Datei)</button>
   <button class="btn ghost" data-a="import">Sicherung einspielen</button>
   <button class="btn ghost danger" data-a="reset">Fortschritt zurücksetzen</button>
   <p class="muted">Dein Fortschritt wird automatisch auf diesem Gerät gespeichert. Mit einer Sicherung kannst du ihn auf ein anderes Gerät mitnehmen.</p></div>`;
}

/* ---------- Aktionen ---------- */
const ACT = {
  tab: d => go(d.t),
  lesson: d => openLesson(d.id),
  close: () => { sheet.hidden = true; },
  start: d => { const L = LESSONS[d.id], p = +d.p; startSession(L.type === 'v' ? buildVocab(L, p) : buildGrammar(L), { lessonId: d.id, part: p }); },
  gref: d => vGref(d.id),
  quit: () => { if (confirm('Runde wirklich beenden? Der Fortschritt dieser Runde geht verloren.')) go(tab); },
  speak: d => speak(d.t),
  review: () => startSession(buildReview(), {}),
  grammix: () => startSession(buildGramMix(), {}),
  refmode: d => { refMode = d.t; vRef(); },
  poke: (d, el) => {
    if (el.classList.contains('mini')) return;
    const [es, de] = pick(POKES); mood('happy'); sfx('ok'); speak(es);
    const b = $('.bubble'); if (b) b.innerHTML = `<b>${es}</b> ${de}`; else toast(`🐂 <b>${es}</b> ${de}`);
  },
  export: () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(state)], { type: 'application/json' }));
    a.download = 'paco-fortschritt-' + dstr(0) + '.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  },
  import: () => {
    const f = document.createElement('input'); f.type = 'file'; f.accept = '.json,application/json';
    f.onchange = () => { const r = new FileReader(); r.onload = () => { try { const s = JSON.parse(r.result); if (typeof s.xp !== 'number' || typeof s.words !== 'object') throw 0; state = Object.assign(def(), s); save(); toast('✅ Sicherung eingespielt'); render(); } catch (e) { toast('⚠️ Diese Datei ist keine gültige Paco-Sicherung.'); } }; if (f.files[0]) r.readAsText(f.files[0]); };
    f.click();
  },
  reset: () => { if (confirm('Wirklich den gesamten Fortschritt löschen? Das kann nicht rückgängig gemacht werden.')) { state = def(); save(); go('home'); } }
};
document.addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (b && !b.disabled && ACT[b.dataset.a]) ACT[b.dataset.a](b.dataset, b); });
document.addEventListener('change', e => {
  const k = e.target.dataset && e.target.dataset.set; if (!k) return;
  state[k] = e.target.type === 'checkbox' ? e.target.checked : +e.target.value; save();
});
if ('speechSynthesis' in window) speechSynthesis.getVoices();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
render();
})();

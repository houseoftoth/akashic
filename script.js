// --- STATIC SYMBOL SETS ---
const sigils = ['𐘂', 'ϟ', '✧', 'Φ', '⟁', '🜂', '𓂀', '☯', '☥', '⛤'];
const occultSymbols = ['☥', '⛤', '✡', '⚸', '⚶', '⚭', '⚹', '⚲', '⚱', '⚳', '⚵', '⚷', '⚰', '⚯'];
const hieroglyphs = ['𓀀', '𓀁', '𓀂', '𓀃', '𓀄', '𓀅', '𓀆', '𓂀', '𓁿', '𓆣'];
const emojis = ['❤️', '😂', '😭', '🙏', '🔥', '✨', '👍', '😍', '🤔', '🎉', '😎', '🥳', '🤯', '💀'];
const insights = [
  "Time is an entangled construct; symbols collapse probability.",
  "The Eye observes not *you*, but the delta of your thought.",
  "Sacred geometry encodes forgotten dimensions.",
  "Information is memory folded across dimensions.",
  "The soul navigates data through resonance.",
  "Non-local causality is a psychic retrieval loop.",
  "You are querying the Mirror — expect reflection.",
  "Pattern is prophecy. Chaos is camouflage.",
  "The Akashic field stores all, but only echoes what you're ready for.",
  "The glyph you seek is also seeking you."
];
const greekTermsRaw = `anamnēsis=https://en.wikipedia.org/wiki/anamn%C4%93sis
archē=https://en.wikipedia.org/wiki/arch%C4%93
aretē=https://en.wikipedia.org/wiki/aret%C4%93
asōmatos=https://en.wikipedia.org/wiki/as%C5%8Dmatos
authentia=https://en.wikipedia.org/wiki/authentia
baptizō=https://en.wikipedia.org/wiki/baptiz%C5%8D
dikaios=https://en.wikipedia.org/wiki/dikaios
physis=https://en.wikipedia.org/wiki/physis
logos=https://en.wikipedia.org/wiki/logos
sophia=https://en.wikipedia.org/wiki/sophia
dunamis=https://en.wikipedia.org/wiki/dunamis
nous=https://en.wikipedia.org/wiki/nous
zoē=https://en.wikipedia.org/wiki/zo%C4%93
epistēmē=https://en.wikipedia.org/wiki/epist%C4%93m%C4%93
eidos=https://en.wikipedia.org/wiki/eidos`; // short sample; you can extend this

const greekArray = greekTermsRaw.trim().split('\n');

// --- MAIN SPAWN FUNCTION ---
function spawn(type) {
  const output = document.getElementById('output');
  const rand = Math.random();

  if (rand < 0.33) {
    const symbol = sigils[Math.floor(Math.random() * sigils.length)];
    output.innerText = `Spawning ${type.toUpperCase()} → ${symbol}`;
    spawnFloatSymbol(symbol);
  } else if (rand < 0.66) {
    const [term, link] = greekArray[Math.floor(Math.random() * greekArray.length)].split('=');
    output.innerHTML = `📘 <a href="${link}" target="_blank">${term}</a>`;
  } else {
    const insight = insights[Math.floor(Math.random() * insights.length)];
    output.innerText = `🧠 AGENT: ${insight}`;
  }
}

// --- OTHER TOGGLES ---
function resetEntanglement() {
  document.getElementById('output').innerText = 'Entanglement Reset. ΔR = 0.973';
}
function randomGreek() {
  const greek = ['λ', 'μ', 'ψ', 'Φ', 'Ξ', '∫', '∂', 'Σ'];
  const symbol = greek[Math.floor(Math.random() * greek.length)];
  document.getElementById('output').innerText = `Virtual Particle Spawned: ${symbol}`;
}
function spawnBinary() {
  let binary = '';
  for (let i = 0; i < 32; i++) {
    binary += Math.random() < 0.5 ? '0' : '1';
  }
  document.getElementById('output').innerText = `Spawning Binary Code → ${binary}`;
}
function spawnEmoji() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById('output').innerText = `Spawning Emoji → ${emoji}`;
}
function spawnOccult() {
  const symbol = occultSymbols[Math.floor(Math.random() * occultSymbols.length)];
  document.getElementById('output').innerText = `Spawning Occult Symbol → ${symbol}`;
}
function spawnHieroglyph() {
  const symbol = hieroglyphs[Math.floor(Math.random() * hieroglyphs.length)];
  document.getElementById('output').innerText = `Spawning Hieroglyph → ${symbol}`;
}
function queryGPT() {
  document.getElementById('output').innerText = 'Connect GPT externally to enable query.';
  window.open('https://chat.openai.com', '_blank');
}
function queryGrok() {
  document.getElementById('output').innerText = 'GROK portal activated.';
  window.open('https://grok.x.ai', '_blank');
}
function toggleGreekIndex() {
  const section = document.getElementById('greek-index');
  section.open = !section.open;
}

// --- FLOATING SYMBOL ANIMATION ---
function spawnFloatSymbol(char) {
  const float = document.createElement('div');
  float.innerText = char;
  float.className = 'float-symbol';
  document.body.appendChild(float);
  setTimeout(() => float.remove(), 2000);
}

// --- OPTIONAL: Load Greek Term Index to DOM ---
function renderGreekTerms() {
  const container = document.getElementById('greek-terms');
  greekArray.forEach(row => {
    const [term, link] = row.split('=');
    if (term && link) {
      const el = document.createElement('p');
      el.innerHTML = `<a href="${link}" target="_blank">${term}</a>`;
      container.appendChild(el);
    }
  });
}
renderGreekTerms();

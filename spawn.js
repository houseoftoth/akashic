function spawn(type) {
  const output = document.getElementById('output');
  const rand = Math.random();

  if (rand < 0.3) {
    // 30% chance – show sigil
    const particle = sigils[Math.floor(Math.random() * sigils.length)];
    output.innerText = `Spawning ${type.toUpperCase()} → ${particle}`;
  } else if (rand < 0.6) {
    // 30% chance – show random Greek term + link
    const greekArray = greekTerms.trim().split('\n');
    const pick = greekArray[Math.floor(Math.random() * greekArray.length)];
    const [term, link] = pick.split('=');
    output.innerHTML = `📘 <a href="${link}" target="_blank">${term}</a>`;
  } else {
    // 40% chance – show agent AI insight
    const message = insights[Math.floor(Math.random() * insights.length)];
    output.innerText = `🧠 AGENT: ${message}`;
  }
}

// ===== COZY SOUND =====
const audio = new Audio("mp3/3 Min Timer music bird, relax music with nature sounds in the forest for work and study - Relaxing Music Panda.mp3");
document.getElementById("playSound").onclick = () => audio.play();
document.getElementById("pauseSound").onclick = () => audio.pause();

// ===== FIRST PAGE CONTENT =====
const bookSelect = document.getElementById("bookSelect");
const bookContent = document.getElementById("bookContent");

// ===== BOOK DATA (ORIGINAL OPENING-STYLE SUMMARIES) =====
const bookPages = {

  "bridgerton": `
The carriage slowed as it entered the quiet street, lantern light reflecting softly against polished windows and painted doors. London society was waking to another season of introductions, expectations, and unspoken rules. Every family understood the performance required of them, and every young woman knew the weight of being observed. Reputation was not simply earned; it was protected carefully, sometimes at great cost.

Daphne Bridgerton had grown up watching this world from the inside. She understood how conversations could sparkle while hiding disappointment, and how smiles often concealed calculation. Though surrounded by comfort and affection, she felt the pressure of being perfectly suitable—never too bold, never too distant. The world expected her to fit neatly into a future chosen more by tradition than desire.

Simon Basset arrived carrying a different kind of attention. His presence stirred curiosity, admiration, and quiet speculation. Yet beneath his composed exterior lay a firm refusal to be drawn into society’s expectations. He had learned early that promises could be dangerous and attachments even more so.

As their paths cross, an arrangement forms—logical, controlled, and beneficial to both. Yet the closer they stand, the more difficult it becomes to separate performance from truth. This opening sets the stage for a romance shaped by restraint, vulnerability, and the slow unraveling of carefully built walls.
`,

  "oxford-dictionary": `
Language surrounds us constantly, shaping how we think long before we become aware of it. Every word spoken carries history, influence, and intention. This book opens not with a narrative, but with an invitation—to understand language as something alive, evolving with each generation that uses it.

Words are not fixed objects. They grow, change meaning, fall out of use, and return unexpectedly. Some are borrowed from distant cultures, others formed through necessity, invention, or emotion. The dictionary captures these transformations, offering a record of how humans communicate ideas, feelings, and discoveries across time.

This opening encourages readers to slow down and observe language carefully. To trace a word’s origin is to uncover how societies once lived, what they valued, and how they expressed their world. Even simple terms hold complex histories, shaped by migration, conflict, and creativity.

Rather than overwhelming the reader, the beginning invites curiosity. Each entry becomes a doorway into understanding—not only of language itself, but of the people who shaped it. This book presents language as a shared human achievement, quietly connecting past and present through meaning.
`,

  "not-hoarder": `
You are not broken, and your space is not a failure. This book opens with reassurance rather than instruction, understanding that clutter is often tied to emotion rather than habit. Objects carry memories, comfort, and sometimes guilt. Letting go is rarely about discipline—it is about safety and trust.

The opening chapters focus on awareness instead of action. Why do certain items feel impossible to release? Why does clutter sometimes feel protective rather than chaotic? These questions are explored gently, without judgment. The book emphasizes that progress does not require dramatic change, only honest reflection.

Small steps are celebrated. One surface cleared. One item released with intention. The reader is reminded that their pace matters, and comparison serves no purpose. Healing environments grow slowly, shaped by kindness rather than pressure.

This opening establishes a calm, compassionate tone. It encourages readers to view their relationship with possessions as part of a larger emotional story—one that deserves patience, understanding, and care.
`,

  "shadow-wind": `
The morning Daniel discovered the forgotten bookshop, the city felt unusually quiet. Narrow streets curved away from familiar paths, leading him to a door that seemed to wait rather than welcome. Inside, the air smelled of dust, paper, and something older—memory, perhaps.

Books lined the walls from floor to ceiling, each carrying a history beyond its cover. The shopkeeper spoke little, yet watched carefully, as though measuring Daniel’s presence against the stories surrounding them. One book, in particular, seemed to pull Daniel forward, its title whispering rather than calling.

As Daniel begins reading, he is drawn into a story tangled with loss, love, and danger. The deeper he goes, the more he realizes the book mirrors something unresolved within himself. Secrets surface—not only within the pages, but within the city itself.

This opening introduces a mystery shaped by literature, memory, and the quiet power of stories to change lives.
`,

  "hobbit": `
In a peaceful place where routine ruled and comfort was valued above all else, adventure felt unnecessary. Days passed predictably, filled with familiar meals and familiar views. Yet beyond this safety lay a world of paths untaken and stories waiting to unfold.

When an unexpected visitor arrives, the quiet rhythm of life begins to shift. Questions arise where certainty once lived. Though reluctance follows every step, curiosity slowly pushes forward, challenging comfort with possibility.

This opening captures the moment before change—the hesitation, the fear, and the quiet excitement of leaving what is known. It reminds the reader that courage often begins as uncertainty, and that even the smallest individual can step into something much larger than themselves.
`,

  "norwegian-wood": `
Memory has a way of returning without warning. A song, a place, or a passing thought can pull the past sharply into the present. This story opens with reflection, examining how love and loss shape a person long after moments have passed.

The narrator looks back on youth with quiet honesty, acknowledging moments of connection and isolation. Relationships form not through grand gestures, but through shared silence and vulnerability. Joy and sadness exist side by side, neither fully separate.

This opening establishes a deeply personal tone. It invites readers to consider how people carry emotional weight, and how growing older often means learning to live with what cannot be changed.
`,

  "notebook": `
Some stories begin loudly. This one begins gently, with memory unfolding like pages turned slowly by hand. The past is recalled not with urgency, but with care, shaped by love that refuses to fade.

Two lives, once intertwined, drift apart under the pressure of circumstance and time. Yet memory holds them together, preserving moments of tenderness and promise. This opening reflects on devotion—not as perfection, but as persistence.

The reader is invited into a story where love is measured not by ease, but by endurance. It sets the foundation for a romance defined by patience, remembrance, and quiet strength.
`,

  "hound-baskervilles": `
The mystery begins not with fear, but with curiosity. An isolated landscape stretches wide, holding secrets beneath its silence. Stories circulate—some logical, others unsettling—yet none fully explain what has been seen.

An investigation unfolds carefully, guided by observation rather than impulse. Details matter. Footsteps, expressions, and timing all become pieces of a larger puzzle. Suspicion grows not through violence, but through uncertainty.

This opening establishes a methodical approach to mystery, inviting readers to think alongside the investigator, questioning appearances and searching for truth hidden behind superstition.
`,

  "old-man-sea": `
The sea stretches endlessly, calm yet unforgiving. Each morning, a man prepares his small boat with quiet determination, guided by habit rather than hope. Though success has not come easily, he continues—driven by pride and persistence.

This opening reflects on endurance and dignity. The struggle is not against nature, but alongside it. The man understands the sea as both opponent and companion, respecting its power while refusing to surrender.

The story begins with simplicity, allowing the weight of experience to speak softly. It invites readers into a meditation on effort, resilience, and the meaning found in perseverance.
`

};


bookSelect.addEventListener("change", function () {
  if (!this.value) {
    bookContent.style.display = "none";
    return;
  }
  bookContent.textContent = bookPages[this.value];
  bookContent.style.display = "block";
});

// ===== COMPLETED BOOKS (localStorage) =====
const input = document.getElementById("bookInput");
const addBtn = document.getElementById("addBook");
const list = document.getElementById("completedList");

let completed = JSON.parse(localStorage.getItem("completedBooks")) || [];

completed.forEach(book => {
  const li = document.createElement("li");
  li.textContent = book;
  list.appendChild(li);

  // remove after 5 seconds
setTimeout(function () {
  li.remove();
}, 5000);

});



addBtn.addEventListener("click", function () {
  const bookName = input.value.trim();
  if (!bookName) return alert("Please enter a book name");

  completed.push(bookName);
  localStorage.setItem("completedBooks", JSON.stringify(completed));

  const li = document.createElement("li");
  li.textContent = bookName;
  list.appendChild(li);
  input.value = "";
});

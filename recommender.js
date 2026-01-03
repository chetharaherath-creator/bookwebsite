// ===== BOOK DATA (JSON) =====
const books = [
  // ORIGINAL
  { title: "Sahara", genre: "travel", pages: 320 },
  { title: "Quiet Magic", genre: "fantasy", pages: 350 },
  { title: "Library Nights", genre: "fiction", pages: 210 },
  { title: "You're Not a Hoarder", genre: "selfhelp", pages: 280 },

  // ROMANCE
  { title: "The Summer I Turned Pretty", genre: "romance", pages: 304 },
  { title: "Bridgerton: The Duke and I", genre: "romance", pages: 432 },
  { title: "The Notebook", genre: "romance", pages: 272 },
  { title: "Twisted Love", genre: "romance", pages: 464 },
  { title: "10 Things I Hate About You", genre: "romance", pages: 320 },
  { title: "How to Lose a Guy in 10 Days", genre: "romance", pages: 288 },
  { title: "The Holiday Trap", genre: "romance", pages: 352 },

  // FICTION / CLASSICS
  { title: "Hamlet", genre: "fiction", pages: 160 },
  { title: "Romeo and Juliet", genre: "fiction", pages: 176 },
  { title: "The Prince and the Pauper", genre: "fiction", pages: 192 },
  { title: "Macbeth", genre: "fiction", pages: 144 },
  { title: "Little Women", genre: "fiction", pages: 449 },
  { title: "The Great Gatsby", genre: "fiction", pages: 180 },
  { title: "The Jungle Book", genre: "fiction", pages: 224 },

  // SELF-HELP
  { title: "Rich Dad Poor Dad", genre: "selfhelp", pages: 336 },

  // REFERENCE
  { title: "Oxford English Dictionary", genre: "reference", pages: 1200 },
  { title: "Encyclopedia of Science", genre: "reference", pages: 950 },
  { title: "Atlas of the World", genre: "reference", pages: 600 },
  { title: "Medical Encyclopedia", genre: "reference", pages: 800 },
  { title: "History of Civilizations", genre: "reference", pages: 700 },
  { title: "Physics Handbook", genre: "reference", pages: 520 },
  { title: "Chemistry Handbook", genre: "reference", pages: 540 },
  { title: "Biology Reference", genre: "reference", pages: 560 },
  { title: "Engineering Reference", genre: "reference", pages: 650 },
  { title: "Law Encyclopedia", genre: "reference", pages: 900 }
];

// ===== ELEMENTS =====
const genreSelect = document.getElementById("genreSelect");
const lengthSelect = document.getElementById("lengthSelect");
const recommendBtn = document.getElementById("recommendBtn");
const resultBox = document.getElementById("recommendResult");
const pickAgainBtn = document.getElementById("pickAgainBtn");
const saveBtn = document.getElementById("saveRecommendBtn");

let currentBook = null;

// ===== FUNCTION TO RECOMMEND BOOK =====
function recommendBook() {

  const genre = genreSelect.value;
  const length = lengthSelect.value;

  const filtered = books.filter(function (book) {

    const genreMatch = (genre === "all" || book.genre === genre);

    let lengthMatch = true;
    if (length === "short") lengthMatch = book.pages < 250;
    if (length === "medium") lengthMatch = book.pages >= 250 && book.pages <= 350;
    if (length === "long") lengthMatch = book.pages > 350;

    return genreMatch && lengthMatch;
  });

  if (filtered.length === 0) {
    resultBox.textContent = "No books found. Try different options.";
    resultBox.style.display = "block";
    pickAgainBtn.style.display = "none";
    saveBtn.style.display = "none";
    return;
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  currentBook = filtered[randomIndex];

  resultBox.innerHTML =
    "<strong>Recommended Book:</strong><br>" +
    currentBook.title;

  resultBox.style.display = "block";
  pickAgainBtn.style.display = "block";
  saveBtn.style.display = "block";
}

// ===== BUTTON EVENTS =====
recommendBtn.addEventListener("click", recommendBook);
pickAgainBtn.addEventListener("click", recommendBook);

// ===== SAVE TO LOCAL STORAGE =====
saveBtn.addEventListener("click", function () {

  if (!currentBook) return;

  let list = JSON.parse(localStorage.getItem("readingList")) || [];
  list.push(currentBook);

  localStorage.setItem("readingList", JSON.stringify(list));

  alert("Book saved to your reading list!");
});

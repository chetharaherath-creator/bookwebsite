document.addEventListener('DOMContentLoaded', function () {

  /* ========== BOOK DATA (like RECIPES) ========== */
  const BOOKS = [
{
  id: "bridgerton",
  title: "Bridgerton: The Duke and I",
  author: "Julia Quinn",
  desc: "A Regency-era romance filled with secrets, gossip, and high society drama.",
  category: "romance",
  mood: "Romantic and dramatic",
  img: "image/11.jpg",
  reasons: [
    "Perfect for romance lovers",
    "Strong characters and emotional tension",
    "Easy, engaging storytelling"
  ],
  readers: [
    "Love romance novels",
    "Enjoy historical settings",
    "Like emotional, dramatic stories"
  ],
  details: {
    Genre: "Romance",
    Pages: "432",
    "Reading time": "Approx. 7–8 hours",
    "Best time to read": "Evenings"
  }
},


{
  id: "oxford-dictionary",
  title: "Oxford English Dictionary",
  author: "Oxford University Press",
  desc: "A comprehensive reference for the English language.",
  category: "reference",
  mood: "Informative and academic",
  img: "image/20.jpg",
  reasons: [
    "Helpful for writing and studies",
    "Trusted reference source",
    "Clear definitions"
  ],
  readers: [
    "Students",
    "Writers",
    "Researchers"
  ],
  details: {
    Genre: "Reference",
    Pages: "1200",
    "Reading time": "Reference use",
    "Best time to read": "When studying"
  }
},


    {
      id: 'not-hoarder',
      title: "You're Not a Hoarder",
      author: 'Anna Wells',
      desc: 'Clear your space gently.',
      category: 'selfhelp',
      mood: 'Comforting and kind',
      img: 'image/12.jpg',
      reasons: [
        'Very soft, non-judging tone',
        'Helps you start with tiny steps',
        'Focuses on feelings, not only things'
      ],
      readers: [
        'Feel overwhelmed by clutter',
        'Want their room to feel lighter',
        'Need encouragement, not pressure'
      ],
      details: {
        Genre: 'Self-help',
        Pages: '280',
        'Reading time': 'Approx. 6 hours',
        'Best time to read': 'Evenings with tea',
      }
    },

   {
  id: 'library-nights',
  title: 'The Shadow of the Wind',
  author: 'Carlos Ruiz Zafón',
  desc: 'A mysterious story centered around books and hidden secrets.',
  category: 'fiction',
  mood: 'Cozy and nostalgic',
  img: 'image/13.jpg',
  reasons: [
    'Strong love for books and libraries',
    'Atmospheric and emotional storytelling',
    'A classic comfort read'
  ],
  readers: [
    'Love bookish settings',
    'Enjoy slow, emotional fiction',
    'Want a deep story before sleep'
  ],
  details: {
    Genre: 'Fiction',
    Pages: '487',
    'Reading time': 'Approx. 9–10 hours',
    'Best time to read': 'Night',
  }
},

{
  id: 'quiet-magic',
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  desc: 'A gentle fantasy adventure through magical lands.',
  category: 'fantasy',
  mood: 'Magical but gentle',
  img: 'image/14.jpg',
  reasons: [
    'Classic fantasy without heavy violence',
    'Beautiful world-building',
    'Easy to follow story'
  ],
  readers: [
    'New to fantasy',
    'Love magical journeys',
    'Enjoy timeless classics'
  ],
  details: {
    Genre: 'Fantasy',
    Pages: '310',
    'Reading time': 'Approx. 7 hours',
    'Best time to read': 'Rainy afternoons',
  }
},

{
  id: 'coffee-notes',
  title: 'Norwegian Wood',
  author: 'Haruki Murakami',
  desc: 'A reflective novel about love, loss, and everyday moments.',
  category: 'fiction',
  mood: 'Light and chatty',
  img: 'image/15.jpg',
  reasons: [
    'Short, emotional chapters',
    'Very relatable inner thoughts',
    'Calm and reflective tone'
  ],
  readers: [
    'Enjoy quiet novels',
    'Like café-style reading',
    'Prefer realistic fiction'
  ],
  details: {
    Genre: 'Fiction',
    Pages: '296',
    'Reading time': 'Approx. 6 hours',
    'Best time to read': 'Evenings',
  }
},

{
  id: 'city-stars',
  title: 'The Notebook',
  author: 'Nicholas Sparks',
  desc: 'A timeless love story about fate and devotion.',
  category: 'romance',
  mood: 'Soft, dreamy love story',
  img: 'image/16.jpg',
  reasons: [
    'Emotional but simple romance',
    'Very popular classic love story',
    'Easy to connect with characters'
  ],
  readers: [
    'Love emotional romance',
    'Want a heartfelt story',
    'Enjoy classic love novels'
  ],
  details: {
    Genre: 'Romance',
    Pages: '272',
    'Reading time': 'Approx. 5 hours',
    'Best time to read': 'Night',
  }
},

{
  id: 'forest-whispers',
  title: 'The Hound of the Baskervilles',
  author: 'Arthur Conan Doyle',
  desc: 'A mysterious investigation set in a dark countryside.',
  category: 'mystery',
  mood: 'Calm but a bit spooky',
  img: 'image/17.jpg',
  reasons: [
    'Classic mystery',
    'No gore or horror',
    'Atmospheric setting'
  ],
  readers: [
    'Love classic mysteries',
    'Enjoy suspense without fear',
    'Like detective stories'
  ],
  details: {
    Genre: 'Mystery',
    Pages: '256',
    'Reading time': 'Approx. 5 hours',
    'Best time to read': 'Cloudy evenings',
  }
},

{
  id: 'ocean-stories',
  title: 'The Old Man and the Sea',
  author: 'Ernest Hemingway',
  desc: 'A simple yet powerful story set by the sea.',
  category: 'fantasy',
  mood: 'Relaxing, watery feeling',
  img: 'image/18.jpg',
  reasons: [
    'Strong ocean setting',
    'Very calm and reflective',
    'Short and meaningful'
  ],
  readers: [
    'Love sea stories',
    'Want a peaceful read',
    'Prefer short classics'
  ],
  details: {
    Genre: 'Literary fiction',
    Pages: '127',
    'Reading time': 'Approx. 3 hours',
    'Best time to read': 'Late afternoon',
  }
}

  ];

  /* ========== RENDER CARDS ========== */
  const grid = document.getElementById('bookGrid');

  function renderCards(list) {
    grid.innerHTML = '';

    list.forEach(function (b) {
      const card = document.createElement('article');
      card.className = 'book-card';

      card.innerHTML = `
        <img src="${b.img}" alt="${b.title} cover">
        <h3>${b.title}</h3>
        <p class="book-author">by ${b.author}</p>
        <p class="book-desc">${b.desc}</p>
        <button class="btn-primary btn big" data-open="${b.id}">View Details</button>
      `;

      grid.appendChild(card);
    });
  }

  renderCards(BOOKS);

  /* ========== SEARCH + FILTERS ========== */
  let activeFilter = 'all';
  const chips = document.querySelectorAll('.chip');
  const searchInput = document.getElementById('bookSearch');

  function applyFilters() {
    const q = (searchInput?.value || '').toLowerCase().trim();

    const filtered = BOOKS.filter(function (b) {
      const byCat = (activeFilter === 'all') || (b.category === activeFilter);
      const byText =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.desc.toLowerCase().includes(q);

      return byCat && byText;
    });

    renderCards(filtered);
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');

      activeFilter = chip.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  /* ========== MODAL ========== */
  const modal         = document.getElementById('bookModal');
  const modalImg      = document.getElementById('modalImg');
  const modalTitle    = document.getElementById('modalTitle');
  const modalDesc     = document.getElementById('modalDesc');
  const modalCategory = document.getElementById('modalCategory');
  const modalMood     = document.getElementById('modalMood');
  const modalReasons  = document.getElementById('modalReasons');
  const modalReaders  = document.getElementById('modalReaders');
  const modalDetails  = document.getElementById('modalDetails');

  function openModal(id) {
    const b = BOOKS.find(function (x) { return x.id === id; });
    if (!b) return;

    modalImg.src = b.img;
    modalImg.alt = b.title + ' cover';
    modalTitle.textContent = b.title;
    modalDesc.textContent  = b.desc;
    modalCategory.textContent = b.category;
    modalMood.textContent     = b.mood;

    modalReasons.innerHTML = b.reasons.map(function (r) {
      return '<li>' + r + '</li>';
    }).join('');

    modalReaders.innerHTML = b.readers.map(function (r) {
      return '<li>' + r + '</li>';
    }).join('');

    modalDetails.innerHTML = Object.keys(b.details).map(function (key) {
      return '<tr><td><strong>' + key + '</strong></td><td>' + b.details[key] + '</td></tr>';
    }).join('');

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }

  // open modal when clicking "View Details"
  grid.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-open]');
    if (!btn) return;
    e.preventDefault();
    openModal(btn.getAttribute('data-open'));
  });

  // close modal when clicking backdrop or ×
  modal.addEventListener('click', function (e) {
    if (e.target.getAttribute('data-close')) {
      closeModal();
    }
  });

  // close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

});

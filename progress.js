document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("calcBtn");
  const saveBtn = document.getElementById("saveProgressBtn");
  const resultBox = document.getElementById("trackerResult");

  // ===== CALCULATE BUTTON =====
  button.addEventListener("click", function () {

    const total = Number(document.getElementById("totalPages").value);
    const read = Number(document.getElementById("pagesRead").value);
    const perDay = Number(document.getElementById("pagesPerDay").value);

    if (total <= 0 || read < 0 || perDay <= 0) {
      alert("Please enter numbers in all fields");
      return;
    }

    if (read > total) {
      alert("Pages read cannot be more than total pages");
      return;
    }

    const percent = Math.round((read / total) * 100);
    const daysLeft = Math.ceil((total - read) / perDay);

    resultBox.innerHTML =
      "Progress: <strong>" + percent + "%</strong><br>" +
      "Days left: <strong>" + daysLeft + "</strong>";

    resultBox.style.display = "block";
  });

  // ===== SAVE BUTTON =====
  saveBtn.addEventListener("click", function () {

    const total = document.getElementById("totalPages").value;
    const read = document.getElementById("pagesRead").value;
    const perDay = document.getElementById("pagesPerDay").value;

    if (!total || !read || !perDay) {
      alert("Please calculate progress before saving.");
      return;
    }

    const progressData = {
      totalPages: total,
      pagesRead: read,
      pagesPerDay: perDay
    };

    localStorage.setItem("readingProgress", JSON.stringify(progressData));

    alert("Reading progress saved!");
  });

  // ===== LOAD SAVED DATA ON PAGE LOAD =====
  const saved = localStorage.getItem("readingProgress");

  if (saved) {
    const data = JSON.parse(saved);

    document.getElementById("totalPages").value = data.totalPages;
    document.getElementById("pagesRead").value = data.pagesRead;
    document.getElementById("pagesPerDay").value = data.pagesPerDay;
  }

});

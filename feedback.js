// ===== FEEDBACK =====
const submitBtn = document.getElementById("submitFeedback");
const resultBox = document.getElementById("feedbackResult");

submitBtn.addEventListener("click", function () {

  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return;
  }

  let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

  feedbackList.push({
    name: name,
    email: email,
    message: message
  });

  localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

  resultBox.textContent = "Thank you for your feedback!";
  resultBox.style.display = "block";

  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("messageInput").value = "";
});

// ===== FAQ ACCORDION =====
const questions = document.querySelectorAll(".faq-question");

questions.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

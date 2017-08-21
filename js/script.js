var link = document.querySelector(".contacts-map .btn");
var popup = document.querySelector(".modal-content");

var feedbackEmail = popup.querySelector("[name=feedback-email]");
var feedbackText = popup.querySelector("textarea");
var feedbackName = popup.querySelector("[name=feedback-name]");
var feedbackForm = popup.querySelector("form");

var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
  feedbackName.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});

feedbackForm.addEventListener("submit", function() {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  }
});

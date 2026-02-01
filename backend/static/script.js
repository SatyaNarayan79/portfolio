function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.style.color = "red";
    msg.innerText = "All fields are required!";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Message sent successfully!";
  this.reset();
});

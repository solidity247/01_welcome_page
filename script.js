const nameForm = document.getElementById("askNameForm");
const nameFormContainer = document.getElementById("nameFormContainer");
const welcomeContainer = document.getElementById("welcomeContainer");
const welcomeMessage = document.getElementById("welcomeMessage");

nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = document.getElementById("nameInput").value.trim();
  welcomeMessage.innerText = handleInput(userName);
  hideForm();
});

function hideForm() {
  nameFormContainer.style.display = "none";
  welcomeContainer.style.display = "block";
}

function handleInput(input) {
  // TODO:
}

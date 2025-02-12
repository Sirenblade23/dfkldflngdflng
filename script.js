// Messages for each rock
const messages = {
  rock1: " You’re a stinker, you should prolly take a bath",
  rock2:
    "Your corny jokes are so funny, maybe not to everyone else but they are to me",
  rock3:
    "Since we both know your gonna be alone on valentine, i thought id give you a little present.",
  rock4:
    "You’re the only person i know that would watch youtube videos to get better at fortnite",
  rock5:
    "Thank you for being such a good friend to me, and always being here for me when you need me, i promise i’ll be here for you no matter what",
};

function showMessage(rockId) {
  const messageBox = document.getElementById("messageBox");
  const messageText = document.getElementById("messageText");

  messageText.textContent = messages[rockId];

  // Get the position of the clicked rock
  const rock = document.getElementById(rockId);
  const rockRect = rock.getBoundingClientRect();

  const messageBoxWidth = messageBox.offsetWidth;
  messageBox.style.top = `${rockRect.bottom + 10}px`;
  messageBox.style.left = `${
    rockRect.left + rockRect.width / 2 - messageBox.offsetWidth / 2
  }px`;

  messageBox.style.display = "block";
}

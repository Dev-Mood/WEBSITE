const output = document.getElementById("output");
const input = document.getElementById("input");

const greetings = ["Hello!", "Hi there!", "Hey!"];
const responses = {
  "How are you?": "I'm doing well, thank you for asking!",
  "What's your name?": "My name is Chatbot.",
  "What website provide a tutorial of programming languages?": "Thank you for messaging us. Please visit w3schools.com if you want to learn programming language.",
  "Goodbye": "Goodbye! It was nice talking to you."
};

function sendMessage() {
  const message = input.value;
  input.value = "";
  output.innerHTML += `<div class="user-message"><strong style="color: blue;">You:</strong> ${message}</div>`;
 output.innerHTML += `<div class="chatbot-message"><strong style="color: red;">Chatbot:</strong> ${getReply(message)}</div>`;
  output.scrollTop = output.scrollHeight;
}

function getReply(message) {
  message = message.toLowerCase();
  for (const key in responses) {
    if (message.includes(key.toLowerCase())) {
      return responses[key];
    }
  }
  return "I'm sorry, I don't understand. Can you please try asking another question?";
}

input.addEventListener("keydown", function(event) {
  if (event.code === "Enter" && input.value !== "") {
    sendMessage();
  }
});

output.innerHTML += `<div><strong style="color: red;">Chatbot:</strong> ${greetings[Math.floor(Math.random() * greetings.length)]}</div>`;
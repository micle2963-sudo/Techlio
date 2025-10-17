// Elements
const chatHeader = document.createElement("div");
const chatBody = document.createElement("div");
const chatWidget = document.createElement("div");
const chatMessages = document.createElement("div");
const chatInput = document.createElement("input");

// Setup HTML structure dynamically
chatWidget.id = "chat-widget";
chatHeader.id = "chat-header";
chatHeader.innerText = "Techlio Assistant";
chatBody.id = "chat-body";
chatBody.style.display = "none";
chatInput.id = "chat-input";
chatInput.placeholder = "Type your question...";
chatMessages.id = "chat-messages";

chatBody.appendChild(chatMessages);
chatBody.appendChild(chatInput);
chatWidget.appendChild(chatHeader);
chatWidget.appendChild(chatBody);
document.body.appendChild(chatWidget);

// Toggle chat open/close
chatHeader.addEventListener("click", () => {
    chatBody.style.display = chatBody.style.display === "flex" ? "none" : "flex";
    chatBody.style.flexDirection = "column";
});

// Send message on Enter
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
        const userMessage = chatInput.value.trim();
        appendMessage(userMessage, "user");
        chatInput.value = "";
        botReply(userMessage);
    }
});

// Append message to chat
function appendMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender === "user" ? "user-msg" : "bot-msg");
    msg.innerText = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Bot reply (demo)
function botReply(userMessage) {
    let reply = "Sorry, I cannot answer that right now.";
    if (userMessage.toLowerCase().includes("ai")) reply = "Check out our latest AI articles!";
    else if (userMessage.toLowerCase().includes("gadgets")) reply = "Top 10 gadgets are featured on our homepage!";
    else if (userMessage.toLowerCase().includes("software")) reply = "We have detailed software guides available.";

    setTimeout(() => {
        appendMessage(reply, "bot");
    }, 800);
}

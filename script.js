document.addEventListener("DOMContentLoaded", () => {
    // Explore Button Interaction on Homepage
    const exploreButton = document.getElementById("exploreButton");
    if (exploreButton) {
      exploreButton.addEventListener("click", () => {
        alert("Welcome to the One Piece universe! Get ready to explore amazing characters and stories.");
        window.location.href = "characters.html";
      });
    }
  
    // Toggle Light/Dark Mode
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Light/Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.backgroundColor = "#f39c12";
    toggleButton.style.color = "#000";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        toggleButton.style.backgroundColor = "#2c3e50";
        toggleButton.style.color = "#fff";
        alert("Light mode activated!");
      } else {
        toggleButton.style.backgroundColor = "#f39c12";
        toggleButton.style.color = "#000";
        alert("Dark mode activated!");
      }
    });
  
    // Add Event Listeners to Character Cards
    const characterCards = document.querySelectorAll(".character-card");
    characterCards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.1)";
        card.style.transition = "transform 0.3s ease-in-out";
      });
  
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
      });
  
      card.addEventListener("click", () => {
        const characterName = card.querySelector("h3").textContent;
        alert(You clicked on ${characterName}!);
      });
    });
  
    // Dynamically Add Random Quotes
    const quotes = [
      "“I'm going to be the Pirate King!” - Luffy",
      "“If you don't take risks, you can't create a future.” - Zoro",
      "“I want to live!” - Robin",
      "“Miracles only happen to those who never give up.” - Nami",
      "“Power comes in response to a need, not a desire.” - Cosmos",
    ];
  
    const quoteSection = document.createElement("div");
    quoteSection.style.position = "fixed";
    quoteSection.style.bottom = "50px";
    quoteSection.style.right = "10px";
    quoteSection.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    quoteSection.style.color = "white";
    quoteSection.style.padding = "10px";
    quoteSection.style.borderRadius = "5px";
    quoteSection.style.textAlign = "center";
    quoteSection.style.maxWidth = "250px";
    document.body.appendChild(quoteSection);
  
    function displayRandomQuote() {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteSection.textContent = randomQuote;
    }
  
    setInterval(displayRandomQuote, 5000); // Display a new quote every 5 seconds
    displayRandomQuote();
  });
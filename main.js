// Create floating hearts animation
function createHearts() {
  const heartsContainer = document.querySelector('.hearts');
  const heartSymbols = ['❤️', '💖', '💝', '💕'];
  
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = (Math.random() * 1 + 0.5) + 'em';
    heartsContainer.appendChild(heart);
  }
}

createHearts();
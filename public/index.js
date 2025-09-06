// Clean version with typing animation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sam Hopper - Clean landing page with typing animation');
    
    // Add typing effect to name
    addTypingEffect();
});

function addTypingEffect() {
    const nameElement = document.querySelector('h1');
    if (!nameElement) return;
    
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    
    // Add cursor
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = `
        animation: blink 1s infinite;
        color: #000;
        font-weight: bold;
    `;
    
    // Add blinking cursor animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    let index = 0;
    const typeWriter = () => {
        if (index < originalText.length) {
            nameElement.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 150); // Slightly slower for cleaner effect
        } else {
            nameElement.appendChild(cursor);
            setTimeout(() => {
                cursor.remove();
            }, 3000);
        }
    };
    
    // Start typing effect immediately
    setTimeout(typeWriter, 500);
}
// Simple hero with typing animation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sam Hopper - Simple hero with typing');
    addTypingEffect();
});

function addTypingEffect() {
    const nameElement = document.querySelector('.hero-content h1');
    if (!nameElement) return;

    const originalText = nameElement.textContent;

    // Create invisible placeholder to maintain layout
    const placeholder = document.createElement('span');
    placeholder.textContent = originalText;
    placeholder.style.visibility = 'hidden';
    placeholder.style.position = 'absolute';

    // Clear visible text but keep placeholder for layout
    nameElement.textContent = '';
    nameElement.appendChild(placeholder);

    // Container for visible text
    const visibleText = document.createElement('span');
    nameElement.appendChild(visibleText);

    let index = 0;
    const typeWriter = () => {
        if (index < originalText.length) {
            visibleText.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        } else {
            placeholder.remove();
        }
    };

    setTimeout(typeWriter, 500);
}
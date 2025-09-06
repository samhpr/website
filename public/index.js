// Modern interactive features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sam Hopper Portfolio - Interactive version loaded!');
    
    // Animate list items with staggered delay
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.style.setProperty('--animation-order', index);
    });
    
    // Add smooth scroll behavior for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Create floating particles background effect
    createFloatingParticles();
    
    // Add interactive hover effects to links
    addInteractiveLinkEffects();
    
    // Add typing effect to name
    addTypingEffect();
});

function createFloatingParticles() {
    const particleCount = 20;
    const body = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            animation: float ${5 + Math.random() * 10}s infinite linear;
            left: ${Math.random() * 100}vw;
            animation-delay: ${Math.random() * 5}s;
        `;
        body.appendChild(particle);
    }
    
    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function addInteractiveLinkEffects() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

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
        color: #667eea;
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
            setTimeout(typeWriter, 100);
        } else {
            nameElement.appendChild(cursor);
            setTimeout(() => {
                cursor.remove();
            }, 3000);
        }
    };
    
    // Start typing effect after initial animation
    setTimeout(typeWriter, 1000);
}
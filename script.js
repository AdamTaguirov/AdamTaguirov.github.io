// Terminal typing effect for the name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add blinking cursor after typing
            element.innerHTML += '<span class="cursor">_</span>';
        }
    }
    
    type();
}

// Matrix-style background effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px Fira Code';
        
        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
}

// Add glitch effect to status indicators
function addGlitchEffect() {
    const statusElements = document.querySelectorAll('.status');
    
    statusElements.forEach(status => {
        setInterval(() => {
            if (Math.random() < 0.1) {
                status.style.textShadow = '2px 0 #ff0040, -2px 0 #00ffff';
                setTimeout(() => {
                    status.style.textShadow = 'none';
                }, 100);
            }
        }, 2000);
    });
}

// Terminal cursor blinking animation
function addCursorBlink() {
    const style = document.createElement('style');
    style.textContent = `
        .cursor {
            animation: blink 1s infinite;
            color: #00ff41;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add cursor blinking styles
    addCursorBlink();
    
    // Type the name with effect
    const nameElement = document.querySelector('.name');
    const originalName = nameElement.textContent;
    setTimeout(() => {
        typeWriter(nameElement, originalName, 80);
    }, 500);
    
    // Start matrix background
    setTimeout(() => {
        createMatrixRain();
    }, 1000);
    
    // Add glitch effects
    setTimeout(() => {
        addGlitchEffect();
    }, 1500);
    
    // Example: Set Europol logo with a blue square

    setEuropolLogo('europol_logo.png');
    setPJLogo('pj_logo.jpg');
    setQuarksLabLogo('quarkslab_logo.jpg');
    setOrangeLogo('orange_logo.png');
    setDigitalSecurityLogo('digital_security_logo.png');
    setPhoto('me.png');

    // Work status is now just a display element, not interactive



    // Add scan line effect occasionally
    setInterval(() => {
        if (Math.random() < 0.3) {
            const scanLine = document.createElement('div');
            scanLine.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #00ff41, transparent);
                animation: scan 2s linear;
                z-index: 9999;
                pointer-events: none;
            `;
            
            const scanKeyframes = `
                @keyframes scan {
                    0% { top: 0; opacity: 1; }
                    100% { top: 100vh; opacity: 0; }
                }
            `;
            
            if (!document.querySelector('#scan-style')) {
                const scanStyle = document.createElement('style');
                scanStyle.id = 'scan-style';
                scanStyle.textContent = scanKeyframes;
                document.head.appendChild(scanStyle);
            }
            
            document.body.appendChild(scanLine);
            
            setTimeout(() => {
                document.body.removeChild(scanLine);
            }, 2000);
        }
    }, 8000);
});

// Handle window resize for matrix effect
window.addEventListener('resize', function() {
    const canvas = document.getElementById('matrix-bg');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Functions to set images for logos from files
function setPhoto(imagePath) {
    const photoElement = document.querySelector('.photo-placeholder');
    if (photoElement && imagePath) {
        photoElement.style.backgroundImage = `url(${imagePath})`;
    }
}

function setEuropolLogo(imagePath) {
    const logoElement = document.querySelector('.logo-placeholder.europol');
    if (logoElement && imagePath) {
        logoElement.style.backgroundImage = `url(${imagePath})`;
    }
}

function setPJLogo(imagePath) {
    const logoElement = document.querySelector('.logo-placeholder.pj');
    if (logoElement && imagePath) {
        logoElement.style.backgroundImage = `url(${imagePath})`;
    }
}

function setQuarksLabLogo(imagePath) {
    const logoElement = document.querySelector('.logo-placeholder-small.quarkslab');
    if (logoElement && imagePath) {
        logoElement.style.backgroundImage = `url(${imagePath})`;
    }
}

function setOrangeLogo(imagePath) {
    const logoElement = document.querySelector('.logo-placeholder-small.orange');
    if (logoElement && imagePath) {
        logoElement.style.backgroundImage = `url(${imagePath})`;
    }
}

function setDigitalSecurityLogo(imagePath) {
    const logoElement = document.querySelector('.logo-placeholder-small.digital');
    if (logoElement && imagePath) {
        logoElement.style.backgroundImage = `url(${imagePath})`;
    }
}

 
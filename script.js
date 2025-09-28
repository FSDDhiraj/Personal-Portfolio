 window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.menu-overlay');

        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on overlay
        overlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            this.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active link highlighting
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
document.addEventListener('DOMContentLoaded', function() {
    // Matrix Effect
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    
    const alphabet = katakana + latin + nums + symbols;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    const rainDrops = [];
    
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#64ffda';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    
    setInterval(draw, 30);
    
    // Floating code snippets
    const snippets = document.querySelectorAll('.snippet');
    snippets.forEach(snippet => {
        setTimeout(() => {
            snippet.style.opacity = '0.7';
        }, parseInt(snippet.style.animationDelay || 0) * 1000);
    });
    
    // Terminal typing effect
    const terminalLines = [
        { text: "npm init -y", output: "Initialized empty npm package" },
        { text: "git init", output: "Initialized empty Git repository" },
        { text: "code .", output: "Opening VS Code..." }
    ];
    
    let currentLine = 0;
    const terminalBody = document.querySelector('.terminal-body');
    const blinkCursor = document.querySelector('.blink');
    
    function typeTerminal() {
        if (currentLine < terminalLines.length) {
            const line = terminalLines[currentLine];
            const prompt = document.createElement('p');
            prompt.className = 'terminal-line';
            prompt.innerHTML = `<span class="prompt">$</span> <span class="command">${line.text}</span>`;
            
            terminalBody.insertBefore(prompt, blinkCursor);
            
            setTimeout(() => {
                const output = document.createElement('p');
                output.className = 'terminal-output';
                output.textContent = line.output;
                terminalBody.insertBefore(output, blinkCursor);
                currentLine++;
                setTimeout(typeTerminal, 1000);
            }, 1000);
        }
    }
    
    setTimeout(typeTerminal, 2000);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const textArray = ["web applications", "scalable APIs", "responsive UIs", "MERN stack apps"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 1500;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 100);
        }
    }
    
    // Start animation
    setTimeout(type, 1500);
    
    // Animate name letters
    const nameLetters = document.querySelectorAll('.name-letter');
    nameLetters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`;
    });
});
// ScrollReveal Animations
ScrollReveal().reveal('.hero-content > *', { 
    delay: 300,
    distance: '50px',
    origin: 'left',
    interval: 100
});

ScrollReveal().reveal('.hero-image', { 
    delay: 500,
    distance: '50px',
    origin: 'right'
});

ScrollReveal().reveal('.section-title, .section-subtitle', {
    delay: 200,
    distance: '20px',
    origin: 'top'
});

ScrollReveal().reveal('.about-content, .skills-grid, .achievements-grid, .certificates-carousel', {
    delay: 300,
    distance: '30px',
    origin: 'bottom',
    interval: 100
});

ScrollReveal().reveal('.footer-col', {
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    interval: 100
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.innerHTML = '<span>Message Sent!</span>';
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = '<span>Send Message</span><svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';
        }, 2000);
    });
}
// Enhanced name hover effect
const nameLetters = document.querySelectorAll('.hero-name span');

nameLetters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.style.transform = 'translateY(-5px) scale(1.1)';
        letter.style.textShadow = '0 0 10px rgba(157, 80, 187, 0.7)';
        letter.style.color = 'white';
    });
    
    letter.addEventListener('mouseout', () => {
        letter.style.transform = '';
        letter.style.textShadow = '';
        letter.style.color = '';
    });
});

  // Animate honeycomb cards on scroll
   // Animate honeycomb on scroll
   document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.honeycomb-cell');
    const staggerDelay = 100;
    
    const animateHoneycomb = () => {
      cells.forEach((cell, index) => {
        setTimeout(() => {
          cell.classList.add('animate');
        }, index * staggerDelay);
      });
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateHoneycomb();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(document.querySelector('.skills-section'));
  });
  
  // Add connection glow on hover
  document.querySelectorAll('.honeycomb-cell').forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      cell.style.filter = 'drop-shadow(0 0 8px var(--glow))';
      const nextCell = cell.nextElementSibling;
      if (nextCell) {
        nextCell.style.filter = 'drop-shadow(0 0 8px var(--glow))';
      }
    });
    
    cell.addEventListener('mouseleave', () => {
      cell.style.filter = 'none';
      const nextCell = cell.nextElementSibling;
      if (nextCell) {
        nextCell.style.filter = 'none';
      }
    });
  });
  // Add this to your existing script.js
function initSkillGalaxy() {
  const galaxy = document.querySelector('.galaxy-container');
  const planets = document.querySelectorAll('.skill-planet');
  
  // Make orbits rotate continuously
  const orbits = document.querySelectorAll('.orbit');
  orbits.forEach(orbit => {
      const duration = orbit.classList.contains('orbit-1') ? 20 : 
                       orbit.classList.contains('orbit-2') ? 30 : 40;
      orbit.style.animationDuration = `${duration}s`;
  });
  
  // Parallax effect on mouse move
  galaxy.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = galaxy.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      planets.forEach(planet => {
          const speed = planet.closest('.orbit-1') ? 0.05 : 
                       planet.closest('.orbit-2') ? 0.03 : 0.02;
          planet.style.transform = `translate(calc(${x * speed * 100}px + ${planet.style.transform.split('translate(')[1]}`;
      });
  });
  
  // Click effect
  planets.forEach(planet => {
      planet.addEventListener('click', () => {
          planet.classList.add('clicked');
          setTimeout(() => {
              planet.classList.remove('clicked');
          }, 1000);
      });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSkillGalaxy);


// Auto-sliding Carousel with Navigation - Working Version
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.certificate-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }

    // Setup dot navigation
    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        currentIndex = parseInt(this.getAttribute('data-index'));
        updateCarousel();
        resetAutoSlide();
      });
    });

    // Auto-slide functionality
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    // Start auto-sliding
    startAutoSlide();

    // Pause on hover
    const carousel = document.querySelector('.certificate-carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carousel.addEventListener('mouseleave', startAutoSlide);
  });

// Footer Animation & Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Set current year
  document.querySelector('.current-year').textContent = new Date().getFullYear();
  
  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      const submitBtn = contactForm.querySelector('.submit-btn');
      submitBtn.innerHTML = '<span>Message Sent!</span>';
      
      // Reset form after delay
      setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = '<span>Send Message</span><svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';
      }, 2000);
    });
  }
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);
  
  const footer = document.querySelector('.animated-footer');
  if (footer) {
    footerObserver.observe(footer);
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.skill-cell');
    
    cells.forEach(cell => {
      cell.addEventListener('mouseenter', function() {
        const level = this.getAttribute('data-level');
        const levelBar = this.querySelector('.skill-level');
        levelBar.style.setProperty('--level-width', `${level}%`);
      });
    });
  });

//Project Popups
function showPopup(projectId) {
    document.getElementById(`${projectId}-popup`).classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    document.querySelectorAll('.popup-overlay').forEach(popup => {
      popup.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
  }

  // Close popup when clicking outside content
  document.querySelectorAll('.popup-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) {
        closePopup();
      }
    });
  });

  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });
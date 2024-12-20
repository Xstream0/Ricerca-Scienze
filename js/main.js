// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe all content sections
document.querySelectorAll('.content-section').forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});

// Planet information
const planetInfo = {
    mercurio: {
        name: 'Mercurio',
        description: 'Il pianeta più piccolo e vicino al Sole.',
        tipo: 'Pianeta roccioso'
    },
    venere: {
        name: 'Venere',
        description: 'Simile alla Terra per dimensioni, ma con atmosfera tossica e temperature estremamente elevate',
        tipo: 'Pianeta roccioso'
    },
    terra: {
        name: 'Terra',
        description: 'Unico pianeta conosciuto con vita e ricco di acqua allo stato liquido.',
        tipo: 'Pianeta roccioso'
    },
    marte: {
        name: 'Marte',
        description: 'Chiamato anche "pianeta rosso", con vulcani e possibili tracce di acqua.',
        tipo: 'Pianeta roccioso'
    },
    giove: {
        name: 'Giove',
        description: 'Il più grande, con una grande macchia rossa.',
        tipo: 'Pianeta gassoso'
    },
    saturno: {
        name: 'Saturno',
        description: 'Famoso per i suoi anelli.',
        tipo: 'Pianeta gassoso'
    },
    urano: {
        name: 'Urano',
        description: 'Un gigante ghiacciato inclinato su un lato.',
        tipo: 'Pianeta gassoso'
    },
    nettuno: {
        name: 'Nettuno',
        description: 'Un altro gigante ghiacciato.',
        tipo: 'Pianeta gassoso'
    },
    
    // Add more planets...
};

// Add click event listeners to planet cards
document.querySelectorAll('.planet-card').forEach(card => {
    card.addEventListener('click', function() {
        const planetId = this.id;
        const planet = planetInfo[planetId];
        
        if (planet) {
            alert(`${planet.name}\n${planet.description}\nTipo: ${planet.tipo}`);
        }
    });
});
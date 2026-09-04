/*
   El scroll del header y el menú mobile ya se manejan en el
   <script> inline de cada página (evita declarar las mismas
   variables dos veces en el scope global).
*/

// ======================
// REVEAL ON SCROLL
// ======================

const autoReveals = document.querySelectorAll(
    '.service-card,.event-card,.gallery-item,.cta-box,.info-card,.menu-section,.service-item,.chip'
);

const directionalReveals = document.querySelectorAll(
    '.reveal,.reveal-left,.reveal-right,.reveal-zoom'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.15
});

autoReveals.forEach(el => {

    el.classList.add('reveal');

    observer.observe(el);

});

directionalReveals.forEach(el => {

    observer.observe(el);

});

// ======================
// 3D HOVER CARDS
// ======================

const cards = document.querySelectorAll(
    '.service-card,.event-card'
);

cards.forEach(card => {

    card.addEventListener('mousemove',(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (
            (x / rect.width) - .5
        ) * 18;

        const rotateX = (
            (.5 - y / rect.height)
        ) * 18;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener('mouseleave',()=>{

        card.style.transform='';

    });

});

// ======================
// PARTICLES
// ======================

const particles = document.getElementById('particles');

if(particles){

    for(let i=0;i<45;i++){

        const p = document.createElement('span');

        p.classList.add('particle');

        p.style.left =
        Math.random()*100 + '%';

        p.style.animationDuration =
        (8 + Math.random()*15) + 's';

        p.style.animationDelay =
        Math.random()*5 + 's';

        p.style.width =
        (2 + Math.random()*4) + 'px';

        p.style.height =
        p.style.width;

        particles.appendChild(p);

    }

}

// ======================
// CURSOR GLOW
// ======================

const glow = document.createElement('div');

glow.classList.add('cursor-glow');

document.body.appendChild(glow);

window.addEventListener('mousemove',(e)=>{

    glow.style.left =
    e.clientX + 'px';

    glow.style.top =
    e.clientY + 'px';

});

const galleryImages =
document.querySelectorAll(".gallery-item");

const galleryModal =
document.getElementById("galleryModal");

const galleryModalImg =
document.getElementById("galleryModalImg");

const galleryClose =
document.querySelector(".gallery-close");

if(galleryModal && galleryModalImg && galleryClose){

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            galleryModal.classList.add("show");

            galleryModalImg.src = img.src;

        });

    });

    galleryClose.addEventListener("click", () => {

        galleryModal.classList.remove("show");

    });

    galleryModal.addEventListener("click", (e) => {

        if(e.target === galleryModal){

            galleryModal.classList.remove("show");

        }

    });

}
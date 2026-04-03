/* ════════════════════════════════════════
   BEZBARUAH WEAVING CENTER — script.js
   ════════════════════════════════════════ */

'use strict';

// ── Product Data ──────────────────────────────────────────────────────────────
const products = [
  {
    id: 0,
    name: 'Assamese Dora Gamusa Japi Design',
    category: 'Womenswear',
    price: '₹1500',
    material: 'White Barnali Silk',
    description: 'Crafted from premium white Barnali silk, this Gamusa features elegant Japi-inspired motifs that celebrate Assamese tradition. Lightweight, refined, and culturally rich — a true symbol of heritage.',
    images: [
      'https://i.postimg.cc/NGXJ0h36/Gemini-Generated-Image-qah97hqah97hqah9.png?w=800&q=80',
      'https://i.postimg.cc/1X8vG2X9/Gemini-Generated-Image-805gl5805gl5805g.png?w=800&q=80',
      'https://i.postimg.cc/NGXJ0h36/Gemini-Generated-Image-qah97hqah97hqah9.png?w=800&q=80',
    ]
  },
  {
    id: 1,
    name: 'Assamese Dora Gamusa ( ',
    category: 'Womenswear',
    price: '₹1450',
    material: 'White Barnali Silk',
    description: 'Crafted from premium white Barnali silk, this Gamusa features elegant Japi-inspired motifs that celebrate Assamese tradition. Lightweight, refined, and culturally rich — a true symbol of heritage.',
    images: [
      'https://i.postimg.cc/2yB9hM9G/Gemini-Generated-Image-3g6ddv3g6ddv3g6d.png?w=800&q=80',
      'https://i.postimg.cc/kGfGNYVr/Gemini-Generated-Image-ap3db2ap3db2ap3d.png?w=800&q=80',
      'https://i.postimg.cc/2yB9hM9G/Gemini-Generated-Image-3g6ddv3g6ddv3g6d.png?w=800&q=80',
    ]
  },
  {
    id: 2,
    name: 'Assamese Dora Gamusa',
    category: 'Menswear',
    price: '₹1500',
    material: 'White Barnali Silk',
    description: 'Crafted from premium white Barnali silk, this Gamusa features elegant Japi-inspired motifs that celebrate Assamese tradition. Lightweight, refined, and culturally rich — a true symbol of heritage.',
    images: [
      'https://i.postimg.cc/L5WKMGhW/Gemini-Generated-Image-7cp2ur7cp2ur7cp2.png?w=800&q=80',
      'https://i.postimg.cc/85hjcBLW/Gemini-Generated-Image-sf5znysf5znysf5z.png?w=800&q=80',
      'https://i.postimg.cc/L5WKMGhW/Gemini-Generated-Image-7cp2ur7cp2ur7cp2.png?w=800&q=80',
    ]
  },
  {
    id: 3,
    name: 'Traditional Dora Gamosa',
    category: 'Gamusa',
    price: '₹1500',
    material: 'White Barnali Silk',
    description: 'Crafted from premium white Barnali silk, this Gamusa features elegant Barfi-inspired motifs that celebrate Assamese tradition. Lightweight, refined, and culturally rich — a true symbol of heritage.',
    images: [
      'https://i.postimg.cc/nc52vp6K/Gemini-Generated-Image-j1rwjqj1rwjqj1rw-2.jpg?w=800&q=80',
      'https://i.postimg.cc/7YLt3Bbw/Gemini-Generated-Image-5dw2tm5dw2tm5dw2-2.jpg?w=800&q=80',
      'https://i.postimg.cc/nc52vp6K/Gemini-Generated-Image-j1rwjqj1rwjqj1rw-2.jpg?w=800&q=80',
    ]
  },
  {
    id: 4,
    name: 'Tradional Dora Gamusa (Mogor)',
    category: 'Dora Gamusa',
    price: '₹1499',
    material: 'White Barnali Silk',
    description: 'Crafted from premium white Barnali Paat, this Gamusa features elegant Mogor-inspired motifs that celebrate Assamese tradition. Lightweight, refined, and culturally rich — a true symbol of heritage.',
    images: [
      'https://i.postimg.cc/y8cGxDky/Gemini-Generated-Image-sy6k3ssy6k3ssy6k.png?w=800&q=80',
      'https://i.postimg.cc/WbDCRWVG/Gemini-Generated-Image-mmtii4mmtii4mmti.png?w=800&q=80',
      'https://i.postimg.cc/y8cGxDky/Gemini-Generated-Image-sy6k3ssy6k3ssy6k.png?w=800&q=80',
    ]
  },
  {
    id: 5,
    name: 'Barnali Paat Gamusa',
    category: 'Dora Gamusa',
    price: '₹1500',
    material: 'White Barnali Silk',
    description: 'Crafted from premium white Barnali silk, this Gamusa features elegant Japi-inspired motifs that celebrate Assamese tradition. Lightweight, refined, and culturally rich — a true symbol of heritage.',
    images: [
      'https://i.postimg.cc/dVnTFBJJ/Gemini-Generated-Image-f5gsv6f5gsv6f5gs.png?w=800&q=80',
      'https://i.postimg.cc/k59t3p0y/Gemini-Generated-Image-vugvyqvugvyqvugv.png?w=800&q=80',
      'https://i.postimg.cc/dVnTFBJJ/Gemini-Generated-Image-f5gsv6f5gsv6f5gs.png?w=800&q=80',
    ]
  },
  {
    id: 6,
    name: 'Handwoven Silk Stole',
    category: 'Accessories',
    price: '₹2,200',
    material: 'Eri & Pat Silk Blend',
    description: 'A versatile silk stole woven in a blend of Eri and Pat silk, combining the softness of the former with the sheen of the latter. The ombre dye — transitioning from ivory to deep saffron — is achieved entirely using natural plant dyes sourced from the Assamese forests.',
    images: [
      'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=800&q=80',
      'https://images.unsplash.com/photo-1558618047-f4e60cba3c06?w=800&q=80',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80',
    ]
  },
  {
    id: 7,
    name: 'Embroidered Riha Set',
    category: 'Womenswear',
    price: '₹9,600',
    material: 'Pat Silk with Cotton',
    description: 'The Riha is the upper garment in the traditional three-piece Assamese female attire. This set features dense hand-embroidered floral motifs in gold and red thread work, known locally as "komola phul" — orange flower patterns. A timeless ensemble for weddings and Bihu.',
    images: [
      'https://images.unsplash.com/photo-1610047803562-7260ebe516c2?w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80',
      'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
    ]
  }
];

// ── DOM Elements ──────────────────────────────────────────────────────────────
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');
const mobileLinks = document.querySelectorAll('.mobile-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const productGrid = document.getElementById('productGrid');
const productCards = document.querySelectorAll('.product-card');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose  = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// ── Sticky Navbar ─────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Hamburger Menu ────────────────────────────────────────────────────────────
hamburger.addEventListener('click', () => {
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
});
mobileClose.addEventListener('click', closeMobileNav);
mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

function closeMobileNav() {
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Category Filter ───────────────────────────────────────────────────────────
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      const cat = card.dataset.category;
      const show = filter === 'all' || cat === filter;
      card.classList.toggle('hidden', !show);
      // Re-trigger fade for visible cards
      if (show) {
        card.classList.remove('visible');
        requestAnimationFrame(() => {
          setTimeout(() => card.classList.add('visible'), 50);
        });
      }
    });
  });
});

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in, .fade-up').forEach(el => {
  revealObserver.observe(el);
});

// ── Modal ─────────────────────────────────────────────────────────────────────
let currentImages = [];
let currentImgIndex = 0;

productCards.forEach(card => {
  card.addEventListener('click', () => {
    const productId = parseInt(card.dataset.product);
    openModal(productId);
  });
});

function openModal(id) {
  const p = products[id];
  if (!p) return;

  currentImages = p.images;
  currentImgIndex = 0;

  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalDesc').textContent = p.description;
  document.getElementById('modalMaterial').textContent = p.material;
  document.getElementById('modalMainImg').src = p.images[0];
  document.getElementById('modalMainImg').alt = p.name;

  // Thumbs
  const thumbsEl = document.getElementById('modalThumbs');
  thumbsEl.innerHTML = '';
  p.images.forEach((src, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'modal-thumb' + (i === 0 ? ' active' : '');
    thumb.innerHTML = `<img src="${src}" alt="${p.name} view ${i+1}"/>`;
    thumb.addEventListener('click', () => switchModalImage(i));
    thumbsEl.appendChild(thumb);
  });

  // Enquire button closes modal + scrolls
  const enquireBtn = document.getElementById('modalEnquireBtn');
  enquireBtn.onclick = (e) => {
    e.preventDefault();
    closeModal();
    setTimeout(() => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchModalImage(index) {
  currentImgIndex = index;
  const mainImg = document.getElementById('modalMainImg');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = currentImages[index];
    mainImg.style.opacity = '1';
  }, 200);
  document.querySelectorAll('.modal-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Keyboard: Escape to close, arrow keys for images
document.addEventListener('keydown', (e) => {
  if (!modalOverlay.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') {
    switchModalImage((currentImgIndex + 1) % currentImages.length);
  }
  if (e.key === 'ArrowLeft') {
    switchModalImage((currentImgIndex - 1 + currentImages.length) % currentImages.length);
  }
});

// ── Contact Form ──────────────────────────────────────────────────────────────
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    formSuccess.classList.add('show');
    btn.textContent = 'Send Message';
    btn.disabled = false;
    contactForm.reset();
    setTimeout(() => formSuccess.classList.remove('show'), 4000);
  }, 1200);
});

// ── Smooth scroll for anchor links ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ── Initial trigger for elements in view ─────────────────────────────────────
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in, .fade-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});

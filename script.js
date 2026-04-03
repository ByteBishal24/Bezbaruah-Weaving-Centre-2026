/* ════════════════════════════════════════
   BEZBARUAH WEAVING CENTER — script.js
   ════════════════════════════════════════ */

'use strict';

// ── Product Data ──────────────────────────────────────────────────────────────
const products = [
  {
    id: 0,
    name: 'Muga Silk Mekhela Chador',
    category: 'Womenswear',
    price: '₹12,500',
    material: 'Golden Muga Silk',
    description: 'The quintessential Assamese garment, this Mekhela Chador is woven in the prized golden Muga silk — a fiber unique to Assam. The natural gold lustre deepens with age, making it a garment for generations. Intricate motifs inspired by the Kaziranga rhino and lotus patterns adorn the border.',
    images: [
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4f18?w=800&q=80',
    ]
  },
  {
    id: 1,
    name: 'Eri Silk Draped Saree',
    category: 'Womenswear',
    price: '₹8,900',
    material: 'Eri Silk (Peace Silk)',
    description: 'Crafted from Eri silk — known as "peace silk" as it is harvested without harming the silkworm — this saree has a warm, woollen texture perfect for cooler months. The soft ivory ground is complemented by earth-toned geometric border work reflecting tribal Assamese motifs.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4f18?w=800&q=80',
      'https://images.unsplash.com/photo-1603208851575-3d523d3e9db4?w=800&q=80',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=80',
    ]
  },
  {
    id: 2,
    name: 'Assamese Cotton Dhoti Set',
    category: 'Menswear',
    price: '₹5,200',
    material: 'Handspun Assam Cotton',
    description: 'A masterpiece of traditional menswear, this dhoti-kurta set is woven from fine Assamese cotton with an unmistakable crisp drape. The red gamosa border — a symbol of respect and honour in Assam — runs the full length. Ideal for Bihu festivals and formal ceremonies.',
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
      'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
    ]
  },
  {
    id: 3,
    name: 'Traditional Gamosa',
    category: 'Accessories',
    price: '₹850',
    material: 'Pure Cotton',
    description: 'The Gamosa is more than a cloth — it is the soul of Assam. Woven with white cotton and red thread border featuring the traditional jaapi and floral motifs, it is given as a gesture of respect and love. Used in Bihu celebrations, religious ceremonies and as everyday towels.',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80',
      'https://images.unsplash.com/photo-1621793335958-b5e4f50c1a61?w=800&q=80',
      'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=800&q=80',
    ]
  },
  {
    id: 4,
    name: 'Pat Silk Blouse Fabric',
    category: 'Womenswear',
    price: '₹3,400',
    material: 'Pat Silk',
    description: 'Pat silk, the brighter and more lustrous cousin of Muga, is woven here into exquisite blouse fabric. The vibrant crimson with golden zari work on the border makes it the perfect companion to a traditional Mekhela Chador. Each metre is painstakingly woven on pit-loom handlooms.',
    images: [
      'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=800&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&q=80',
      'https://images.unsplash.com/photo-1610047803562-7260ebe516c2?w=800&q=80',
    ]
  },
  {
    id: 5,
    name: 'Muga Silk Kurta',
    category: 'Menswear',
    price: '₹7,800',
    material: 'Golden Muga Silk',
    description: 'A refined kurta crafted in the rarest textile of Assam — Muga silk. The garment features a mandarin collar, hand-stitched placket, and subtle self-woven geometric patterns. Its natural golden sheen grows richer with every wash, making it a living heirloom.',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
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

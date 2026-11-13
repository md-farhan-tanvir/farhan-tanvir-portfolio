/**
 * Farhan Tanvir - Portfolio JavaScript
 * Interactive navigation, modal dialogs, case studies, and clipboard logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Element Selectors ---
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyTooltip = document.getElementById('copyTooltip');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const contactModal = document.getElementById('contactModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const openContactButtons = document.querySelectorAll('.open-contact-btn');
  const contactForm = document.getElementById('contactForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');

  const projectModal = document.getElementById('projectModal');
  const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
  const projectModalBody = document.getElementById('projectModalBody');
  const projectCards = document.querySelectorAll('.project-card');

  // --- Project Case Study Data ---
  const projectData = {
    'atlas-legal': {
      title: 'Atlas Legal Partners',
      tag: 'Web Design',
      image: 'assets/images/project-atlas-legal.png',
      timeline: '4 Weeks',
      deliverables: 'Brand Identity, Web Design, Responsive Build',
      stack: 'Figma, Next.js, Tailwind CSS',
      overview: 'Atlas Legal Partners required a digital presence that balanced uncompromising legal authority with modern, accessible client engagement. We designed an editorial-style interface featuring bespoke typography, structured practice area guides, and frictionless appointment booking.',
      results: '+185% increase in online consultation inquiries and a 42% reduction in initial bounce rate across mobile devices.'
    },
    'trava': {
      title: 'Trava Travel Platform',
      tag: 'Web Development',
      image: 'assets/images/project-trava.png',
      timeline: '6 Weeks',
      deliverables: 'Interactive UI, Full-Stack App, Itinerary Planner',
      stack: 'React, TypeScript, Framer Motion, Vercel',
      overview: 'Trava reimagines modern leisure planning with an immersive, visual-first discovery experience. Users explore curated destinations with rich editorial photography, interactive map clustering, and instant itinerary syncing.',
      results: 'Over 20,000 monthly active itinerary builders, 60fps buttery-smooth mobile animations, and a sub-1.2s average page load time worldwide.'
    },
    'ledgerly': {
      title: 'Ledgerly Finance Dashboard',
      tag: 'UI/UX Design',
      image: 'assets/images/project-ledgerly.png',
      timeline: '5 Weeks',
      deliverables: 'Design System, Component Library, Data Visualizations',
      stack: 'Figma, Chart.js, Tailwind, React',
      overview: 'Modern finance teams handle dense, multi-currency reporting data that often leads to visual fatigue. Ledgerly strips away clutter, introducing customizable analytical widgets, contextual hierarchy, and accessible high-contrast charts.',
      results: 'Reported 35% reduction in customer support requests and unanimous praise from beta finance directors for workflow clarity.'
    },
    'maison-nord': {
      title: 'Maison Nord Store',
      tag: 'E-commerce',
      image: 'assets/images/project-maison-nord.png',
      timeline: '5 Weeks',
      deliverables: 'E-Commerce Storefront, Product Stories, Checkout Flow',
      stack: 'Next.js, Shopify Storefront API, Tailwind',
      overview: 'Maison Nord is an ethical Nordic apparel house demanding an editorial storefront that treats every garment like art. We built an ultra-minimalist shopping experience with high-res lookbooks and lightning-fast checkout.',
      results: '+38% increase in average cart value and a checkout completion rate exceeding 74%.'
    }
  };

  // --- Header Scroll Effect ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // --- Mobile Drawer Toggle ---
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer when clicking any link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Active Nav Link on Scroll (Intersection Observer) ---
  const sections = document.querySelectorAll('section[id], footer[id]');
  const desktopNavLinks = document.querySelectorAll('.pill-nav .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            desktopNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // --- Copy Email to Clipboard ---
  if (copyEmailBtn && copyTooltip) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'hello@farhantanvir.design';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for non-secure contexts
          const textArea = document.createElement('textarea');
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        // Show tooltip
        copyTooltip.classList.add('show');
        setTimeout(() => {
          copyTooltip.classList.remove('show');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  }

  // --- Back to Top Button ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Contact Modal Logic ---
  const openContactModal = () => {
    contactModal.classList.add('active');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeContactModal = () => {
    contactModal.classList.remove('active');
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Reset form after short delay
    setTimeout(() => {
      if (contactForm && formSuccessMessage) {
        contactForm.style.display = 'flex';
        formSuccessMessage.classList.remove('active');
        contactForm.reset();
      }
    }, 300);
  };

  openContactButtons.forEach(btn => {
    btn.addEventListener('click', openContactModal);
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeContactModal);
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        closeContactModal();
      }
    });
  }

  // Contact Form Submission (Interactive Feedback)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Visual feedback
      contactForm.style.display = 'none';
      formSuccessMessage.classList.add('active');
    });
  }

  // --- Project Modal Logic ---
  const openProjectModal = (projectId) => {
    const data = projectData[projectId];
    if (!data) return;

    projectModalBody.innerHTML = `
      <div class="project-modal-header">
        <div>
          <span class="badge-pill" style="margin-bottom: 8px; display: inline-block;">${data.tag}</span>
          <h3 class="project-modal-title" id="projectModalTitle">${data.title}</h3>
        </div>
      </div>

      <div class="project-modal-img-box">
        <img src="${data.image}" alt="${data.title} mockup preview">
      </div>

      <div class="project-modal-meta-grid">
        <div class="meta-block">
          <span>Timeline</span>
          <strong>${data.timeline}</strong>
        </div>
        <div class="meta-block">
          <span>Deliverables</span>
          <strong>${data.deliverables}</strong>
        </div>
        <div class="meta-block">
          <span>Tech Stack</span>
          <strong>${data.stack}</strong>
        </div>
      </div>

      <p>${data.overview}</p>
      <p><strong style="color: var(--accent-orange);">Key Results:</strong> ${data.results}</p>

      <div style="display: flex; gap: 14px; margin-top: 24px;">
        <button type="button" class="btn-orange-pill open-contact-from-project">
          Work with Farhan <span class="btn-icon">↗</span>
        </button>
      </div>
    `;

    // Hook up internal CTA inside modal
    const internalBtn = projectModalBody.querySelector('.open-contact-from-project');
    if (internalBtn) {
      internalBtn.addEventListener('click', () => {
        closeProjectModal();
        setTimeout(openContactModal, 200);
      });
    }

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // --- Keyboard Shortcuts (Escape to close modals) ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (contactModal && contactModal.classList.contains('active')) {
        closeContactModal();
      }
      if (projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
    }
  });
});

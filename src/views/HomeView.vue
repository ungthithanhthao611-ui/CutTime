<script setup>
import { ref, onMounted } from 'vue'

const isModalOpen = ref(false)
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

// Dữ liệu cho Signature Looks
const signatureLooks = [
  { id: 1, title: 'Sculpted Flow', desc: 'Weightless face-framing', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Chromaglue Color', desc: 'High-shine, lossless pigments', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Lightwave Highlights', desc: 'Weightless face-framing', img: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Power Cut', desc: 'Sharp lines & precision finish', img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=600&auto=format&fit=crop' }
]

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Stagger children
        if (entry.target.classList.contains('stagger-container')) {
          entry.target.querySelectorAll('.stagger-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('active'), i * 120);
          });
        }
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal, .reveal-premium, .reveal-zoom, .stagger-container').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-grid">
        <div class="hero-content text-center">
          <div class="reveal-premium">
            <h1 class="brand-name-top serif-italic">Erella<br>Hair Studio</h1>
            <h2 class="hero-tagline serif">BESPOKE CRAFTSMANSHIP, UNAPOLOGETIC CONFIDENCE</h2>
            <div class="hero-actions">
              <button class="btn-black" @click="toggleModal">Book My Session</button>
              <router-link to="/services" class="btn-outline">Explore Services</router-link>
            </div>
          </div>
        </div>
        <div class="hero-image-side reveal-premium">
          <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop" alt="Hero">
        </div>
      </div>
    </section>

    <section class="looks-section container stagger-container">
      <div class="looks-header-box reveal">
        <h2 class="section-title serif">Our Signature Looks</h2>
        <p class="section-subtitle">This is the space to showcase the specific characteristics and capabilities that make your products stand out. Highlight the key features that set you apart from competitors.</p>
      </div>
      
      <div class="looks-grid">
        <div v-for="look in signatureLooks" :key="look.id" class="look-card stagger-item">
          <div class="img-zoom">
            <img :src="look.img" :alt="look.title" class="look-thumb">
          </div>
          <div class="look-info">
            <h3 class="serif">{{ look.title }}</h3>
            <p>{{ look.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pink-quote reveal">
      <div class="container text-center">
        <h2 class="serif big-quote">
          HAIR IS YOUR LOUDEST ACCESSOR. LET'S MAKE SURE IT SPEAKS FLUENT BRILLIANCE. SLIDE INTO THE CHAIR AND WATCH ORDINARY VANISH.
        </h2>
      </div>
    </section>

    <section class="services-mini container reveal">
      <h2 class="section-title serif mb-60">Our Services</h2>
      <div class="mini-list">
        <div class="mini-item" v-for="s in [
          {name: 'Hair Styling', price: '60'},
          {name: 'Color', price: '100'},
          {name: 'Highlights', price: '120'},
          {name: 'Treatments', price: '200'}
        ]" :key="s.name">
          <div class="mini-info">
            <span class="mini-name serif">{{ s.name }}</span>
            <span class="mini-tag">From ${{ s.price }}</span>
          </div>
          <p class="mini-desc">Describe the service and how your customers or clients can benefit from it.</p>
          <router-link to="/services" class="mini-arrow">
            <span class="arrow-icon">→</span>
          </router-link>
        </div>
      </div>
      <div class="text-right mt-30">
        <router-link to="/services" class="btn-black-sm">View All Services</router-link>
      </div>
    </section>

    <section class="salon-section reveal">
      <div class="salon-parallax">
        <div class="container">
          <div class="testi-column stagger-container">
            <h2 class="testi-heading serif stagger-item">What Clients Are Saying</h2>
            <div class="testi-card stagger-item" v-for="c in [
              {name: 'Naomi G.', text: 'This is the space to share a review from one of your business\'s clients or customers.'},
              {name: 'Clara M.', text: 'This is the space to share a review from one of your business\'s clients.'},
              {name: 'Dana S.', text: 'This is the space to share a review from one of your business.'}
            ]" :key="c.name">
              <div class="stars">★★★★★</div>
              <p>{{ c.text }}</p>
              <span class="client serif">{{ c.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="brands-section container text-center reveal">
      <h2 class="serif brand-title">Loyal to Our Brands</h2>
      <div class="brands-arc">
        <span class="brand-item b1">JSM</span>
        <span class="brand-item b2 italic">Eembreeque</span>
        <span class="brand-item b3 small-caps">Stella Maris</span>
        <span class="brand-item b4 bold">VOLVE</span>
        <span class="brand-item b5">Style.CO</span>
        <span class="brand-item b6 lowercase">foreva*</span>
      </div>
    </section>

  <section class="gallery-section container reveal-premium stagger-container">
    <h2 class="section-title serif text-center mb-60 stagger-item">Have a Look, Find Your Look</h2>
    <div class="gallery-4-col">
      <div v-for="(img, i) in [
        'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop'
      ]" :key="i" class="gallery-item-wrapper stagger-item reveal-zoom">
        <img :src="img" alt="Gallery" class="gallery-img">
      </div>
    </div>
  </section>

    <Transition name="fade">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="toggleModal">
        <div class="modal-content">
          <button class="modal-close-icon" @click="toggleModal">&times;</button>
          <div class="modal-body-content">
            <p class="modal-text">Sorry, this service is not yet available for online bookings.</p>
            <button class="btn-black-sm mt-30" @click="toggleModal">Got it</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* BASE STYLES */
.home-page { overflow-x: hidden; color: #000; }
.serif { font-family: 'Times New Roman', Times, serif; }
.serif-italic { font-family: 'Times New Roman', Times, serif; font-style: italic; }

/* HERO */
.hero-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; background: #fff; }
.hero-content { padding: 80px; display: flex; flex-direction: column; justify-content: center; }
.brand-name-top { font-size: 90px; line-height: 0.85; margin-bottom: 40px; }
.hero-tagline { font-size: 22px; letter-spacing: 3px; line-height: 1.4; margin-bottom: 50px; text-transform: uppercase; font-weight: 300; }
.hero-image-side img { width: 100%; height: 100%; object-fit: cover; }
.hero-actions { display: flex; gap: 20px; justify-content: center; }

/* LOOKS */
.looks-section { padding: 120px 20px; }
.looks-header-box { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 80px; }
.section-subtitle { max-width: 420px; font-size: 14px; color: #555; line-height: 1.8; }
.looks-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }

.img-zoom { overflow: hidden; aspect-ratio: 3/4; }
.look-thumb { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1); }
.look-card:hover .look-thumb { transform: scale(1.1); }
.look-info h3 { font-size: 20px; margin: 20px 0 5px; }
.look-info p { font-size: 12px; color: #777; letter-spacing: 0.5px; }

/* PINK QUOTE */
.pink-quote { background-color: #FEE7E7; padding: 140px 20px; }
.big-quote { font-size: 34px; letter-spacing: 1.5px; line-height: 1.4; max-width: 1000px; margin: 0 auto; text-transform: uppercase; }

/* MINI SERVICES */
.services-mini { padding: 120px 20px; }
.mini-list { border-top: 1px solid #000; }
.mini-item { display: grid; grid-template-columns: 1.5fr 3fr 60px; padding: 45px 0; border-bottom: 1px solid #000; align-items: center; }
.mini-name { font-size: 26px; }
.mini-tag { font-size: 13px; font-weight: bold; margin-top: 10px; display: block; }
.mini-desc { font-size: 14px; color: #444; padding-right: 40px; line-height: 1.7; }
.mini-arrow { text-decoration: none; color: #000; text-align: right; }
.arrow-icon { font-size: 35px; display: inline-block; transition: transform 0.3s ease; }
.mini-item:hover .arrow-icon { transform: translateX(12px); color: #E91E63; }

/* TESTIMONIALS PARALLAX */
.salon-parallax { 
  background-image: url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop'); 
  background-attachment: fixed; background-size: cover; background-position: center; padding: 120px 20px;
}
.testi-column { width: 100%; max-width: 480px; }
.testi-heading { color: white; font-size: 48px; margin-bottom: 60px; }
.testi-card { background: white; padding: 40px; margin-bottom: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.12); }
.stars { color: #000; margin-bottom: 15px; letter-spacing: 2px; }
.client { display: block; margin-top: 25px; font-weight: 600; font-size: 16px; border-top: 1px solid #eee; padding-top: 15px; }

/* BRANDS ARC */
.brands-section { padding: 120px 20px; text-align: center; }
.brand-title { margin-bottom: 30px; font-size: 20px; letter-spacing: 2px; text-transform: uppercase; }
.brands-arc { 
  display: flex; 
  justify-content: space-around; 
  align-items: flex-end; 
  min-height: 200px;
  gap: 30px; 
  padding-bottom: 40px;
}

.brand-item { 
  font-family: 'Times New Roman', serif; 
  font-size: 28px; 
  opacity: 0.8; 
  transition: all 0.4s ease;
}

.b1, .b6 { transform: translateY(-70px); }
.b2, .b5 { transform: translateY(-30px); }
.b3, .b4 { transform: translateY(10px); }

.brand-item:hover { opacity: 1; transform: scale(1.1) !important; }

.italic { font-style: italic; }
.small-caps { font-variant: small-caps; }
.bold { font-weight: bold; }
.lowercase { text-transform: lowercase; }

/* GALLERY */
.gallery-section { padding: 120px 20px; }
.gallery-4-col { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
.gallery-img { width: 100%; aspect-ratio: 1/1; object-fit: cover; transition: filter 0.4s ease; }
.gallery-img:hover { filter: brightness(0.8); }

/* BUTTONS */
.btn-black { background: #000; color: #fff; border: 1px solid #000; padding: 20px 50px; cursor: pointer; text-transform: uppercase; font-size: 13px; transition: all 0.3s ease; }
.btn-black:hover { background: #E91E63; border-color: #E91E63; }
.btn-outline { border: 1px solid #000; padding: 20px 50px; text-decoration: none; color: #000; font-size: 13px; text-transform: uppercase; transition: all 0.3s ease; }
.btn-outline:hover { background: #000; color: #fff; }
.btn-black-sm { background: #000; color: #fff; border: none; padding: 14px 35px; cursor: pointer; text-transform: uppercase; font-size: 11px; font-weight: 600; }

/* REVEAL & STAGGER ANIMATIONS */
.reveal { 
  opacity: 0; 
  transform: translateY(30px); 
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1); 
}
.reveal.active { 
  opacity: 1; 
  transform: translateY(0); 
}

.stagger-item {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.stagger-item.active {
  opacity: 1;
  transform: translateY(0);
}

/* PREMIUM REVEAL */
.reveal-premium {
  opacity: 0;
  transform: translateY(80px) scale(0.95);
  filter: blur(5px);
  transition: all 1.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.reveal-premium.active {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.reveal-zoom {
  overflow: hidden;
}
.reveal-zoom img {
  transform: scale(1.3);
  transition: transform 1.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.reveal-zoom.active img {
  transform: scale(1);
}

/* MODAL */
.modal-overlay { position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:9999; backdrop-filter: blur(8px); }
.modal-content { 
  background:#fff; 
  padding:60px 40px; 
  text-align:center; 
  max-width: 500px; 
  width: 92%; 
  position: relative; 
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
}
.modal-close-icon {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 32px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
  transition: opacity 0.2s;
}
.modal-close-icon:hover { opacity: 0.6; }
.modal-text { font-size: 18px; line-height: 1.6; color: #333; margin-top: 20px; }
.mt-30 { margin-top: 30px; }

@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-image-side { 
    height: 60vh; 
    order: -1; 
    overflow: hidden;
  }
  .hero-image-side img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }
  .brand-name-top { font-size: 60px; margin-bottom: 25px; }
  .hero-tagline { font-size: 16px; margin-bottom: 30px; padding: 0 20px; }
  .hero-content { padding: 40px 20px; }
  .hero-actions { flex-direction: column; width: 100%; padding: 0 40px; }
  .btn-black, .btn-outline { width: 100%; padding: 15px; }

  .looks-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .testi-column { max-width: 100%; }
  .mini-item { grid-template-columns: 1fr auto; }
  .mini-desc { grid-column: span 2; padding-top: 15px; }
  .gallery-4-col { grid-template-columns: repeat(2, 1fr); }
  .big-quote { font-size: 24px; }
  
  .looks-header-box { flex-direction: column; gap: 20px; margin-bottom: 40px; }
  .section-subtitle { max-width: 100%; }
  .brand-name-top { font-size: 55px; }
}
</style>
<script setup>
const philosophyText = "THIS IS THE SPACE TO INTRODUCE YOUR BUSINESS AND WHAT IT HAS TO OFFER. DEFINE THE QUALITIES AND VALUES THAT MAKE IT UNIQUE."
</script>

<template>
  <div class="about-page">
    <section class="about-hero section text-center">
      <div class="container">
        <h2 class="serif section-subtitle">Our Philosophy</h2>
        <h1 class="serif philosophy-title">{{ philosophyText }}</h1>
      </div>
    </section>

    <section class="about-image-section">
      <div class="about-image-container">
        <img src="/about_salon.png" alt="Erella Studio Interior" class="about-main-image">
        <div class="careers-card">
          <h3 class="serif">Careers</h3>
          <p>We are always looking for passionate artists to join our team. If you're creative and professional, we'd love to hear from you.</p>
          <button class="btn btn-primary btn-sm">Join Us</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
  background-color: var(--color-bg-secondary);
  padding: 120px 0;
  margin-top: 80px;
}

.section-subtitle {
  font-size: 24px;
  margin-bottom: 30px;
  opacity: 0.8;
}

.philosophy-title {
  font-size: 48px;
  line-height: 1.2;
  max-width: 900px;
  margin: 0 auto;
  text-transform: uppercase;
}

.about-image-container {
  position: relative;
  width: 100%;
}

.about-main-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.careers-card {
  position: absolute;
  bottom: 10%;
  left: 10%;
  background-color: white;
  padding: 30px;
  max-width: 350px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.careers-card h3 {
  font-size: 28px;
  margin-bottom: 15px;
}

.careers-card p {
  font-size: 14px;
  margin-bottom: 20px;
  color: var(--color-text-muted);
}

.btn-sm {
  padding: 8px 20px;
  font-size: 12px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.muted-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
}

.address, .phone, .hours {
  font-size: 28px;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .philosophy-title {
    font-size: 28px;
  }
  .careers-card {
    position: relative;
    left: 0;
    bottom: 0;
    max-width: 100%;
    margin: -40px 20px 0;
  }
  .address, .phone, .hours {
    font-size: 20px;
  }
}
</style>

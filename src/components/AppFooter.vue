<template>
  <footer class="app-footer">
    <div class="container">
      <section class="footer-info">
        <span class="label">Where / When / How</span>
        <div class="info-text">500 TERRY FRANCINE ST.<br>SAN FRANCISCO, CA 94158</div>
        <div class="info-text">123-456-7890</div>
        <div class="info-text">MON - FRI 9:00 AM - 5:00 PM<br>SATURDAY 9:00 AM - 2:00 PM</div>
      </section>

      <nav class="footer-nav">
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/about-us">About Us</router-link>
          <router-link to="/services">Services</router-link>
        </div>
        
        <div class="nav-links">
          <router-link to="/terms-conditions">Terms & Conditions</router-link>
          <router-link to="/accessibility-statement">Accessibility Statement</router-link>
          <router-link to="/privacy-policy">Privacy Policy</router-link>
          <router-link to="/refund-policy">Refund Policy</router-link>
        </div>

        <div class="social-box">
          <a href="https://www.instagram.com/wix/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/wix" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.tiktok.com/@wix" target="_blank"><i class="fab fa-tiktok"></i></a>
        </div>
      </nav>

      <div class="footer-logo">
        <h2 class="brand-italic">Erella Hair Studio</h2>
        <p class="copyright">© 2026 by Erella Hair Studio. Powered and secured by <u>Wix</u></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 80px 0 40px;
  text-align: center;
  font-family: 'Times New Roman', serif;
  background-color: #f4f4f4;
}

.footer-info { margin-bottom: 50px; }
.label { display: block; font-size: 13px; margin-bottom: 20px; font-family: sans-serif; }
.info-text { font-size: 24px; margin-bottom: 20px; text-transform: uppercase; }

.nav-links { display: flex; justify-content: center; gap: 20px; margin-bottom: 15px; }
.nav-links a { color: #000; text-decoration: underline; font-size: 15px; }

/* CSS cho Icon */
.social-box {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
}
.social-box a {
  color: #000;
  font-size: 20px;
  width: 35px;
  height: 35px;
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.social-box a:hover { background: #000; color: #fff; }

.brand-italic { font-size: 70px; font-style: italic; margin-top: 60px; font-weight: 500; }
.copyright { font-size: 11px; margin-top: 30px; font-family: sans-serif; }
</style>
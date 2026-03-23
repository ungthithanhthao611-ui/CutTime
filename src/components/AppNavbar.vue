<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="container nav-content">
      <!-- Empty space on left to help center the logo -->
      <div class="nav-left"></div>

      <!-- Centered Logo Box -->
      <div class="logo-box">
        <router-link to="/" class="brand-logo">Erella</router-link>
        <button @click="toggleMenu" class="menu-btn">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1C4 1 6 4 9 4C12 4 14 1 17 1C20 1 22 4 25 4" stroke="black" stroke-width="1.5"/>
            <path d="M1 8C4 8 6 11 9 11C12 11 14 8 17 8C20 8 22 11 25 11" stroke="black" stroke-width="1.5"/>
          </svg>
        </button>
      </div>
      
      <!-- Right Action Button -->
      <div class="nav-right">
        <router-link to="/services" class="btn-book-now">Book Now</router-link>
      </div>
    </div>

    <!-- Fullscreen Overlay Menu -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="menu-overlay">
        <button @click="toggleMenu" class="close-overlay">&times;</button>
        <div class="container overlay-content">
          <ul class="nav-links">
            <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
            <li><router-link to="/about-us" @click="toggleMenu">About Us</router-link></li>
            <li><router-link to="/services" @click="toggleMenu">Services</router-link></li>
          </ul>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left, .nav-right {
  flex: 1;
  display: flex;
}

.nav-right {
  justify-content: flex-end;
}

/* Logo Box Style */
.logo-box {
  background: white;
  padding: 10px 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.brand-logo {
  font-family: 'Times New Roman', Georgia, serif;
  font-style: italic;
  font-size: 32px;
  color: #000;
  font-weight: 500;
  letter-spacing: -1px;
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.btn-book-now {
  background: #000;
  color: #fff;
  padding: 12px 30px;
  font-size: 14px;
  font-family: 'Times New Roman', serif;
  text-transform: capitalize;
  font-weight: 400;
  transition: opacity 0.3s;
}

.btn-book-now:hover {
  opacity: 0.8;
}

/* Menu Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-overlay {
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 40px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-links li {
  margin: 30px 0;
  text-align: center;
}

.nav-links a {
  font-family: 'Times New Roman', serif;
  font-size: 48px;
  color: #000;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .logo-box {
    padding: 8px 20px;
    gap: 15px;
  }
  .brand-logo { font-size: 24px; }
  .btn-book-now { display: none; }
}
</style>

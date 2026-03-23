<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const isMenuOpen = ref(false)
const showAccountMenu = ref(false)
const showAccountMenuMobile = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleAccountMenu = () => {
  showAccountMenu.value = !showAccountMenu.value
}

const handleLogout = () => {
  auth.logout()
  showAccountMenu.value = false
  router.push('/')
}

const handleUserClick = () => {
  if (auth.isAuthenticated) {
    toggleAccountMenu()
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="container nav-content">
      <!-- Empty space on left -->
      <div class="nav-left"></div>

      <!-- Centered Logo Box -->
      <div class="logo-box">
        <router-link to="/" class="brand-logo" @click="isMenuOpen = false">Erella       </router-link>
        <button @click="toggleMenu" class="menu-btn">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1C4 1 6 4 9 4C12 4 14 1 17 1C20 1 22 4 25 4" stroke="black" stroke-width="1.5"/>
            <path d="M1 8C4 8 6 11 9 11C12 11 14 8 17 8C20 8 22 11 25 11" stroke="black" stroke-width="1.5"/>
          </svg>
        </button>
      </div>
      
      <!-- Right Action Button & Auth -->
      <div class="nav-right">
        <div class="auth-box">
          <button @click="handleUserClick" class="user-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span v-if="auth.isAuthenticated" class="btn-label">Account</span>
          </button>
          
          <div v-if="showAccountMenu && auth.isAuthenticated" class="account-dropdown">
            <div class="user-info">
              <strong>{{ auth.user?.name }}</strong>
            </div>
            <hr />
            <button @click="handleLogout" class="logout-btn">Log Out</button>
          </div>
        </div>

        <router-link to="/services" class="btn-book-now">Book Now</router-link>
      </div>
    </div>

    <!-- Fullscreen Overlay Menu - Now Right Drawer -->
    <Transition name="slide">
      <div v-if="isMenuOpen" class="menu-overlay">
        <button @click="toggleMenu" class="close-overlay" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="overlay-top">
          <router-link v-if="!auth.isAuthenticated" to="/login" @click="toggleMenu" class="overlay-auth-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Login</span>
          </router-link>
          
          <div v-else class="overlay-auth-container">
            <button @click="showAccountMenuMobile = !showAccountMenuMobile" class="overlay-auth-btn">
              <span>Account</span>
            </button>
            <div v-if="showAccountMenuMobile" class="mobile-logout-box">
              <button @click="handleLogout(); toggleMenu()" class="mobile-logout-btn">Log Out</button>
            </div>
          </div>
        </div>

        <div class="container overlay-content">
          <ul class="nav-links">
            <li><router-link to="/" @click="toggleMenu">HOME</router-link></li>
            <li><router-link to="/about-us" @click="toggleMenu">ABOUT US</router-link></li>
            <li><router-link to="/services" @click="toggleMenu">SERVICES</router-link></li>
          </ul>
          
          <div class="overlay-bottom">
            <router-link to="/services" @click="toggleMenu" class="btn-book-now overlay-book-btn">Book Now</router-link>
          </div>
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

/* Logo Box Style */
.logo-box {
  background: white;
  padding: 12px 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  white-space: nowrap;
  position: relative;
  z-index: 10002;
  transition: transform 0.3s ease;
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

.nav-left, .nav-right {
  flex: 1;
  display: flex;
}

.nav-right {
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
}

.auth-box {
  position: relative;
  display: flex;
  align-items: center;
}

.user-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000;
  padding: 8px;
  transition: opacity 0.2s;
}

.user-btn:hover {
  opacity: 0.7;
}

.btn-label {
  font-family: 'Times New Roman', serif;
  font-size: 14px;
}

.account-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: white;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  min-width: 150px;
  z-index: 1001;
}

.user-info {
  margin-bottom: 10px;
  font-size: 14px;
}

.account-dropdown hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
}

.logout-btn {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  padding: 5px 0;
  font-size: 14px;
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

/* Menu Overlay - Now a Side Drawer */
.menu-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%; /* Cover right half only on desktop as requested */
  height: 100vh;
  background-color: #fce4ec;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  box-shadow: -10px 0 30px rgba(0,0,0,0.05);
}

/* Slide Transition */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

@media (max-width: 768px) {
  .menu-overlay {
    width: 100%; /* Full screen ONLY on mobile */
  }
}

.overlay-top {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 2100; /* Ensure it's above other overlay parts */
}

.overlay-auth-btn:hover {
  opacity: 0.7;
}

.overlay-auth-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000;
  font-family: 'Times New Roman', serif;
  font-size: 14px;
  padding: 15px 30px; /* More padding */
}

.overlay-auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-logout-box {
  margin-top: 5px;
}

.mobile-logout-btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 4px 12px;
  font-size: 11px;
  cursor: pointer;
}

.close-overlay {
  position: absolute;
  top: 30px;
  right: 30px;
  color: #000;
  background: white;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10001; /* Highest priority */
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.close-overlay:hover {
  transform: scale(1.1) rotate(90deg);
  background: #000;
  color: #fff;
}

.overlay-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.nav-links li {
  margin: 40px 0;
}

.nav-links a {
  font-family: 'Times New Roman', serif;
  font-size: 64px; /* Large font size from screenshot */
  color: #000;
  text-decoration: none;
  transition: opacity 0.2s;
  letter-spacing: -1px;
}

.nav-links a.router-link-active {
  text-decoration: underline;
  text-underline-offset: 12px;
  text-decoration-thickness: 1px;
}

.overlay-book-btn {
  padding: 15px 80px !important;
  font-size: 16px !important;
  display: block;
}

.overlay-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
}


@media (max-width: 768px) {
  .logo-box {
    padding: 8px 20px;
    gap: 15px;
  }
  .brand-logo { font-size: 24px; }
  .btn-book-now { display: none; }
}
</style>

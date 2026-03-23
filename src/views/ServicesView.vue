<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

const serviceCategories = [
  {
    name: 'Hair Styling',
    items: [
      { name: "Women's Cut", price: '+125' },
      { name: 'Updo', price: '+120' },
      { name: 'Blow-Dry', price: '+55' },
      { name: 'Hydra-Spa Shampoo', price: '+85' }
    ]
  },
  {
    name: 'Color (Ammonia-free)',
    items: [
      { name: 'Gloss/Toner', price: '+55' },
      { name: 'Root Refresh', price: '+90' },
      { name: 'Global Lightener', price: '+120' },
      { name: 'All-Over Color', price: '+150' }
    ]
  },
  {
    name: 'Treatments',
    items: [
      { name: 'Scalp Detox', price: '+120' },
      { name: 'Moisture-Lock Mask', price: '+105' },
      { name: 'Olaplex Rebuild', price: '+95' }
    ]
  },
  {
    name: 'Smart Add-Ons',
    items: [
      { name: 'Virtual Try-On', price: '+35' },
      { name: 'AI Hair Analysis', price: '+45' }
    ]
  }
]
</script>

<template>
  <div class="services-page">
    <div class="container main-content">
      <h1 class="page-title serif">OUR SERVICES</h1>

      <div class="services-container">
        <div v-for="category in serviceCategories" :key="category.name" class="category-block">
          <h2 class="category-title">{{ category.name }}</h2>
          
          <div class="services-list">
            <div v-for="item in category.items" :key="item.name" class="service-row">
              <span class="service-name serif">{{ item.name }}</span>
              <span class="service-price">{{ item.price }}</span>
              <button class="btn-book-now" @click="toggleModal">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="toggleModal">
        <div class="modal-content">
          <button class="modal-close" @click="toggleModal">&times;</button>
          <div class="modal-body text-center">
            <p>Sorry, this service is not yet available for online bookings.</p>
            <p>Please contact us for more information.</p>
            <button class="btn-got-it" @click="toggleModal">Got it</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Màu nền hồng phấn đặc trưng */
.services-page {
  background-color: #FEE7E7; /* Giữ tông hồng nhạt sang trọng */
  min-height: 100vh;
  padding: 120px 0;
  color: #000;
  font-family: 'Helvetica', Arial, sans-serif;
}

.serif {
  font-family: 'Times New Roman', Times, serif;
}

.main-content {
  max-width: 850px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  font-size: 26px;
  letter-spacing: 5px;
  margin-bottom: 80px;
  font-weight: 400;
}

.category-block {
  margin-bottom: 60px;
}

.category-title {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: none;
}

/* Đường kẻ mảnh hơn màu xám nhẹ */
.services-list {
  border-top: 0.5px solid #000; /* Đậm hơn một chút theo ảnh */
}

.service-row {
  display: grid;
  grid-template-columns: 1fr auto 120px;
  align-items: center;
  padding: 18px 0;
  border-bottom: 0.5px solid #000; /* Đậm hơn một chút theo ảnh */
}

.service-name {
  font-size: 17px;
}

.service-price {
  padding-right: 50px;
  font-size: 13px;
  font-weight: 300;
}

/* Nút bấm đen tuyền */
.btn-book-now {
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  padding: 10px 0;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  width: 100px;
  transition: all 0.3s ease;
}

.btn-book-now:hover {
  background-color: #E91E63; /* Vibrant pink from the screenshot */
  border-color: #E91E63;
  color: #fff;
}

/* Modal UI */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
}

.modal-content {
  background: white;
  padding: 50px 40px;
  position: relative;
  max-width: 450px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.modal-close {
  position: absolute;
  top: 15px; right: 20px;
  background: none; border: none; font-size: 28px;
  cursor: pointer;
}

.btn-got-it {
  background: #000;
  color: white;
  border: none;
  padding: 12px 35px;
  margin-top: 30px;
  font-size: 14px;
  cursor: pointer;
}

/* Hiệu ứng mượt mà */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .service-row {
    grid-template-columns: 1fr auto;
    gap: 10px;
  }
  .btn-book-now {
    grid-column: span 2;
    width: 100%;
  }
}
</style>@
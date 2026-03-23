<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
const router = useRouter()
const auth = useAuthStore()

const googleLoginMock = () => {
    handleSocialLogin('Google')
}

const isLoginMode = ref(false)
const email = ref('')
const password = ref('')
const error = ref('')

const toggleMode = () => {
    isLoginMode.value = !isLoginMode.value
    error.value = ''
}

const handleSubmit = () => {
    if (!email.value || !password.value) {
        error.value = 'Please fill in all fields'
        return
    }

    const userData = {
        email: email.value,
        name: email.value.split('@')[0],
        avatar: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'
    }

    auth.login(userData)
    router.push('/')
}

const handleSocialLogin = (platform) => {
    // Mock Social Login
    const userData = {
        email: `${platform.toLowerCase()}user@example.com`,
        name: platform === 'Google' ? 'Google User' : 'Facebook User',
        avatar: platform === 'Google' 
            ? 'https://cdn-icons-png.flaticon.com/512/300/300221.png'
            : 'https://cdn-icons-png.flaticon.com/512/733/733547.png'
    }
    
    auth.login(userData)
    router.push('/')
}

const goHome = () => {
    router.push('/')
}
</script>

<template>
    <div class="login-wrapper">
        <div class="close-header">
            <button @click="goHome" class="close-btn">&times;</button>
        </div>

        <div class="login-container">
          
            
            <div class="form-card">
                <h2 class="title">{{ isLoginMode ? 'Log In' : 'Sign Up' }}</h2>
                <div class="toggle-text">
                    {{ isLoginMode ? "New to Erella?" : "Already a member?" }}
                    <span @click="toggleMode" class="toggle-link">
                        {{ isLoginMode ? 'Sign Up' : 'Log In' }}
                    </span>
                </div>

                <div class="social-buttons">
                    <button class="social-btn google" @click="googleLoginMock">
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />
                        {{ isLoginMode ? 'Log in' : 'Sign up' }} with Google
                    </button>

                    <button class="social-btn facebook" @click="handleSocialLogin('Facebook')">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
                        {{ isLoginMode ? 'Log in' : 'Sign up' }} with Facebook
                    </button>
                </div>

                <div class="divider">
                    <span>or</span>
                </div>

                <form @submit.prevent="handleSubmit" class="email-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="email" type="email" id="email" placeholder="email@example.com" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="password" type="password" id="password" placeholder="••••••••" required />
                    </div>
                    
                    <p v-if="error" class="error-msg">{{ error }}</p>

                    <button type="submit" class="submit-btn highlight">
                        {{ isLoginMode ? 'Log In' : 'Sign up with email' }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-wrapper {
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.close-header {
    display: flex;
    justify-content: flex-end;
}

.close-btn {
    background: none;
    border: none;
    font-size: 32px;
    cursor: pointer;
    color: #333;
}

.login-container {
    max-width: 400px;
    margin: 40px auto;
    width: 100%;
    text-align: center;
}

.logo-text {
    font-family: 'Times New Roman', Georgia, serif;
    font-style: italic;
    font-size: 40px;
    margin-bottom: 20px;
    cursor: pointer;
}

.form-card {
    padding: 20px 0;
}

.title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 8px;
}

.toggle-text {
    font-size: 14px;
    color: #666;
    margin-bottom: 30px;
}

.toggle-link {
    color: #000;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 4px;
}

.social-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
}

.google-signin-btn {
    width: 100%;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    background: white;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;
}

.social-btn:hover {
    background: #f9f9f9;
}

.social-btn img {
    width: 18px;
    height: 18px;
}

.social-btn.facebook {
    background: #1877F2;
    color: white;
    border: none;
}

.social-btn.facebook:hover {
    background: #166fe5;
}

.divider {
    position: relative;
    text-align: center;
    margin: 20px 0;
}

.divider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 1px solid #eee;
    z-index: 1;
}

.divider span {
    background: #fff;
    padding: 0 10px;
    position: relative;
    z-index: 2;
    color: #999;
    font-size: 14px;
}

.email-form {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-size: 14px;
    font-weight: 500;
}

.form-group input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
}

.submit-btn {
    padding: 12px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
}

.submit-btn:hover {
    opacity: 0.8;
}

.error-msg {
    color: #e53935;
    font-size: 13px;
    margin-top: -10px;
    text-align: center;
}
</style>

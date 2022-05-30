import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import VueCookies from 'vue-cookies';

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyBvEOZryOKW9cU9MmWTcrnV3xQlCvuYawQ",
    authDomain: "reaction-tester-3f6d2.firebaseapp.com",
    projectId: "reaction-tester-3f6d2",
    storageBucket: "reaction-tester-3f6d2.appspot.com",
    messagingSenderId: "97626996338",
    appId: "1:97626996338:web:e9fc0c76d9ae563b72cceb"
};

initializeApp(firebaseConfig)

app.use(createPinia())
app.use(router)
app.use(VueCookies)

app.mount('#app')

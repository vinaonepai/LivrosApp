<template>
  <ion-page>
    <ion-content class="page-content">

      <div class="container">
        <h1 class="logo">📚 BookApp</h1>
        <p class="subtitle">Explore seu universo de leitura</p>

        <div class="card">
          <ion-button expand="block" class="btn" @click="irLogin">
            Entrar
          </ion-button>

          <ion-button expand="block" fill="outline" class="btn-outline" @click="irCadastro">
            Criar conta
          </ion-button>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/vue'

import { useRouter } from 'vue-router'

defineOptions({ name: 'StartPage' })

const router = useRouter()

const irLogin = () => {
  router.push('/login')
}

const irCadastro = () => {
  router.push('/cadastro')
}
</script>

<style scoped>
.page-content {
  --background: radial-gradient(circle at top, #0f2027, #203a43, #2c5364);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 20px;
}

.logo {
  font-size: 34px;
  color: #00eaff;
  text-shadow: 0 0 15px #00eaff;
  margin-bottom: 10px;
}

.subtitle {
  color: #ccc;
  margin-bottom: 30px;
}

.card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(0,234,255,0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  --background: linear-gradient(90deg, #00eaff, #00ff95);
  font-weight: bold;
}

.btn-outline {
  --color: #00eaff;
  border: 1px solid #00eaff;
}
</style>
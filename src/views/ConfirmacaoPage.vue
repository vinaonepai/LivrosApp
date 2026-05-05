<template>
  <ion-page>

    <!-- 🔙 BOTÃO VOLTAR -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="page-content">

      <div class="container">
        <div class="card">

          <h1 class="title">📩 Código enviado</h1>

          <p class="message">
            Um código de confirmação foi enviado para o seu e-mail.
          </p>

          <ion-button expand="block" class="btn" @click="voltarLogin">
            Voltar para Login
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
  IonButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/vue'

import { useRouter } from 'vue-router'

defineOptions({ name: 'ConfirmacaoPage' })

const router = useRouter()

const voltarLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.page-content {
  --background: radial-gradient(circle at top, #0f2027, #203a43, #2c5364);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,234,255,0.2);
  text-align: center;
}

.title {
  color: #00eaff;
  text-shadow: 0 0 10px #00eaff;
  margin-bottom: 15px;
}

.message {
  color: #ccc;
  margin-bottom: 20px;
}

.btn {
  --background: linear-gradient(90deg, #00eaff, #00ff95);
}
</style>
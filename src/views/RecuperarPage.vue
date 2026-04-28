<template>
  <ion-page>
    <ion-content class="page-content">

      <div class="container">
        <h1 class="title">🔑 Recuperar Senha</h1>

        <div class="card">
          <ion-input
            v-model="email"
            placeholder="Digite seu e-mail"
            fill="outline"
          />

          <ion-button
            expand="block"
            class="btn"
            :disabled="!email"
            @click="irConfirmacao"
          >
            Recuperar
          </ion-button>

          <!-- 🔙 BOTÃO VOLTAR (ADICIONADO) -->
          <ion-button
            expand="block"
            fill="outline"
            class="btn-voltar"
            @click="$router.push('/login')"
          >
            ← Voltar para Login
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
  IonInput,
  IonButton
} from '@ionic/vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({ name: 'RecuperarPage' })

const email = ref('')
const router = useRouter()

const irConfirmacao = () => {
  router.push('/confirmacao')
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
  padding: 20px;
  text-align: center;
}

.title {
  color: #00eaff;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #00eaff;
}

.card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,234,255,0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  --background: linear-gradient(90deg, #00eaff, #00ff95);
}

/* 🔙 BOTÃO VOLTAR */
.btn-voltar {
  --border-color: #00eaff;
  color: #00eaff;
}
</style>
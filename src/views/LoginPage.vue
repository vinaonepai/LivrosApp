<template>
  <ion-page>
    <ion-content class="login-content">

      <div class="container">
        <h1 class="logo">📚 BookApp</h1>
        <p class="subtitle">Seu universo de leitura</p>

        <div class="card">
          <ion-input
            v-model="email"
            placeholder="E-mail"
            fill="outline"
          />

          <ion-input
            v-model="senha"
            type="password"
            placeholder="Senha"
            fill="outline"
          />

          <ion-button
            expand="block"
            class="btn"
            :disabled="!podeEntrar"
            @click="entrar"
          >
            Entrar
          </ion-button>

          <ion-button fill="clear" @click="$router.push('/recuperar')">
            Esqueci a senha
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

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({ name: 'LoginPage' })

const router = useRouter()

const email = ref('')
const senha = ref('')

const podeEntrar = computed(() => {
  return email.value.trim() !== '' && senha.value.trim() !== ''
})

const entrar = () => {
  if (!podeEntrar.value) return
  router.push('/home')
}
</script>

<style scoped>
.login-content {
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
  font-size: 32px;
  color: #00eaff;
  text-shadow: 0 0 10px #00eaff;
}

.subtitle {
  color: #ccc;
  margin-bottom: 30px;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 234, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  --background: linear-gradient(90deg, #00eaff, #00ff95);
  font-weight: bold;
}
</style>
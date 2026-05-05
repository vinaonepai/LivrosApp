<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="page-content">

      <div class="container">
        <h1 class="title">📝 Cadastro</h1>

        <div class="card">
          <ion-input v-model="nome" placeholder="Nome" fill="outline" />
          <ion-input v-model="email" placeholder="E-mail" fill="outline" />
          <ion-input v-model="senha" type="password" placeholder="Senha" fill="outline" />
          <ion-input v-model="confirmar" type="password" placeholder="Confirmar Senha" fill="outline" />

          <ion-button
            expand="block"
            class="btn"
            :disabled="!podeCadastrar"
            @click="cadastrar"
          >
            Cadastrar
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
  IonButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/vue'

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({ name: 'CadastroPage' })

const router = useRouter()

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmar = ref('')

const podeCadastrar = computed(() => {
  return (
    nome.value.trim() !== '' &&
    email.value.trim() !== '' &&
    senha.value.trim() !== '' &&
    confirmar.value.trim() !== '' &&
    senha.value === confirmar.value
  )
})

const cadastrar = () => {
  if (!podeCadastrar.value) return

  router.push('/home')
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
  font-weight: bold;
}
</style>
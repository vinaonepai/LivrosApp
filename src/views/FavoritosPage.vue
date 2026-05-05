<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="page-content">

      <div class="container">
        <h1 class="title">❤️ Favoritos</h1>

        <!-- caso não tenha favoritos -->
        <div v-if="favoritos.length === 0" class="empty">
          Nenhum livro favoritado
        </div>

        <div class="grid">
          <div
            class="card"
            v-for="livro in favoritos"
            :key="livro.id"
          >
            <img :src="livro.imagem" class="img" />

            <div class="info">
              <h3 class="book-title">{{ livro.titulo }}</h3>
              <p class="author">{{ livro.autor }}</p>
              <p class="desc">{{ livro.descricao }}</p>
              <span class="categoria">{{ livro.categoria }}</span>
            </div>
          </div>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/vue'

import { ref, onMounted } from 'vue'

const favoritos = ref<any[]>([])

onMounted(() => {
  const dados = localStorage.getItem('favoritos')
  favoritos.value = dados ? JSON.parse(dados) : []
})
</script>

<style scoped>
.page-content {
  --background: radial-gradient(circle at top, #0f2027, #203a43, #2c5364);
}

.container {
  padding: 20px;
}

.title {
  text-align: center;
  color: #00eaff;
  font-size: 26px;
  text-shadow: 0 0 10px #00eaff;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.card {
  display: flex;
  gap: 15px;
  padding: 15px;
  border-radius: 16px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 15px rgba(0,234,255,0.2);
  align-items: center;
}

.img {
  width: 80px;
  height: 110px;
  border-radius: 8px;
}

.info {
  flex: 1;
}

.book-title {
  color: #00eaff;
  margin-bottom: 5px;
}

.author {
  color: #ccc;
  font-size: 14px;
}

.desc {
  color: #aaa;
  font-size: 13px;
  margin: 5px 0;
}

.categoria {
  font-size: 12px;
  color: #00ff95;
}

.empty {
  text-align: center;
  color: #ccc;
  margin-top: 20px;
}
</style>
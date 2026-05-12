<template>
  <ion-page>
    <ion-content class="home-content">

      <div class="container">
        <h1 class="title">📚 Biblioteca</h1>
        <p class="subtitle">Seus livros favoritos</p>

        <ion-button class="btn-fav" expand="block" @click="$router.push('/favoritos')">
          ❤️ Ir para Favoritos
        </ion-button>

        <div class="grid">
          <div
            class="card"
            v-for="livro in livros"
            :key="livro.id"
            @click="irDetalhes(livro.id)"
          >
            <img :src="livro.imagem" class="img" />

            <div class="info">
              <h3 class="book-title">{{ livro.titulo }}</h3>
              <p class="author">{{ livro.autor }}</p>
              <p class="desc">{{ livro.descricao }}</p>
              <span class="categoria">{{ livro.categoria }}</span>
            </div>

            <ion-icon
              :icon="livro.favorito ? heart : heartOutline"
              class="heart"
              @click.stop="toggleFavorito(livro)"
            />
          </div>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon, IonButton } from '@ionic/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { heart, heartOutline } from 'ionicons/icons'

import domCasmurro from '../assets/livros/dom-casmurro.jpg'
import livro1984 from '../assets/livros/1984.jpg'
import hobbit from '../assets/livros/hobbit.jpg'
import revolucaoBichos from '../assets/livros/revolucao-bichos.jpg'
import harryPotter from '../assets/livros/harry-potter.jpg'

defineOptions({ name: 'HomePage' })

const router = useRouter()

const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos') || '[]')

const livros = ref([
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    descricao: 'Um clássico da literatura brasileira sobre amor e dúvida.',
    categoria: 'Clássico',
    imagem: domCasmurro,
    favorito: favoritosSalvos.some((f: any) => f.id === 1)
  },
  {
    id: 2,
    titulo: '1984',
    autor: 'George Orwell',
    descricao: 'Distopia sobre controle e vigilância extrema.',
    categoria: 'Ficção',
    imagem: livro1984,
    favorito: favoritosSalvos.some((f: any) => f.id === 2)
  },
  {
    id: 3,
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    descricao: 'Uma jornada épica em um mundo fantástico.',
    categoria: 'Fantasia',
    imagem: hobbit,
    favorito: favoritosSalvos.some((f: any) => f.id === 3)
  },
  {
    id: 4,
    titulo: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    descricao: 'Uma crítica política em forma de fábula.',
    categoria: 'Política',
    imagem: revolucaoBichos,
    favorito: favoritosSalvos.some((f: any) => f.id === 4)
  },
  {
    id: 5,
    titulo: 'Harry Potter',
    autor: 'J.K. Rowling',
    descricao: 'A história de um jovem bruxo e suas aventuras.',
    categoria: 'Fantasia',
    imagem: harryPotter,
    favorito: favoritosSalvos.some((f: any) => f.id === 5)
  }
])

const toggleFavorito = (livro: any) => {
  livro.favorito = !livro.favorito

  const favoritos = livros.value.filter(l => l.favorito)
  localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

const irDetalhes = (id: number) => {
  router.push(`/detalhes/${id}`)
}
</script>

<style scoped>
.home-content {
  --background: radial-gradient(circle at top, #0f2027, #203a43, #2c5364);
}

.container {
  padding: 20px;
}

.title {
  text-align: center;
  color: #00eaff;
  font-size: 28px;
  text-shadow: 0 0 10px #00eaff;
}

.subtitle {
  text-align: center;
  color: #ccc;
  margin-bottom: 20px;
}

.btn-fav {
  margin-bottom: 15px;
  --background: linear-gradient(90deg, #ff4d6d, #ff8fa3);
  font-weight: bold;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card {
  display: flex;
  gap: 15px;
  padding: 15px;
  border-radius: 16px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 15px rgba(0,234,255,0.2);
  cursor: pointer;
  transition: transform 0.2s;
  align-items: center;
}

.card:hover {
  transform: scale(1.02);
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

.heart {
  font-size: 26px;
  color: #ff4d6d;
  cursor: pointer;
}
</style>
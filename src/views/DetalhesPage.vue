<template>
  <ion-page>
    <ion-content class="page-content">

      <div class="container" v-if="livro">
        <div class="card">

          <img :src="livro.imagem" class="img" />

          <h1 class="title">{{ livro.titulo }}</h1>
          <p class="author">Autor: {{ livro.autor }}</p>

          <div class="info-extra">
            <p><strong>Gênero:</strong> {{ livro.categoria }}</p>
            <p><strong>Ano:</strong> {{ livro.ano }}</p>
          </div>

          <p class="desc">
            {{ livro.descricao }}
          </p>

        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// 🔥 IMPORT DAS MESMAS IMAGENS
import domCasmurro from '../assets/livros/dom-casmurro.jpg'
import livro1984 from '../assets/livros/1984.jpg'
import hobbit from '../assets/livros/hobbit.jpg'
import revolucaoBichos from '../assets/livros/revolucao-bichos.jpg'
import harryPotter from '../assets/livros/harry-potter.jpg'

defineOptions({ name: 'DetalhesPage' })

const route = useRoute()

const livros = ref([
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    categoria: 'Clássico',
    ano: 1899,
    descricao: 'Um romance psicológico que explora o ciúme e a dúvida através da história de Bentinho e Capitu.',
    imagem: domCasmurro
  },
  {
    id: 2,
    titulo: '1984',
    autor: 'George Orwell',
    categoria: 'Ficção / Distopia',
    ano: 1949,
    descricao: 'Uma sociedade controlada por um governo totalitário onde tudo é vigiado.',
    imagem: livro1984
  },
  {
    id: 3,
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    categoria: 'Fantasia',
    ano: 1937,
    descricao: 'A aventura de Bilbo Bolseiro em uma jornada cheia de perigos e descobertas.',
    imagem: hobbit
  },
  {
    id: 4,
    titulo: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    categoria: 'Política / Sátira',
    ano: 1945,
    descricao: 'Uma fábula que critica regimes políticos autoritários através de animais.',
    imagem: revolucaoBichos
  },
  {
    id: 5,
    titulo: 'Harry Potter',
    autor: 'J.K. Rowling',
    categoria: 'Fantasia',
    ano: 1997,
    descricao: 'A história de um jovem bruxo que descobre seu destino em um mundo mágico.',
    imagem: harryPotter
  }
])

const livro = computed(() => {
  return livros.value.find(l => l.id == Number(route.params.id))
})
</script>

<style scoped>
.page-content {
  --background: radial-gradient(circle at top, #0f2027, #203a43, #2c5364);
}

.container {
  padding: 20px;
}

.card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,234,255,0.2);
  text-align: center;
}

.img {
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.title {
  color: #00eaff;
  text-shadow: 0 0 10px #00eaff;
}

.author {
  color: #ccc;
  margin-bottom: 10px;
}

.info-extra {
  color: #00ff95;
  margin-bottom: 15px;
}

.desc {
  color: #eee;
}
</style>
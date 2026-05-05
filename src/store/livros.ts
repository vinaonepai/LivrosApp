import { ref } from 'vue'


import domCasmurro from '../assets/livros/dom-casmurro.jpg'
import livro1984 from '../assets/livros/1984.jpg'
import hobbit from '../assets/livros/hobbit.jpg'
import revolucaoBichos from '../assets/livros/revolucao-bichos.jpg'
import harryPotter from '../assets/livros/harry-potter.jpg'


const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos') || '[]')

export const livros = ref([
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

export const toggleFavorito = (livro: any) => {
  livro.favorito = !livro.favorito

  const favoritos = livros.value.filter(l => l.favorito)
  localStorage.setItem('favoritos', JSON.stringify(favoritos))
}
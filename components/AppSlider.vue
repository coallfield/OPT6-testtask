<template>
    <div class="documents-slider">
        <h2>Документы</h2>
        <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
            <div v-for="(document, index) in documents" :key="index" class="card">
                <div class="card-info">
                    <h3>{{ document.title }}</h3>
                    <p>{{ document.description }}</p>
                </div>
                <button @click="$router.push({path: '/document', query: {navPage: `${document.title}`}})">Перейти</button>
            </div>
        </div>
        <button @click="prevSlide()" class="prev-button"></button>
        <button @click="nextSlide()" class="next-button"></button>
        <div class="circles">
            <div v-for="(slide, index) in documents.length / (innerWidth < 780 ? 1 : (innerWidth < 1190 ? 2 : 3))" class="circle"
                :class="{ 'current-slide': currentSlideIndex === index }"></div>
        </div>

    </div>

</template>


<script setup lang="ts">
import type { IDocument } from '../interfaces/IDocument';

const currentSlideIndex = ref(0)
const innerWidth = ref(0)




const documents: IDocument[] = [
  {
    title: 'Лицензионный договор',
    description: 'Механизм разбрасывания веерного типа приводится в действие от колеса тележки, отличается простой и надёжной конструкцией, не нуждается в смазке.'
  },
  {
    title: 'Политика обработки персональных данных',
    description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.'
  },
  {
    title: 'Информация об оплате',
    description: 'Десятипозиционный переключатель дозирования расположен на ручке тележки и позволяет очень точно регулировать объём разбрасываемого реагента с учётом его массы и фракции.'
  },
  {
    title: 'Лицензионный договор',
    description: 'Механизм разбрасывания веерного типа приводится в действие от колеса тележки, отличается простой и надёжной конструкцией, не нуждается в смазке.'
  },
  {
    title: 'Политика обработки персональных данных',
    description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.'
  },
  {
    title: 'Информация об оплате',
    description: 'Десятипозиционный переключатель дозирования расположен на ручке тележки и позволяет очень точно регулировать объём разбрасываемого реагента с учётом его массы и фракции.'
  },
]



function prevSlide() {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--
  }
  else {
    currentSlideIndex.value = Math.floor((documents.length - 1) /  (innerWidth.value < 780 ? 1 : (innerWidth.value < 1190 ? 2 : 3)))
  }

}

function nextSlide() {
  if (currentSlideIndex.value >= Math.floor((documents.length - 1) / (innerWidth.value < 780 ? 1 : (innerWidth.value < 1190 ? 2 : 3)))) {
    currentSlideIndex.value = 0
  } else {
    currentSlideIndex.value++
  }

}


onMounted(() => {
  innerWidth.value = window.innerWidth
  window.addEventListener('resize', () => {
    innerWidth.value = window.innerWidth
    currentSlideIndex.value = 0
  })
})
</script>


<style lang="scss">
@import './assets/styles/slider.scss';
</style>
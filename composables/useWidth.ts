// устанавливает текущую ширину экрана, если ширина меняется, слайдер возвращается к первому слайду, чтобы избежать ошибок в верстке

export const useWidth = () => {
    const currentSlideIndex = ref(0)
    const innerWidth = ref(0)


    
onMounted(() => {
    innerWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
      innerWidth.value = window.innerWidth
      currentSlideIndex.value = 0
    })
  })

  return {currentSlideIndex, innerWidth}
}
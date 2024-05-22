

// класс для манипуляции со слайдером (прокрутить вперед-назад)

export default class Slider {
    
    static prevSlide(currentSlideIndex: number, innerWidth: number, sliderLength: number) {
        if (currentSlideIndex > 0) {
            currentSlideIndex--
        }
        else {
            currentSlideIndex = Math.floor((sliderLength - 1) / (innerWidth < 780 ? 1 : (innerWidth < 1190 ? 2 : 3)))
        }
        return currentSlideIndex
    }


    static nextSlide(currentSlideIndex: number, innerWidth: number, sliderLength: number) {
        if (currentSlideIndex >= Math.floor((sliderLength - 1) / (innerWidth < 780 ? 1 : (innerWidth < 1190 ? 2 : 3)))) {
            currentSlideIndex = 0
        } else {
            currentSlideIndex++
        }
        return currentSlideIndex
    }

}
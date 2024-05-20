<template>
    <div class="form-container">
        <div class="title">
            <h2>Проверьте штрафы и</h2>
            <h2>зарегистрируйтесь в 1 клик</h2>
        </div>

        <form @submit.prevent class="form">
            <div class="form-first-inputs">
                <FormGroup 
                    @inputField="(value) => inputValues.carNumber = value" 
                    :inputField="inputValues.carNumber" 
                    :isError="isError" 
                    id="car-number" 
                    label="Номер автомобиля">
                </FormGroup>
                <FormGroup 
                    @inputField="(value) => inputValues.region = value" 
                    :inputField="inputValues.region" 
                    :isError="isError" 
                    id="region" 
                    label="Регион" >
                </FormGroup>
            </div>
            <FormGroup 
                @inputField="(value) => inputValues.registrCertificate = value" 
                :inputField="inputValues.registrCertificate"
                :isError="isError" 
                id="registration-certificate" 
                label="Свидетельство о регистрации ТС">
            </FormGroup>
            <div class="form-buttons">
                <button @click.prevent="fakeSendData()" type="submit" class="btn-primary">Проверить штрафы</button>
                <button @click.prevent="emits('openYoutubePopup', true)" class="btn-youtube"><img src="../static/youtubeicon.png">О сервисе <span>(1 мин.20 сек)</span></button>
            </div>
            <div class="agreement">
                <p>Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
                   
            </div>
        </form>
    </div>

</template>


<script setup lang="ts">
const emits = defineEmits(['openYoutubePopup', 'openDataPopup'])


const inputValues= ref({
    carNumber: '',
    region: '',
    registrCertificate: ''
})
const isError = ref(false)

function fakeSendData() {
    if(Object.values(inputValues.value).some(el => el.trim() === '')) {
        isError.value = true
        setTimeout(() => {
            isError.value = false
        }, 1500)
    } else {
        inputValues.value.carNumber = ''
        inputValues.value.region = ''
        inputValues.value.registrCertificate = ''
        emits('openDataPopup', true)
    }
}


</script>


<style lang="scss">
 @import './assets/styles/form.scss';
</style>

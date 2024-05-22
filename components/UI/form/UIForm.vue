<template>
    <div class="form-container">
        <div class="form-title">
            <h2 class="form-title__text">Проверьте штрафы и</h2>
            <h2 class="form-title__text">зарегистрируйтесь в 1 клик</h2>
        </div>

        <form @submit.prevent class="form">
            <div class="form__first-inputs">
                <UIFormGroup 
                    @inputField="(value: string) => userDataStore.setInputValue(value, 'carNumber')" 
                    :inputField="userDataStore.inputValues.carNumber" 
                    :isError="userDataStore.isError" 
                    id="car-number" 
                    label="Номер автомобиля">
                </UIFormGroup>
                <UIFormGroup 
                    @inputField="(value: string) => userDataStore.setInputValue(value, 'region')" 
                    :inputField="userDataStore.inputValues.region" 
                    :isError="userDataStore.isError" 
                    id="region" 
                    label="Регион" >
                </UIFormGroup>
            </div>
            <UIFormGroup 
                @inputField="(value: string) => userDataStore.setInputValue(value, 'registrCertificate')" 
                :inputField="userDataStore.inputValues.registrCertificate"
                :isError="userDataStore.isError" 
                id="registration-certificate" 
                label="Свидетельство о регистрации ТС">
            </UIFormGroup>
            <div class="form__buttons">
                <button @click.prevent="userDataStore.fakeSendData()" type="submit" class="form__button_primary">Проверить штрафы</button>
                <button @click.prevent="emits('openYoutubePopup', true)" class="form__button_youtube"><img src="~~/static/youtubeicon.png">О сервисе <span class="form__span">(1 мин.20 сек)</span></button>
            </div>
            <div class="form__agreement">
                <p>Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
                   
            </div>
        </form>
    </div>

</template>


<script setup lang="ts">
import { useUserDataStore } from '~/stores/user-data';
const emits = defineEmits(['openYoutubePopup'])
const userDataStore = useUserDataStore()



</script>


<style lang="scss">
 @import '@/assets/styles/home-main/form.scss';
</style>

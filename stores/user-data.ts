import type { InputType } from "~/types/inputType"
export const useUserDataStore = defineStore('userDataStore', () => {



    const inputValues = ref({
        carNumber: '',
        region: '',
        registrCertificate: ''
    })
    const isError = ref(false)
    const isSuccess = ref(false)


    // проверяет инпуты на наличие данных 
    // в положительном случае включает попап об успешной отправке данных
    // в случае хотя бы одного пустого инпута подсвечивает пустой инпут красным бордером
    const fakeSendData = () => {
        if (Object.values(inputValues.value).some(el => el.trim() === '')) {
            isError.value = true
            setTimeout(() => {
                isError.value = false
            }, 1500)
        } else {
            inputValues.value.carNumber = ''
            inputValues.value.region = ''
            inputValues.value.registrCertificate = ''
            isSuccess.value = true
            setTimeout(() => {
                isSuccess.value = false
            }, 1500)
        }
    }

    // устанавливает значение инпута, используется в компоненте UIForm
    const setInputValue = (value: string, key: InputType) => {
        inputValues.value[key] = value
    }

    return { inputValues, isError, isSuccess, fakeSendData, setInputValue }
})
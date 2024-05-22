<template>

    <div class="form__group">
        <label :for="props.id">{{ props.label }}</label>
        <input 
            @input="emits('inputField', ($event.target as HTMLInputElement).value)" 
            v-bind:value="props.inputField" 
            class="form__input"
            :class="{'form__input_invalid': props.isError && props.inputField.trim() === ''}" 
            required 
            type="text" 
            :id="props.id" />
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        label: string,
        id: string,
        inputField: string,
        isError: boolean

    }>()

    const emits = defineEmits(['inputField'])

</script>

<style lang="scss">
 @import '@/assets/styles/home-main/form.scss';
</style>
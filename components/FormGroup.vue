<template>

    <div class="form-group">
        <label for="car-number">{{ props.label }}</label>
        <input 
            @input="setValue(($event.target as HTMLInputElement).value)" 
            v-bind:value="props.inputField" 
            class="input"
            :class="{'input-invalid': props.isError && props.inputField.trim() === ''}" 
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

    function setValue(value: string) {
        emits('inputField', value)
    }
</script>

<style lang="scss">
 @import './assets/styles/form.scss';
</style>
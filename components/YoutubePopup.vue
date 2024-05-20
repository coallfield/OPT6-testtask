<template>
  <div @click.stop="emits('closePopup', false)" class="popup-overlay">
    <span id="close-popup">✖</span>
    <div @click.stop class="popup-content">
      <iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/EEoQAoEGLhw&t" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>

const emits = defineEmits(['closePopup'])



</script>

<style lang="scss">
@import './assets/styles/popup.scss';

</style>

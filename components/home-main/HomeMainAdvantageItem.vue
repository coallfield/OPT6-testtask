<template>
    <div class="advantage-item">
        <div class="advantage-item__img">
                <img :src="props.image">
        </div>
        <div class="advantage-item__info">
            <h4 class="advantage-item__title">{{ props.title }}</h4>
            <p class="advantage-item__descr">{{ props.description }}</p>
        </div>

    </div>

</template>


<script lang="ts" setup>
import type { IAdvantage } from '~/interfaces/IAdvantage';
const props = defineProps<IAdvantage>()




</script>

<style lang="scss">
@import '../../assets/styles/home-main/advantages.scss';
</style>
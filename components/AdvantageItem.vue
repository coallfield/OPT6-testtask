<template>
    <div class="advantage-item">
        <div class="adv-img">
                <img :src="props.image">
        </div>
        <div class="adv-info">
            <h4>{{ props.title }}</h4>
            <p>{{ props.description }}</p>
        </div>

    </div>

</template>


<script lang="ts" setup>
import type { IAdvantage } from '~/interfaces/IAdvantage';
const props = defineProps<IAdvantage>()




</script>

<style>
@import './assets/styles/advantages.scss';
</style>
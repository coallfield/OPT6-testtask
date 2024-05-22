<template>
 <div class="advantages-list">
          <HomeMainAdvantageItem 
              :title="advantage.title"
              :description="advantage.description"
              :image="advantage.image"
              v-for="advantage in homeDataStore.advantages">
          </HomeMainAdvantageItem>
        </div>
</template>


<script setup lang="ts">
import { useHomeDataStore } from '~/stores/home-data';

  const homeDataStore = useHomeDataStore()
</script>


<style>
@import '../../assets/styles/home-main/advantages.scss';

</style>
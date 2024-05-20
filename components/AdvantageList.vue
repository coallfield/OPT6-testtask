<template>
 <div class="advantages-list">
          <AdvantageItem 
              :title="advantage.title"
              :description="advantage.description"
              :image="advantage.image"
              v-for="advantage in advantages">
          </AdvantageItem>
        </div>
</template>


<script setup lang="ts">
import type { IAdvantage } from '~/interfaces/IAdvantage';

const advantages: IAdvantage[] = [
        {
          title: "Неограниченный автопарк",
          description: "Можно добавить неограниченное кол-во машин и водителей",
          image: "adv1.png"
        },
        {
          title: "Сокращение затрат до 50%",
          description: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
          image: "adv2.png"
        },
        {
          title: "Безопасность",
          description: "Данные передаются в зашифрованном виде, они доступны только получателю",
          image: "adv3.png"
        },
        {
          title: "Уведомление о погашении",
          description: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
          image: "adv4.png"
        },
        {
          title: "Квитанция об оплате",
          description: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате",
          image: "adv5.png"
        },
        {
          title: "Вся история сохраняется по каждой машине",
          description: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
          image: "adv6.png"
        },


  ]

</script>


<style>
@import './assets/styles/advantages.scss';

</style>
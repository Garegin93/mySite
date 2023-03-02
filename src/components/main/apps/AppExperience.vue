<template>
  <section class="experience section"
           id="myExperience">
    <div class="experience__container">
      <div class="experience__content">
        <h2 class="experience__title main__title">{{ experienceTitle }}</h2>
        <p class="experience__description">{{ experienceDescription }}</p>
      </div>
      <div class="experience__webDev">
        <h3 class="experience__title inner-title">{{ experienceWebDevTitle }}</h3>
        <span>Анонимный клиент</span>
        <p class="experience__description">{{ experienceWebDevDescription }}</p>
      </div>
      <div class="experience__image img">
        <app-icon-tag></app-icon-tag>
      </div>
      <div class="experience__It">
        <h3 class="experience__title inner-title">{{ experienceItTitle }}</h3>
        <span>Анонимный клиент</span>
        <p class="experience__description">{{ experienceItDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script>

import AppIconTag from "@/components/main/apps/appIcons/AppIconTag";
import {mapState} from "vuex"

export default {

  computed: {
    ...mapState([
      "experienceTitle",
      "experienceDescription",
      "experienceWebDevTitle",
      "experienceWebDevDescription",
      "experienceItTitle",
      "experienceItDescription"
    ])
  },

  components: {AppIconTag}

}
</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.experience {
  &__container {
    @include grid(1fr, null);
    column-gap: 50px;
  }

  &__frontEnd {
    grid-column: 2/3;
  }

  &__image {
    grid-column: 1/2;
  }
}

@include respond-to(991px) {

  .experience__container {
    display: block;

    & > div:not(:last-of-type) {
      margin-bottom: 20px;
      border-bottom: 1px solid $borderColor;
    }

    & > div:first-of-type {
      border-bottom: none;
    }

    & > div > h3, {
      margin-bottom: 10px;
    }

    & > div > p {
      margin-bottom: 15px;
    }
  }
}

</style>
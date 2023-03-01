<template>
  <section class="education section"
           id="myEducation">
    <div class="education__container">
      <div class="education__content">
        <h2 class="education__title main__title">{{ educationTitle }}</h2>
        <p class="education__description">{{ educationDescription }}</p>
      </div>
      <div class="education__geek">
        <h3 class="education__title inner-title">{{ educationGeekTitle }}</h3>
        <span>{{ educationGeekSpan }}</span>
        <p class="education__description">{{ educationGeekDescription }}</p>
      </div>
      <div class="education__html">
        <h3 class="education__title inner-title">{{ educationHtmlTitle }}</h3>
        <span>{{ educationHtmlSpan }}</span>
        <p class="education__description">{{ educationHtmlDescription }}</p>
      </div>
      <div class="education__image img">
        <app-icon-tag></app-icon-tag>
      </div>
      <div class="education__vue">
        <h3 class="education__title inner-title">{{ educationVueTitle }}</h3>
        <span>{{ educationVueSpan }}</span>
        <p class="education__description">{{ educationVueDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script>

import AppIconTag from "@/components/main/apps/appIcons/AppIconTag";
import {mapState} from "vuex";

export default {

  computed: {
    ...mapState([
      "educationTitle",
      "educationGeekTitle",
      "educationHtmlTitle",
      "educationVueTitle",
      "educationDescription",
      "educationGeekDescription",
      "educationHtmlDescription",
      "educationVueDescription",
      "educationGeekSpan",
      "educationHtmlSpan",
      "educationVueSpan"
    ])
  },

  components: {
    AppIconTag
  }
}
</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.education {
  &__container {
    @include grid(1fr, null)
  }

  &__content {
    grid-row: 1 / span 2;
  }

  &__html {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  &__vue {
    grid-column: 2/3;
    grid-row: 3/4;
  }

  &__image {
    grid-row: 3/4;
  }
}

@include respond-to(991px) {

  .education__container {
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
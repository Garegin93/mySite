<template>
  <section class="contact section"
           id="myContact">
    <div class="contact__wrapper">
      <div class="contact__container">
        <div class="contact__content">
          <h2 class="contact__title main__title">{{ contactTitle }}</h2>
          <p class="contact__description">{{ contactDescription }}</p>
        </div>
        <div class="contact__image img">
          <app-icon-tag></app-icon-tag>
        </div>
      </div>
      <app-form></app-form>
    </div>
  </section>
</template>

<script>

import AppIconTag from "@/components/main/apps/appIcons/AppIconTag";
import AppForm from "@/components/main/apps/AppForm";

import {mapState} from "vuex";

export default {
  computed: {
    ...mapState([
      "contactTitle",
      "contactDescription"
    ])
  },

  components: {
    AppIconTag,
    AppForm
  }
}
</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.contact {
  border-bottom: 1px solid $borderColor;

  &__wrapper {
    display: flex;
  }

  &__container {
    width: 30%;
    margin-right: 50px;
    margin-bottom: 20px;
  }

  &__image {
    margin-top: 20px;
  }
}

@include respond-to(991px) {
  .contact {
    &__container {
      margin-right: 0;
      width: 100%;
    }

    &__wrapper {
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
}
</style>
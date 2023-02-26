<template>
  <section class="skills section"
           id="mySkills">
    <div class="skills__container">
      <div class="skills__content">
        <h2 class="skills__title main__title">{{ $store.state.skillsTitle }}</h2>
        <p class="skills__description">{{ $store.state.skillsDescription }}</p>
      </div>
      <div class="skills__webDev">
        <h3 class="skills__title inner-title">{{ $store.state.skillsWebDevTitle }}</h3>
        <p class="skills__description">{{ $store.state.skillsWebDevDescription }}</p>
      </div>
      <div class="skills__UiUX">
        <h3 class="skills__title inner-title">{{ $store.state.skillsUiUxTitle }}</h3>
        <p class="skills__description">{{ $store.state.skillsUiUxDescription }}</p>
      </div>
      <div class="skills__image img">
        <app-icon-tag></app-icon-tag>
      </div>
      <div class="skills__frontDev">
        <h3 class="skills__title inner-title">{{ $store.state.skillsFrontDevTitle }}</h3>
        <p class="skills__description">{{ $store.state.skillsFrontDevDescription }}</p>
      </div>
      <div class="skills__consulting">
        <h3 class="skills__title inner-title">{{ $store.state.skillsConsultingTitle }}</h3>
        <p class="skills__description">{{ $store.state.skillsConsultingDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import AppIconTag from "@/components/main/apps/appIcons/AppIconTag";

export default {

  components: {AppIconTag}
}
</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.skills {
  &__container {
    @include grid(1fr, 1fr)
  }
}

.inner-title + span {
  display: block;
  margin-bottom: 10px;
}

@include respond-to(991px) {
  .skills__container {
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
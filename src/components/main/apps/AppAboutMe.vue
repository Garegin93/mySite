<template>
  <section class="about-me section"
           id="hello">
    <div class="about-me__container">
      <div class="about-me__content">
        <div class="about-me__header">
          <h1 class="about-me__title main__title">{{ aboutMeTitle }}</h1>
          <p class="about-me__description">{{ aboutMeDescription }}</p>
        </div>
        <app-about-me-info></app-about-me-info>
        <div class="about-me__btn">
          <a class="about-me__btn_contactMe btn"
             href="#"
             @click="openModalFormBtn"
          >Свяжитесь со мной</a>
          <a class="about-me__btn_downloadCV btn"
             href="../../../../resume_barsegyan.pdf"
             download
          >Скачать резюме</a>
        </div>
      </div>
      <img class="about-me__img"
           src="../../../assets/images/my_photo.jpg"
           alt="My photo."
           width="450"
           height="300">
    </div>
  </section>
</template>

<script>

import AppAboutMeInfo from "@/components/main/apps/AppAboutMeInfo";

export default {

  computed: {
    aboutMeTitle() {
      return this.$store.state.aboutMeTitle
    },

    aboutMeDescription() {
      return this.$store.state.aboutMeDescription
    }
  },

  methods: {
    openModalFormBtn() {
      this.$store.commit("openModalForm")
    }
  },

  components: {AppAboutMeInfo}
}
</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.about-me {
  border-top: none;

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

  &__title {
    font-size: 30px;
    font-family: "Lato-Bold", sans-serif;
  }

  &__description {
    margin-bottom: 10px;
  }

  &__btn {
    &_contactMe {
      background-color: $colorBtnGray;
      color: inherit;
      margin-right: 30px;

      &:hover {
        box-shadow: 10px 10px 20px rgba(37, 37, 37, 20%)
      }
    }
  }

  &__img {
    justify-self: flex-end;
    box-shadow: $boxShadow;
    border-radius: 5px;
  }
}

@include respond-to(1200px) {
  .about-me__container {
    gap: 25px;
  }
}

@include respond-to(991px) {
  .about-me {

    &__container {
      grid-template-columns: none;
    }

    &__img {
      grid-row: 1/2;
      justify-self: center;
      width: 100%;
      height: auto;
    }
  }
}

@include respond-to(480px) {
  .about-me__btn {
    display: flex;
    flex-direction: column;

    &_contactMe {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
}

@include respond-to(445px) {
  .about-me__btn {
    margin-top: 50px;
  }
}
</style>
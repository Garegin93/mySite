<template>
  <section class="feedback section"
           id="myFeedback">
    <div class="feedback__container">
      <div class="feedback__content">
        <h2 class="feedback__title main__title">{{ feedbackTitle }}</h2>
        <p class="feedback__description">{{ feedbackDescription }}</p>
      </div>
      <article class="article">
        <h2 class="visually-hidden">My feedback</h2>
        <img src="../../../assets/images/icon_misha.jpg"
             alt="Photo of reviewer"
             width="50"
             height="50"
             class="article__img">
        <span class="article__name">{{ firstArticleName }}</span>
        <span class="article__position">{{ firstArticlePosition }}</span>
        <p class="article__text">{{ firstArticleText }}</p>
      </article>
      <article class="article">
        <h2 class="visually-hidden">My feedback</h2>
        <img src="../../../assets/images/icon_karen.jpg"
             alt="Photo of reviewer"
             width="50"
             height="50"
             class="article__img">
        <span class="article__name">{{ secondArticleName }}</span>
        <span class="article__position">{{ secondArticlePosition }}</span>
        <p class="article__text">{{ secondArticleText }}</p>
      </article>
      <article class="article">
        <h2 class="visually-hidden">My feedback</h2>
        <img src="../../../assets/images/icon_dima.jpg"
             alt="Photo of reviewer"
             width="50"
             height="50"
             class="article__img">
        <span class="article__name">{{ thirdArticleName }}</span>
        <span class="article__position">{{ thirdArticlePosition }}</span>
        <p class="article__text">{{ thirdArticleText }}</p>
      </article>
      <div class="feedback__image img">
        <app-icon-tag></app-icon-tag>
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
      "feedbackTitle",
      "feedbackDescription",
      "firstArticleText",
      "secondArticleText",
      "thirdArticleText",
      "firstArticleName",
      "secondArticleName",
      "thirdArticleName",
      "firstArticlePosition",
      "secondArticlePosition",
      "thirdArticlePosition"
    ])
  },

  components: {AppIconTag}
}

</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.feedback {
  &__container {
    @include grid(1fr, null);

    & > article:nth-child(4) {
      grid-column: 2/3;
      grid-row: 3/4;
    }

    & > article:nth-child(3) {
      grid-column: 2/3;
      grid-row: 2/3;
    }

    & > article:nth-child(2) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  }

  &__content {
    grid-row: 1 / span 2;
  }

  &__image {
    grid-column: 1/2;
    grid-row: 3/4;
  }
}

.article {
  &__img {
    border-radius: 50%;
  }

  .article__name, .article__position {
    position: relative;
    bottom: 30px;
  }

  &__name {
    font-weight: 700;
    margin-left: 10px;
  }

  &__position {
    display: block;
    font-style: italic;
    margin-left: 60px;
  }

  &__text {
    font-style: italic;
  }
}

@include respond-to(991px) {
  .feedback__container {
    display: block;

    & > div:not(:last-of-type),
    & > article:not(:last-of-type) {
      margin-bottom: 20px;
      border-bottom: 1px solid $borderColor;
    }

    & > div:first-of-type {
      border-bottom: none;
    }

    & > article > p {
      margin-bottom: 15px;
    }
  }
}
</style>
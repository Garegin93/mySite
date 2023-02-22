<template>
  <section class="education section"
           id="myEducation">
    <div class="education__container">
      <div class="education__content">
        <h2 class="education__title main__title">Образование</h2>
        <p class="education__description">Всю свою жизнь я был движим твердой верой в важность образования. Я
          стараюсь узнавать что-то новое каждый божий день.</p>
      </div>
      <div class="education__geek">
        <h3 class="education__title inner-title">GeekBrains, frontend-разработка.</h3>
        <span>Mail Group</span>
        <p class="education__description">В 2021 году прошел полный курс от GeekBrains, frontend-разработка.
          Один из лучших курсов по IT обучению. Методичный подход, хорошие преподаватели, полный
          профессионализм.
        </p>
      </div>
      <div class="education__html">
        <h3 class="education__title inner-title">HTML и CSS. Профессиональная вёрстка сайтов
        </h3>
        <span>HTML Academy</span>
        <p class="education__description">В 2022 году прошел курсы по повышению квалификации по профессиональной
          верстке сайтов. Благодаря уникальной системе обучения данного курса, я узнал много нового, и теперь
          могу сказать, что уверенно владею HTML и CSS</p>
      </div>
      <div class="education__image img">
        <app-icon-tag></app-icon-tag>
      </div>
      <div class="education__vue">
        <h3 class="education__title inner-title">Профессиональная разработка на Vue.js</h3>
        <span>Владилен Минин</span>
        <p class="education__description">В 2022 году окончил курс по профессиональной разработке на фреймворке
          vue.js. Мне очень нравится методичный подход автора данного курса. Хорошая подача информации и
          подробный рассказ о всех преимуществах данного фреймворка.</p>
      </div>
    </div>
  </section>
</template>

<script>
import AppIconTag from "@/components/main/apps/appIcons/AppIconTag";

export default {
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
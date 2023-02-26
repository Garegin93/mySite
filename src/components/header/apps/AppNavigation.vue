<template>
  <nav class="navigation">
    <menu class="menu">
      <li class="menu__item"><a href="#hello"
                                class="menu__link">Привет</a></li>
      <li class="menu__item"><a href="#mySkills"
                                class="menu__link">Навыки</a></li>
      <li class="menu__item"><a href="#myExperience"
                                class="menu__link">Опыт</a></li>
      <li class="menu__item"><a href="#myEducation"
                                class="menu__link">Образование</a></li>
      <li class="menu__item"><a href="#myPortfolio"
                                class="menu__link">Портфолио</a></li>
      <li class="menu__item"><a href="#myFeedback"
                                class="menu__link">Отзывы</a></li>
      <li class="menu__item"><a href="#myContact"
                                class="menu__link">Контакты</a></li>
    </menu>
  </nav>
  <app-mobile-menu></app-mobile-menu>
</template>

<script>
import AppMobileMenu from "@/components/header/apps/AppMobileMenu";

export default {

  components: {AppMobileMenu}
}
</script>

<style scoped
       lang="scss">
@import "../../../style.scss";

.navigation {
  font-family: "Lato-Bold", sans-serif;
}

.menu {
  @include flex(center);
  list-style: none;
  flex-wrap: wrap;
  z-index: 2;
  transition: .5s all;

  &__link {
    text-transform: uppercase;
    text-decoration: none;
    color: $colorBlack;
    padding: 10px;
    transition: .2s ease-in-out;

    &:hover {
      color: $colorBtnBlue
    }
  }

  &__item:last-child > &__link {
    padding-right: 0;
  }

  &__item:first-child > &__link {
    padding-left: 0;
  }
}

@include respond-to(991px) {
  .navigation {
    display: none;
  }

  .menu__item:first-child > .menu__link {
    padding-left: 10px;
  }

  .menu__item:last-child > .menu__link {
    padding-right: 10px;
  }
}
</style>
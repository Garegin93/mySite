<template>
  <nav class="mobile-menu-wrapper">
    <div class="menu-close"
         @click="closeMobileMenu">
      <div class="mobile-menu-close"></div>
    </div>
    <menu class="mobile-menu"
          @click="skipMobileMenu">
      <li class="mobile-menu__item"><a href="#hello"
                                       class="mobile__link">Привет</a></li>
      <li class="mobile-menu__item"><a href="#mySkills"
                                       class="mobile__link">Навыки</a></li>
      <li class="mobile-menu__item"><a href="#myExperience"
                                       class="mobile__link">Опыт</a></li>
      <li class="mobile-menu__item"><a href="#myEducation"
                                       class="mobile__link">Образование</a></li>
      <li class="mobile-menu__item"><a href="#myPortfolio"
                                       class="mobile__link">Портфолио</a></li>
      <li class="mobile-menu__item"><a href="#myFeedback"
                                       class="mobile__link">Отзывы</a></li>
      <li class="mobile-menu__item"><a href="#myContact"
                                       class="mobile__link">Контакты</a></li>
    </menu>
  </nav>
</template>

<script>

export default {

  methods: {
    closeMobileMenu() {
      this.$store.commit("closeMobileMenu")
    },

    skipMobileMenu(event) {
      let target = event.target

      if (target.tagName !== "A") return
      this.closeMobileMenu()
    }
  }
}
</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.mobile-menu-wrapper {
  display: none;
}

@include respond-to(991px) {

  .mobile {

    &__link {
      text-transform: uppercase;
      text-decoration: none;
      color: $colorWhite;
      transition: .2s ease-in-out;
      padding: 15px;

      &:hover {
        color: $colorBlack
      }
    }

    &-menu {
      padding: 15px 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: start;
      height: 100vh;

      &__item {
        padding: 20px;
      }

      &-wrapper {
        font-family: "Lato-Bold", sans-serif;
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        z-index: 4;
        transition: transform 0.3s ease;
        transform: translateY(-100%);
        padding: 0 20px;
        background-color: $colorBtnBlue;
      }

      &-close {
        position: absolute;
        width: 40px;
        height: 5px;
        background-color: #ffffff;
        transform: rotate(45deg);
        top: 30px;

        &:after {
          content: "";
          position: absolute;
          width: 40px;
          height: 5px;
          background-color: #ffffff;
          left: 0;
          transform: rotate(-90deg);
        }
      }
    }
  }

  .menu-close {
    width: 60px;
    height: 70px;
    margin-left: auto;
    padding: 10px;
    position: relative;
    top: 0;
    z-index: 5;
  }
}

@media screen and (max-width: 991px) and (orientation: landscape) {
  .mobile-menu {
    justify-content: center;
    position: relative;
    bottom: 70px;

    &__item {
      padding: 15px;
    }
  }
}
</style>
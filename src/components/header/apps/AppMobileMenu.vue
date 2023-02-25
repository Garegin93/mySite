<template>
  <nav class="mobile-menu-wrapper">
    <div class="mobile-menu-close"
         @click="closeMobileMenu"></div>
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
  font-family: "Lato-Bold", sans-serif;
}

.mobile {

  &__link {
    text-transform: uppercase;
    text-decoration: none;
    color: $colorWhite;
    transition: .2s ease-in-out;

    &:hover {
      color: $colorBlack
    }
  }
}

@include respond-to(991px) {

  .mobile-menu-wrapper {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    text-align: center;
    z-index: 4;
    transition: transform 0.3s ease;
    transform: translateY(-100%);
    padding: 0 20px;
    background-color: $colorBtnBlue;
  }

  .mobile-menu {
    padding: 15px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    list-style: none;

    &__item {
      padding: 20px;
    }
  }

  .mobile-menu-close {
    position: relative;
    width: 40px;
    height: 5px;
    background-color: #ffffff;
    transform: rotate(45deg);
    margin-left: auto;
    top: 30px;
    cursor: pointer;

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
</style>
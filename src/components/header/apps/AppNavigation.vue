<template>
  <nav class="navigation mobile-menu-wrapper">
    <div class="mobile-menu-close"
         @click="closeMobileMenu"></div>
    <menu class="menu mobile-menu"
          @click="skipMobileMenu">
      <li class="menu__item mobile-menu__item"><a href="#hello"
                                                  class="menu__link">Привет</a></li>
      <li class="menu__item mobile-menu__item"><a href="#mySkills"
                                                  class="menu__link">Навыки</a></li>
      <li class="menu__item mobile-menu__item"><a href="#myExperience"
                                                  class="menu__link">Опыт</a></li>
      <li class="menu__item mobile-menu__item"><a href="#myEducation"
                                                  class="menu__link">Образование</a></li>
      <li class="menu__item mobile-menu__item"><a href="#myPortfolio"
                                                  class="menu__link">Портфолио</a></li>
      <li class="menu__item mobile-menu__item"><a href="#myFeedback"
                                                  class="menu__link">Отзывы</a></li>
      <li class="menu__item mobile-menu__item"><a href="#myContact"
                                                  class="menu__link">Контакты</a></li>
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
      if (target.tagName !== "A") return;
      this.closeMobileMenu()
    }
  }
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
  padding: 18px 0;
  list-style: none;
  flex-wrap: wrap;
  width: 100%;
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
  .mobile-menu-wrapper {
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

    &__item {
      padding: 20px;
    }
  }

  .menu__item:first-child > .menu__link {
    padding-left: 10px;
  }

  .menu__item:last-child > .menu__link {
    padding-right: 10px;
  }

  .menu__link {
    color: $colorWhite;

    &:hover {
      color: $colorBlack;
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
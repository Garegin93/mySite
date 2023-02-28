<template>
  <header class="header">
    <div class="header__container">
      <div class="mobile-navigation">
        <h2 class="mobile-title">Гарегин</h2>
        <div class="burger-menu"
             @click="openMobileMenu">
          <div class="burger-menu-btn"></div>
        </div>
      </div>
      <app-logo-svg></app-logo-svg>
      <app-navigation></app-navigation>
    </div>
  </header>
</template>

<script>
import AppLogoSvg from "@/components/header/apps/AppLogoSvg";
import AppNavigation from "@/components/header/apps/AppNavigation";

export default {

  methods: {
    openMobileMenu() {
      this.$store.commit("openMobileMenu")
    }
  },
  components: {AppLogoSvg, AppNavigation}
}
</script>

<style scoped
       lang="scss">

@import "../../style";

.header {
  position: fixed;
  border-bottom: 1px solid $borderColor;
  background-color: $colorWhite;
  z-index: 2;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  @include flex(center);
}

.header__container {
  width: 1200px;
  padding: 10px 15px;
  @include flex(space-between);
}

.mobile-navigation {
  display: none;
}

.burger-menu {
  position: relative;
  width: 60px;
  height: 50px;
  padding: 25px;
}

.burger-menu-btn,
.burger-menu-btn:after,
.burger-menu-btn:before {
  position: absolute;
  width: 40px;
  height: 5px;
  background-color: $colorBlack;
  right: 0;
}

.burger-menu-btn:after {
  content: "";
  position: absolute;
  margin-top: 10px;
}

.burger-menu-btn:before {
  content: "";
  position: absolute;
  margin-top: -10px;
}

@include respond-to(1200px) {
  .header__container {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@include respond-to(991px) {
  .header {
    padding: 0 60px;
  }

  .mobile-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
  }
}

@include respond-to(769px) {
  .header {
    padding: 10px 30px;

    &__container {
      padding: 0;
    }
  }
}
</style>
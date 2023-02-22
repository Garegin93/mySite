<template>
  <the-header></the-header>
  <the-main></the-main>
  <the-footer></the-footer>
  <the-modal></the-modal>
</template>

<script>
import TheHeader from "@/components/header/TheHeader";
import TheMain from "@/components/main/TheMain";
import TheFooter from "@/components/footer/TheFooter";
import TheModal from "@/components/modal/TheModal"

export default {
  components: {TheHeader, TheMain, TheFooter, TheModal}
}
</script>

<style lang="scss">

@import "src/assets/styles/general-options/general-options.scss";


@font-face {
  font: {
    family: "Lato";
    style: normal;
    weight: 400;
    display: swap;
  }
  line-height: 1.1;
  src: url("./assets/fonts/Lato-Regular.woff2") format("woff2"),
  url("./assets/fonts/Lato-Regular.woff") format("woff")
}

@font-face {
  font: {
    family: "Lato-Bold";
    style: normal;
    weight: 700;
    display: swap;
  }
  src: url("./assets/fonts/Lato-Bold.woff2") format("woff2"),
  url("./assets/fonts/Lato-Bold.woff") format("woff")
}

@keyframes animate-scale {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@include respond-to(1200px) {
  body {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@include respond-to(991px) {
  html {
    scroll-padding-top: 60px;
  }

  body {
    font-size: 14px;
    line-height: 1.4;
    padding: 0;
  }

  .img {
    display: none;
  }

  .section {
    padding: 30px 100px;
  }
}

@include respond-to(769px) {
  .section {
    padding: 30px;
  }
}

</style>

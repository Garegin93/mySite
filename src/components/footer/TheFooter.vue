<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__text">Copyright 2023 Гарегин.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped
       lang="scss">

@import "../../style.scss";

.footer {
  position: absolute;
  left: 0;
  width: 100%;

  &__text {
    padding: 15px 0;
    text-align: center;
    background-color: $colorBtnGray;
  }
}
</style>
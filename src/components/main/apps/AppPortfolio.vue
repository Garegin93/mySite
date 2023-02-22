<template>
  <section class="portfolio section"
           id="myPortfolio">
    <h2 class="portfolio__title main__title">Портфолио</h2>
    <div class="portfolio__container">
      <div class="portfolio__item">
        <a href="https://github.com/Garichek412199393/Waxom"
           target="_blank"
           class="portfolio__link">
          <div class="portfolio__image">
            <img src="../../../assets/images/image_waxom.jpg"
                 alt="Portfolio image."
                 width="270"
                 height="270">
          </div>
          <span class="portfolio__name">Waxom</span>
          <span class="portfolio__date">Апрель, 2022</span>
        </a>
      </div>
      <div class="portfolio__item">
        <a href="https://github.com/Garichek412199393/Sedona"
           target="_blank"
           class="portfolio__link">
          <div class="portfolio__image">
            <img src="../../../assets/images/image_sedona.jpg"
                 alt="Portfolio image"
                 width="270"
                 height="270">
          </div>
          <span class="portfolio__name">Sedona</span>
          <span class="portfolio__date">Ноябрь, 2022</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped
       lang="scss">
@import "../../../style.scss";

.portfolio {

  &__container {
    display: flex;
  }

  &__item:not(:last-child) {
    margin-right: 50px;
  }

  &__link {
    text-decoration: none;
    transition: .3s all;

    &:hover .portfolio__name {
      color: $colorBtnBlue;
      text-decoration-line: underline;
    }
  }

  &__image {
    overflow: hidden;
    margin-bottom: 10px;

    & > img {
      transition: .2s all;
      width: 100%;
      height: auto;

      &:hover {
        transform: scale(1.3);
      }
    }
  }

  &__name {
    font-weight: 700;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    display: block;
  }

  &__date {
    display: block;
  }
}

@include respond-to(480px) {

  .portfolio__container {
    flex-wrap: wrap;
  }

  .portfolio__item {
    flex-grow: 1;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }

    &:not(:last-child) {
      margin-right: 0;
    }
  }
}

</style>
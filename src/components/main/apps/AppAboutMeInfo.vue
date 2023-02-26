<template>
  <div class="about-me__info">
    <p>
      <span class="span-title">Телефон:</span>
      <span>+7-920-529-99-70</span>
    </p>
    <p>
      <span class="span-title">Эл. адрес:</span>
      <span>garikbarsegyan93@mail.ru</span>
    </p>
    <p>
      <span class="span-title">Адрес:</span>
      <span>398046, г. Липецк, пр. Победы, д. 106а. кв.66</span>
    </p>
    <p>
      <span class="span-title">Соцсети:</span>
      <span class="span-icons">
          <app-icon-telegram></app-icon-telegram>
          <app-icon-vk></app-icon-vk>
          <app-icon-instagram></app-icon-instagram>
          <app-icon-github></app-icon-github>
            </span>
    </p>
  </div>
</template>

<script>
import AppIconTelegram from "@/components/main/apps/appIcons/AppIconTelegram";
import AppIconVk from "@/components/main/apps/appIcons/AppIconVk";
import AppIconInstagram from "@/components/main/apps/appIcons/AppIconInstagram";
import AppIconGithub from "@/components/main/apps/appIcons/AppIconGithub";

export default {

  components: {AppIconTelegram, AppIconVk, AppIconInstagram, AppIconGithub}
}
</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.about-me {

  &__info {
    position: relative;
    margin-bottom: 20px;

    & > p {
      margin-bottom: 10px;
    }
  }
}

.span-title {
  color: $colorBlack;
  font-weight: 700;

  & + span {
    left: 0;
    padding-left: 90px;
    position: absolute;
  }
}

.socials {
  text-decoration: none;
  color: inherit;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: $colorBtnBlue;
  }
}

@include respond-to(445px) {

  .about-me__info > p:last-child {
    top: 25px;
    position: relative;
  }
}
</style>
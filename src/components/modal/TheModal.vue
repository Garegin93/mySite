<template>
  <dialog id="modal"
          class="modal__contact">
    <div class="contact__wrapper modal__wrapper">
      <div class="contact__container modal__container">
        <div class="contact__content">
          <button class="modal__closeBtn"
                  @click="closeModalForm"></button>
          <h2 class="contact__title main__title">Давайте вместе поработаем!</h2>
          <p class="contact__description">Вы работаете над чем-то большим? Я хотел бы помочь вам в реализации
            задач.
            Напишите мне письмо и начните свой проект прямо сейчас! Просто сделай это.</p>
        </div>
      </div>
      <app-form></app-form>
    </div>
  </dialog>
</template>

<script>

import AppForm from "@/components/main/apps/AppForm";

export default {

  methods: {
    closeModalForm() {
      let modal = document.querySelector(".modal__contact");
      modal.style.display = "none";
    }
  },

  components: {
    AppForm
  }
}
</script>

<style scoped
       lang="scss">

@import "../../style.scss";

.modal {
  &__contact {
    display: none;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.8);
    overflow: auto;
    width: 100%;
    height: 100%;
    padding-top: 200px;
  }

  &__wrapper {
    flex-direction: column;
    padding: 50px;
    position: relative;
    max-width: 850px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: $colorWhite;
    overflow: auto;
    margin: auto;
    animation: {
      name: animate-scale;
      duration: .3s;
    }
  }

  &__container {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }

  &__closeBtn {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: $colorBtnGray;
    right: 20px;
    top: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:after,
    &:before {
      content: "";
      width: 30px;
      height: 1px;
      background-color: $colorBtnBlue;
    }

    &:after {
      transform: rotate(45deg);
    }

    &:before {
      transform: rotate(-45deg);
    }

    &:hover:after,
    &:hover:before {
      background-color: $colorBlack;
    }
  }
}

@include respond-to(769px) {
  .modal__wrapper {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
<template>
  <div class="form-container">
    <form action="../../../../send.php"
          id="contact"
          class="contact__form"
          method="post">
      <div class="inputs-container">
        <input type="text"
               id="name"
               name="name"
               placeholder="Имя"
               required>
        <input type="text"
               id="email"
               name="email"
               placeholder="Эл. адрес"
               required>
      </div>
      <div class="textarea-container">
                <textarea id="msg"
                          placeholder="Сообщение"
                          name="msg"
                          required></textarea>
      </div>
      <input type="submit"
             class="btn"
             value="Отправить сообщение">
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped
       lang="scss">

@import "../../../style.scss";

.form-container {
  flex-grow: 1;
}

.contact__form {
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 20px;

  & > input[type="submit"] {
    font-size: 12px;
    grid-column: 2/3;
    max-width: 200px;
    @include flex(center);
    justify-self: flex-end;
  }
}

.inputs-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  & > input[type="text"] {
    height: 50px;
    width: 100%;
    border: 1px solid $borderColor;
    padding: 0 20px;
    transition: .3s all;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 16px;
  }

  & > input[type="text"]:hover,
  & > input[type="text"]:focus, {
    border: 1px solid $colorBtnBlue;
  }
}

.textarea-container {
  & > textarea {
    height: 130px;
    width: 100%;
    border: 1px solid $borderColor;
    padding: 15px 20px;
    transition: .3s all;
    display: block;
    box-sizing: border-box;
    resize: none;
    font-size: 16px;

    &:hover,
    &:focus {
      border: 1px solid $colorBtnBlue;
    }
  }

  & + input[type="submit"] {
    margin-top: 15px;
  }
}

@include respond-to(991px) {

  .contact__form {
    display: block;
  }

  .inputs-container > input[type="text"] {
    margin-bottom: 20px;
  }
}

@include respond-to(480px) {
  .contact__form > input[type=submit] {
    max-width: none;
    width: 100%;
  }
}

</style>
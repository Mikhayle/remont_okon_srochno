let inputTel = document.querySelectorAll(`.input-tel`);
let im = new Inputmask('+7 (999) 999-99-99');

im.mask(inputTel);


let validateForms = (selector, rules, successModal, yaGoal) => {
  new window.JustValidate(selector, {
    rules: rules,
    messages: {
      name: "Это поле обязательно для заполнения",
      tel: {
        required: "Это поле обязательно для заполнения",
      },
      text: "Это поле обязательно для заполнения",
    },
    submitHandler: function (form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            modalContainer.classList.remove(`is-active`);
            setTimeout(() => {
              body.classList.add(`scroll-off`);
              modalContainerThanks.classList.add(`is-active`);
            }, 300);
          };
        }
      };

      xhr.open('POST', 'telegram.php', true);
      xhr.send(formData);
      form.reset();
    }
  });
};

validateForms(`.modal__form`, {
  name: { required: true },
  tel: { required: true },
  text: { required: true },

}, `.thanks-popup`, 'send goal');


validateForms(`.hero__form`, {
  name: { required: true },
  tel: { required: true },
}, `.thanks-popup`, 'send goal');

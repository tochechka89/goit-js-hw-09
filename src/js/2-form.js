const formRefs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
  };
  
  const formData = { email: '', message: '' };
  
  const FEEDBACK_FORM_KEY = 'feedback-form-state';
  
  formRefs.form.addEventListener('input', event => {
    const { name, value } = event.target;
  
    formData.email = formRefs.email.value;
    formData.message = formRefs.message.value;
    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
  });
  
  if (localStorage.getItem(FEEDBACK_FORM_KEY)) {
    const data = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
    formRefs.email.value = data.email || '';
    formRefs.message.value = data.message || '';
  }
  
  formRefs.form.addEventListener('submit', event => {
    event.preventDefault();
    if (
      formRefs.email.value.trim() === '' ||
      formRefs.message.value.trim() === ''
    ) {
      alert('Please, fill in all the fields');
    } else {
      localStorage.removeItem(FEEDBACK_FORM_KEY);
      formRefs.form.reset();
      console.log(formData);
      formData.email = '';
      formData.message = '';
    }
  }); 
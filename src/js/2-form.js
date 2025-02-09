const formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  Object.assign(formData, JSON.parse(savedData));
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("input", (evt) => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	 if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  
  formData.email = "";
  formData.message = "";
});
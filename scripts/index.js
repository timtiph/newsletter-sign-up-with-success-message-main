const suscribeButton = document.getElementById('valid-email-address');
const successDiv = document.getElementById('success');
const principalDiv = document.getElementById('principalDiv');
const dismissMessage = document.getElementById('dismissMessage');

suscribeButton.addEventListener("click", (event) => {
  console.log('BINGO');
  principalDiv.classList.remove('visible');
  principalDiv.classList.add('hidden');
  
  successDiv.classList.remove('hidden');
  successDiv.classList.add('visible');
});

dismissMessage.addEventListener("click", (event) => {
  console.log('FERMER');
  principalDiv.classList.remove('hidden');
  principalDiv.classList.add('visible');

  successDiv.classList.remove('visible');
  successDiv.classList.add('hidden');
});
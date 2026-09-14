const cartCount = document.getElementById('cart-count');
const cartButton = document.querySelector('.cart-button');
let count = 0;

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    button.textContent = '✓';
    button.style.background = '#bb8b38';
    button.style.color = 'white';
    setTimeout(() => { button.textContent = '+'; }, 900);
  });
});

cartButton.addEventListener('click', () => {
  alert(count ? `Себетте ${count} товар бар.` : 'Себетиңиз азырынча бош.');
});

document.getElementById('subscribe-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('form-message').textContent = 'Рахмат! Сиз ийгиликтүү жазылдыңыз.';
  event.target.reset();
});

document.querySelector('.menu-button').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

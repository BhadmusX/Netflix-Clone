
document.addEventListener(
  "DOMContentLoaded", () => {
    const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const movies = document.querySelector('.movies');
leftBtn.addEventListener('click', () => {
  movies.scrollBy({ left: -300, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
  movies.scrollBy({ left: 300, behavior: 'smooth' });
});
  });
 const movies = document.querySelector('.movies');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

leftBtn.addEventListener('click', () => {
  movies.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  movies.scrollBy({ left: 300, behavior: 'smooth' });
});

import { doFetch } from './js/pixabay-api';

const form = document.querySelector('.form-search');
const textWait = document.querySelector('.text-wait');
const photoGallery = document.querySelector('.images-place');

form.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  const searchWord = event.currentTarget.elements.inputSearch.value;
  await doFetch(searchWord, textWait, photoGallery);
}

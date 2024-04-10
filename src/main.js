import { doFetch } from './js/pixabay-api';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form-search');
const loader = document.querySelector('.loader');
loader.style.borderColor = 'white';
loader.style.borderBottomColor = 'transparent';
const photoGallery = document.querySelector('.images-place');

const book = new SimpleLightbox('.card .place-for-image a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  photoGallery.innerHTML = '';
  const searchWord = event.currentTarget.elements.inputSearch.value;
  await doFetch(searchWord, loader, photoGallery, book);
}

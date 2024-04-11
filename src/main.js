import { doFetch } from './js/pixabay-api';

import { makeGallery } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

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
  await doFetch(searchWord, loader, photoGallery)
    .then(data => {
      if (data.total == 0) {
        iziToast.show({
          title: 'Ops.',
          titleColor: 'white',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          color: 'red',
          position: 'topCenter',
          timeout: '5000',
        });

        throw new Error(data.status);
      }
      return makeGallery(data);
    })
    .then(newGallery => {
      photoGallery.insertAdjacentHTML('beforeend', newGallery);
      book.refresh();
    })
    .finally(() => {
      loader.style.borderColor = 'white';
      loader.style.borderBottomColor = 'transparent';
    });
}

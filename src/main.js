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
  loader.style.borderColor = 'black';
  loader.style.borderBottomColor = 'transparent';
  const searchWord = event.currentTarget.elements.inputSearch.value;
  doFetch(searchWord, loader, photoGallery)
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
        return 0;
      } else {
        photoGallery.insertAdjacentHTML('beforeend', makeGallery(data));
        book.refresh();
        event.target.reset();
      }
    })
    .catch(error => {
      // if (error.length != undefined) {
      iziToast.show({
        title: 'Ops.',
        titleColor: 'white',
        message: error,
        messageColor: 'white',
        color: 'red',
        position: 'topCenter',
        timeout: '5000',
      });
      // }
    })
    .finally(() => {
      loader.style.borderColor = 'white';
      loader.style.borderBottomColor = 'transparent';
    });
}

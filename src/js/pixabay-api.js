import { makeGallery } from './render-functions';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

export async function doFetch(aim, textToWait, gallery, refreshGallery) {
  const API_KEY = '16991331-df0a6792d36af314f174a3b15';
  const url = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: API_KEY,
    q: aim,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });

  textToWait.style.borderColor = 'black';
  textToWait.style.borderBottomColor = 'transparent';

  fetch(`${url}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
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
      textToWait.style.borderColor = 'white';
      textToWait.style.borderBottomColor = 'transparent';
      gallery.insertAdjacentHTML('beforeend', newGallery);
      refreshGallery.refresh();
    })
    .catch(error => {
      textToWait.style.borderColor = 'white';
      textToWait.style.borderBottomColor = 'transparent';
      console.log(error);
    });
}

import { makeGallery } from './render-functions';

export async function doFetch(aim, textToWait, gallery) {
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

  textToWait.hidden = false;

  fetch(`${url}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return makeGallery(data);
    })
    .then(newGallery => {
      textToWait.hidden = true;
      gallery.insertAdjacentHTML('beforeend', newGallery);
    })
    .catch(error => {
      textToWait.hidden = true;
      console.log(error);
    });
}

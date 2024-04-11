// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export async function doFetch(aim, textToWait) {
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

  return fetch(`${url}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .catch(error => {
      iziToast.show({
        title: 'Ops.',
        titleColor: 'white',
        message: error,
        messageColor: 'white',
        color: 'red',
        position: 'topCenter',
        timeout: '5000',
      });
    });
}

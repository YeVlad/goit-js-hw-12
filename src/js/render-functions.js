export function makeGallery(getedObject) {
  const neccesaryArray = getedObject.hits;
  return neccesaryArray
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="card">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}"/>
            </a>
            <div>
                <div>
                    <span class="bold-text">Likes</span>
                    <span class="info">${likes}</span>
                </div>
                <div>
                    <span class="bold-text">Views</span>
                    <span class="info">${views}</span>
                </div>
                <div>
                    <span class="bold-text">Comments</span>
                    <span class="info">${comments}</span>
                </div><div>
                    <span class="bold-text">Downloads</span>
                    <span class="info">${downloads}</span>
                </div>
            </div>
        </li>`
    )
    .join('');
}

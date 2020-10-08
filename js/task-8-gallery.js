import elements from './gallery-items.js';

const galleryList = document.querySelector('ul.js-gallery');
const modalWindow = document.querySelector('.lightbox');

const imagesCards = createImageCards(elements);

galleryList.insertAdjacentHTML('beforeend', imagesCards);

galleryList.addEventListener('click', onGalleryListClick);

console.log(createImageCards(elements));

function createImageCards(elements) {
    return elements
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
}

function onGalleryListClick(evt) {
  modalWindow.classList.add('is-open');
  const openImg = evt.target.dataset.source;
  if(!openImg) {
    return;
  }


    console.log(evt.target);
}
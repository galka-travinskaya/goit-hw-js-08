import elements from './gallery-items.js';

const refs = {
  galleryContainer: document.querySelector('ul.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalOverlay: document.querySelector('.lightbox__overlay'),
  modalImg: document.querySelector('.lightbox__image'),
  modalBtn: document.querySelector('[data-action="close-lightbox"]'),
};

const imagesCards = createImageCards(elements);

refs.galleryContainer.insertAdjacentHTML('beforeend', imagesCards);
refs.galleryContainer.addEventListener('click', onGalleryListClick);

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
  refs.modal.classList.add('is-open');
  const openImg = evt.target.dataset.source;
  if(!openImg) {
    return;
  }
    console.log(evt.target);
}
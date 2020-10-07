import products from './gallery-items.js';

const galleryList = document.querySelector('.gallery js-gallery');

const makeGalleryEl = ({preview, original, description}) => {
    const galleryEl = document.createElement('a');
    galleryEl.classList.add('gallery__link');

    return galleryEl;
};
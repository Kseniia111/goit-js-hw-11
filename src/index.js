import Notiflix from "notiflix";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from "./js/fetchimages";

const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');

let query = '';
let page = 1;
let simpleLightBox;
const perPage = 40;

searchForm.addEventListener('submit', onSearchForm);

function renderGallery(images) {
    if (!gallery) {
        return;
    }
    
    const markUp = images
        .map(image => {
            const {
                id,
                largeImageURL,
                webformatURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            } = image;
            return `
            <a class="gallery__link" href="${largeImageURL}">
                <div class="gallery-item" id="${id}">
                    <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item"><b>Likes</b>${likes}</p>
                        <p class="info-item"><b>Views</b>${views}</p>
                        <p class="info-item"><b>Comments</b>${comments}</p>
                        <p class="info-item"><b>Downloads</b>${downloads}</p>
                    </div>
                </div>
            </a>
            `;
        })
        .join('');
    
    gallery.insertAdjacentHTML('beforeend', markUp);
}

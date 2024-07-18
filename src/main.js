import { refs, handlerError, scrollCard, addImage } from './js/render-functions';
import { fetchImage, searchSettings } from './js/pixabay-api';

refs.searchForm.addEventListener('submit', handlerSearchButton);

let currentPage;
let totalPage;

function handlerSearchButton(event) {
  event.preventDefault();
  currentPage = 1;
  totalPage = 1;

  const searchText = event.target.searchtext.value.trim().toLowerCase();

  if (!searchText) {
    handlerError('outdata');
    return;
  }

  searchSettings.q = searchText;
  searchSettings.page = currentPage;

  refs.gallery.innerHTML = '';
  refs.loader.classList.add('loader');

  fetchImage()
    .then(image => {
      totalPage = Math.ceil(image.totalHits / searchSettings.per_page);

      if (totalPage === 0) {
        handlerError('nodata');
        return;
      }
      addImage(image.hits);

      if (totalPage > currentPage) {
        currentPage += 1;
        loadMoreImage();
      }
    })

    .catch(error => {
      handlerError(error);
    })
    .finally(refs.searchForm.reset());
}

function loadMoreImage() {
  refs.loadmore.style.setProperty('--lmb-dispay', `block`);
  refs.loadmore.addEventListener('click', () => {
    refs.loader.classList.add('loader');
    searchSettings.page = currentPage;
    fetchImage()
      .then(image => {
        addImage(image.hits);
        scrollCard();
        
        if (totalPage === currentPage) {
          refs.loadmore.style.setProperty('--lmb-dispay', `none`);
          iziToast.info({
            title: 'Info',
            message: "We're sorry, but you've reached the end of search results.",
          });
          return;
        } else {
          currentPage += 1;
        }
      })
      .catch(error => {
        handlerError(error);
      });
  });
}
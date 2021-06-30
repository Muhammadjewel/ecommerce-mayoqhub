var elSearchModalToggler = document.querySelector('.js-search-modal-toggler');
var elModal = document.querySelector('.modal');

if (elSearchModalToggler) {
  elSearchModalToggler.addEventListener('click', function (evt) {
    evt.preventDefault();

    elModal.classList.add('modal--open');

    var elSearchInput = elModal.querySelector('.search-modal__field');
    elSearchInput.value = '';
    elSearchInput.focus();
  });
}

if (elModal) {
  elModal.addEventListener('click', function (evt) {
    if (evt.target.matches('.modal')) {
      elModal.classList.remove('modal--open');
    }
  });
}

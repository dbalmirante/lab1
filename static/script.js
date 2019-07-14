const range = document.querySelector('.range');
const root = document.querySelector(':root');

range.addEventListener('input', function () {

  root.style.setProperty('--font-size', this.value + 'px');
  root.style.setProperty('--line-height', this.value + 'px');

});
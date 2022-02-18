import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  // _addHandlerShowWindow() {
  //   this._btnOpen.addEventListener('click', function () {

  //     wrong: this points to the attached element. : _btnOpen
  //     this._overlay.classList.toggle('hidden');
  //     this._window.classList.toggle('hidden');
  //   });
  // }
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)]; // FormData web API: pass in an element. In our case it's the this keyword.
      const data = Object.fromEntries(dataArr); // convert Array to Obj
      handler(data);
    });
  }
  _generateMarkup() {}
}

export default new AddRecipeView();

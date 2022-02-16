import View from './View.js';
import previewView from './previewView.js';

import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _errorMessage = `No recipes found for your query. Please try another one!`;
  _message = ``;
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// } // coming from parcel

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) loading recipe
    // loadRecipe is an async function, so here we heave to await for it.  One async function calling another async function
    await model.loadRecipe(id);

    // 2) rendering recipe using state OBj from model.js
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResult(query);

    // 3) Render results
    console.log(model.state.search.results);
    // resultsView.render(model.state.search.results);
    console.log(model.getSearchResultsPage(1));
    resultsView.render(model.getSearchResultsPage(4));

    // 4) Render
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
console.log('parcel-hotRelod-test111');

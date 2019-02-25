const FormView = require('./views/form_view');
const NumberCounter = require('./models/number_counter');
const ResultView = require('./views/result_view');

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
formView.bindEvents()

const numberCounter = new NumberCounter();
numberCounter.bindEvents()

const resultView = new ResultView();
resultView.bindEvents()

});

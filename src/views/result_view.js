const PubSub = require('../helpers/pub_sub');

const ResultView = function(){

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeNumber = event.detail;
    console.log(primeNumber);
    this.displayResult(primeNumber)
  })
}

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  console.log("result element",resultElement);

  resultElement.textContent = `${result}`;
};

module.exports = ResultView

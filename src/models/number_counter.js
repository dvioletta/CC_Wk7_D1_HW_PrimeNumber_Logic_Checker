const PubSub = require('../helpers/pub_sub');

const NumberCounter = function (){

}

NumberCounter.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:text-submitted', (event) => {
    const inputtedText = event.detail;
    const result = this.numberIsPrime(inputtedText);
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};

NumberCounter.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
}
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return 'This is not a Prime Number'
  }
}
  return "Yes! It's a Prime Number"
}

module.exports = NumberCounter

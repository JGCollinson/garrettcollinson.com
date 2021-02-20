const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();

publicClient
  .getProduct24HrStats('BTC-USD')
  .then(data => {
     console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
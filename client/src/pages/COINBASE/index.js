const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();
// -----------test------------;
// const key = 'c733183746a8f56efc0889cd015e6040';
// const secret = 'gh92I2dE4ghOT+yaIR/PcKILqM67LhOrl8H0g3Iu9Jx0t9ArwqDKFZIZ65MB+usiaCUChqEb9C97hGQASIgy7Q==';
// const passphrase = 'ippe8l1zeaa';
const key = 'c859ad825fe9d5f134485b66015581d8';
const secret = 'X/gSgz8bCpo7QKTnDDFY9igf6pmXxaPqjlglPtuvR+hpv8elb2wQPUjZbLT6/sRZfOR+acIgZiyZUkBGNKo/5g==';
const passphrase = 'gnfw81r52ep';
const apiURI = 'https://api.pro.coinbase.com';
// const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com';
const authedClient = new CoinbasePro.AuthenticatedClient(key, secret, passphrase, apiURI);
// const accountID = '5e1b51b4-226b-42d7-9a64-56f165ce1301'; //TEST-CLOUDAPI profile_id/account
//----------------------------------------- LIMITS --------------------------------
// 0.001 BTC, 0.01 BCH, 0.01 ETH, or 0.1 LTC
var x = ["BTC-USD", "ETH-USD", "LTC-USD", "BCH-USD", "EOS-USD", "DASH-USD", "OXT-USD", "MKR-USD", "XLM-USD", "ATOM-USD", "XTZ-USD", "ETC-USD", "OMG-USD", "ZEC-USD", "LINK-USD", "REP-USD", "ZRX-USD", "ALGO-USD", "DAI-USD", "KNC-USD", "COMP-USD", "BAND-USD", "NMR-USD", "CGLD-USD", "UMA-USD", "LRC-USD", "YFI-USD", "UNI-USD", "REN-USD", "BAL-USD", "WBTC-USD", "NU-USD", "FIL-USD", "AAVE-USD", "GRT-USD", "BNT-USD", "SNX-USD", "BTC-USDC", "ETH-USDC", "ETH-DAI", "ZEC-USDC", "BAT-USDC", "DAI-USDC", "GNT-USDC", "MANA-USDC", "LOOM-USDC", "CVC-USDC", "DNT-USDC", "ETH-BTC", "LTC-BTC", "BCH-BTC", "EOS-BTC", "DASH-BTC", "MKR-BTC", "XLM-BTC", "ATOM-BTC", "XTZ-BTC", "ETC-BTC", "OMG-BTC", "ZEC-BTC", "LINK-BTC", "LINK-ETH", "BAT-ETH", "REP-BTC", "ZRX-BTC", "ALGO-BTC", "KNC-BTC", "COMP-BTC", "BAND-BTC", "NMR-BTC", "CGLD-BTC", "UMA-BTC", "LRC-BTC", "YFI-BTC", "UNI-BTC", "REN-BTC", "WBTC-BTC", "BAL-BTC", "NU-BTC", "FIL-BTC", "AAVE-BTC", "GRT-BTC", "BNT-BTC", "SNX-BTC", "BTC-EUR", "BTC-GBP", "ETH-EUR", "ETH-GBP", "LTC-EUR", "LTC-GBP", "BCH-EUR", "BCH-GBP", "EOS-EUR", "XLM-EUR", "XTZ-EUR", "XTZ-GBP", "ETC-EUR", "ETC-GBP", "OMG-EUR", "OMG-GBP", "LINK-EUR", "LINK-GBP", "ZRX-EUR", "ALGO-EUR", "ALGO-GBP", "BAND-EUR", "BAND-GBP", "NMR-EUR", "NMR-GBP", "CGLD-EUR", "CGLD-GBP", "UMA-EUR", "UMA-GBP", "NU-EUR", "NU-GBP", "FIL-EUR", "FIL-GBP", "AAVE-EUR", "AAVE-GBP", "GRT-EUR", "GRT-GBP", "BNT-EUR", "BNT-GBP", "SNX-EUR", "SNX-GBP"];

// publicClient
// .getProductTicker('BTC-USDC')
//   .then(data => {
//    var dick = (data.price / 15);
//    var nice;
//   })
//   .catch(error => {
//     // handle the error
//   });
// var order = {
//   "price": "1", 
//   "side": "sell",
//   "product_id": "BTC-USDC",
//   "type": "market"
// };
// authedClient.placeOrder(order).then(data => { 
//     console.log(data); 
//   })
//   .catch(error => {
//     console.warn(error.data.message);
//   });
// // ---------------------------get product prices--------------------------
// // publicClient.getProductHistoricRates('BTC-USD', {
// //   start: "2021-01-01",
// // 	end: "2021-01-02",
// // 	granularity: 86400
// // }).then(data => {
// //   // [ time, low, high, open, close, volume ]
// // 	console.log(data);
// // }).catch(error => {
// // 	console.log(error.data.message);
// // });
// --------------------Buy Coins if BALANCE-------------
var validPurchase = [];
function o(p,c) {
// ------------------------------------scrape minimums
  var PurchaseContextData = [];
  publicClient.getProducts().then(data => {
    var selectedCoin = new RegExp(c);
    data.forEach(function(entry) {
      if (selectedCoin.test(entry.id)) {
        PurchaseContextData.push(entry);
      }
    });
    console.log(PurchaseContextData);
  }).catch(error => {
    console.warn(error);
  });
authedClient
  .getAccounts()
  .then(data => { 
    // --------------------GET COINS WITH *********DEPRICATE & USE SCRAPE MIN OBJ********BALANCE-------------
    var avaliableCoinsMeta =[];
    var avaliableCoinNames =[];
     data.forEach(function(l){
      var coinavailableBalance = parseFloat(l.available);
      if(coinavailableBalance > 0){
        avaliableCoinsMeta.push(l); 
        avaliableCoinNames.push(l.currency);
      };
    });
    var exchanges = x;
    var buyWithCoinExchanges = exchanges.filter(nuts => (nuts.indexOf(c) >= 0));
      if(p = "btm"){
        // ------------------ check for avalible balance -----------------
        buyWithCoinExchanges.forEach(function(s){
          for (var i = 0; i < avaliableCoinNames.length; i++) {
            var checkCoin = avaliableCoinNames[i];
            var patern = new RegExp('\\b\-'+checkCoin+'\\b',"gi");
            if(patern.test(s))
            {
              validPurchase.push(s);
            }
          }
        });
        // validPurchase.forEach(function(n){
        //     var buy = {
        //       "size": "35", 
        //       "side": "sell",
        //       "product_id": n,
        //       "type": "market"
        //   };
        //   authedClient.buy(buy).then(data => { 
        //         console.log(data); 
        //       })
        //       .catch(error => {
        //         console.warn(error.data.message);
        //       });
        // });
      };
    })
    .catch(error => {
      console.log(error);
    });
};
o("btm", "USDC");
// ----------------------------------------------------------BUY ORDER BTC for USD--------------------------
//   const buy = {
//     "size": "35", //BTC
//     "side": "sell",
//     "product_id": "BTC-USD",
//     "type": "market"
// };
// authedClient.buy(buy).then(data => { 
//       console.log(data); 
//     })
//     .catch(error => {
//       console.warn(error.data.message);
//     });
// ----------------------------------------------------------utility function--------------------------
// function b(data) {
//   var result = data.filter(coins => /#/ig.test(coins));
//   console.log(result);
//   // var cbp = data;
// 	// var cbp = (data).split(";");
// 	// for (var i = 0; i < data.length; i++) {
//   //   var c = data[i];
// 	// 	while (c.charAt(0) === " ") c = c.substring(1, c.length);
// 	// 	if (c.indexOf(cbp) === 0) {
//   //     return data;
// 	// 	}
// 	// }
//   return null;
// };
// authedClient.getAccountTransfers(accountID).then(cpb => {
//   console.log(cpb)
// }).catch(error => {
//   console.log(error.cpb.message);
// });
// b(cpb);
// ----------------------------------------------------bfunction - data
// console.log(result)
// function b(data) {
//   var result = data.filter(coins => /#/ig.test(coins)) 
//   var cbp = data;
// 	var cbp = (data).split(";");
// 	for (var i = 0; i < data.length; i++) {
//     var c = data[i];
// 		while (c.charAt(0) === " ") c = c.substring(1, c.length);
// 		if (c.indexOf(cbp) === 0) {
//       return data;
// 		}
// 	}
//   return null;
// }
// const depositPaymentParamsUSD = {
//   amount: '100.00',
//   currency: 'USD',
//   payment_method_id: '9143hklo-d975-54df-bb60-64347682bfb7', // ach_bank_account
// };
// const accountID = '6a5e9d2a-3c0c-5afe-aabb-418e71e4139a'; // chase.g
// const depositPaymentParamsUSD = {
//   amount: '100.00',
//   currency: 'USD',
//   payment_method_id: accountID // ach_bank_account
// };
// authedClient
//   .depositPayment(depositPaymentParamsUSD)
//   .then(data => { 
//     console.log(data); 
//   })
//   .catch(error => {
//     console.warn(error.data.message);
//   });
// ---- GET PAYMENT ID -----
// authedClient
//   .getPaymentMethods()
//   .then(data => { console.log(data); })
//   .catch(error => {
//     console.log(error.data.message);
//   });
// ---- GET Accounts -----
// authedClient
//   .getCoinbaseAccounts()
//   .then(data => { console.log(data); })
//   .catch(error => {
//     console.log(error.data.message);
//   });
// var buy_output={
//   id: "5a3fd8ff-81b1-4100-b125-ca0235a27856",
//   price: "36",
//   size: "0.00106363",
//   product_id: "BTC-USD",
//   side: "buy",
//   stp: "dc",
//   type: "limit",
//   time_in_force: "GTC",
//   post_only: false,
//   created_at: "2021-02-02T03:24:07.151797Z",
//   fill_fees: "0",
//   filled_size: "0",
//   executed_value: "0",
//   status: "pending",
//   settled: false,
// };
// PLEASE DON'T change function name
function makeExchange(currency) {
    let coins = {"H":50, "Q":25, "D":10, "N":5, "P":1};
    let coinss = {};
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if(currency<=0){
        return {};
    }
    for (i in coins) {
        if(currency >= coins[i]) {
            coinss[i]=Math.floor(currency/coins[i]);
            currency=currency-coinss[i]*coins[i]
        }
    }
    return coinss;
}
module.exports =  makeExchange;
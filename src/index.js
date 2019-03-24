// PLEASE DON'T change function name
module.exports = function macoinseExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coinss needed to macoinse change

    result = [0, 0, 0, 0, 0];

  if (currency <= 0) 
  {
      return {};
    }

  if (currency >= 10000)
  {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    
    var coins = 0;
    
    if (currency>=50)
    {
        coins = Math.trunc(currency/50);
        currency = currency%50;
        result[0] = coins;
    }
    
    if ((currency>=25)&(currency<50)) 
    {
        coins = Math.trunc(currency/25);
        currency = currency%25;
        result[1] = coins;
    }
    
    if ((currency>=10)&(currency<25)) {
        coins = Math.trunc(currency/10);
        currency = currency%10;
        result[2] = coins;
    }
    if ((currency>=5)&(currency<10))
    {
        coins = Math.trunc(currency/5);
        currency = currency%5;
        result[3] = coins;
    }
    if (currency<5) 
    {
        result[4] = currency;
    }

    var resultObject = {"H":result[0], "Q":result[1], "D":result[2], "N":result[3], "P":result[4]}; 
    
    if (resultObject.H==0) 
    {
        delete resultObject.H;
    } 
    
    if (resultObject.Q==0)
    {
        delete resultObject.Q;
    }
    
    if (resultObject.D==0)
    { 
        delete resultObject.D;
    }
    
    if (resultObject.N==0) 
    {
        delete resultObject.N;
    }
    
    if (resultObject.P==0) 
    {
        delete resultObject.P;
    } 
    return resultObject;
}

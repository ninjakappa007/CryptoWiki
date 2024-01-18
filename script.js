// Data
    // data from url = "https://www.coinlore.com/cryptocurrency-data-api"
    // source api key = "https://api.coinlore.net/api/ticker/?id=90";
    // bitcoin = 90,eth = 80,nem = 70,coval=60,bytecent = 50,CannabisCoin = 40


// buttons
const btc = document.querySelector(".btc");
const eth = document.querySelector(".eth");
const nem = document.querySelector(".nem");
const coval = document.querySelector(".coval");
const byte = document.querySelector(".byte");
const can = document.querySelector(".can");
const start = document.querySelector(".start");

// button click action with eventlist
btc.addEventListener("click",()=>{
    // calling func with bitcoin id.
    fetchCryptoData(90);
})
eth.addEventListener("click",()=>{fetchCryptoData(80)});
nem.addEventListener("click",()=>{fetchCryptoData(70)});
coval.addEventListener("click",()=>{fetchCryptoData(60)});
byte.addEventListener("click",()=>{fetchCryptoData(50)});
can.addEventListener("click",()=>{fetchCryptoData(40)});
start.addEventListener("click",()=>{fetchCryptoData(30)});

// render all info to ui
function renderCryptoInfo(response){
    const name = document.querySelector(".name");
    const rank = document.querySelector(".rank");
    const price_usd = document.querySelector(".price-usd");
    const price_inr = document.querySelector(".price-inr");
    const price1hr = document.querySelector(".perc1h");
    const price24hr = document.querySelector(".perc24h");
    const perc7day = document.querySelector(".perc7d");
    const market_cap = document.querySelector(".market-cap");
    const vol24hr = document.querySelector(".vol24h");

    console.log(response);

    name.innerHTML = response[0].name;
    rank.innerHTML = response[0].rank;
    price_usd.innerHTML = response[0].price_usd;
    price_inr.innerHTML = (83.17 * parseInt(response[0].price_usd));
    price1hr.innerHTML = response[0].percent_change_1h;
    price24hr.innerHTML = response[0].percent_change_24h;
    perc7day.innerHTML = response[0].percent_change_7d;
    market_cap.innerHTML = response[0].market_cap_usd;
    vol24hr.innerHTML = response[0].volume24;
}

// api call for getting data about specic coin data
async function fetchCryptoData(coin_id){
    this.coin_id = coin_id;
    const data = await fetch(`https://api.coinlore.net/api/ticker/?id=${coin_id}`);
    let response =  await data.json();
    renderCryptoInfo(response);
}

// api call for global crypto data
async function fetchGlobalCryptoData(){
    const data = await fetch(`https://api.coinlore.net/api/global/`);
    let response = await data.json();
    console.log(response);
}



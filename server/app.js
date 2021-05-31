require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const moment = require('moment-timezone');

var stockDetails = {
    stockName: {
        companyName: '-',
        stockSymbol: '-',
        exchange: '-',
    },
    stockPrice: {
        price: 0,
        percentageChange: 0,
        lastUpdated: '-',
    },
    stockInfo: {
        lowestDayPrice: 0,
        highestDayPrice: 0,
        marketCap: 0,
        yearLow: 0,
        yearHigh: 0,
        priceEarningsRatio: 0,
        dividend: 0,
        volume: 0,
        avgVolume: 0,
        earningsDate: '0'
    }
};

app.get('/api/stocks/details/:ticker', (req, res) => {
    axios.all([getStockProfile(req.params.ticker), getStockDetails(req.params.ticker)])
    .then(axios.spread((...response) => {
        setStockProfileDetails(response[0].data[0]);
        setStockQuoteDetails(response[1].data[0]);
        res.json(stockDetails);
    }))
    .catch((err) => {
        console.log(err);
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

const getStockProfile = (ticker) => {
    return axios.get(`https://financialmodelingprep.com/api/v3/profile/${ticker}`, {
        params: {
            apikey: process.env.API_KEY
        }
    });
};

const getStockDetails = (ticker) => {
    return axios.get(`https://financialmodelingprep.com/api/v3/quote/${ticker}`, {
        params: {
            apikey: process.env.API_KEY
        }
    });
};

const setStockProfileDetails = (data) => {
    stockDetails.stockName.companyName = data["companyName"];
    stockDetails.stockName.stockSymbol = data["symbol"];
    stockDetails.stockName.exchange = data["exchangeShortName"];

    stockDetails.stockInfo.dividend = data["lastDiv"];
};

const setStockQuoteDetails = (data) => {
    stockDetails.stockPrice.price = data["price"];
    stockDetails.stockPrice.percentageChange = data["changesPercentage"];
    stockDetails.stockPrice.lastUpdated =  moment().tz("America/New_York").format('MM-DD-YYYY H:mmA z');  

    stockDetails.stockInfo.lowestDayPrice = data["dayLow"];
    stockDetails.stockInfo.highestDayPrice = data["dayHigh"];
    stockDetails.stockInfo.marketCap = data["marketCap"];
    stockDetails.stockInfo.yearLow = data["yearLow"];
    stockDetails.stockInfo.yearHigh = data["yearHigh"];
    stockDetails.stockInfo.priceEarningsRatio = data["pe"];
    stockDetails.stockInfo.volume = data["volume"];
    stockDetails.stockInfo.avgVolume = data["avgVolume"];
    stockDetails.stockInfo.earningsDate = data["earningsAnnouncement"];
};
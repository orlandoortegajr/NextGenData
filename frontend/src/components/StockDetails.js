import '../styles/components/StockDetails.css';
import InfoRows from './InfoRows'
import StockPrice from './StockPrice';
import StockName from './StockName';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

const StockDetails = () => {

  let [stockData, setStockData] = useState({stockDetails: {stockDetails}});

  useEffect(() => {
    console.log('HI')
    setStockData(stockData.stockDetails.price = 15);
    console.log(stockData);
  }, [setStockData, stockData]);

  return (
      <div id="stock-details-column" className="col-8">
        <StockName
          stockName={stockData.stockDetails["stockName"]}
        />
        <StockPrice 
          stockPrice={stockData.stockDetails["stockPrice"]}
        />
        <InfoRows 
          stockInfo={stockData.stockDetails["stockInfo"]}
        />
      </div>
  );
}

export default StockDetails

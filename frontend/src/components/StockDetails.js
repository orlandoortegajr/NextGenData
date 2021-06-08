import '../styles/components/StockDetails.css';
import InfoRows from './InfoRows'
import StockPrice from './StockPrice';
import StockName from './StockName';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const StockDetails = () => {
  const fetchedStockData = {
    stockName: {
        companyName: 'Palantir Technologies Inc.',
        stockSymbol: 'PLTR',
        exchange: 'NYSE',
    },
    stockPrice: {
        price: 54.42,
        percentageChange: 0.1523,
        lastUpdated: '07-05-2021 2:45PM EST',
    },
    stockInfo: {
      lowestDayPrice: 52.50,
      highestDayPrice: 55.30,
      marketCap: 2_645_000_000,
      yearLow: 42.50,
      yearHigh: 65.30,
      priceEarningsRatio: 15.32,
      dividend: 1.30,
      volume: 13_870_000,
      avgVolume: 12_000_000,
      earningsDate: '08-05-2021'
    }
  };

  const getStockData = useCallback(() => {
    axios.get('http://localhost:5000/api/stocks/details/MSFT')
      .then(res => {
        setStockData(prevStockData => ({
          ...prevStockData,
          stockName: {
            companyName: res.data["stockName"]["companyName"],
            stockSymbol: res.data["stockName"]["stockSymbol"],
            exchange: res.data["stockName"]["exchange"],
          },
          stockPrice: {
            price: res.data["stockPrice"]["price"],
            percentageChange: res.data["stockPrice"]["percentageChange"],
            lastUpdated: res.data["stockPrice"]["lastUpdated"],
          },
          stockInfo: {
            lowestDayPrice: res.data["stockInfo"]["lowestDayPrice"],
            highestDayPrice: res.data["stockInfo"]["highestDayPrice"],
            marketCap: res.data["stockInfo"]["marketCap"],
            yearLow: res.data["stockInfo"]["yearLow"],
            yearHigh: res.data["stockInfo"]["yearHigh"],
            priceEarningsRatio: res.data["stockInfo"]["priceEarningsRatio"],
            dividend: res.data["stockInfo"]["dividend"],
            volume: res.data["stockInfo"]["volume"],
            avgVolume: res.data["stockInfo"]["avgVolume"],
            earningsDate: res.data["stockInfo"]["earningsDate"]
          }
        }));
        setIsFetching(false);
      })
      .catch(err => console.log(err));
  }, []);

  const [stockData, setStockData] = useState(fetchedStockData);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getStockData()
  }, [getStockData]);

  return (
    <div id="stock-details-column" className="col-8">
      {isFetching ? (
        <div> Loading... </div>
      ) :  (
        <>
          <StockName
            stockName={stockData.stockName}
          />
          <StockPrice 
            stockPrice={stockData.stockPrice}
          />
          <InfoRows 
            stockInfo={stockData.stockInfo}
          />
        </>
      )}
    </div>
  );
}

export default StockDetails;

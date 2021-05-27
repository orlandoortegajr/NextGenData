import stockGraph from './images/stock-graph.jpg';
import './styles/reset.css';
import './styles/stock.css';
import './styles/general.css'

const App = () => {
  const companyName = 'Palantir Technologies Inc.';
  const stockSymbol = 'PLTR';
  const exchange = 'NYSE';
  const price = 54.42;
  const percentageIncrease = 15.23;
  const lastUpdated = '07-05-2021 2:45PM EST';
  const lowestDayPrice = 52.50;
  const highestDayPrice = 55.30;
  const marketCap = 2_600_000_000;
  const billion = 1_000_000_000;
  const million = 1_000_000;
  var marketCapString = '';
  if((marketCap / billion) >= 1) {
    marketCapString = `${marketCap/billion}B`;
  } else if((marketCap/billion) >= 1000) {
    marketCapString = `${(marketCap/billion)/1000}T`
  } else {
    marketCapString = `${(marketCap/million)}M`;
  }
  const yearLow = 42.50;
  const yearHigh = 65.3;
  const priceEarningsRatio = 15.3;
  const dividend = 1.30;
  const volume = 13_870_000;
  const avgVolume = 12_000_000;
  const earningsDate = '08-05-2021';

  return (
    <div className="container stock-container">
      <div className="row">
        <div className="col-7">
          <div id="stock-name-row" className="row">
            <div className="col-12 center-div-vertically">
              <div id="stock-name-container">
                <h1 id="stock-company-name">{`${companyName} (${stockSymbol})`}</h1>
                <span id="exchange-name">{exchange}</span>
              </div>
            </div>
          </div>
          <div id="stock-price-row" className="row">
            <div className="col-12">
              <h2 id="stock-price">
                {`${price} 
                  (${percentageIncrease > 0 ? '+' : '-'}${percentageIncrease}%)
                `}
              </h2>
              <span id="last-price-update">Last Updated: {lastUpdated}</span>
            </div>   
          </div>
          <div className="row">
            <div className="col">
              <span>Day Range</span>
              <span>{`${lowestDayPrice}-${highestDayPrice}`}</span>
            </div>
            <div className="col">
              <span>Market Cap</span>
              <span>{marketCapString}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>52 Week Range</span>
              <span>{`${yearLow}-${yearHigh}`}</span>
            </div>
            <div className="col">
              <span>Price/Earnings Ratio</span>
              <span>{priceEarningsRatio}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>Dividend</span>
              <span>{`${dividend}$`}</span>
            </div>
            <div className="col">
              <span>Volume</span>
              <span>{volume}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>Earnings Date</span>
              <span>{earningsDate}</span>
            </div>
            <div className="col">
              <span>Average Volume</span>
              <span>{avgVolume}</span>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img id="stock-graph-image" src={stockGraph} alt="a stock graph"></img>
        </div>
      </div>
    </div>
  );
}

export default App;

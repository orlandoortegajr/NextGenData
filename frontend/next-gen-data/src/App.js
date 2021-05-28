import stockGraph from './images/stock-graph.jpg';
import './styles/reset.css';
import './styles/stock.css';
import './styles/general.css';
import InfoRow from './components/InfoRow';

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
    <div className="container">
      <div className="stock-container">
        <div className="row">
          <div className="col-8">
            <div id="stock-name-row" className="row">
              <div className="col-12 center-div-parent">
                <div id="stock-name-container">
                  <h1 id="stock-company-name">{`${companyName} (${stockSymbol})`}</h1>
                  <h3 id="exchange-name">{exchange}</h3>
                </div>
              </div>
            </div>
            <div id="stock-price-row" className="row">
              <div className="col-12 center-div-parent">
                <h2 id="stock-price">
                  {`${price} 
                    (${percentageIncrease > 0 ? '+' : '-'}${percentageIncrease}%)
                  `}
                </h2>
                <h3 id="last-price-update">Last Updated: {lastUpdated}</h3>
              </div>   
            </div>
            <InfoRow 
              leftTitle={'Day Range'} 
              leftValue={`${lowestDayPrice}-${highestDayPrice}`}
              rightTitle={'Market Cap'}
              rightValue={marketCapString}
            />
            <InfoRow 
              leftTitle={'52 Week Range'} 
              leftValue={`${yearLow}-${yearHigh}`}
              rightTitle={'Price/Earnings Ratio'}
              rightValue={priceEarningsRatio}
            />
            <InfoRow 
              leftTitle={'Dividend'} 
              leftValue={`${dividend}$`}
              rightTitle={'Volume'}
              rightValue={volume}
            />
            <InfoRow
              leftTitle={'Earnings Date'} 
              leftValue={earningsDate}
              rightTitle={'Average Volume'}
              rightValue={avgVolume}
            />
          </div>
          <div className="col-4">
            <img id="stock-graph-image" src={stockGraph} alt="a stock graph"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

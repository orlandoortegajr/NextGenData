import './styles/reset.css';
import './styles/stock.css';
import './styles/general.css';
import stockGraph from './images/stock-graph.jpg';
import InfoRows from './components/InfoRows';
import StockPrice from './components/StockPrice';

const App = () => {
  const companyName = 'Palantir Technologies Inc.';
  const stockSymbol = 'PLTR';
  const exchange = 'NYSE';
  const price = 54.42;
  const percentageChange = 0.1523;
  const lastUpdated = '07-05-2021 2:45PM EST';
  const lowestDayPrice = 52.50;
  const highestDayPrice = 55.30;
  const marketCap = 2_645_000_000;
  const yearLow = 42.50;
  const yearHigh = 65.3;
  const priceEarningsRatio = 15.32;
  const dividend = 1.30;
  const volume = 13_870_000;
  const avgVolume = 12_000_000;
  const earningsDate = '08-05-2021';

  return (
    <div className="container">
      <div className="stock-container">
        <div className="row">
          <div id="stock-details-column" className="col-8">
            <div id="stock-name-row" className="row">
              <div className="col-12 center-div-parent">
                <div id="stock-name-container">
                  <h1 id="stock-company-name">{`${companyName} (${stockSymbol})`}</h1>
                  <h3 id="exchange-name">{exchange}</h3>
                </div>
              </div>
            </div>
            <StockPrice 
              price={price}
              percentageChange={percentageChange}
              lastUpdated={lastUpdated}
            />
            <InfoRows 
              lowestDayPrice={lowestDayPrice}
              highestDayPrice={highestDayPrice}
              marketCap={marketCap}
              yearLow={yearLow}
              yearHigh={yearHigh}
              priceEarningsRatio={priceEarningsRatio}
              dividend={dividend}
              volume={volume}
              earningsDate={earningsDate}
              avgVolume={avgVolume}
            />
          </div>
          <div className="col-4">
            <div className="center-div-parent-horizontal">
              <img id="stock-graph-image" src={stockGraph} alt="a stock graph"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

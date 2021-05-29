import '../styles/components/StockDetails.css';
import InfoRows from './InfoRows'
import StockPrice from './StockPrice';
import StockName from './StockName';
import {stockDetails} from '../testing/TestObjects';

const StockDetails = () => {
    return (
        <div id="stock-details-column" className="col-8">
            <StockName 
              stockName={stockDetails.stockName}
            />
            <StockPrice 
              stockPrice={stockDetails.stockPrice}
            />
            <InfoRows 
              stockInfo={stockDetails.stockInfo}
            />
          </div>
    );
}

export default StockDetails

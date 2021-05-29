import '../styles/components/StockPrice.css';
import '../styles/general.css';
import {getTwoDecimalDigits} from '../utility/utility';
import {convertPercentageChangeToStr, getColor} from '../utility/StockPriceUtility';
import PropTypes from 'prop-types';

const StockPrice = ({ stockPrice }) => {
    const priceStr = getTwoDecimalDigits(stockPrice.price);
    const percentageChangeStr = convertPercentageChangeToStr(stockPrice.percentageChange);
    const color = getColor(stockPrice.percentageChange);
    const lastUpdateStr = 'Last Updated: ' + stockPrice.lastUpdated;

    return (
        <div id="stock-price-row" className="row">
            <div className="col-12 center-div-parent">
            <h2 id="stock-price-header">
                <span id="stock-price">{priceStr}</span>
                <span id="stock-price-percentage" style={{color: color}}>{percentageChangeStr}</span>   
            </h2>
            <h3 id="last-price-update">{lastUpdateStr}</h3>
            </div>   
        </div>
    );
}

StockPrice.propTypes = {
    stockPrice: PropTypes.object.isRequired
}

export default StockPrice;

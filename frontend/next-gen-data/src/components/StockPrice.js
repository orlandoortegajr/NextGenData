import {getTwoDecimalDigits} from '../utility/utility';
import {convertPercentageChangeToStr, getColor} from '../utility/StockPriceUtility';
import PropTypes from 'prop-types';

const StockPrice = ({ price, percentageChange, lastUpdated}) => {
    const priceStr = getTwoDecimalDigits(price);
    const percentageChangeStr = convertPercentageChangeToStr(percentageChange);
    const color = getColor(percentageChange);
    const lastUpdateStr = 'Last Updated: ' + lastUpdated;

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
    price: PropTypes.number,
    percentageChange: PropTypes.number,
    lastUpdated: PropTypes.string
}

StockPrice.defaultProps = {
    price: 0,
    percentageChange: 0,
    lastUpdated: '-',
}

export default StockPrice;

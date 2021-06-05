import '../styles/general.css';
import '../styles/components/StockName.css';
import PropTypes from 'prop-types'

const StockName = ({ stockName }) => {
    console.log(stockName);
    const nameExchangeString = `${stockName.companyName} (${stockName.stockSymbol})`; 
    
    return (
        <div id="stock-name-row" className="row">
            <div className="col-12 center-div-parent">
            <div id="stock-name-container">
                <h1 id="stock-company-name">{nameExchangeString}</h1>
                <h3 id="exchange-name">{stockName.exchange}</h3>
            </div>
            </div>
        </div>
    );
}

StockName.propTypes = {
    stockName: PropTypes.object.isRequired
};

export default StockName;

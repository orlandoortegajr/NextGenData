import '../styles/stock-details.css';
import StockDetails from './StockDetails';
import Graph from './Graph';

const StockDetailsContainer = () => {
    return (
        <div className="stock-details-container">
            <div className="row">
                <StockDetails />
                <Graph />
            </div>
      </div>
    );
}

export default StockDetailsContainer;
import './styles/stock.css';
import './styles/general.css';
import StockDetails from './components/StockDetails';
import Graph from './components/Graph'

const App = () => {

  return (
    <div className="container">
      <div className="stock-container">
        <div className="row">
          <StockDetails />
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;

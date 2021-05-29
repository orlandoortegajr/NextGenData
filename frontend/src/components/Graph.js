import '../styles/general.css';
import '../styles/components/Graph.css';
import graph from '../images/stock-graph.jpg';

const Graph = () => {
    return (
        <div className="col-4">
            <div className="center-div-parent-horizontal">
                <img id="stock-graph-image" src={graph} alt="a stock graph"></img>
            </div>
        </div>
    );
}

export default Graph;


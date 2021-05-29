import PropTypes from 'prop-types';
import '../styles/components/InfoRow.css';

const InfoRow = ({ leftTitle, leftValue, rightTitle, rightValue }) => {
  return (
    <div id="info-row" className="row">
      <div id="left-title-value-container" className="col-6 row info-row-title-value-container">
        <div className="col-6 center-div-parent">
          <h3 className="info-row-title">{leftTitle}</h3>
        </div>
        <div className="col-6 center-div-parent-horizontal">
          <h3 className="info-row-value">{leftValue}</h3>
        </div>
      </div>
      <div id="right-title-value-container" className="col-6 row info-row-title-value-container">
        <div className="col-6 center-div-parent">
          <h3 className="info-row-title">{rightTitle}</h3>
        </div>
        <div className="col-6 center-div-parent-horizontal">
          <h3 className="info-row-value">{rightValue}</h3>
        </div>
      </div>
    </div>
  );
};

InfoRow.propTypes = {
  leftTitle: PropTypes.string.isRequired,
  rightTitle: PropTypes.string.isRequired,
  leftValue: PropTypes.string,
  rightValue: PropTypes.string
}

InfoRow.defaultProps = {
  leftValue: '-',
  rightValue: '-'
};

export default InfoRow;

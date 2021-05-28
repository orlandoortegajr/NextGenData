const InfoRow = ({ leftTitle, leftValue, rightTitle, rightValue }) => {
  return (
    <div id="info-row" className="row">
      <div className="col-6 row">
        <div className="col-6 center-div-parent">
          <h3 className="info-row-title">{leftTitle}</h3>
        </div>
        <div className="col-6 center-div-parent">
          <h3 className="info-row-value">{leftValue}</h3>
        </div>
      </div>
      <div className="col-6 row">
        <div className="col-6 center-div-parent">
          <h3 className="info-row-title">{rightTitle}</h3>
        </div>
        <div className="col-6 center-div-parent">
          <h3 className="info-row-value">{rightValue}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoRow;

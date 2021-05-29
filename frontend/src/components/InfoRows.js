import PropTypes from 'prop-types';
import InfoRow from './InfoRow';
import {convertRangeToString, 
        convertMarketCapToString,
        convertDividendToString,
       } from '../utility/InfoRowsUtility';
import { getTwoDecimalDigits, formatLageNumberWithCommas} from '../utility/utility';


const InfoRows = ({stockInfo}) => {

    const dayRangeStr = 'Day Range';
    const dayRangeValue = convertRangeToString(stockInfo.lowestDayPrice, stockInfo.highestDayPrice);
    const marketCapStr = 'Market Cap';
    const marketCapValue = convertMarketCapToString(stockInfo.marketCap);
    const yearRangeStr = '52 Week Range';
    const yearRangeValue = convertRangeToString(stockInfo.yearLow, stockInfo.yearHigh);
    const priceEarningsStr = 'Price/Earnings Ratio';
    const priceEarningsValue = getTwoDecimalDigits(stockInfo.priceEarningsRatio);
    const dividendStr = 'Dividend';
    const dividendValue = convertDividendToString(stockInfo.dividend);
    const volumeStr = 'Volume';
    const volumeValue = formatLageNumberWithCommas(stockInfo.volume);
    const earningsDateStr = 'Earnings Date';
    const avgVolumeStr = 'Average Volume';
    const avgVolumeValue = formatLageNumberWithCommas(stockInfo.avgVolume);
    const earningsDateValue = stockInfo.earningsDate;
    
    return (
        <>
            <InfoRow 
              leftTitle={dayRangeStr} 
              leftValue={dayRangeValue}
              rightTitle={marketCapStr}
              rightValue={marketCapValue}
            />
            <InfoRow 
              leftTitle={yearRangeStr} 
              leftValue={yearRangeValue}
              rightTitle={priceEarningsStr}
              rightValue={priceEarningsValue}
            />
            <InfoRow 
              leftTitle={dividendStr} 
              leftValue={dividendValue}
              rightTitle={volumeStr}
              rightValue={volumeValue}
            />
            <InfoRow
              leftTitle={earningsDateStr} 
              leftValue={earningsDateValue}
              rightTitle={avgVolumeStr}
              rightValue={avgVolumeValue}
            />
        </>
    );
}

InfoRows.propTypes = {
    stockInfo: PropTypes.object.isRequired
}

export default InfoRows;

import PropTypes from 'prop-types';
import InfoRow from './InfoRow';
import {convertRangeToString, 
        convertMarketCapToString,
        convertDividendToString,
       } from '../utility/InfoRowsUtility';
import { getTwoDecimalDigits, formatLageNumberWithCommas} from '../utility/utility';

const InfoRows = (
    {
      lowestDayPrice, 
      highestDayPrice, 
      marketCap, 
      yearLow, 
      yearHigh,
      priceEarningsRatio,
      dividend,
      volume,
      earningsDate,
      avgVolume
    }) => {

    const dayRangeStr = 'Day Range';
    const dayRangeValue = convertRangeToString(lowestDayPrice, highestDayPrice);
    const marketCapStr = 'Market Cap';
    const marketCapValue = convertMarketCapToString(marketCap);
    const yearRangeStr = '52 Week Range';
    const yearRangeValue = convertRangeToString(yearLow, yearHigh);
    const priceEarningsStr = 'Price/Earnings Ratio';
    const priceEarningsValue = getTwoDecimalDigits(priceEarningsRatio);
    const dividendStr = 'Dividend';
    const dividendValue = convertDividendToString(dividend);
    const volumeStr = 'Volume';
    const volumeValue = formatLageNumberWithCommas(volume);
    const earningsDateStr = 'Earnings Date';
    const avgVolumeStr = 'Average Volume';
    const avgVolumeValue = formatLageNumberWithCommas(avgVolume);
    
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
              leftValue={earningsDate}
              rightTitle={avgVolumeStr}
              rightValue={avgVolumeValue}
            />
        </>
    );
}

InfoRow.propTypes = {
    lowestDayPrice: PropTypes.number,
    highestDayPrice: PropTypes.number,
    marketCap: PropTypes.number,
    yearLow: PropTypes.number,
    yearHigh: PropTypes.number,
    priceEarningsRatio: PropTypes.number,
    dividend: PropTypes.number,
    volume: PropTypes.number,
    earningsDate: PropTypes.string,
    avgVolume: PropTypes.number
}

InfoRows.defaultProps = {
    lowestDayPrice: 0,
    highestDayPrice: 0,
    marketCap: 0,
    yearLow: 0,
    yearHigh: 0,
    priceEarningsRatio: 0,
    dividend: 0,
    volume: 0,
    earningsDate: '-',
    avgVolume: 0
}

export default InfoRows;

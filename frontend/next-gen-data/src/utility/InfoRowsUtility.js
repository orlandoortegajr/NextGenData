import {formatter, getTwoDecimalDigits} from './utility';

export const convertRangeToString = (lowestPrice, highestPrice) => {
    return `${getTwoDecimalDigits(lowestPrice)} - ${getTwoDecimalDigits(highestPrice)}`;
}

export const convertMarketCapToString = (marketCap) => {
    var marketCapString = '';
    const billion = 1_000_000_000;
    const million = 1_000_000;

    if((marketCap / billion) >= 1) {
        marketCapString = `${getTwoDecimalDigits(marketCap/billion)}B`;
    } else if((marketCap/billion) >= 1000) {
        marketCapString = `${getTwoDecimalDigits((marketCap/billion)/1000)}T`
    } else {
        marketCapString = `${getTwoDecimalDigits(marketCap/million)}M`;
    }

    return marketCapString;
}

export const convertDividendToString = (dividend) => {
    return formatter.format(dividend);
}
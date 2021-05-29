import {formatPercentage} from './utility'

export const convertPercentageChangeToStr = (percentageChange) => {
    var pCStr = '(';

    if(percentageChange !== 0) {
        (percentageChange > 0) ? pCStr += '+': pCStr += '-';
    }
    
    pCStr += `${formatPercentage(percentageChange)}%)`;
    return pCStr;
};

export const getColor = (percentageChange) => {
    var color = 'grey';

    if(percentageChange === 0) {
        return color;
    } else {
        return (percentageChange > 0) ? 'green':'red';
    }
}
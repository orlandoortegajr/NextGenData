export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

export const getTwoDecimalDigits = (num) => {
    return Number(num).toFixed(2);
}

export const formatLageNumberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatPercentage = (num) => {
    return Number(num * 100).toFixed(2);
}
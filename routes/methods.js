// imports list of numbers
// find Mean, Median, Mode of a given list of numbers

const mean = (arr) => {
    // use reduce function to get total sum of array components
    const sum = arr.reduce((a, b) => {
        return a + b
    });
    // round mean, where mean is sum/length of array
    return Math.round(sum / arr.length);
}

const median = (arr) => {
    // find middle of array, use floor since index starts at 0
    const mid = Math.floor(arr.length / 2);
    // sort array from lowest to highest
    const arrSorted = arr.sort();
    // if array is odd length, the median is the value at the middle index
    if (arr.length % 2 !== 0) {
        return arrSorted[mid]
        // if array is even length, median is average of two middle numbers
    } else {
        return (arrSorted[mid] + arrSorted[mid - 1]) / 2
    }
}

const mode = (arr) => {
    // create a cache object to track count
    // assume arr is not empty
    let modeObj = {};
    let modeNum = "No repeating day temps for next 3 days";
    let maxCount = 1;
    arr.forEach(num => {
        if (modeObj[num]) {
            modeObj[num]++;
        } else {
            modeObj[num] = 1
        }

        if (modeObj[num] > maxCount) {
            maxCount = modeObj[num];
            modeNum = num;
        }
    });
    return modeNum;
}

module.exports = {
    mean,
    median,
    mode
}
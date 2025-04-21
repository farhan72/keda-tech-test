const findMaxSubarraySum = (arr, subLength) => {
    if (arr?.length < subLength) return null;
    
    // Hitung total pertama
    let maxSum = 0;
    for (let i = 0; i < subLength; i++) {
        maxSum += arr[i];
    }

    let tempSum = maxSum;

    // Sliding window
    for (let i = subLength; i < arr.length; i++) {
        tempSum = tempSum - arr[i - subLength] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

module.exports = findMaxSubarraySum;
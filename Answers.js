// Question 1
function maxArea(arr, N) {

    let maximumArea = 0;

    for (let i = 0; i < N; i++) {
        let minimumHeight = arr[i];
        for (let j = i; j < N; j++) {
            minimumHeight = Math.min(minimumHeight, arr[j]);
            const area = minimumHeight * (j - i + 1);
            maximumArea = Math.max(maximumArea, area);
        }
    }
    return maximumArea
}

// Question 2
function MergeTwoArrays(arr1, n, arr2, m) {
    let indexOfArray1 = n - 1;
    let indexOfArray2 = m - 1;
    let indexOfMergedArray = n + m - 1;

    while (indexOfArray1 >= 0 && indexOfArray2 >= 0) {
        if (arr1[indexOfArray1] > arr2[indexOfArray2]) {
            arr1[indexOfMergedArray] = arr1[indexOfArray1];
            indexOfArray1--;
        } else {
            arr1[indexOfMergedArray] = arr2[indexOfArray2];
            indexOfArray2--;
        }
        indexOfMergedArray--;
    }

    while (indexOfArray2 >= 0) {
        arr1[indexOfMergedArray] = arr2[indexOfArray2];
        indexOfArray2--;
        indexOfMergedArray--;
    }

    let finalArray1 = [];
    let finalArray2 = [];

    for (let i = 0; i < n + m; i++) {
        if (i < n) {
            finalArray1.push(arr1[i])
        } else {
            finalArray2.push(arr1[i])
        }

    }

    return { arr1: finalArray1, arr2: finalArray2 }
}

// Question 3 

function longestSubSequence(str1, str2, A, B) {
    const m = A;
    const n = B;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let lcs = "";
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 2]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }

        return lcs
    }

}
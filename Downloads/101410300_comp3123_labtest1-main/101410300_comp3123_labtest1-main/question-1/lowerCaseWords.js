function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        // Check if input is an array
        if (!Array.isArray(arr)) {
            reject("Input is not an array");
            return;
        }

        try {
            // Filter out non-string elements and convert the remaining strings to lowercase
            const result = arr.filter(item => typeof item === 'string')
                              .map(word => word.toLowerCase());
            resolve(result); // Resolve with the transformed array
        } catch (error) {
            reject("An error occurred while processing the array");
        }
    });
}

// Example usage:
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))   // Output: ['pizza', 'wings']
    .catch(error => console.error(error));

// Method that resolves with a success message after 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};

// Method that rejects with an error message after 500ms
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
};

// Calling resolvedPromise
resolvedPromise()
    .then(result => console.log(result))   // Expected Output: { message: 'delayed success!' }
    .catch(error => console.error(error));

// Calling rejectedPromise
rejectedPromise()
    .then(result => console.log(result))   // This won't be called as it's expected to reject
    .catch(error => console.error(error)); // Expected Output: { error: 'delayed exception!' }

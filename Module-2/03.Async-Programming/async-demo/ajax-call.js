const makeAjaxCall = (url, method, body) => {
    const promise = new Promise((resolve, reject) => {
        // Make AJAX request
        $.ajax({
            url: url,
            method: method,
            contentType: 'application/json',
            data: JSON.stringify(body),
            successes: (result) => {
                resolve(result);
            },
            error: (err) => {
                reject(err);
            },
        });
    });

    return promise;
};

// 1
makeAjaxCall('/api/', 'GET')
    // -> Promise
    // then of 1
    .then((result) => {
        // 2
        return makeAjaxCall('/api/books', 'GET');
    })
    // -> Promise
    // then of 2
    .then(() => {

    })
    .catch((error) => {
        // Handle the error
    });

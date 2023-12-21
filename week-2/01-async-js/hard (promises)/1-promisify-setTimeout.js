/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve, reject) {
        setTimeout(
            function() {
                const success = true;
                if(success) {
                    resolve();
                } else {
                    reject();
                }
            },
            n * 1000
        )
    });
}

module.exports = wait;

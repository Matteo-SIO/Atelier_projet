const promises = [];

export const registerHook = async (decodedToken) => {
    return new Promise((resolve, reject) => {
        let timeoutID = setTimeout(() => {
            reject('Timeout');
        }, 60_000);
        promises.push({resolve, reject, decodedToken, timeoutID});
    });
}

export const addNotification = (notification, filter) => {
    for (let promise of promises) {
        if (filter && !filter(promise.decodedToken)) {
            continue;
        }

        clearTimeout(promise.timeoutID);
        promise.resolve(notification);
    }
}
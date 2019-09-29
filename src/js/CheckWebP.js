export default function supportsWebp(cb) {
    if(!window.localStorage) cb(false); // LocalStorage is not supported in this browser

    if(window.localStorage.getItem('webp_support') !== null) {
        if(typeof cb === 'function') {
            cb(
                window.localStorage.getItem('webp_support') === 'true'
            );
        }
        return true;
    }

    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const img = new Image();
    img.src = webpData;

    let result = null;

    img.addEventListener('error', () => {
        result = false;
        StoreResult(result, cb);
    });
    img.addEventListener('load', () => {
        result = true;
        StoreResult(result, cb);
    });
}

function StoreResult(result='null', cb) {
    if(window.localStorage) window.localStorage.setItem('webp_support', result);
    if(typeof cb === 'function') cb(result);
}
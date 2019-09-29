export default function loadAssets() {
    var myCSS = document.createElement('link');
    myCSS.rel = 'stylesheet';
    myCSS.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css";
    myCSS.integrity = 'sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB';
    myCSS.crossOrigin = 'anonymous';
    document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
}
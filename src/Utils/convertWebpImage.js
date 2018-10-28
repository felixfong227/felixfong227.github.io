export default async function convertWebpImage(imageSource) {

    const checkWebpSupport = await import('./CheckWebpSupport');

    const isWebpSupport = await checkWebpSupport.default();

    if(isWebpSupport) {
        // console.info('Your current browser do support WebP image 🎊 WebP here we GOOOO!!🤣');
        return `${imageSource}&output=webp`
    } else {
        return imageSource;
        console.info('Your current browser do not support WebP image, so I am going to load image with the original format');
        console.info('https://caniuse.com/#feat=webp');
    }

}
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js')

const preCacheList = [
    'https://fonts.googleapis.com/css?family=Pangolin',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.googleapis.com/css?family=Skranji',
    'https://avatars0.githubusercontent.com/u/13918481?v=4',
    'https://i.imgur.com/NiMys9W.png',
    'https://i.imgur.com/lvj6bqd.png',
]

if(workbox){
    workbox.precaching.precacheAndRoute(preCacheList)

    workbox.routing.registerRoute(
        new RegExp(/.*/),
        workbox.strategies.staleWhileRevalidate(),
    )
}

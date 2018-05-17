import emojione from 'emojione';

export default function convertEmoji() {
    const allEmojiElements = document.querySelectorAll('.emoji');
    Array.prototype.map.call(allEmojiElements, node => {
        if(node.textContent.startsWith(':')){
            const emoji = node.textContent;
            node.innerHTML = emojione.shortnameToImage(emoji);
        }

    });
}
import '../scss/index.scss';

import convertEmoji from './convertEmoji';
import isInViewPort from './isInViewPort';

window.onload = () => {
    let titleClick = false;
    const titleEl = document.querySelector('#title');
    const node = document.querySelector('#title .node');
    titleEl.onclick = () => {
        if(!titleClick){
        node.classList.add('show');
        }else{
        node.classList.remove('show');
        }
        titleClick = !titleClick;
    }

    convertEmoji();

    const cards = document.querySelector('#cards');

    window.addEventListener('scroll', handelScrolling, true);

    function handelScrolling(e){
        const animate = isInViewPort(cards);
        if(animate){
            window.removeEventListener('scroll', handelScrolling);
            cards.style.opacity = 1;
            cards.className = 'animated fadeInUp';
        }    
    }

}
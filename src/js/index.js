import '../scss/index.scss';

const scroll_down_button = document.querySelector('#scroll_down_button');
scroll_down_button.onclick = function(){
    scroll_down_button.scrollIntoView({block: 'start', behavior: 'smooth'});
}
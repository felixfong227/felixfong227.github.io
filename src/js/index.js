import '../scss/index.scss';

import convertEmoji from './convertEmoji';
import isInViewPort from './isInViewPort';
import fetchGitHubProjects from './fetchGitHubProjects';

function createCardElemene(options) {
    const { URL, name, description} = options;
    const cardElement = `
        <a href="${URL}">
            <div class="card">
                <i class="fab fa-github icon"></i>
                <div class="content">
                    <h3>${name}</h3>
                    <p>${description}</p>
                </div>
            </div>
        </a>
    `;
    return cardElement;
}

const cards = document.querySelector('#cards');

fetchGitHubProjects()
.then(repos => {
    const listOfCards = repos.map(repo => {
        return createCardElemene({
            URL: repo.html_url,
            name: repo.name,
            description: repo.description
        });
    });
    cards.innerHTML = listOfCards.join('');
})
.catch(err => {
    console.error(err);
})

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
import '../scss/index.scss';

import isInViewPort from './isInViewPort';

import('./loadAssets').then(func => func.default()).catch(err => {
    document.body.innerHTML = 'Opps, fail to load CSS files, please refresh the page and try again';
});

window.addEventListener('load', () => {
    import('./CheckWebP')
    .then(CheckWebP => {
        CheckWebP.default(isWebPSupport => {
            (() => {
                // #icon
                let src = 'https://avatars0.githubusercontent.com/u/13918481?v=4';
                src = `https://images.weserv.nl/?url=${src}&h=250`;
                if(isWebPSupport) src += '&output=webp';
                const icon = document.querySelector('#icon');
                icon.style.backgroundImage = `url(${src})`;
            })();

            (() => {
                // #bg image url
                let src = 'https://images.weserv.nl/?url=pre00.deviantart.net/4158/th/pre/f/2018/017/a/3/soar_through_the_sky_by_ghost3641-dc06giq.png&blur=3';
                if(isWebPSupport) src += '&output=webp';
                const bg = document.querySelector('#bg');
                bg.style.backgroundImage = `url(${src})`;
            })();
        });
    });
});

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

    window.addEventListener('scroll', handelScrolling, true);

    let loadingGitHubProjects = false;

    function handelScrolling(e){
        const animate = isInViewPort(cards);
        if(animate && loadingGitHubProjects === false){
            loadingGitHubProjects = true;
            import('./fetchGitHubProjects')
            .then(fetchGitHubProjects => {
                return fetchGitHubProjects.default();
            })
            .then(repos => {
                const listOfCards = repos.map(repo => {
                    return createCardElemene({
                        URL: repo.html_url,
                        name: repo.name,
                        description: repo.description
                    });
                });

                cards.innerHTML = listOfCards.join('');
                window.removeEventListener('scroll', handelScrolling);
                cards.style.opacity = 1;
                cards.className = 'animated fadeInUp';

            })
            .catch(err => console.error(err) );
        }
    }

}

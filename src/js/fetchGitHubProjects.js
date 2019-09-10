export default function fetchGitHubProjects() {
    return new Promise((resolve, reject) => {
        const URL = 'https://api.github.com/users/felixfong227/repos?sort=updated';
        fetch(URL)
        .then(res => res.ok ? res.json() : reject(`${res.statusText} | ${res.status}`))
        .then(json => {
            // Return first 3 repos
            return resolve( json.slice(0, 3) );
        })
        .catch(err => {
            return reject(err);
        });
    });
}
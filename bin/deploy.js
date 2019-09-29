const ghPages = require('gh-pages');

const ACCESS_TOKEN = process.env.GITHUB_TOKEN;

if(!ACCESS_TOKEN) throw new Error('ENV GITHUB_TOKEN does not exits');

const options = {
    branch: 'gh-pages',
    repo: `https://${ACCESS_TOKEN}@github.com/felixfong227/felixfong227.github.io.git`,
    user: {
        name: 'Felix Fong',
        email: 'moongod101@hotmail.com'
  },
  silent: true,
}

ghpages.publish('dist', options , err => {
    if(err) {
        return console.error(err);
    }
    return console.log('Done deplying!!1');
});
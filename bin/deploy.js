const ghPages = require('gh-pages');

const options = {
    branch: 'gh-pages',
    repo: `https://github.com/felixfong227/felixfong227.github.io.git`,
    user: {
        name: 'Felix Fong',
        email: 'moongod101@hotmail.com'
  }
}

ghPages.publish('dist', options , err => {
    if(err) {
        return console.error(err);
    }
    return console.log('Done deplying!!1');
});
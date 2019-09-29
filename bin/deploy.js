const ghPages = require('gh-pages');
const fs = require('fs');
const path = require('path');

const ACCESS_TOKEN = process.env.GITHUB_TOKEN;

if(!ACCESS_TOKEN) throw new Error('ENV GITHUB_TOKEN does not exits');

const options = {
    branch: 'master',
    repo: `https://felixfong227:${ACCESS_TOKEN}@github.com/felixfong227/felixfong227.github.io.git`,
    user: {
        name: 'Felix Fong',
        email: 'moongod101@hotmail.com'
  },
  silent: true,
};

// Move the README.md file into the dist dir as well

const BUILD_DIR = path.resolve(`${__dirname}/../dist`);

const listOfFilesNeedToCopy = [
    'README.md',
    'CNAME',
];

console.log('BUILD_DIR: ', BUILD_DIR);

listOfFilesNeedToCopy.forEach(file => {

    const filePath = path.resolve(`${__dirname}/${file}`);

    console.log(`Copying file ${filePath}`);

    fs.copyFileSync(
        filePath,
        BUILD_DIR,
    );

    console.log('Done copying that file');

});

console.log('Done copying all require files');

console.log('Deploying directory');

ghPages.publish(BUILD_DIR, options , err => {
    if(err) {
        return console.error(err);
    }
    return console.log('Done deplying!!1');
});

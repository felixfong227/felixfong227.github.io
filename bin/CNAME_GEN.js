#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const CNAME_FILE_PATH = path.resolve(`${process.cwd()}/CNAME`);
const DOMAIN = 'felixfong227.me';

if(!fs.existsSync(CNAME_FILE_PATH)) {
    fs.writeFileSync(
        CNAME_FILE_PATH,
        DOMAIN,
    );
}
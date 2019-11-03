const fs = require('fs');
const path = require('path');

const pages = {
    generatePages: function generatePages(pagesPath) {
        const names = [];

        fs.readdirSync(pagesPath).map(file => {
            const extension = path.parse(file).ext;

            if (extension !== '.njk') return;

            const template = path.parse(file).name;
            const pageName = template.split('.');
            const pagePath = (pageName[0] === 'index') ? '' : `${pageName.join('/')}/`;

            const target = {
                from: `./src/views/pages/${template}.njk`,
                to: `${pagePath}index.html`
            };

            return names.push(target);
        });

        return names;
    }
};

module.exports = pages;
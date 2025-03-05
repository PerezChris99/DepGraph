const fs = require('fs');
const path = require('path');

function generateGraph(dependencies) {
  const templatePath = path.resolve(__dirname, 'template.html');
  let template = fs.readFileSync(templatePath, 'utf-8');

  // ...insert dependencies data into the template...

  return template;
}

module.exports = {
  generateGraph
};

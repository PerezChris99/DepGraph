const fs = require('fs');
const path = require('path');
const parser = require('./src/parser');
const visualizer = require('./src/visualizer');

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const lockFilePath = path.resolve(process.cwd(), 'package-lock.json');

if (!fs.existsSync(packageJsonPath) || !fs.existsSync(lockFilePath)) {
  console.error('package.json or package-lock.json not found in the current directory.');
  process.exit(1);
}

const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const lockData = JSON.parse(fs.readFileSync(lockFilePath, 'utf-8'));

const dependencies = parser.parseDependencies(packageData, lockData);
const htmlContent = visualizer.generateGraph(dependencies);

fs.writeFileSync(path.resolve(process.cwd(), 'dependency-graph.html'), htmlContent);
console.log('Dependency graph generated: dependency-graph.html');

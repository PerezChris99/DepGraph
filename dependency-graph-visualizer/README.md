# Dependency Graph Visualizer

## Description
A CLI tool to generate an interactive dependency graph from `package.json` and lock files (`package-lock.json` or `yarn.lock`).

## Installation
```bash
npm install -g dependency-graph-visualizer
```

## Usage
Navigate to the root directory of your project and run:
```bash
depgraph
```
This will generate a `dependency-graph.html` file in the current directory.

## Development
### Running Tests
```bash
npm test
```

## File Structure
```
dependency-graph-visualizer/
├── package.json
├── README.md
├── index.js                # CLI entry point
├── src/
│   ├── parser.js           # Module to parse package.json and lock files
│   ├── visualizer.js       # Module to generate the interactive graph
│   └── template.html       # HTML template for the graph visualization
├── test/
│   └── parser.test.js      # Unit tests for the parser module
└── .gitignore
```

# Big Spaceship Coding Standards
Coding standards for the Big Spaceship Technology Team

## General Practice
* Soft Tabs (2 spaces)

## Project Setup
* Use BSS-CLI Tool
* Create a GitHub Repo with Big Spaceship Team Admin Access

## Code Formatting
* Prettier
* Custom Media Queries

## Git Workflow
* [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow)
* [Commit Message Guidelines](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)
* Pull Requests for each feature to be merged reviewed by other members of the team.
* Git versioning:
  * We should attempt to follow the Semver versioning rules when tagging our projects for release. 
  * When using the BSS CLI tool or starting a new NPM project please make sure to set the version in package.json to 3 digits (1.0.0).
  
    | Status | Stage | Rule | Example |
    | -- | -- | -- | -- |
    | Init Release | New Project | Should begin with ver 1 | 1.0.0 |
    | Bug fixes, minor changes | Patch release | +1 to the third digit | 1.0.1 |
    | Major changes that are build on the existing framework/codebase | Minor release | +1 to the second digit | 1.1.1 |
    | Major changes that require rebuilding existing features, change or major updates to the underlaying frameworks | Major release | +1 to the first digit | 2.1.1 |

## Linting
* [AirBnB EsLint](https://github.com/bigspaceship/javascript)

## Testing
* [Jest](https://facebook.github.io/jest/)

## Permissable Libraries
* [Vue](https://vuejs.org/)
* [React](https://reactjs.org/)
* [Next.js](https://github.com/zeit/next.js/)

## Recommended Tools
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)

## Files to Include in all projects
* Custom Media Query file
* .prettierrc
* .babelrc
* .eslintrc

## Deployment Practice
* Use environment variables for api secrets and tokens
* Minify and Uglify code and build process

## How to improve this document
Please Create an Issue relating to which section of this document you would like altered and what you would like altered within the section. We can discuss potential changes within the issue and once agreed upon a Pull Request can be made.

# Big Spaceship Coding Standards

Coding standards for the Big Spaceship Technology Team

## General Practice

- Soft Tabs (2 spaces)
- Comments

### HTML

- We write semantic markup by selecting and using HTML tags properly, and by selecting tags that convey something about the information marked by the tags. There are elements in HTML that are semantic and elements that are non-semantic. Examples of non-semantic elements are div and span.

  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Document structure tags  | Only                                                                          |
  | Textual meaning tags | One sour                                                                            |
  | Media type tags | Follows                                                                      |
  | Correlation tags | Branch |


### CSS/SCSS

- SCSS preferred
- 3 level nesting limit
- Custom SCSS variables file (media queries and color pallete)
- Autoprefixer
- Make use of mixins for repeated styles across components

### Javascript

- AirBnb EsLint

## Project Setup

- Use BSS-CLI Tool
- Create a GitHub Repo with Big Spaceship Team Admin Access

## Code Formatting

- Prettier
- Custom Media Queries

## Git Workflow

- Git Flow as a Reliable Version Control Model

  Please try to use the standard Git Flow control model in which we use a combination of the following branches:

  |         |                                                                                                                                                                                                 |
  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Master  | Only contains production ready code. Commits to this branch should only come from either a release or a hotfix branch.                                                                          |
  | Develop | One source of truth from which all feature branches should be created and checked out from.                                                                                                     |
  | Feature | Follows a standard naming convention of `feature/featureName`. All new development is built here.                                                                                               |
  | Release | Branch that gets deployed to a staging environment for QA, and where all QA fixes should be done. If the team is bigger, a feature branch can be spun off this to make all required QA changes. |
  | Hotfix  | Only emergency fixes off the master branch. Follows a similar naming convention as a feature branch. After it is done please make sure to merge it both into master and develop.                |

  Bellow if a quick flow model:

  ![gitflow](https://user-images.githubusercontent.com/5499946/37505531-d1dd396c-28bb-11e8-921d-1124af180b3f.png)

  Please remember to remove feature and hotfix branches either after a PR or after push to Prod.

- [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow)
- [Commit Message Guidelines](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)
- Pull Requests for each feature to be merged reviewed by other members of the team.
- Git versioning:

  - We should attempt to follow the Semver versioning rules when tagging our projects for release.
  - When using the BSS CLI tool or starting a new NPM project please make sure to set the version in package.json to 3 digits (1.0.0).

    | Status                                                                                                         | Stage         | Rule                    | Example |
    | -------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------- | ------- |
    | Init Release                                                                                                   | New Project   | Should begin with ver 1 | 1.0.0   |
    | Bug fixes, minor changes                                                                                       | Patch release | +1 to the third digit   | 1.0.1   |
    | Major changes that are build on the existing framework/codebase                                                | Minor release | +1 to the second digit  | 1.1.1   |
    | Major changes that require rebuilding existing features, change or major updates to the underlaying frameworks | Major release | +1 to the first digit   | 2.1.1   |

  - Also please keep in mind to make sure that the release versions in github and package.json are in sync.

## Linting

- [AirBnB EsLint](https://github.com/bigspaceship/javascript)

## Testing

- [Jest](https://facebook.github.io/jest/)

## Permissable Libraries

- [Vue](https://vuejs.org/)
- [React](https://reactjs.org/)
- [Next.js](https://github.com/zeit/next.js/)

## Recommended Tools

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)

## Files to Include in all projects

- variables.scss
- .babelrc
- .eslintrc

## Deployment Practice

- Use environment variables for api secrets and tokens
- Minify and Uglify code and build process

## How to improve this document

Please Create an Issue relating to which section of this document you would like altered and what you would like altered within the section. We can discuss potential changes within the issue and once agreed upon a Pull Request can be made.

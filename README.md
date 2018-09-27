# Big Spaceship Coding Standards

Coding standards for the Big Spaceship Technology Team

## General Practice

- Soft Tabs (2 spaces)
- Comments

### HTML

- We write semantic markup by selecting and using HTML tags properly, and by selecting tags that convey something about the information marked by the tags. There are elements in HTML that are semantic and elements that are non-semantic. Examples of non-semantic elements are div and span.

|                           |                                                   |	
| ------------------------- |---------------------------------------------------|
| Document structure tags   | header, footer, main, nav , section , article     |
| Textual meaning tags      | h1 - h6 , strong , mark , cite, blockquote , time |
| Media type tags           | audio , video , picture                           |
| Correlation tags          | ul , figure , figcaption , address                |

you can learn more about all these tags [here](https://html.com/semantic-markup/)

---
#### Accessible Rich Internet Applications (ARIA)
- These are a set of attributes to make content more accessible. WAI-ARIA roles, states, and properties are available in a number of machine-readable formats to support validation of content using WAI-ARIA attributes.

- here is a list of [roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles)
- here is the list for [states and properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#States_and_properties) 



### CSS/SCSS

- SCSS preferred
- 3 level nesting limit
- Custom SCSS variables file (media queries and color pallete)
- Autoprefixer
- Make use of mixins for repeated styles across components

### CSS Naming Convention
- Components
  - At least 2 words separated by dashes
- Elements
  - 1 word class declaraction
  - Use syntax below for child selectors if possible. This is a more specific way of targeting the child elements  
  ```
  .search-form {
    > .field { /* ... */ }
    > .action { /* ... */ }
  }
  ```
  - Avoid tag selectors, reference by className
- Variants
  - Nested and prefixed using a dash
  ```
  .like-button {
    &.-wide { /* ... */ }
    &.-short { /* ... */ }
  }
  ```
  - Use @extends to reference nested variants, this will keep the HTML cleaner and CSS more dynamic for reusable components
  ```
  .search-form {
    > .submit {
      @extend .search-button;
      @extend .search-button.-red;
    }
  }
  ```
- For more general rules including usage of helpers and examples of nested variants, see [rcss](http://rscss.io/)

### Icon Declarations
- Create an Icons component that includes an SVG
- Within the SVG reference all the icons with their respective symbol tags (which includes the paths)
- For each symbol use naming convention of id="icon-{icon-name}" (see code block below)
- To generate SVG symbols use [Icomoon](https://icomoon.io/app/#/select)
- For edge-case browser support (IE, Opera, etc.) use [svg4everybody](https://github.com/jonathantneal/svg4everybody) for polyfills

```
  <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <symbol id="icon-search-icon" viewBox="0 0 30 32">
        <title>search-icon</title>
        <path stroke-width="2.4365" stroke-miterlimit="4" stroke-linecap="butt" stroke-linejoin="miter" d="M23.959 12.589c0 6.28-5.091 11.371-11.371 11.371s-11.371-5.091-11.371-11.371c0-6.28 5.091-11.371 11.371-11.371s11.371 5.091 11.371 11.371z" />
        <path stroke-width="2.4365" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M19.898 21.523l8.755 8.755" />
      </symbol>
      <symbol id="icon-web-words-marker" viewBox="0 0 32 32">
        <title>web-words-marker</title>
        <path d="M1.28 12.16v0c0 3.040 2.080 5.76 5.12 6.4-0.64 0-1.12 0.16-1.6 0.16s-0.8 0-1.28-0.16c0.8 2.56 3.2 4.32 5.92 4.32-2.24 1.92-5.12 2.88-8 2.88-0.48 0-0.96 0-1.44-0.16 2.88 1.92 6.4 2.88 9.76 2.88 9.92 0 18.080-8 18.24-17.92 0-0.16 0-0.16 0-0.32v-0.8c1.28-0.96 2.4-2.080 3.2-3.36-1.12 0.48-2.4 0.8-3.68 0.96 1.28-0.64 2.4-1.92 2.72-3.52-1.28 0.8-2.56 1.28-4 1.6-2.4-2.56-6.56-2.72-9.12-0.16-1.12 1.28-1.92 2.88-1.92 4.64 0 0.48 0 0.96 0.16 1.44-5.12-0.32-9.92-2.72-13.28-6.72-0.48 0.96-0.8 2.080-0.8 3.2 0 2.080 1.12 4.16 2.88 5.28-1.12 0-2.080-0.16-2.88-0.64z"/>
      </symbol>
    </defs>
  </svg>
```
USAGE:
- In the template create an SVG element with a child USE with an xlink:href attribute referring to the id of the symbol referenced in your Icons component
```
<svg class="icon icon-up-down-arrow">
  <use xlink:href="#icon-up-down-arrow"/>
</svg>
```

### Commenting Standards
- Comments should typically answer the 'Why?' and not necessarily the 'How?'
- Follow the ideals of 'Good Code Explains Itself', but comments are always necessary in more complex scenarios, especially when moving data between components
- Single-line syntax:
```
// single line comments here!
```
- Multi-line syntax:
```
/*
Hey there. There's way too much to put on this one line,
So I've moved to this next line as a way of keeping
this declaration more legible. More coding standards
to follow below!
*/
```
## Font Declarations & Fallback Fonts

 - Use @font-face declarations to define a custom font-family and its properties such as name, location, and style characteristics 
 - Use font-display property and preload to control font loading behavior and reduce FOIT and FOUT. Font-display is currently not supported on IE, Edge, Opera and Android and preload is not supported on IE, Firefox, Opera and only partially on Edge. 
  ```
  <link rel="preload" href="/fonts/custom.woff2" as="font" type="font/woff2" crossorigin>
  ```
 - Aiming to support modern browsers, we use woff and woff2 formats to offer a practical level of browser support. Woff2 is supported in all browsers except IE11, Opera and Android, default to woff after
 ```
 @font-face {
  font-family: 'Some Custom Font';
  font-style: normal;
  font-weight: normal;
  font-display: auto;
  src: local('Some Custom Font'),
       url('fonts/custom.woff2') format('woff2'), 
       url('fonts/custom.woff') format('woff')
 }
 ```
- In the case that custom fonts fail to load, use web fonts linked offsite to Google Fonts. Lastly, default to system fonts
```
@import url(//fonts.googleapis.com/css?family=Open+Sans);

body {
  font-family: 'Some Custom Font', 'Open Sans', Tahoma;
}
```

## Meta Tags

- The meta tags below are the basic tags to be included:
  - Title - title of the web page
  - Meta content type - character set/language declaration
  - Meta description - unique description of the page
  - Viewport - specifies viewport to control width and scaling for responsive design
  - Social meta tags - not required but can be included to enhance how the page displayed when shared on social media (Facebook uses Open Graph/Twitter uses Twitter Cards)
```
  <!-- Relevant tags for OG -->
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page content description" />
<meta property="og:url" content="http://domain.com/page-title/" />
<meta property="og:image" content="/path/to/image.jpg" />
<meta property="og:type" content="website" />

  <!-- Styled Twitter Card  -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@twitter-username">
<meta name="twitter:title" content="Page Titles">
<meta name="twitter:description" content="Description of the page content">
<meta name="twitter:image" content="/path/to/image.png">

```

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

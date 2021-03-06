# Big Spaceship Coding Standards

Coding standards for the Big Spaceship Technology Team

## General Practice

- Name projects with dashes, not underscores, be concise for the title of the repo
- Create Github repo with access to all Big Spaceship team members

### Commenting Standards

- Comments should typically answer the 'Why?' and not necessarily the 'How?'
- Follow the ideals of 'Good Code Explains Itself', but comments are always necessary in more complex scenarios, especially when moving data between components
- Single-line syntax:

```javascript
// single line comments here!
```

- Multi-line syntax:

```javascript
/*
Hey there. There's way too much to put on this one line,
So I've moved to this next line as a way of keeping
this declaration more legible. More coding standards
to follow below!
*/
```

## Files to Include in all projects

- variables.scss
- .eslintrc /.tslint

## File Naming Conventions

File names should, in general, describe what the code within the file does or what the exports of the file are within no more than three words.
For JavaScript files not within a framework the default naming convention will be to use camelCase. When developing within a framework default to the style guides defined below:

- [React](https://github.com/airbnb/javascript/tree/master/react#naming)
- [Vue](https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended)
- [Angular](https://angular.io/guide/styleguide#naming)

## Recommended Build Tools

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Parcel](https://parceljs.org/)

## Performance Auditing

When building complex web applications we use lots of great npm packages. Some of these packages can be quite large and can slow down load times. We should conscious of what packages are installed and implemented in each component in order to achieve the best performance. Always make sure to specify development dependencies vs production dependencies when installing npm packages and if using webpack make use of the [webpack bundle analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer). Ther are lots of other tools that can be used for performance Auditing such as Lighthouse and Pagespeed insights defined [here](https://developers.google.com/web/fundamentals/performance/audit/) by google.

## Deployment Practice

- Use environment variables for api secrets and tokens
- Minify and Uglify code and build process

## HTML

- We write semantic markup by selecting and using HTML tags properly, and by selecting tags that convey something about the information marked by the tags. There are elements in HTML that are semantic and elements that are non-semantic. Examples of non-semantic elements are div and span.

|                         |                                                      |
| ----------------------- | ---------------------------------------------------- |
| Document structure tags | header, footer, main, nav , section , article        |
| Textual meaning tags    | h1 - h6 , p, strong , mark , cite, blockquote , time |
| Media type tags         | audio , video , picture                              |
| Correlation tags        | ul , figure , figcaption , address                   |

you can learn more about all these tags [here](https://html.com/semantic-markup/)

---

#### Accessible Rich Internet Applications (ARIA)

- These are a set of attributes to make content more accessible. WAI-ARIA roles, states, and properties are available in a number of machine-readable formats to support validation of content using WAI-ARIA attributes.

- here is a list of [roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles)
- here is the list for [states and properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#States_and_properties)

### Icon Declarations

- Create an Icons component that includes an SVG
- Within the SVG reference all the icons with their respective symbol tags (which includes the paths)
- For each symbol use naming convention of id="icon-{icon-name}" (see code block below)
- To generate SVG symbols use [Icomoon](https://icomoon.io/app/#/select)
- For edge-case browser support (IE, Opera, etc.) use [svg4everybody](https://github.com/jonathantneal/svg4everybody) for polyfills

```html
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

```html
<svg class="icon icon-up-down-arrow">
  <use xlink:href="#icon-up-down-arrow"/>
</svg>
```

### Meta Tags

- The meta tags below are the basic tags to be included:
  - Title - title of the web page
  - Meta content type - character set/language declaration
  - Meta description - unique description of the page
  - Viewport - specifies viewport to control width and scaling for responsive design
  - Social meta tags - not required but can be included to enhance how the page displayed when shared on social media (Facebook uses Open Graph/Twitter uses Twitter Cards)

```html
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

## CSS/SCSS

[Big Spaceship CSS/SCSS Style Guide](https://github.com/bigspaceship/css)

## Javascript

[Big Spaceship Javascript Style Guide](https://github.com/bigspaceship/javascript)

### Global variable declarations

An interesting practice that Big Spaceship is trying to implement is the use of UPPERCASE name for variables which are global within a component, especially one with a plethora of methods.

This enables to easily spot a global variable, which a number of functions may rely on.

In the example below, we can quickly identify which variables are global vs which ones are within the local scope.

```javascript
this.SceneConstructor.init = () => {
  let localVaraible = 0;
  // Calculate the width and height of the canvas container
  this.MAIN_ELEMENT = document.getElementById("clip-area");
  this.CONTAINERWIDTH = this.MAIN_ELEMENT.offsetWidth;
  this.CONTAINERHEIGHT = this.MAIN_ELEMENT.offsetHeight;

  if (this.CONTAINERHEIGHT > 1920) {
    localVaraible = 1;
  } else {
  }
  // Build the scene
  buildRender();
  this.SceneHelpers.createPhysicsWorld();
  buildScene(localVaraible);
  buildCamera();
  raycaster();

  // Calculate the width and height of the canvas
  this.CANVASWIDTH = this.SceneHelpers.visibleWidthAtZDepth(-1);
  this.CANVASHEIGHT = this.SceneHelpers.visibleHeightAtZDepth(-1);
};
```

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

- [AirBnB ESLint](https://github.com/bigspaceship/javascript)
- [React ESLint Installation](https://github.com/bigspaceship/javascript/tree/master/packages/eslint-config-airbnb)
- [Vue ESLint Installation](https://medium.com/@agm1984/how-to-set-up-es-lint-for-airbnb-vue-js-and-vs-code-a5ef5ac671e8)
  - Can Also use [Vue CLI](https://cli.vuejs.org/) to automatically install eslint for you
- [Integrate Prettier with ESLint](https://prettier.io/docs/en/eslint.html)

## Testing

Here at Big Spaceship we practice Test Driven Development (TDD) which is where you write a test before you write enough code to fulfill that test and then refactor the code to make the test pass. This process is repeated until the feature is complete. Each component built should have proper Unit tests as well as Acceptance tests verifying the expected functionality of the compoonent. Testing utilities such as [Enzyme](https://github.com/airbnb/enzyme) for React, [Vue Test Utils](https://github.com/vuejs/vue-test-utils) for Vue, and [Karma](https://karma-runner.github.io/2.0/index.html) for Angular are integrated to make it easier to assert, manipulate, and traverse a components output. Using coverage tools built into the testing frameworks offer a table with percentages of code that is covered by tests and what lines of code are missing testing. Each file should aim to have complete coverage.

React & Vue

- [Jest](https://facebook.github.io/jest/)

Angular (comes with testing by default using Angular CLI)

- [Jasmine & Karma](https://angular.io/guide/testing)

### Unit Testing

The purpose of unit testing is to ensure the smallest bigs of your code function independentl as expected. The first thing we do is describe the series of tests we're going to run by using `describe`. This creates a group of tests (a suite) related to a particular area of the application. Next, we write our actual tests. Using the `it` function, we write the feature or piece of functionality we are testing. We then write our test assertion, which is where we test if our code function as we expect.

```javascript
describe("Calculator Operations", () => {
  it("Should add two numbers", () => {
    Calculator.init();
    const result = Calculator.addNumbers(7, 3);
    expect(result).toBe(10);
  });
});
```

### Acceptance Testing

Acceptance tests go through the running component and ensure designated actions, user inputs and user flows are completable and functioning. The structure looks very similar to unit tests, define a suite with `describe`, then write out test within the `it` function, then execute some code and check its outcome.

example using enzyme:

```javascript
describe("Sign Up Failure state", () => {
  it("Shouldn't allow signup with invalid information", () => {
    const wrapper = shallow(<Home />);
    wrapper
      .find("input[name='email']")
      .simulate("change", { target: { value: "Not An Email" } });
    wrapper.find("button[type=submit]").simulate("submit");
    expect(wrapper.find("#signupError").hasClass("hidden")).toBeFalsy();
  });
});
```

## How to improve this document

Please Create an Issue relating to which section of this document you would like altered and what you would like altered within the section. We can discuss potential changes within the issue and once agreed upon a Pull Request can be made.

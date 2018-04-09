## Developing Vaadin components

Each Vaadin component has it's own GitHub repository, where development is done. The vaadin-core project is just a top-level bundle without actual production code.

Familiarize yourself with the code and try to follow the same syntax conventions to make it easier for us to accept your pull requests.

The following instructions are common for all Vaadin components. **Replace `vaadin-combo-box` with any other component in the following examples**. Check the component readmes for any special development notes.

### Getting the code

1. Clone the component project from GitHub:

  ```shell
  $ git clone https://github.com/vaadin/vaadin-combo-box.git
  ```

2. Install [Node](https://nodejs.org/en/download/). It comes bundled with [npm](https://npmjs.com), which is needed to install other tooling.

3. Install [Bower](http://bower.io) using [npm](https://npmjs.com):

  ```shell
  $ npm install -g bower
  ```

  > If you encounter permission issues when running `npm` see the article about [fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) on npmjs.com

4. Use Bower to install the dependencies of the component:

  ```shell
  $ cd vaadin-combo-box
  $ bower install
  ```

### Running demos

1. Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using [npm](https://npmjs.com):

  ```shell
  $ npm install -g polymer-cli
  ```

2. Start a local server in the project root directory:

  ```shell
  $ cd vaadin-combo-box
  $ polymer serve --port 8080
  ```

3. Open the following URLs in your browser:
  - Demo: http://localhost:8080/components/vaadin-combo-box/demo/
  - Generated API documentation:  http://localhost:8080/components/vaadin-combo-box/

### Running tests

Install [Web Component Tester](https://github.com/Polymer/web-component-tester) using [npm](https://npmjs.com):
```shell
$ npm install -g web-component-tester
```

Tests can be run with the `wct` task from the component directory:

```shell
$ cd vaadin-combo-box
$ wct
```

You can also run and debug the tests manually:
```shell
$ cd vaadin-combo-box
$ polymer serve --port 8080
```
- Open http://localhost:8080/components/vaadin-combo-box/test/ in your browser.

You should include new tests in your pull requests if you add features to the components or if you are fixing a bug.

### Documentation

We follow the same [style guide](https://www.polymer-project.org/2.0/docs/tools/documentation) as Polymer.

### Contributor License Agreement

When you send a pull request to any of our repositories, you get an automated comment response about the CLA. It will notify you if you haven’t signed the CLA yet, and in that case instructions how to do it. You need to do this once per each repository. Before we can accept any of your code contributions, you need to sign the CLA.
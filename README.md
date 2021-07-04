# ```ReactTS Starter ```

## ```ReactTS Starter Web Application```

<hr/>

This project is created with the following main libraries:

| Library                                                                       | Purpose                                                 |
| ----------------------------------------------------------------------------- | ------------------------------------------------------- |
| [React](https://reactjs.org/)                                                 | Javascript library for building user interfaces.        |
| [ReactDOM](https://reactjs.org/docs/react-dom.html)                           | DOM-specific methods for rendering web user interfaces. |
| [Typescript](https://www.typescriptlang.org/)                                 | Superset of javascript with added types.                |
| [CRA-ReactScripts](https://github.com/facebook/create-react-app#readme)       | ReactJS and ReactTS project generator.                  |
| [Redux](https://redux.js.org/)                                                | Predictable State Container for JS Apps.                |
| [Axios](https://github.com/axios/axios)                                       | Promise based HTTP client for the browser and NodeJS.   |
| [Dotenv](https://github.com/motdotla/dotenv)                                  | Loads environmental variables from files.               |
| [ReactTestingLibrary](https://testing-library.com/docs/react-testing-library) | Javascript unit testing framework.                      |

<hr/>

## ```Getting started```

<hr/>

<hr/>

### 2. Dependencies Installation

To complete the following instructions, [Node.js](https://nodejs.org/en/) must be installed on your terminal.

- Navigate from your preferred command line interface (CLI) tool to the application's root directory: *```cd ~/<project-root-folder>```*
- Execute the following command to start installing the project dependencies: *```npm install```* or *```npm i```*

<hr/>

### 3. Setting-up Local Environment Variables

The following instructions will create an environment variable file for local use:

> All custom environment variables must be prefixed with ```REACT_APP_*```

- Navigate from your preferred command line interface (CLI) tool to the application's root directory: *```cd ~/<project-root-folder>```*
- Execute the following command to copy a environmental variable file template: *```cp .env .env.development```*
- Open and modify the values contained within the file to your requirement.
- Ensure that an existing database is running for this segment to work.

<hr/>

### 4. Start Application

The following instructions will start hosting the application locally:

- Navigate from your preferred command line interface (CLI) tool to the application's root directory: *```cd ~/<project-root-folder>```*
- Execute the following command to start a development server locally: *```npm run start```*

<hr/>

### 5. Build Production Version

The following instructions will compile the source codes into a production-ready version:

- Navigate from your preferred command line interface (CLI) tool to the application's root directory: *```cd ~/<project-root-folder>```*
- Execute the following command to build and compile the source codes: *```npm run build```*

<hr/>

### 6. Unit Testing

The following instructions will start a unit test process on the application:

- Navigate from your preferred command line interface (CLI) tool to the application's root directory: *```cd ~/<project-root-folder>```*
- Execute the following command to start the unit test process: *```npm run test:local```*
- Open a browser tab (Google Chrome recommended) and proceed to the following url to view the coverage report: *```~/<project-root-folder>/coverage/lcov-report/index.html```*

<hr/>

### 7. Containerization

The following instructions will enable the containerization of the application:

- Navigate from your preferred command line interface (CLI) tool to the application's root directory: *```cd ~/<project-root-folder>```*
- Execute the following command to start the image building process: *```docker build -t reactts-starter-image .```*
- Execute the following command to start the container building process: *```docker run -it --publish 3000:3000 --rm --name reactts-starter-container reactts-starter-image```*

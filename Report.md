# Report - An Analysis of Tech Stack Options

## Table of Contents

- [Frontend Options](#frontend-options)
- [Backend Options](#backend-options)
- [DB Options](#db-options)
- [Final Decision](#final-decision)

## Frontend Options

### Next.js

#### Pros

- Ease of development: Next.js is very similar to React since it builds on top of it. We have experience with React, which makes the learning curve of Next.js relatively small.
- Partner Project: Next.js is used by our partner in their existing codebase, which we will work directly on. This makes Next.js a promising choice since it will give us a head start on learning Next.js for our partner project, allowing us to implement our user stories sooner and giving us more time to polish our project, expand our testing infrastructure, and write comprehensive architecture and handoff documents for our partner.
- Popularity: Next.js is a very modern framework and has been rising in popularity in the last 2 years. If its popularity continues to rise, it might surpass React and Angular in popularity in the future. In this case, learning Next.js will give us a competitive head start in the job market. There will also be a large community of Next.js developers available to maintain and expand this project.
- Special Features: Has Server-Side Rendering, meaning content is fully rendered in the server before being received by the client, as opposed to being rendered by the client upon being received. This helps with Search Engine Optimization as web crawlers can read already rendered content from the server before opening the page.

#### Cons

- Ease of development: Although Next.js is similar to React, it has new paradigms and features that we will have to learn, such as Server-Side Rendering.
- Popularity: Since Next.js is a relatively new framework, it does not appear in any popularity rankings in the [2021 Stackoverflow Survey](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies).

### React

#### Pros

- Ease of development: We have experience with React. One of us has extensive experience with React due to developing and deploying a MERN stack application in CSC309. Due to these factors, React has the highest score for ease of development among our options. This makes React a promising choice since it will allow us to spend less time learning the framework and more time adding additional features to our application (such as Save and Load), perfecting the user experience, expanding our testing infrastructure, and configuring automated tests and deployment.
- Popularity: In the [2021 Stackoverflow Survey](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies), React ranks #1 in popularity in "Web frameworks". Because of its popularity, there are many online resources to learn more about React or to troubleshoot issues. There is also a large community of React developers available to maintain and expand this project.
- Maturity: React has many tools available, such as [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing and [Material-UI](https://v4.mui.com/) for UI components.
- Partner Project: React is similar to Next.js, which is used by our partner. By using React in this project, it will familiarize us with Next.js-like syntax and state management.
- Performance: Unlike Angular, React applications use a virtual DOM to update specific parts of the UI without having to rewrite the entire DOM. This makes UI updates more efficient, leading to a better user experience. In addition, although Next.js applications also have a virtual DOM, React apps are generally faster because they are more lightweight ([Source](https://isotropic.co/next-js-vs-react/#:~:text=React%20apps%20faster.-,Next.,are%20typically%20faster%20than%20Next.)).

#### Cons

- Partner Project: React is not used by our partner.
- Special Features: Unlike Next.js, React does not have default Server-Side Rendering.

### Angular

#### Pros

- Ease of development: We have experience with Angular. One of us had a PEY internship working primarily on Angular web applications.
- Popularity: In the [2021 Stackoverflow Survey](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies), Angular is ranked the 3rd most popular frontend web framework. (Note: We are ignoring Express since it is a backend framework).
- Maturity: Angular has many tools and features available, such as dependency injection, and libraries, such as NGX Bootstrap/NG-Bootstrap, NgRx, PrimeNG, Angular Material, and more.

#### Cons

- Partner Project: Angular is not used by our partner and is not similar to Next.js, which is what our partner uses.
- Special Features: Unlike Next.js, Angular does not have default Server-Side Rendering.

## Backend Options

### Node.js + Express

#### Pros

- Partner Project: Node.js is used for our partner project's backend.
- Ease of development: We have extensive experience with Node.js and Express from courses and internships. Node.js will also allow us to use the same language (Javascript), package management (npm), and scripts (e.g. `npm start`, `npm build`) for the frontend and backend.
- Performance: Node.js's non-blocking I/O architecture makes it suitable for I/O-intensive applications, such as servers running operations on a database. However, Nodes.js's single-threaded nature makes it unsuitable for CPU-intensive applications. Since our server will only perform simple computations and we plan on implementing APIs to perform CRUD operations on a database, Node.js is a good choice for our server in terms of performance.
- Popularity: In the [2021 Stackoverflow Survey](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies), Javascript and Node.js rank #1 and #6 respectively in popularity in "Programming, scripting, and markup languages" and Express ranks #3 in popularity in "Web frameworks."

#### Cons

- Maintainability: Node.js's APIs are unstable, which might make it difficult to maintain our project or migrate to a different version of node in the future.

### Python + Flask

#### Pros

- Ease of development: We have experience using Python for general programming and Pytest for unit testing.
- Popularity: In the [2021 Stackoverflow Survey](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies), Python ranks #3 in popularity in "Programming, scripting, and markup languages" and Flask is ranks #7 in popularity in "Web frameworks."

#### Cons

- Ease of development: We have no experience using Python and Flask for web development.
- Partner Project: Python and Flask are not used by our partner.

### Next.js

#### Pros

- Ease of development: If we use Next.js for both frontend and backend, we will only need to learn and use one framework.

#### Cons

- Coupling: If we use Next.js for both frontend and backend, we risk having higher coupling between the frontend and backend if we aren't careful with our design. If our frontend and backend are coupled, it will be more difficult in the future to extend the functionality of our application, separate our backend (e.g. run our server as a microservice in its own Docker container), or replace our backend stack.
- Extensibility: Next.js is more suited for simple backend APIs, which makes it a poor choice if we plan on extending this application with more complex features.
- Partner Project: Next.js is not used by partner (for the backend).

## DB Options

### MongoDB

#### Pros

- Ease of development: We experience with MongoDB. One of us used it in CSC309 and has built a web application which connects to a MongoDB cloud server. In addition, as MongoDB is a NoSQL database, strict schemas are not required, allowing us to set it up very quickly.
- Partner Project: MongoDB is used for partner project's database.
- Popularity: In the [2021 Stackoverflow Survey](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies), MongoDB ranks #4 in popularity in "Databases."
- Infrastructure: MondoDB is relatively lightweight, meaning it can be run on low-resource devices, such as our personal laptops.

#### Cons

- Data Integrity: The lack of strict schemas in NoSQL databases such as MongoDB can lead to disorganization and inconsistency in the future.

### PostgreSQL

#### Pros

- Ease of development: We have experience with PostgreSQL from CSC343. We also have extensive experience with other relational databases, such as Oracle DB and SQL Server, from internships.
- Popularity: In the [2021 Stackoverflow Survey](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies), PostgreSQL ranks #2 in popularity in "Databases."
- Data Integrity: The presence of strict schemas in relationship databases such as PostgreSQL ensures good, consistent data.

#### Cons

- Ease of development: The need for strict schemas can slow us down, especially for a simple structured project like this.
- Partner Project: PostgreSQL and relational databases are not used in our partner project.

### Redis

#### Pros

- Performance: Unlike MongoDB and PostgreSQL, Redis is an in-memory database, making it extremely fast. As a result, Redis is often used in applications that need to handle many requests with low latency, such as games and financial services. Although our application does not currently fit into this category, Redis will enable us to handle high loads with low latency if our features and user base expand in the future.
- Popularity: In the [2021 Stackoverflow Survey](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies), Redis ranks #6 in popularity in "Databases."

#### Cons

- Ease of development: We have less experience with Redis. Redis is also a key-value store, which is unlike other databases that we have more experience in, such as MongoDB and relational databases.

## Final Decision

We decided to use **Next.js** for the frontend, **Node.js + Express** for the backend, and **MongoDB** for the DB. A major factor in our decision was the fact that our partner project uses these technologies. Moreover, our experience with React gives us a strong foundation to build off of to learn and implement Next.js. Our experience in Node.js + Express and MongoDB gives us confidence in our ability to build the application. Additionally, Next.js and Node.js use the same language (Javascript), which adds to our ease of development. Javascript, Node.js + Express, and MongoDB also rank very high in popularity, which gives us more tools, libraries, and troubleshooting resources.

# **A2**

# Report

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
- Ease of development: We have very minimal experience with Redis. Redis is also a key-value store, which is unlike other databases that we have more experience in, such as MondoDB and relational databases.

## Final Decision
We decided to use **Next.js** for the frontend, **Node.js + Express** for the backend, and **MongoDB** for the DB. A major factor in our decision was the fact that our partner project uses these technologies. Moreover, our experience with React gives us a strong foundation to build off of to learn and implement Next.js. Our experience in Node.js + Express and MongoDB gives us confidence in our ability to build the application. Additionally, Next.js and Node.js use the same language (Javascript), which adds to our ease of development. Javascript, Node.js + Express, and MongoDB also rank very high in popularity, which gives us more tools, libraries, and troubleshooting resources.

# Testing Instructions

## Deployed Application
https://csc301-a2-pair-36.herokuapp.com/

## Application Features

### UI
- Our Checkout Calculator allows the user to add items of a specified quantity to the cart by selecting a quantity and pressing `Add Items`.
- Once in the cart, the user can enter a discount percentage and select their province to specify a tax percentage.
- They can also choose to save the values in the cart with the `Save Cart` button, which will be loaded from the database on app initialization and reload.
- They can choose to clear the cart and reset their discount and province with the `Clear Cart` button.
- When the cart is not empty and the user clicks `Checkout`, their receipt is generated and displayed, listing their subtotal, savings, tax, and total. The user can clear their receipt by clicking `Clear Receipt`.
- The UI can be tested manually by ensuring that these features hold true and the generated receipt is correct, where:
  - subtotal = the cumulative price of the items in the cart
  - savings = discount percentage * subtotal
  - tax = tax percentage * (subtotal - savings)
  - total = subtotal - savings + tax

### Backend REST APIs
Our backend exposes several REST APIs that can be tested through Postman.
#### `GET "https://csc301-a2-pair-36.herokuapp.com/api/province/taxes"`
This API retrieves all provinces and their taxes from the `provinces` collection in our MongoDB database.
- Request params: None
- Response:
    - If successful:
        - Status: `200`
        - Body: All provinces and their taxes (Type: [Province](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/province.js)[]).
Example:
            ```
            [
                {
                    "_id": "63446d586e5cc94c406810c9",
                    "name": "Alberta",
                    "tax": 5
                },
                {
                    "_id": "63446d586e5cc94c406810ca",
                    "name": "British Columbia",
                    "tax": 5
                },
                ...
                {
                    "_id": "63446d586e5cc94c406810d5",
                    "name": "Prince Edward Island",
                    "tax": 13
                }
            ]
    - If unsuccessful:
        - Status: `500`
        - Body: An error message (Type: string).

#### `GET "https://csc301-a2-pair-36.herokuapp.com/api/cart"`
This API retrieves the saved cart from the `carts` collection in our MongoDB database.
- Request params: None
- Response:
    - If successful:
        - Status: `200`
        - Body: The saved cart (Type: [Cart](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/cart.js)).
Example:
            ```
            {
                "receipt": {
                    "subtotal": 29.51,
                    "savings": 2.95,
                    "taxDollarAmt": 3.45,
                    "total": 30.01,
                    "_id": "6349ccd7039261fe32b9b3e6"
                },
                "_id": "63446d626e5cc94c406810d6",
                "discountPercentage": 10,
                "provinceName": "Ontario",
                "items": [
                    {
                        "name": "Apple 🍎",
                        "price": 1,
                        "quantity": 1,
                        "_id": "6349ccce039261fe32b9b3dc"
                    },
                    {
                        "name": "Banana 🍌",
                        "price": 3.67,
                        "quantity": 3,
                        "_id": "6349ccce039261fe32b9b3dd"
                    },
                    {
                        "name": "Pear 🍐",
                        "price": 8.75,
                        "quantity": 2,
                        "_id": "6349ccce039261fe32b9b3de"
                    }
                ]
            }
    - If unsuccessful:
        - Status: `500`
        - Body: An error message (Type: string).

#### `POST "https://csc301-a2-pair-36.herokuapp.com/api/cart/receipt"`
This API calculates the receipt for the given cart.
- Request params: None
- Request Body:
    - A cart (Type: Omit<[Cart](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/cart.js), "_id" | "receipt">).
Example:
        ```
        {
            "discountPercentage": 10,
            "provinceName": "Ontario",
            "items": [
                {
                    "name": "Apple 🍎",
                    "price": 1,
                    "quantity": 1,
                    "_id": "6349ccce039261fe32b9b3dc"
                },
                {
                    "name": "Banana 🍌",
                    "price": 3.67,
                    "quantity": 3,
                    "_id": "6349ccce039261fe32b9b3dd"
                },
                {
                    "name": "Pear 🍐",
                    "price": 8.75,
                    "quantity": 2,
                    "_id": "6349ccce039261fe32b9b3de"
                }
            ]
        }
- Response:
    - If successful:
        - Status: `200`
        - Body: The receipt for the given cart (Type: [Receipt](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/receipt.js)).
Example:
            ```
            {
                "subtotal": 29.51,
                "savings": 2.95,
                "taxDollarAmt": 3.45,
                "total": 30.01,
                "_id": "6349ccd7039261fe32b9b3e6"
            }
    - If unsuccessful:
        - Status: `500`
        - Body: An error message (Type: string).

#### `PUT "https://csc301-a2-pair-36.herokuapp.com/api/cart"`
This API saves the given cart in the `carts` collection in our MongoDB database.
- Request params: None
- Request Body:
    - A cart (Type: Omit<[Cart](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/cart.js), "receipt">)
Example:
         ```
        {
            "_id": "63446d626e5cc94c406810d6",
            "discountPercentage": 10,
            "provinceName": "Ontario",
            "items": [
                {
                    "name": "Apple 🍎",
                    "price": 1,
                    "quantity": 1,
                    "_id": "6349ccce039261fe32b9b3dc"
                },
                {
                    "name": "Banana 🍌",
                    "price": 3.67,
                    "quantity": 3,
                    "_id": "6349ccce039261fe32b9b3dd"
                },
                {
                    "name": "Pear 🍐",
                    "price": 8.75,
                    "quantity": 2,
                    "_id": "6349ccce039261fe32b9b3de"
                }
            ]
        }
- Response:
    - If successful:
        - Status: `200`
        - Body: None
    - If unsuccessful:
        - Status: `500`
        - Body: An error message (Type: string).

#### Note on Future Development
Currently, our menu items, their names, and their prices are hard-coded in the UI. Ideally, each menu item should be given a unique ID and the menu items (their IDs, names, and prices) should be stored in the DB. This will allow us to change the available menu items, their prices, and their names in the future without creating discrepancies between hard-coded menu items in the UI and cart items saved in the `carts` collection in the DB. Thus, given more time, we would:
- store the menu items in a `menuItems` collection in our MongoDB database
- implement a backend API to retrieve the menu items from the DB
- make the UI call this API to render the menu items
- rename the current [Item](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/item.js) model to CartItem and make it store just `menuItemId` and `quantity`

## Testing Infrastructure
Our testing infrastructure contains [6 unit tests for our backend utility functions](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/test/unit/utils.common.test.js). These unit tests are implemented using Jest.
- Unit tests 1-3 test the `roundDollarAmt` function with:
    - whole numbers
    - numbers with < 2 decimal digits
    - numbers with >= 2 decimal digits
- Unit tests 4-6 test the `getReceipt` function with:
    - a cart with 0 items
    - a cart with 1 item
    - a cart with multiple items and a different discount and province from the previous tests.

### Running Tests Locally
To run these tests locally, run the following commands in your terminal:
```
git clone https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor.git
npm test
```

### Automated Testing
Our project uses a **[GitHub Actions workflow](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/.github/workflows/tests.yml)** to run our tests on:
- every PR that targets the `main` branch
- every push to the `main` branch

(Note: This workflow can also be run manually in the unlikely case that it times out due to a slow `npm install`. We configured a timeout of 2 minutes since it usually takes about 30 s to run.)

[ [**Video demonstrating automated testing**](https://youtu.be/G_x6VPOVQtQ) ]

### Adaptability and Extensibility

#### Adaptability of our Unit Tests
Our backend unit tests are located in [server/test/unit](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/tree/main/server/test/unit). To keep the unit tests organized when new tests are added for new application functionalities, we follow the given conventions:
1. The files in the `server/test/unit` directory follow the naming convention, `<package_name>.<module_name>.test.js`, where `module_name` is the module being tested and `package_name` is the path to the module relative to the `server` directory. (For example, our `utils.common.test.js` file tests the `common.js` module in the `server/utils`.)
2. Inside each unit test file, we have a test suite for each function that we're testing. (For example, our `utils.common.test.js` file has a suite for `roundDollarAmt` and a suite for `getReceipt`.)
3. In each test suite, we add the unit tests for that function and give meaningful names to each unit test. (For example, our test suite for `getReceipt` has a test case named `"cart with 0 items"`.)

When a new unit test file is added to the `server/test/unit` directory, it will be picked automatically up by the `npm test` script.

1. As defined by [package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/package.json), running `npm test` in the project's root directory runs `npm run test:server`.
    ```
    {
      ...
      "scripts": {
        ...
        "test:server": "cd server && npm i && npm test",
        "test": "npm run test:server"
      },
      ...
    }
    ```
2. `npm run test:server` is responsible for running all backend tests. It runs `npm test` in the `server` directory.
3. As defined by [server/package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/package.json), running `npm test` in the `server` directory runs `npm test:unit`.
     ```
    {
      ...
      "scripts": {
        ...
        "test:unit": "jest /test/unit",
        "test": "npm run test:unit"
      },
      ...
    }
    ```
4.  `npm test:unit` is responsible for running all backend unit tests. It runs `jest /test/unit`, which executes all unit tests in `server/test/unit`.

To add frontend units tests:
1. We can use [Jest (again) and React Testing Library](https://nextjs.org/docs/testing#jest-and-react-testing-library) to write them.
2. In [package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/package.json), we can add `&& cd.. && npm run test:client` to the `test` script:
    ```
    "test": "npm run test:server && cd.. && npm run test:client"
    ```
    and add a script named `test:client`:
    ```
    "test:client": "cd client && npm i && npm test"
    ```
3. In [client/package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/client/package.json), we can add scripts named `test` and `test:unit` that will run the frontend unit tests (similar to [server/package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/package.json)).

To add backend unit tests that connect to our DB:
1. We can use the [jest-mongodb preset](https://jestjs.io/docs/mongodb).


#### Extensibility Beyond Unit Tests
In the future, we can add the following integration tests:
| Test Case     | Action  | Expected Result |
| ----------- | ----------- | ----------- |
| Check integration between Menu and  Cart      | User clicks `Add Items`       | Selected menu items are added to cart |
| Check integration between Cart and Receipt  | User clicks `Checkout`        | Receipt is calculated based on the items, discount, and province specified in the cart |

We can also add the following horizontal end-to-end test to test a realistic flow for an end user:
1. User visits the page -> Previously saved cart is loaded, no menu items are selected, and the receipt is hidden.
2. User selects an item and clicks `Add Items` -> Item is added to Cart.
3. User clicks `Checkout` -> Receipt is calculated and shown.
6. User changes the Discount and Province and clicks `Checkout` -> Receipt is recalculated.
7. User clicks `Clear Receipt` -> Receipt is hidden.
8. User clicks Save and refreshes the page -> Saved cart is loaded.

To implement these integration and end-to-end tests, we can use [Cypress](https://nextjs.org/docs/testing#cypress).
# Deployment
We are using **Heroku** to deploy our application and **MongoDB Atlas** to host a production database that our deployed application connects to.
#### MongoDB Atlas Setup
In MongoDB Atlas, we created a cluster that contains our `CSC301A2` database. In the `CSC301A1` database, we created a `carts` collection and a `provinces` collection. We seeded these collections with json data from [db-setup](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/tree/main/server/resources/db-setup).
![image](/resources/cloud-mongodb-carts.PNG)
![image](/resources/cloud-mongodb-provinces.png)
#### Heroku Setup
In Heroku, we linked our project's GitHub repo:
![image](/resources/heroku-github.PNG)
In our project's root directory, we created a [package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/package.json) file that specifies the node engine and scripts that Heroku will use to build and start the application:
```
{
  ...
  "scripts": {
    "build": "cd client && npm i && npm run build && cd ../server && npm i",
    "start": "cd server && npm start",
    ...
  },
  ...
  "engines": {
    "node": "16.17.1"
  }
}
```
In Heroku, we created a `MONGODB_URI` environment variable to holds the connection string of our production database. Our deployed application uses this environment variable to connect to the production database. (See Line 7 of [mongoose.js](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/db/mongoose.js).)
![image](/resources/heroku-config-vars.png)
### Automated Deployment

We are using Heroku to deploy our application automatically on every push to the `main` branch.
[ [**Video demonstrating automated deployment**](https://youtu.be/GLVTknSSB_0) ]


# Checkout Calculator - A Simple App with CI/CD

## Table of Contents

- [Report](#report)
- [Deployed App](#deployed-app)
- [App Features](#app-features)
- [Testing Infrastructure](#testing-infrastructure)
- [Automated Testing (CI)](#automated-testing-ci)
- [Deployment Infrastructure](#deployment-infrastructure)
- [Automated Deployment (CD)](#automated-deployment-cd)

## Report

[Report on Tech Stack Options]()

## Deployed App

https://csc301-a2-pair-36.herokuapp.com/

## App Features

### UI

- Our Checkout Calculator allows the user to add items of a specified quantity to the cart by selecting a quantity and pressing `Add Items`.
- Once in the cart, the user can enter a discount percentage and select their province to specify a tax percentage.
- They can also choose to save the values in the cart with the `Save Cart` button, which will be loaded from the database on app initialization and reload.
- They can choose to clear the cart and reset their discount and province with the `Clear Cart` button.
- When the cart is not empty and the user clicks `Checkout`, their receipt is generated and displayed, listing their subtotal, savings, tax, and total. The user can clear their receipt by clicking `Clear Receipt`.
- The UI can be tested manually by ensuring that these features hold true and the generated receipt is correct, where:
  - subtotal = the cumulative price of the items in the cart
  - savings = discount percentage \* subtotal
  - tax = tax percentage \* (subtotal - savings)
  - total = subtotal - savings + tax

### Backend REST APIs

Our backend exposes several REST APIs that can be tested through Postman.

#### `GET "https://csc301-a2-pair-36.herokuapp.com/api/province/taxes"`

This API retrieves all provinces and their taxes from the `provinces` collection in our MongoDB database.

- Request params: None
- Response: - If successful: - Status: `200` - Body: All provinces and their taxes (Type: [Province](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/province.js)[]).
  Example:
  ```json [ { "_id": "63446d586e5cc94c406810c9", "name": "Alberta", "tax": 5 }, { "_id": "63446d586e5cc94c406810ca", "name": "British Columbia", "tax": 5 }, { "_id": "63446d586e5cc94c406810d5", "name": "Prince Edward Island", "tax": 13 } ] - If unsuccessful: - Status: `500` - Body: An error message (Type: string).

#### `GET "https://csc301-a2-pair-36.herokuapp.com/api/cart"`

This API retrieves the saved cart from the `carts` collection in our MongoDB database.

- Request params: None
- Response: - If successful: - Status: `200` - Body: The saved cart (Type: [Cart](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/cart.js)).
  Example:
  ```json { "receipt": { "subtotal": 29.51, "savings": 2.95, "taxDollarAmt": 3.45, "total": 30.01, "_id": "6349ccd7039261fe32b9b3e6" }, "_id": "63446d626e5cc94c406810d6", "discountPercentage": 10, "provinceName": "Ontario", "items": [ { "name": "Apple 🍎", "price": 1, "quantity": 1, "_id": "6349ccce039261fe32b9b3dc" }, { "name": "Banana 🍌", "price": 3.67, "quantity": 3, "_id": "6349ccce039261fe32b9b3dd" }, { "name": "Pear 🍐", "price": 8.75, "quantity": 2, "_id": "6349ccce039261fe32b9b3de" } ] } - If unsuccessful: - Status: `500` - Body: An error message (Type: string).

#### `POST "https://csc301-a2-pair-36.herokuapp.com/api/cart/receipt"`

This API calculates the receipt for the given cart.

- Request params: None
- Request Body: - A cart (Type: Omit<[Cart](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/cart.js), "\_id" | "receipt">).
  Example:
  ```json
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
- Response: - If successful: - Status: `200` - Body: The receipt for the given cart (Type: [Receipt](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/receipt.js)).
  Example:
  ```json { "subtotal": 29.51, "savings": 2.95, "taxDollarAmt": 3.45, "total": 30.01, "_id": "6349ccd7039261fe32b9b3e6" } - If unsuccessful: - Status: `500` - Body: An error message (Type: string).

#### `PUT "https://csc301-a2-pair-36.herokuapp.com/api/cart"`

This API saves the given cart in the `carts` collection in our MongoDB database.

- Request params: None
- Request Body: - A cart (Type: Omit<[Cart](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/models/cart.js), "receipt">)
  Example:
  ```json
  {
  "\_id": "63446d626e5cc94c406810d6",
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

#### Running Tests Locally

To run these tests locally, run the following commands in your terminal:

```
git clone https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor.git
cd assignment-2-36-ashley-d-lu-allenchazhoor
npm test
```

#### Adaptability of our Unit Tests

Our backend unit tests are located in [server/test/unit](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/tree/main/server/test/unit). To keep the unit tests organized when new tests are added for new application functionalities, we follow the given conventions:

1. The files in the `server/test/unit` directory follow the naming convention, `<package_name>.<module_name>.test.js`, where `module_name` is the module being tested and `package_name` is the path to the module relative to the `server` directory. (For example, our `utils.common.test.js` file tests the `common.js` module in the `server/utils`.)
2. Inside each unit test file, we have a test suite for each function that we're testing. (For example, our `utils.common.test.js` file has a suite for `roundDollarAmt` and a suite for `getReceipt`.)
3. In each test suite, we add the unit tests for that function and give meaningful names to each unit test. (For example, our test suite for `getReceipt` has a test case named `"cart with 0 items"`.)

When a new unit test file is added to the `server/test/unit` directory, it will be picked automatically up by the `npm test` script.

1. As defined by [package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/package.json), running `npm test` in the project's root directory runs `npm run test:server`.
   ```json
   {
     "scripts": {
       "test:server": "cd server && npm i && npm test",
       "test": "npm run test:server"
     }
   }
   ```
2. `npm run test:server` is responsible for running all backend tests. It runs `npm test` in the `server` directory.
3. As defined by [server/package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/package.json), running `npm test` in the `server` directory runs `npm test:unit`.
   ```json
   {
     "scripts": {
       "test:unit": "jest /test/unit",
       "test": "npm run test:unit"
     }
   }
   ```
4. `npm test:unit` is responsible for running all backend unit tests. It runs `jest /test/unit`, which executes all unit tests in `server/test/unit`.

To add frontend units tests:

1. We can use [Jest (again) and React Testing Library](https://nextjs.org/docs/testing#jest-and-react-testing-library) to write them.
2. In [package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/package.json), we can add `&& cd .. && npm run test:client` to the `test` script:
   ```json
   "test": "npm run test:server && cd .. && npm run test:client"
   ```
   and add a script named `test:client`:
   ```json
   "test:client": "cd client && npm i && npm test"
   ```
3. In [client/package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/client/package.json), we can add scripts named `test` and `test:unit` that will run the frontend unit tests (similar to [server/package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/package.json)).

To add backend unit tests that connect to our DB:

1. We can use the [jest-mongodb preset](https://jestjs.io/docs/mongodb).

#### Extensibility Beyond Unit Tests

In the future, we can add the following integration tests:
| Test Case | Action | Expected Result |
| ----------- | ----------- | ----------- |
| Check integration between Menu and Cart | User clicks `Add Items` | Selected menu items are added to cart |
| Check integration between Cart and Receipt | User clicks `Checkout` | Receipt is calculated based on the items, discount, and province specified in the cart |

We can also add the following horizontal end-to-end test to test a realistic flow for an end user:

1. User visits the page -> Previously saved cart is loaded, no menu items are selected, and the receipt is hidden.
2. User selects an item and clicks `Add Items` -> Item is added to Cart.
3. User clicks `Checkout` -> Receipt is calculated and shown.
4. User changes the Discount and Province and clicks `Checkout` -> Receipt is recalculated.
5. User clicks `Clear Receipt` -> Receipt is hidden.
6. User clicks Save and refreshes the page -> Saved cart is loaded.

To implement these integration and end-to-end tests, we can use [Cypress](https://nextjs.org/docs/testing#cypress).

## Automated Testing (CI)

Our project uses a **[GitHub Actions workflow](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/.github/workflows/tests.yml)** to run our tests on:

- every PR that targets the `main` branch
- every push to the `main` branch

(Note: This workflow can also be run manually in the unlikely case that it times out due to a slow `npm install`. We configured a timeout of 2 minutes since it usually takes about 30 s to run.)

[ [**Video demonstration of automated testing**](https://youtu.be/G_x6VPOVQtQ) ]

## Deployment Infrastructure

We are using **Heroku** to deploy our application and **MongoDB Atlas** to host a production database that our deployed application connects to.

#### MongoDB Atlas Setup

In MongoDB Atlas, we created a cluster that contains our `CSC301A2` database. In the `CSC301A1` database, we created a `carts` collection and a `provinces` collection. We seeded these collections with json data from [db-setup](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/tree/main/server/resources/db-setup).
![image](/resources/cloud-mongodb-carts.PNG)
![image](/resources/cloud-mongodb-provinces.png)

#### Heroku Setup

In Heroku, we linked our project's GitHub repo:
![image](/resources/heroku-github.PNG)
In our project's root directory, we created a [package.json](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/package.json) file that specifies the node engine and scripts that Heroku will use to build and start the application:

```json
{
  "scripts": {
    "build": "cd client && npm i && npm run build && cd ../server && npm i",
    "start": "cd server && npm start"
  },
  "engines": {
    "node": "16.17.1"
  }
}
```

In Heroku, we created a `MONGODB_URI` environment variable to hold the connection string of our production database. Our deployed application uses this environment variable to connect to the production database. (See Line 7 of [mongoose.js](https://github.com/csc301-fall-2022/assignment-2-36-ashley-d-lu-allenchazhoor/blob/main/server/db/mongoose.js).)
![image](/resources/heroku-config-vars.png)

## Automated Deployment (CD)

We are using Heroku to deploy our application automatically on every push to the `main` branch.

[ [**Video demonstration of automated deployment**](https://youtu.be/GLVTknSSB_0) ]

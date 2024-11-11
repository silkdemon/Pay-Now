# Forked from [Pay-Now](https://github.com/ShubSi26/Pay-Now.git)
This project is a fork of Pay-Now created by [@ShubSi26](https://github.com/ShubSi26) and updated by [@silkdemon](https://github.com/silkdemon).

## My Contribution

This fork includes automated tests written using Playwright. These tests are designed to verify the functionality of the application and ensure its reliability. My contribution focuses on enhancing the testing coverage with End-to-End (E2E) tests and improving the overall testing process.

The tests are located in the `tests` folder and can be run using the following commands:


# Pay Now

![](https://github.com/ShubSi26/Pay-Now/blob/main/images/default.jpg)
Deployment - https://project-paynow.onrender.com/ (_May take loading time upto 30s_)

More images - [Click Here](https://github.com/ShubSi26/Pay-Now/tree/main/images)

> [!WARNING]
> Don't enter any personal information.

# Technology Used

<img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs,tailwind,vite,ts,js,npm,docker " /> <img src = "https://jwt.io/img/pic_logo.svg" width = 50px> <img src = "https://zod.dev/logo.svg" width = 50px> <img src="https://skillicons.dev/icons?i=playwright"/>

| `mongodb` | `express` | `react` | `nodejs` | `tailwindcss` | `vite` | `typescript` | `javascript` | `Docker` | `JWT` | `ZOD` |`PLAYWRIGHT`|
| --------- | --------- | ------- | -------- | ------------- | ------ | ------------ | ------------ | -------- | ----- | ----- | ----- |

# Local Setup

- ## By using docker-compose
  In Frontend folder, run
  ```bash
  npm run build
  ```
  Return to main folder
  ```bash
  docker-compose up --build
  ```
- ## By using docker
  Run the following command
  ```bash
  docker run -e secret="<yoursecret>" -e databaseurl="<your_mongodb_url>" shubhamdockr/paynow:v2_latest
  ```
- ## By CLI
  ```bash
  git clone https://github.com/ShubSi26/Pay-Now.git
  ```
  In Frontend folder, run
  ```bash
  npm run dev
  ```
  In backend folder, run
  ```bash
  node server.js
  ```

# Key Features

- ## Authentication
  The user can create an account and perform operations such as logging in and signing up. Upon logging in or signing up, the user will be given a JWT key for authentication purposes.
  > [!NOTE]
  > E-mail and number need to be unique.
  > Password and pin must be atleast 6 characters long.
- ## Send Money
  The user can send money to another person by knowing their UID, email, or phone number. In the transfer section, the user will select UID, email, or phone number, enter the details and the amount, and then be redirected to the payment page where the receiver's name and the transfer amount will appear. After entering the correct PIN, the payment will be completed.
- ## Add Money
  The user can add money to their wallet balance in the wallet section. The user needs to enter their card details and the amount, then click "Pay" to add the amount to the wallet balance.
  > [!TIP]
  > Currently, you can enter any data in the card details and any amount, and it will be added to the balance directly.
- ## Send Request
  The user can request money from other people. To do this, in the transfer section, the user needs to select "Send Request," choose UID, email, or phone number, enter the details and the amount, then click "Send Request." On the receiver's side, the request will appear in the "Pending Requests" section on the homepage.
- ## View Transactions
  The user can view two types of transactions:
  1. **Transaction History in Wallet Section**: Here, the user can see the amount added to their wallet balance.
  2. **Transaction Section**: In this section, the user can see all the money sent and received from other people, along with details such as transaction ID (txid), sender and receiver, amount, date, and time.
- ## Search People
  The user can search for other people using their name or phone number. In the search section, the user needs to select either "name" or "number" and enter the corresponding details. The search results will then appear. The user also has the option to send money to the searched individuals directly from the search page.

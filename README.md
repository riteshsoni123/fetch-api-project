# About the project

This is a simple project made to show the data fetched by with
the help of api to the user.

# Working

This section explains the method used to create the project.

- The react app consists of two component "NavBar" and
  "IndividualCards".

- The NavBar component consists of a button at the right side
  that fetches the data once clicked by the user.

- A state variable called "users" stores the data once
  the data is fetched with the help of axios.

- After fetching the data the NavBar component uses the map
  function to loop through all the users that is stored in the
  variable. During each iteration a new component IndividualCards
  is called in which the individual user is passed as a prop.

- In the IndividualCards component the name,email and image url
  of the user is extracted from the object with the help of
  destructuring. This data is displayed to the user in frontend.

- This app also consists of spinner that appears when the data
  is being fetched from the server.

# Built with

- ReactJs
- CSS
- MaterialUI

# Getting Started

## Installation

Below are some steps for the installation of the app in local system.

---

1 -> Clone the repo.

```bash
  https://github.com/riteshsoni123/fetch-api-project.git
```

2 ->Change the directory to client.

3 -> Install NPM packages.

```bash
  npm install
```

## Start app

To start the app write the following command.

```bash
  npm start
```

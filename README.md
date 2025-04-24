# Nimbus - Weather application

Nimbus is a web application created using React js and Tailwind CSS that allows the user to visualize the weather forecast from around the world. All of this is possible with the use of the <a href="https://openweathermap.org/api" target="_blank">Openweathermap API</a>.

## ⚡Getting Started

1.  Before launching the app, first, you should create an account on the <a href="https://home.openweathermap.org/users/sign_in" target="_blank">Openweathermap</a> website to have access to an API key that will be used to fetch the data.

2.  After registering, go to<a href="https://home.openweathermap.org/api_keys" target="_blank">My API Keys</a> and retrive your **API KEY**.

3.  Download the source code from the repository and your folder tree structure should look like this:

```
└── 📁public
└── 📁src
└── .gitignore
└── eslint.config.js
└── index.html
└── package-lock.json
└── package.json
└── README.md
└── tsconfig.app.json
└── tsconfig.json
└── tsconfig.node.json
└── vite.config.ts
```

4.  On the root of the project, where the `index.html` file is, create a new file `.env` and inside of it paste the following code:

    ```env
    VITE_API_KEY = "YOUR_API_KEY";
    ```

    Change the **YOUR_API_KEY** field with your actual key and save the file.

    With this, your folder structure should look like this:

```
└── 📁public
└── 📁src
└── .env    <--
└── .gitignore
└── eslint.config.js
└── index.html
└── package-lock.json
└── package.json
└── README.md
└── tsconfig.app.json
└── tsconfig.json
└── tsconfig.node.json
└── vite.config.ts
```

5.  Now open your console and type the command `npm install` to install all the necessary dependencies. **Make sure you are on the correct path in the console before installing the dependencies, if its not you should change the path to where the `package.json` is located!**

6.  With the `node_modules` installed we can now run the app using the command `npm run dev` on the console and then launching it on the `http://localhost:5173/`.

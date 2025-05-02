# Nimbus - Weather application

Nimbus is a web application created using React js and Tailwind CSS that allows the user to visualize the weather forecast from around the world. All of this is possible with the use of the <a href="https://openweathermap.org/api" target="_blank">Openweathermap API</a>.

**You can check the live demo of this project here: <a href="https://nimbus-msu3.onrender.com/" target="_blank">Live Preview</a>**

## ⚡Getting Started

1.  Before launching the app, first, you should create an account on the <a href="https://home.openweathermap.org/users/sign_in" target="_blank">Openweathermap</a> website to have access to an API key that will be used to fetch the data.

2.  After registering, go to<a href="https://home.openweathermap.org/api_keys" target="_blank">My API Keys</a> and retrive your **API KEY**.

3.  Download the source code from the repository and your folder tree structure should look like this:

```
└── 📁client
└── 📁server
└── .gitignore
└── README.md
```

4.  On the server folder, where the `.env.example` file is, change the name of the file so it is just `.env` and inside of it change these settings:

    ```env
        PORT=YOUR_PORT              <-- Change to your desired PORT number
        API_KEY=YOUR_API_KEY        <-- Replace with your actual API key
    ```

    With this, your server folder structure should look like this:

```
└── 📁src
└── .env
└── package-lock.json
└── package.json
```

5.  Now open your console and type the command `npm install` to install all the necessary dependencies on the client and the server. **Make sure you are on the correct path in the console before installing the dependencies in both paths, if its not you should change the path to where the `package.json` is located in each folder!**

6.  With the `node_modules` installed on both folders, it is recomended to have 2 terminals open to launch both the frontend and the backend, then we can use the command `npm run dev` both on the client and server folders to launch the respective applications.

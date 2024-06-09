# MongoDB-Tutorial

Welcome to the MongoDB Tutorial repository! This guide will help you set up MongoDB on your PC, run basic queries, use MongoDB Compass, and integrate MongoDB with Node.js and Express.js in Visual Studio Code.

## Table of Contents
1. [Installation](#installation)
2. [Setting Up Environment Variables](#setting-up-environment-variables)
3. [Basic MongoDB Queries](#basic-mongodb-queries)
4. [MongoDB Compass Installation](#mongodb-compass-installation)
5. [Integrating MongoDB with Node.js and Express.js](#integrating-mongodb-with-nodejs-and-expressjs)

## Installation

### Windows

1. Download the MongoDB installer from the [official MongoDB website](https://www.mongodb.com/try/download/community).
2. Run the installer and follow the on-screen instructions.
3. During installation, select "Complete" and ensure "Install MongoDB as a Service" is checked.

### macOS and Linus visit the site or refer to youtube videos

## Setting up Environment Variables

1. Locate the MongoDB installation path. For example, on Windows, it might be C:\Program Files\MongoDB\Server\4.4\bin.
2. Add this path to the system's PATH variable:

### Windows

1. Search for "Environment Variables" in the start menu.
2. Select "Edit the system environment variables".
3. Click "Environment Variables" and then find the Path variable in "System variables".
4. Click "Edit", then "New", and add the MongoDB installation path.

## Basic MongoDB Queries

1. Open your terminal or command prompt.
2. Start the MongoDB server and with basic queries -
   ```sh
   mongod -version    # to check whether the mongo is correctly installed or not
   mongosh    # to start the mongo server
   ```
3. If mongosh is not working then try mongo
4. If nothing is working then you have to download the mongosh file externally and then copy paste it in the bin folder along with other mongo.exe files
5. Now try running basic queries
  ```sh
  use database_name    # if the database is not present it will create a new database for you with that name
  db.database_name.insertMany([{...}, {...}, {...}])    # insert the data in the json format
  db.database_name.find()    # to check the inserted data
  ```

## MongoDB Compass Installation
1. Download and install MongoDB Compass from the official MongoDB Compass website.
2. Open MongoDB Compass and connect to your MongoDB server (localhost:27017 by default).
3. Explore databases, collections, and run queries using the Compass UI.

## Integrating MongoDB with Node.js and Express.js

### Prerequisites
1. Install Node.js from the official Node.js website.
2. Start by creating a new directory and all.
3. In the terminal write -> npm install express mongoose    # to install both the express and mongoose packages
4. Now refer my src/app.js code

## Contribution

Contributions to this repository are welcome! If you have suggestions for improvement, spot errors, or want to add additional content, please feel free to open an issue or submit a pull request.

## Acknowledgments

Special thanks to all contributors who have helped make this repository a valuable resource for the JavaScript community.

## License

This repository is licensed under the [MIT License](LICENSE). Feel free to use and modify the content as needed, keeping in mind the terms of the license.

Happy coding! 🚀

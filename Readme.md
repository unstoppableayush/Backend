# Backend Development

## Javascript Backend Roadmap
- Server :
    - It is a software serving something.

- Two Major Component:
    - A Programming Language
        - Java, Js, PHP, Golang, C++ (on a framework)
        - Master one programming language
    - A Database
        - Mongo, MySQL, Postgress, Sqlite(ORM, ODM)
        - Master one database

- A Javascript based backend.
- A JS Runtime : Nodejs / Deno / Ban
- API - nothing but a response.

- Directory Structure:
    - Src
        - index - DB Connects
        - App   - Config , cookie , urlencode
        - Constants - enums , DB-name
    
    - DB 
        - Database connection
    - Models
        - Structure of data
    - Controllers
        - Functionality , Takes data and process it
    - Routes
        - /Signup , /login etc
    - Middlewares
    - Utils
        - Utility , To send mail , upload file
    - More(depends)

## How to deploy backend code in production

- Download NodeJs Enviornment

- Computer <-express-> Server

- `npm init` 
    - It is a utility.
    - Tell a process to create package.json file.

- create a script 
    - `"start": "node index.js"`

- Express Js 
    - Web Framework

## Connect frontend and backend | Proxy and CORS

- Two types to import files
    1. CommonJS - require (sync)
    2. ModuleJS - import (async)

- Rename the terminal name and changed the color
- Used axios library
- Used CORS (Cross origin resource sharing)
- Used proxy
    - ```react
            export default defineConfig({
            server:{
                proxy: {
                '/api' :'http://localhost:3000'
                },
            },
            plugins: [react()],
            })
     ```
- append the url `http://localhost:3000` before `/api` whenever server get url start  from `/api`

- Bad practice to used frontend dist folder in backend .

## Setup a professional backend project

- [Model Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)

- `.gitkeep` standard procedure to track Empty folder.
- `.gitignore` used to not track and push the files.
- Used git ignore generators to generate git ignore file.
- created `.env.sample` to give env variables to others.
- Dev dependency are those dependency which are only used in development not in production. (`npm i -D nodemon `)
- Create important folder in `src` directory
    - `controllers` - Functionality.
    - `db` - Database connection.
    - `middlewares` - Code run in between.
    - `models` - Database schema
    - `routes` - Handle different routes
    - `utils` - Utility (File Upload , Mailing , Tokens)

- `prettier` - To maintain formatting in a team.
- Included `.prettierrc` file to define formatting.
- Included `.prettierignore` file to ignore the formatting in defined files.

## Connecting database in MERN with debugging

- Created MongoDb Atlas account.
- Created a Database and connect I.P Address to access database from anywhere.
- Used `dotenv , mongoose , express` packages.
- Two important points about database connectivity: 

    1. When connecting to databases, handling potential data-not-found scenarios is essential. Employ try/catch blocks or promises to manage errors or we can also use promises.

        - key to remember : ( wrap in try-catch )

    2. Database operations involve latency, and traditional synchronous code can lead to blocking, where the program waits for the database query to complete before moving on. So, we should async/await which allows for non-blocking execution, enabling the program to continue with other tasks while waiting for the database response. 

        - key to remember :  ( always remember the database is in another continent, so use async await)


- Used two approach to connect the database - 1. In Index File, 2. In Seprate DB file

- Since Node v20.6.0, node is supporting env file without any 3rd party library (dotenv). You have to just add --env-file in your script tag in package.json. So, your script tag will look like:

```Javascript
  "scripts": {
    "start": "node --env-file=.env src/index.js",
    "dev": "nodemon --env-file=.env src/index.js"
  }
```
- Assignments - 
    - console log `connectionInstance`
    - Read more about process.exit code - [Blog](https://www.geeksforgeeks.org/node-js-exit-codes/)

  
## Custom api response and error handling

- Installed two packages `cookie-parser` & `cors`
- Defined origin for `cors` middleware.
- Defined middleware to accept json - `app.use(express.json())`
- `express.static("public")` used this middleware to staticlly use the files. (images, pdf, etc)
- Define asyncHandler and ApiError in `utils` Folder for handling async operation and Api Error.
- Define Api Response as well.

## User and video model with hooks and JWT

- Created `user model` & `video model`
- Installed `mongoose-aggregate-paginate-v2` package for Video Schema
- Installed `bcrypt` package to hash password.
- Installed `JWT` package to create tokens.
- Used pre middleware function to encrypt the password before save.
- Don't use arrow function in pre middleware function because there is no context of this.
- `JWT` is a bearer token.
- Created two methods `generateAccessToken` & `generateRefreshToken`.

## Upload file in backend | Multer

- Used `cloudinary` and `multer` to upload files.
- We will use multer to save file temporarily on local storage.
- and We will use cloudinary to take file from local storage and upload on cloud. 
- Uses try catch block to handle file uploading.
- Made a middleware using Multer.
- Using multer to store the files in `diskstorage`.


## HTTP crash course | Http Methods | Http Headers

### What are HTTP Headers ?

- `metadata` - Key-value send along with request & response.
- Uses - caching, authentication, manage state
- x-prefix -> 2012(x-deprecated)

- ```
    Request Headers -> from Client
    Response Headers -> from Server
    Representation Headers -> encoding / compression
    Payload Headers -> data

  ```

- Most Common Headers :
  - ```
      Accept : application/json 
      User-Agent     (Request from which application)
      Authorization  (Bearer token)
      Content-Type   (Images, Pdf, etc)
      Cookie
      Cache-Control  (Expiry of Data)
    ```
- CORS :
  - ```
      Access-Control-Allow-Origin
      Access-Control-Allow-Credentials
      Access-Control-Allow-Methpd
    ```
- Security :
  - ```
    Cross-Design-Embeddedr-Policy
    Cross-Design-Opener-Policy
    Content-Security-Policy
    X-XSS-Protection
    ```

### HTTP Methods 
- Basic `set of operations` that can be used to interact with server.

  - GET :     retrieve a resource
  - HEAD :    No message body (respose headers only)
  - OPTIONS : What operations are available
  - TRACE :   Loopback test (get some data)
  - DELETE :  Remove a resource
  - PUT :     Replace a resource
  - POST :    Intract with resource (mostly add)
  - PATCH :   Change part of a resource

- HTTP Status Code :
  - ```
      1XX  - Informational
      2XX -  Success
      3XX -  Redirection
      4XX -  Client Error
      5XX -  Server Error
    ```
  - ```
      100 - Continue           400 - Bad Request 
      102 - Processsing        401 - Unauthorized
      200 - Ok                 402 - Payement required
      201 - Created            404 - Not Found
      202 - Accepted           500 - Internal ServerError
      307 - Temporary redirect  504 - Gateway timeout
      308 - Permanent redirect
    ```
  
## Router and Controller with debugging

- Breaks the problem then find solution
- Made user controller
- Made user route
- Test the route with postman

## Logic building | Register controller

- Steps to regsiter user
  1. get user details from frontend
  2. validation
  3. check if user already exists: username, email
  4. check for images, check for avatar
  5. upload them to cloudinary, avatar
  6. create user object - create entry in db
  7. remove password and refresh token filed from response
  8. check for user creation 
  9. return response

- Written a middleware to upload images when users will register 
- fetched the required field from frontend.
- Used diffrent way to vaildate error.
- Used operator to check user already exists or not.
- Assignment -: console log - `req.files` , `existedUser`
- Gets the files location.
- Uploded the files on cloudinary.
- Inserted the data of user in the database.
- Checked user created or not
- return response using `ApiResponse` of created user.

## How to use postman for backend

- Uses Postman to register user.
- solve error of `await`.
- Written code to remove the local storage files.(async)
- console logged `req.files`.
- solve bug of cover image.
- created `collection` and `variable` in Postman.
- Used the created variable in defined collection.

## Access, Refresh Token, Middleware and Cookies

- Access token expires soon.
- Refresh token expires in long term.
- Algorithm of loging user
- ```javascript
     /**
   * req body -> data
   * username or email
   * find the user
   * password check
   * access and refresh token
   * send token in cookie 
   */
  ```
- generated access and refresh token.
- saved refresh token in database.
- set the cookie to modifidable ony in server side.
- return and saved the refresh & access token in cookie.
- made a middlleware of auth.
- created route of `login` and `logout`.
- added middleware in logout route.
- cleared the cookie and logged out the user.

## Access token and refresh token

- Fix the bugs and make a login request using Postman.
- created controller for `refreshAccessToken`

## Writing update controllers for user

- Added subscription model
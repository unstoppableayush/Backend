# Setup a professional backend project

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

# Connecting database in MERN with debugging

- Created MongoDb Atlas account.
- Created a Database and connect I.P Address to access database from anywhere.
- Used `dotenv , mongoose , express` packages.
- Two important points about database connectivity: 

    1. When connecting to databases, handling potential data-not-found scenarios is essential. Employ try/catch blocks or promises to manage errors or we can also use promises.

        - key to remember : ( wrap in try-catch )

    2. Database operations involve latency, and traditional synchronous code can lead to blocking, where the program waits for the database query to complete before moving on. So, we should async/await which allows for non-blocking execution, enabling the program to continue with other tasks while waiting for the database response. 

        - key to remember :  ( always remember the database is in another continent, so use async await)


- Used two approach to connect the database - 1. In Index File, 2. In Seprate DB file

- Assignments - 
    - console log `connectionInstance`
    - Read more about process.exit code
    
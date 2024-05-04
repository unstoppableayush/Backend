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
# Data modelling for backend with mongoose

- Learnings 
    - Fresher should do question, How , What, Why to do?
    - Making fields and think about that.
    - What data is going to store ?
    - You can use `eraser.io` to design data models.
    
- When we create model on sever then model gets converted into plural and lower case.
- These models saved on to database as database collection.
- Made models of Ecommerce & Hospital Management.



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